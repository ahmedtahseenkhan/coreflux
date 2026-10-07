import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/site";

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
              Coreflux Solutions<span className="dot" />
            </Link>
            <p className="tagline">Practical software for serious businesses.</p>
            <p>
              A Houston-based studio building custom ERP, LMS, AI, data, web,
              app and gaming solutions for teams that have outgrown
              spreadsheets but don&rsquo;t want SAP.
            </p>
          </div>
          <div>
            <h2>Services</h2>
            <ul>
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link href={s.href}>{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Studio</h2>
            <ul>
              {STUDIO.map((s) => (
                <li key={s.href}>
                  <Link href={s.href}>{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Contact</h2>
            <ul>
              <li>
                <a href="mailto:Info@corefluxsolutions.com">Info@corefluxsolutions.com</a>
              </li>
              <li>Houston, TX</li>
              <li>Working with teams everywhere</li>
              {/* Social links render once their URLs are set in lib/site.ts */}
              {SOCIAL_LINKS.filter((s) => s.href).map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="foot-base">
          <div>© {new Date().getFullYear()} Coreflux Solutions. All rights reserved.</div>
          <div>Built in-house · v1.0</div>
        </div>
      </div>
    </footer>
  );
}
