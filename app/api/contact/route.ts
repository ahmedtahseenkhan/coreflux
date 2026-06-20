import { NextRequest, NextResponse } from "next/server";

// Where every "I'm looking for" enquiry is delivered.
const CONTACT_TO = process.env.CONTACT_TO || "Info@corefluxsolutions.com";

type Payload = {
  service?: string;
  name?: string;
  email?: string;
  phone?: string;
  brief?: string;
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const service = (body.service || "").toString().trim();
  const name = (body.name || "").toString().trim();
  const email = (body.email || "").toString().trim();
  const phone = (body.phone || "").toString().trim();
  const brief = (body.brief || "").toString().trim();

  if (!name || !email || !phone) {
    return NextResponse.json(
      { ok: false, error: "Name, email and phone are required." },
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
      replyTo: `${name} <${email}>`,
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
