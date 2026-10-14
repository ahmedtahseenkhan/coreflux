import HoverExpand, { type ExpandItem } from "@/components/skiper/HoverExpand";
import { SERVICES as NAV_SERVICES } from "@/components/nav-data";

const SERVICES: Omit<ExpandItem, "desc">[] = [
  { num: "01", tag: "Enterprise", title: "ERP Solutions", chips: ["Inventory", "Operations", "Multi-tenant"], href: "/services/erp" },
  { num: "02", tag: "Education", title: "Learning Management", chips: ["Training", "Compliance", "Assessments"], href: "/services/lms" },
  { num: "03", tag: "Data", title: "Migration & Integration", chips: ["ETL", "Schema design", "Data quality"], href: "/services/data-migration" },
  { num: "04", tag: "AI", title: "Automation & Intelligence", chips: ["RAG", "Workflow AI", "Agents"], href: "/services/ai-automation" },
  { num: "05", tag: "Digital", title: "Web & App Development", chips: ["Frontend", "Backend", "DevOps"], href: "/services/web-apps" },
  { num: "06", tag: "Interactive", title: "Games & Simulations", chips: ["Gameplay", "Analytics", "Monetization"], href: "/services/games-sims" },
];

// One-line descriptions shared with the nav's Services menu.
const ITEMS: ExpandItem[] = SERVICES.map((s) => ({
  ...s,
  desc: NAV_SERVICES.find((n) => n.href === s.href)?.desc ?? "",
}));

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
            Deeply specialized lines, one promise — practical software that ships.
          </p>
        </div>

        <div className="reveal">
          <HoverExpand items={ITEMS} />
        </div>
      </div>
    </section>
  );
}
