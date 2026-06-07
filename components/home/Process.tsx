import CountUp from "@/components/CountUp";

const STEPS = [
  { n: "01", t: "Discovery", b: "We map your workflow, understand your constraints, and sketch the system you actually need." },
  { n: "02", t: "Build & iterate", b: "Rapid prototyping with real data. You shape the product every two weeks." },
  { n: "03", t: "Ship", b: "Deploy to production with full ownership, docs, and a clear path forward." },
  { n: "04", t: "Scale & maintain", b: "We stay in as long as you need. Ongoing optimization and new features without handoffs." },
];

const COUNTERS = [
  { value: 40, suffix: "+", sub: "Custom systems shipped and scaling in production." },
  { value: 7, suffix: "×", sub: "Average reduction in manual ops after AI automation." },
  { value: 92, suffix: "%", sub: "Of clients return for a second project within 12 months." },
];

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <span className="kicker">How we work</span>
            <h2>
              Four weeks to a <em>working</em> first release.
            </h2>
          </div>
        </div>

        {/* Process steps as cards */}
        <div className="reveal grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <article
              key={s.n}
              className="group relative flex flex-col min-h-[260px] p-7 bg-white rounded-[16px] border border-[color:var(--line)] shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                   style={{ background: 'linear-gradient(90deg, #7C3AED 0%, #A855F7 100%)' }} />

              <div className="text-[13px] font-mono uppercase tracking-[0.12em] text-[#7C3AED]">
                {s.n}
              </div>
              <h4 className="mt-5 font-serif text-[24px] leading-tight text-[color:var(--ink)] group-hover:text-[#7C3AED] transition-colors">
                {s.t}
              </h4>
              <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--ink-2)]">
                {s.b}
              </p>
            </article>
          ))}
        </div>

        {/* Impact metrics */}
        <div className="reveal mt-16 grid gap-5 md:grid-cols-3">
          {COUNTERS.map((c, i) => (
            <article
              key={c.suffix}
              className="group relative p-7 bg-white rounded-[16px] border border-[color:var(--line)] shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                   style={{ background: 'linear-gradient(90deg, #7C3AED 0%, #A855F7 100%)' }} />

              <div className="font-serif text-[56px] leading-none text-[#7C3AED]">
                <CountUp value={c.value} suffix={c.suffix} />
              </div>
              <div className="mt-4 text-[14px] leading-relaxed text-[color:var(--ink-2)] max-w-[32ch]">
                {c.sub}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
