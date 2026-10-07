"use client";

import { useId, useRef, useState } from "react";

const SERVICES = [
  "ERP Solutions",
  "Learning Management",
  "Migration & Integration",
  "Automation & Intelligence",
  "Web & App Development",
  "Games & Simulations",
];

type Field = "name" | "email" | "phone" | "brief";
type Status = "idle" | "sending" | "sent" | "mailto" | "error";

// Mirrors the server-side checks in app/api/contact/route.ts.
function validate(name: string, email: string, phone: string) {
  const errors: Partial<Record<Field, string>> = {};
  if (!name.trim()) errors.name = "Please enter your name.";
  if (!email.trim()) errors.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim()))
    errors.email = "Please enter a valid email address.";
  if (!phone.trim()) errors.phone = "Please enter your phone number.";
  else if (!/^[+()\d\s.-]{7,25}$/.test(phone.trim()) || (phone.match(/\d/g) || []).length < 7)
    errors.phone = "Please enter a valid phone number.";
  return errors;
}

export default function CTA() {
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [brief, setBrief] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [serverError, setServerError] = useState("");
  const renderedAt = useRef(Date.now());
  const formRef = useRef<HTMLFormElement>(null);
  const uid = useId();
  const fid = (f: string) => `${uid}-${f}`;

  const CONTACT_EMAIL = "Info@corefluxsolutions.com";

  // Opens the visitor's mail client with the enquiry pre-addressed to
  // Info@corefluxsolutions.com — used whenever the server can't send directly.
  const openMailto = () => {
    const subject = `New enquiry${service ? ` — ${service}` : ""} — ${name}`;
    const body = [
      `Looking for: ${service || "—"}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      "",
      "Brief:",
      brief || "—",
    ].join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const focusFirstError = (errs: Partial<Record<Field, string>>) => {
    const first = (["name", "email", "phone", "brief"] as Field[]).find((f) => errs[f]);
    if (first) formRef.current?.querySelector<HTMLElement>(`#${CSS.escape(fid(first))}`)?.focus();
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    setServerError("");

    const clientErrors = validate(name, email, phone);
    setErrors(clientErrors);
    if (Object.keys(clientErrors).length) {
      focusFirstError(clientErrors);
      return;
    }

    setStatus("sending");
    let delivered = false;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service,
          name,
          email,
          phone,
          brief,
          website,
          elapsed: Date.now() - renderedAt.current,
        }),
      });
      const data = await res.json().catch(() => null);
      // Validation or rate-limit problems: show them, keep what was typed.
      if (res.status === 400 || res.status === 429) {
        const errs = (data?.errors || {}) as Partial<Record<Field, string>>;
        setErrors(errs);
        setServerError(data?.error || "Something went wrong. Please try again.");
        setStatus("error");
        focusFirstError(errs);
        return;
      }
      delivered = !!(data && data.ok && data.delivered);
    } catch (err) {
      console.error(err);
    }

    // If the server didn't send it, hand off to the visitor's email client so
    // the enquiry still reaches Info@corefluxsolutions.com.
    if (!delivered) openMailto();

    setStatus(delivered ? "sent" : "mailto");
    setErrors({});
    setService("");
    setName("");
    setEmail("");
    setPhone("");
    setBrief("");
  };

  // Clears a field's error as soon as the visitor edits it.
  const edit = (field: Field, set: (v: string) => void) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    set(e.target.value);
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    if (status !== "idle" && status !== "sending") setStatus("idle");
  };

  const fieldClass = (field: Field) =>
    "w-full bg-white/10 border px-5 py-4 text-white placeholder:text-white/40 outline-none focus:border-[#A855F7] focus:bg-white/15 transition rounded-[12px] " +
    (errors[field] ? "border-[#F87171]" : "border-white/20");

  // Props wiring a field to its label, error message and validity state.
  const a11y = (field: Field) => ({
    id: fid(field),
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? fid(`${field}-error`) : undefined,
  });

  const fieldError = (field: Field) =>
    errors[field] ? (
      <p id={fid(`${field}-error`)} className="mt-2 text-[13px] text-[#FCA5A5]">
        {errors[field]}
      </p>
    ) : null;

  const statusMessage =
    status === "sent"
      ? "Thanks — your request is in. We\u2019ll reply within one working day."
      : status === "mailto"
      ? `Your email app should have opened with your message to ${CONTACT_EMAIL} — press send there to finish. If nothing opened, email us directly.`
      : status === "error"
      ? serverError
      : Object.values(errors).some(Boolean)
      ? "Please check the highlighted fields."
      : "";

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <div className="reveal relative overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--line)] bg-gradient-to-br from-[#0F0B1E] via-[#1A1125] to-[#0F0B1E] p-10 md:p-16 text-white shadow-lg">
          {/* Animated gradient overlay */}
          <div
            className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 30% 50%, rgba(124, 58, 237, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(168, 85, 247, 0.2) 0%, transparent 50%)',
              animation: 'heroGlow 8s ease-in-out infinite',
            }}
          />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:items-start">
            {/* Left: intro */}
            <div>
              <span className="inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.12em] text-[#DDD6FE]">
                <span className="block h-2 w-2 rounded-full bg-[#A855F7]" />
                Let's build
              </span>

              <h2 className="mt-6 font-serif text-[36px] md:text-[52px] leading-[1.1] tracking-tight max-w-[18ch]">
                Have a system in mind?{" "}
                <em className="italic text-[#A855F7]">Let's</em> sketch it together.
              </h2>

              <p className="mt-5 text-[16px] leading-relaxed max-w-[44ch] text-white/75">
                Tell us a little about the problem. We'll reply within one working day.
              </p>

              <div className="mt-8 space-y-3 text-[14px] text-white/70">
                <p>
                  Write directly to{" "}
                  <strong className="text-white">Info@corefluxsolutions.com</strong>
                </p>
                <p className="flex flex-wrap items-center gap-x-5 gap-y-1">
                  <a href="tel:+18323387915" className="text-white hover:text-[#A855F7] transition">
                    +1 (832) 338-7915
                  </a>
                  <a href="tel:+18322263449" className="text-white hover:text-[#A855F7] transition">
                    +1 (832) 226-3449
                  </a>
                </p>
              </div>
            </div>

            {/* Right: form */}
            <form ref={formRef} onSubmit={submit} noValidate className="relative flex flex-col gap-6">
              <div role="group" aria-labelledby={fid("service")}>
                <p
                  id={fid("service")}
                  className="mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-white/55"
                >
                  I'm looking for
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {SERVICES.map((s) => {
                    const active = service === s;
                    return (
                      <button
                        key={s}
                        type="button"
                        aria-pressed={active}
                        onClick={() => setService(active ? "" : s)}
                        className={
                          "rounded-[12px] border px-4 py-3 text-[13px] font-medium text-left transition " +
                          (active
                            ? "border-[#A855F7] bg-[#A855F7]/20 text-white"
                            : "border-white/20 bg-white/5 text-white/70 hover:border-white/40 hover:text-white")
                        }
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor={fid("name")} className="sr-only">
                    Full name (required)
                  </label>
                  <input
                    {...a11y("name")}
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    maxLength={100}
                    placeholder="Full name *"
                    value={name}
                    onChange={edit("name", setName)}
                    className={fieldClass("name")}
                  />
                  {fieldError("name")}
                </div>
                <div>
                  <label htmlFor={fid("email")} className="sr-only">
                    Email address (required)
                  </label>
                  <input
                    {...a11y("email")}
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    maxLength={200}
                    placeholder="Email address *"
                    value={email}
                    onChange={edit("email", setEmail)}
                    className={fieldClass("email")}
                  />
                  {fieldError("email")}
                </div>
              </div>

              <div>
                <label htmlFor={fid("phone")} className="sr-only">
                  Phone number (required)
                </label>
                <input
                  {...a11y("phone")}
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  maxLength={25}
                  placeholder="Phone number *"
                  value={phone}
                  onChange={edit("phone", setPhone)}
                  className={fieldClass("phone")}
                />
                {fieldError("phone")}
              </div>

              <div>
                <label htmlFor={fid("brief")} className="sr-only">
                  Tell us about the project
                </label>
                <textarea
                  {...a11y("brief")}
                  name="brief"
                  maxLength={5000}
                  placeholder="Tell us about the project"
                  value={brief}
                  onChange={edit("brief", setBrief)}
                  rows={4}
                  className={fieldClass("brief") + " resize-none"}
                />
                {fieldError("brief")}
              </div>

              {/* Honeypot: off-screen and skipped by keyboard and screen readers.
                  People never fill it in; bots that auto-fill every field do. */}
              <div aria-hidden="true" className="absolute -left-[9999px] top-0 h-px w-px overflow-hidden">
                <label htmlFor={fid("website")}>Leave this field empty</label>
                <input
                  id={fid("website")}
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-[12px] border border-white bg-white text-[#0F0B1E] px-6 py-4 font-semibold text-[13px] uppercase tracking-[0.08em] hover:bg-[#A855F7] hover:border-[#A855F7] hover:text-white transition disabled:cursor-wait disabled:opacity-70"
              >
                {status === "sending"
                  ? "Sending…"
                  : status === "sent"
                  ? "Got it ✓ We'll be in touch"
                  : "Submit request →"}
              </button>

              <p
                role="status"
                aria-live="polite"
                className={
                  "text-[14px] leading-relaxed empty:hidden " +
                  (status === "error" || (status === "idle" && statusMessage)
                    ? "text-[#FCA5A5]"
                    : "text-white/80")
                }
              >
                {statusMessage}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
