import Link from "next/link";

const ITEMS = [
  { tag: "ERP / Logistics", title: "Multi-warehouse inventory & dispatch ERP", meta: "Operations · Inventory · Reporting" },
  { tag: "LMS / Compliance", title: "Workforce compliance & certification portal", meta: "Training · Assessments · Audit trails" },
  { tag: "Data Migration", title: "Legacy CRM → modern data platform", meta: "Excel · Old CRM · Clean schema" },
  { tag: "AI Automation", title: "Internal knowledge assistant & ticket triage", meta: "RAG · Workflow AI · Support" },
  { tag: "Web & Apps", title: "Booking platform & client portal", meta: "Web · Mobile · Admin dashboards" },
  { tag: "Gaming / Interactive", title: "Gamified training simulation", meta: "Web game · Onboarding · Scoring" },
];

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <span className="kicker">Selected work</span>
            <h2>
              New studio. <em>Real</em> delivery.
            </h2>
          </div>
          <p>
            Built for businesses like yours, shipped with real rigor.
          </p>
        </div>

        {/* Premium card grid */}
        <div className="reveal grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it, i) => (
            <article
              key={it.title}
              className="group relative flex flex-col min-h-[260px] p-7 bg-white rounded-[16px] border border-[color:var(--line)] shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                   style={{ background: 'linear-gradient(90deg, #7C3AED 0%, #A855F7 100%)' }} />

              <div className="flex items-center justify-between">
                <span className="text-[12px] font-mono uppercase tracking-[0.1em] text-[color:var(--mute)]">
                  {it.tag}
                </span>
                <span className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.08em] text-[color:var(--mute)]">
                  <span className="block h-2 w-2 rounded-full" style={{ background: '#7C3AED', animation: 'workPulse 2.2s ease-out infinite' }} />
                  Coming soon
                </span>
              </div>

              <h3 className="mt-6 font-serif text-[24px] leading-[1.15] tracking-tight text-[color:var(--ink)] group-hover:text-[#7C3AED] transition-colors">
                {it.title}
              </h3>

              <div className="mt-3 text-[12px] font-mono uppercase tracking-[0.08em] text-[color:var(--mute)]">
                {it.meta}
              </div>

              <div className="mt-auto pt-5 flex items-center gap-2 text-[13px] font-mono uppercase tracking-[0.1em] text-[color:var(--ink)] group-hover:gap-1.5 transition-all">
                <span>Request details</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </article>
          ))}
        </div>

        <p className="reveal mt-8 text-[13px] font-mono uppercase tracking-[0.08em] text-[color:var(--mute)]">
          Got a similar project?{" "}
          <Link href="/#contact" className="text-[#7C3AED] font-semibold hover:underline">
            Let's talk →
          </Link>
        </p>
      </div>

      <style>{`
        @keyframes workPulse {
          0% { box-shadow: 0 0 0 0 rgba(124, 58, 237, 0.6); }
          70% { box-shadow: 0 0 0 8px rgba(124, 58, 237, 0); }
          100% { box-shadow: 0 0 0 0 rgba(124, 58, 237, 0); }
        }
      `}</style>
    </section>
  );
}
