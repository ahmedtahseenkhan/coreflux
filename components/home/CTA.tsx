"use client";

import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      setSent(true);
      setEmail("");
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      console.error(err);
    }
  };

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

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.12em] text-[#DDD6FE]">
              <span className="block h-2 w-2 rounded-full bg-[#A855F7]" />
              Let's build
            </span>

            <h3 className="mt-6 font-serif text-[36px] md:text-[52px] leading-[1.1] tracking-tight max-w-[22ch]">
              Have a system in mind?{" "}
              <em className="italic text-[#A855F7]">Let's</em> sketch it together.
            </h3>

            <p className="mt-5 text-[16px] leading-relaxed max-w-[52ch] text-white/75">
              Drop your email and a one-liner about the problem. We'll reply within one working day with next steps.
            </p>

            <form onSubmit={submit} className="mt-8 flex flex-col gap-0 sm:flex-row sm:items-stretch max-w-[600px]">
              <input
                type="email"
                required
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border border-white/20 px-5 py-4 text-white placeholder:text-white/40 outline-none focus:border-[#A855F7] focus:bg-white/15 transition rounded-l-[12px] sm:rounded-l-[12px] sm:rounded-r-none"
              />
              <button
                type="submit"
                className="border border-white bg-white text-[#0F0B1E] px-6 py-4 font-semibold text-[13px] uppercase tracking-[0.08em] hover:bg-[#A855F7] hover:border-[#A855F7] hover:text-white transition rounded-r-[12px] sm:rounded-l-none"
              >
                {sent ? "Got it ✓" : "Send →"}
              </button>
            </form>

            <p className="mt-5 text-[13px] text-white/55">
              Or write directly to{" "}
              <strong className="text-white">hello@coreflux.studio</strong>
              {" "}— we read everything.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
