const CARDS = [
  { n: "01", t: "Practical, not theoretical", b: "Working software in weeks, not PowerPoint in quarters." },
  { n: "02", t: "Scales with your business", b: "Start with one workflow, evolve into a platform without rebuilds." },
  { n: "03", t: "No enterprise lock-in", b: "Enterprise-grade capability, without the complexity or vendor fees." },
];

export default function Pitch() {
  return (
    <section id="approach" className="section">
      <div className="wrap">
        {/* Positioning statement */}
        <div className="reveal grid gap-8 py-16 md:grid-cols-[auto_1fr] md:gap-16">
          <span className="kicker mt-2">Philosophy</span>
          <p className="font-serif text-[28px] md:text-[42px] leading-[1.15] tracking-tight text-[color:var(--ink)]">
            Custom software for businesses that need{" "}
            <em className="italic text-[#7C3AED]">practical, scalable</em> technology
            — without the enterprise complexity.
          </p>
        </div>

        {/* Three belief cards */}
        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-5">
          {CARDS.map((c, i) => (
            <article
              key={c.n}
              className="group relative p-7 bg-white rounded-[16px] border border-[color:var(--line)] shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                   style={{ background: 'linear-gradient(90deg, #7C3AED 0%, #A855F7 100%)' }} />

              <div className="text-[13px] font-mono uppercase tracking-[0.12em] text-[#7C3AED]">
                {c.n}
              </div>
              <h4 className="mt-5 font-serif text-[22px] leading-tight text-[color:var(--ink)] group-hover:text-[#7C3AED] transition-colors">
                {c.t}
              </h4>
              <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--ink-2)]">
                {c.b}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
