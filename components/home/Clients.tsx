type Client = {
  /** Display wordmark (used when no image logo is provided). */
  name: string;
  /**
   * Optional path to a real logo file in /public/clients (e.g. "/clients/att.svg").
   * If present it is rendered as an <img>; otherwise the styled wordmark is shown.
   */
  logo?: string;
};

// To swap in real brand logos later: drop files into /public/clients and set
// the `logo` field below (e.g. logo: "/clients/att.svg"). No other change needed.
const CLIENTS: Client[] = [
  { name: "Organon" },
  { name: "Smithfield Foods" },
  { name: "U.S. Army" },
  { name: "Hershey's" },
  { name: "Cheniere" },
  { name: "Delek US" },
  { name: "Builders FirstSource" },
  { name: "Rich Products" },
  { name: "Janus Henderson" },
  { name: "Phillips 66" },
  { name: "Dow" },
  { name: "3M" },
  { name: "Warner Music Group" },
  { name: "Bell · Textron" },
  { name: "Hearst" },
  { name: "AT&T" },
];

export default function Clients() {
  return (
    <section id="clients" className="section pt-0">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <span className="kicker">Trusted by</span>
            <h2>
              Teams at companies <em>you know</em>.
            </h2>
          </div>
          <p>
            Engineers from our team have shipped software relied on by enterprises
            across energy, defense, consumer goods, finance, and media.
          </p>
        </div>

        <div className="reveal client-wall">
          {CLIENTS.map((c) => (
            <div key={c.name} className="client-cell" title={c.name}>
              {c.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={c.logo} alt={c.name} loading="lazy" />
              ) : (
                <span className="client-mark">{c.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .client-wall {
          margin-top: 44px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          border: 1px solid var(--line);
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: var(--card);
        }
        @media (min-width: 640px) {
          .client-wall { grid-template-columns: repeat(4, 1fr); }
        }
        .client-cell {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 104px;
          padding: 22px 18px;
          border-right: 1px solid var(--line-2);
          border-bottom: 1px solid var(--line-2);
          transition: background 0.25s ease;
        }
        .client-cell:hover { background: rgba(124, 58, 237, 0.04); }
        .client-cell img {
          max-height: 38px;
          max-width: 100%;
          object-fit: contain;
          filter: grayscale(1);
          opacity: 0.55;
          transition: filter 0.25s ease, opacity 0.25s ease;
        }
        .client-cell:hover img { filter: grayscale(0); opacity: 1; }
        .client-mark {
          font-family: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif;
          font-size: 17px;
          font-weight: 700;
          letter-spacing: -0.015em;
          text-align: center;
          line-height: 1.15;
          color: var(--ink-2);
          opacity: 0.68;
          transition: color 0.25s ease, opacity 0.25s ease, transform 0.25s ease;
        }
        .client-cell:hover .client-mark {
          color: var(--c1);
          opacity: 1;
          transform: translateY(-1px);
        }
      `}</style>
    </section>
  );
}
