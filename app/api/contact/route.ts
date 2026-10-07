import { NextRequest, NextResponse } from "next/server";

// Where every "I'm looking for" enquiry is delivered.
const CONTACT_TO = process.env.CONTACT_TO || "Info@corefluxsolutions.com";

const SERVICES = [
  "ERP Solutions",
  "Learning Management",
  "Migration & Integration",
  "Automation & Intelligence",
  "Web & App Development",
  "Games & Simulations",
];

type Payload = {
  service?: string;
  name?: string;
  email?: string;
  phone?: string;
  brief?: string;
  /** Honeypot: hidden from people, filled in by bots. */
  website?: string;
  /** Milliseconds between the form rendering and being submitted. */
  elapsed?: number;
};

type Field = "name" | "email" | "phone" | "brief";

// ---- Spam protection -------------------------------------------------------
// Submissions faster than this are almost certainly scripted.
const MIN_FILL_MS = 2500;
// Per-IP limit. In-memory is enough for the single pm2 instance; it resets on
// restart, which is fine for keeping out bursts.
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear(); // keep memory bounded
  return recent.length > RATE_LIMIT;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Trim and drop line breaks so values can't inject extra mail headers.
const oneLine = (v: unknown) => (v ?? "").toString().replace(/[\r\n]+/g, " ").trim();

function validate(name: string, email: string, phone: string, brief: string) {
  const errors: Partial<Record<Field, string>> = {};
  if (!name) errors.name = "Please enter your name.";
  else if (name.length > 100) errors.name = "Please keep your name under 100 characters.";
  if (!email) errors.email = "Please enter your email address.";
  else if (email.length > 200 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
    errors.email = "Please enter a valid email address.";
  if (!phone) errors.phone = "Please enter your phone number.";
  else if (!/^[+()\d\s.-]{7,25}$/.test(phone) || (phone.match(/\d/g) || []).length < 7)
    errors.phone = "Please enter a valid phone number.";
  if (brief.length > 5000) errors.brief = "Please keep the project description under 5,000 characters.";
  return errors;
}

export async function POST(req: NextRequest) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Bots: answer as if it worked so they don't adapt, but send nothing.
  if (oneLine(body.website) || (typeof body.elapsed === "number" && body.elapsed < MIN_FILL_MS)) {
    return NextResponse.json({ ok: true, delivered: true });
  }

  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      {
        ok: false,
        error: `Too many requests — please try again in a few minutes, or email ${CONTACT_TO}.`,
      },
      { status: 429 }
    );
  }

  const service = SERVICES.includes(oneLine(body.service)) ? oneLine(body.service) : "";
  const name = oneLine(body.name);
  const email = oneLine(body.email);
  const phone = oneLine(body.phone);
  const brief = (body.brief || "").toString().trim();

  const errors = validate(name, email, phone, brief);
  if (Object.keys(errors).length) {
    return NextResponse.json(
      { ok: false, error: "Please check the highlighted fields.", errors },
      { status: 400 }
    );
  }

  const SMTP_HOST = process.env.SMTP_HOST;
  const SMTP_USER = process.env.SMTP_USER;
  const SMTP_PASSWORD = process.env.SMTP_PASSWORD || process.env.SMTP_PASS;
  const SMTP_PORT = process.env.SMTP_PORT;
  const SMTP_SECURE = process.env.SMTP_SECURE;
  const SMTP_FROM_NAME = process.env.SMTP_FROM_NAME;
  const SMTP_FROM_EMAIL = process.env.SMTP_FROM_EMAIL;

  // No mail transport configured — tell the client so it can fall back to a
  // mailto: link. The enquiry is still addressed to CONTACT_TO either way.
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) {
    console.warn(
      "[contact] SMTP not configured — enquiry not sent server-side:",
      { service, name, email, phone }
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    // Imported lazily so the app builds/runs even if the dependency is absent.
    const nodemailer = (await import("nodemailer")).default;

    const port = Number(SMTP_PORT) || 587;
    const secure = SMTP_SECURE ? SMTP_SECURE === "true" : port === 465;
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure,
      auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
    });

    const fromEmail = SMTP_FROM_EMAIL || SMTP_USER;
    const from = SMTP_FROM_NAME
      ? `${SMTP_FROM_NAME} <${fromEmail}>`
      : process.env.SMTP_FROM || `Coreflux Website <${fromEmail}>`;

    const subject = `New enquiry${service ? ` — ${service}` : ""} — ${name}`;
    const lines = [
      ["Looking for", service || "—"],
      ["Name", name],
      ["Email", email],
      ["Phone", phone],
      ["Brief", brief || "—"],
    ];

    await transporter.sendMail({
      from,
      to: CONTACT_TO,
      replyTo: { name, address: email },
      subject,
      text: lines.map(([k, v]) => `${k}: ${v}`).join("\n"),
      html: `<h2>New website enquiry</h2><table cellpadding="6" style="font-family:sans-serif;font-size:14px">${lines
        .map(
          ([k, v]) =>
            `<tr><td style="color:#7C3AED;font-weight:600;vertical-align:top">${k}</td><td>${escapeHtml(
              v
            )}</td></tr>`
        )
        .join("")}</table>`,
    });

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] send failed:", err);
    // Let the client fall back to mailto rather than losing the lead.
    return NextResponse.json({ ok: true, delivered: false });
  }
}
