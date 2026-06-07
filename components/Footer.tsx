import Link from "next/link";

const SERVICES = [
  { href: "/services/erp", label: "ERP Solutions" },
  { href: "/services/lms", label: "LMS Platforms" },
  { href: "/services/data-migration", label: "Data Migration" },
  { href: "/services/ai-automation", label: "AI Automation" },
  { href: "/services/web-apps", label: "Web & Apps" },
  { href: "/services/games-sims", label: "Games & Sims" },
];

const STUDIO = [
  { href: "/approach", label: "Approach" },
  { href: "/process", label: "Process" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/careers", label: "Careers" },
  { href: "/press-kit", label: "Press kit" },
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link href="/" className="wordmark">
              coreflux<span className="dot" />
            </Link>
            <h6>Practical software for serious businesses.</h6>
            <p>
              A Houston-based studio building custom ERP, LMS, AI, data, web,
              app and gaming solutions for teams that have outgrown
              spreadsheets but don&rsquo;t want SAP.
            </p>
          </div>
          <div>
            <h5>Services</h5>
            <ul>
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link href={s.href}>{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5>Studio</h5>
            <ul>
              {STUDIO.map((s) => (
                <li key={s.href}>
                  <Link href={s.href}>{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li>
                <a href="mailto:hello@coreflux.studio">hello@coreflux.studio</a>
              </li>
              <li>Houston, TX</li>
              <li>Working with teams everywhere</li>
              <li>
                <a href="#" aria-label="LinkedIn">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href="#" aria-label="GitHub">
                  GitHub ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-base">
          <div>© {new Date().getFullYear()} CoreFlux Studio. All rights reserved.</div>
          <div>Built in-house · v1.0</div>
        </div>
      </div>
    </footer>
  );
}
