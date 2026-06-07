import Link from "next/link";

type Service = {
  num: string;
  tag: string;
  title: React.ReactNode;
  body: string;
  chips: string[];
  href: string;
};

const SERVICES: Service[] = [
  { num: "01", tag: "Enterprise", title: "ERP Solutions", body: "", chips: ["Inventory", "Operations", "Multi-tenant"], href: "/services/erp" },
  { num: "02", tag: "Education", title: "Learning Management", body: "", chips: ["Training", "Compliance", "Assessments"], href: "/services/lms" },
  { num: "03", tag: "Data", title: "Migration & Integration", body: "", chips: ["ETL", "Schema design", "Data quality"], href: "/services/data-migration" },
  { num: "04", tag: "AI", title: "Automation & Intelligence", body: "", chips: ["RAG", "Workflow AI", "Agents"], href: "/services/ai-automation" },
  { num: "05", tag: "Digital", title: "Web & App Development", body: "", chips: ["Frontend", "Backend", "DevOps"], href: "/services/web-apps" },
  { num: "06", tag: "Interactive", title: "Games & Simulations", body: "", chips: ["Gameplay", "Analytics", "Monetization"], href: "/services/games-sims" },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <span className="kicker">What we build</span>
            <h2>
              Six service lines, <em>one</em> studio.
            </h2>
          </div>
          <p>
            Each service is deeply specialized, but all share our commitment to practical, scalable, custom software that actually ships.
          </p>
        </div>

        {/* Premium card grid with soft shadows and hover lift */}
        <div className="reveal grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Link
              key={s.num}
              href={s.href}
              className="group relative flex flex-col gap-5 p-7 bg-white rounded-[16px] border border-[color:var(--line)] shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer overflow-hidden"
              style={{
                transitionDelay: `${i * 40}ms`,
              }}
            >
              {/* Gradient accent bar on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, #7C3AED 0%, #A855F7 100%)`,
                }}
              />

              <div className="flex items-center justify-between">
                <span className="text-[13px] font-mono uppercase tracking-[0.12em] text-[#7C3AED]">
                  {s.num} / 06
                </span>
                <span className="text-[11px] font-mono uppercase tracking-[0.1em] text-[color:var(--mute)] px-2.5 py-1 bg-[#DDD6FE] rounded-full">
                  {s.tag}
                </span>
              </div>

              <h3 className="font-serif text-[28px] leading-[1.1] tracking-tight text-[color:var(--ink)] group-hover:text-[#7C3AED] transition-colors">
                {s.title}
              </h3>

              <div className="flex flex-wrap gap-2 mt-auto">
                {s.chips.map((c) => (
                  <span
                    key={c}
                    className="text-[12px] font-mono text-[color:var(--mute)] px-3 py-1.5 bg-[#DDD6FE] rounded-full"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div className="pt-3 flex items-center justify-between text-[13px] font-mono uppercase tracking-[0.1em] text-[color:var(--ink)] group-hover:gap-1.5 transition-all">
                <span>Explore</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
