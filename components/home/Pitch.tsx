const CARDS = [
  { k: "P", t: "Practical, not theoretical", b: "Working software in weeks, not slide decks in quarters." },
  { k: "S", t: "Scales with your business", b: "Start with one workflow, expand into a platform. No rebuilds." },
  { k: "C", t: "No enterprise lock-in", b: "Enterprise firepower without the bureaucracy or six-figure license." },
];

export default function Pitch() {
  return (
    <section id="approach" className="section">
      <div className="wrap">
        <div className="reveal pitch-panel">
          {/* glow accents */}
          <span className="pitch-glow pitch-glow-a" aria-hidden />
          <span className="pitch-glow pitch-glow-b" aria-hidden />

          <div className="relative">
            <span className="pitch-kicker">— Our positioning</span>

            <h2 className="pitch-title">
              Practical, <em>scalable</em> technology for businesses that need
              it — without the enterprise-level complexity.
            </h2>

            <p className="pitch-sub">
              Most software houses optimise for billable hours. We optimise for
              the moment your team stops working around the system and starts
              working with it.
            </p>

            {/* glass belief cards */}
            <div className="pitch-cards">
              {CARDS.map((c, i) => (
                <article
                  key={c.k}
                  className="pitch-card"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <span className="pitch-card-ic">{c.k}</span>
                  <h4 className="pitch-card-t">{c.t}</h4>
                  <p className="pitch-card-b">{c.b}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
