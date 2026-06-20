"use client";

import { useState } from "react";

const SERVICES = [
  "ERP Solutions",
  "Learning Management",
  "Migration & Integration",
  "Automation & Intelligence",
  "Web & App Development",
  "Games & Simulations",
];

export default function CTA() {
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [brief, setBrief] = useState("");
  const [sent, setSent] = useState(false);

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

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    let delivered = false;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service, name, email, phone, brief }),
      });
      const data = await res.json().catch(() => null);
      delivered = !!(data && data.ok && data.delivered);
    } catch (err) {
      console.error(err);
    }

    // If the server didn't send it, hand off to the visitor's email client so
    // the enquiry still reaches Info@corefluxsolutions.com.
    if (!delivered) openMailto();

    setSent(true);
    setService("");
    setName("");
    setEmail("");
    setPhone("");
    setBrief("");
    setTimeout(() => setSent(false), 5000);
  };

  const fieldClass =
    "w-full bg-white/10 border border-white/20 px-5 py-4 text-white placeholder:text-white/40 outline-none focus:border-[#A855F7] focus:bg-white/15 transition rounded-[12px]";

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

              <h3 className="mt-6 font-serif text-[36px] md:text-[52px] leading-[1.1] tracking-tight max-w-[18ch]">
                Have a system in mind?{" "}
                <em className="italic text-[#A855F7]">Let's</em> sketch it together.
              </h3>

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
            <form onSubmit={submit} className="flex flex-col gap-6">
              <div>
                <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.08em] text-white/55">
                  I'm looking for
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {SERVICES.map((s) => {
                    const active = service === s;
                    return (
                      <button
                        key={s}
                        type="button"
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
                <input
                  type="text"
                  required
                  placeholder="Full name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={fieldClass}
                />
                <input
                  type="email"
                  required
                  placeholder="Email address *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={fieldClass}
                />
              </div>

              <input
                type="tel"
                required
                placeholder="Phone number *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={fieldClass}
              />

              <textarea
                placeholder="Tell us about the project"
                value={brief}
                onChange={(e) => setBrief(e.target.value)}
                rows={4}
                className={fieldClass + " resize-none"}
              />

              <button
                type="submit"
                className="rounded-[12px] border border-white bg-white text-[#0F0B1E] px-6 py-4 font-semibold text-[13px] uppercase tracking-[0.08em] hover:bg-[#A855F7] hover:border-[#A855F7] hover:text-white transition"
              >
                {sent ? "Got it ✓ We'll be in touch" : "Submit request →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
