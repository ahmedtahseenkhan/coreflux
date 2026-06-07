export type NavItem = {
  href: string;
  label: string;
  desc?: string;
  ico?: string;
};

export const SERVICES: NavItem[] = [
  { href: "/services/erp", label: "ERP Solutions", desc: "Inventory, HR & ops dashboards", ico: "ER" },
  { href: "/services/lms", label: "LMS Platforms", desc: "Training & compliance portals", ico: "LM" },
  { href: "/services/data-migration", label: "Data Migration", desc: "Legacy systems → clean data", ico: "DM" },
  { href: "/services/ai-automation", label: "AI Automation", desc: "Chatbots & workflow AI", ico: "AI" },
  { href: "/services/web-apps", label: "Web & Apps", desc: "Sites, commerce & portals", ico: "WA" },
  { href: "/services/games-sims", label: "Games & Sims", desc: "Games & training simulations", ico: "GS" },
];

export const STUDIO: NavItem[] = [
  { href: "/approach", label: "Approach", desc: "Six principles behind how we build", ico: "AP" },
  { href: "/process", label: "Process", desc: "Discovery → blueprint → build → launch", ico: "PR" },
  { href: "/case-studies", label: "Case studies", desc: "Selected work across disciplines", ico: "CS" },
  { href: "/careers", label: "Careers", desc: "Open roles at the studio", ico: "CR" },
  { href: "/press-kit", label: "Press kit", desc: "Brand assets & boilerplate", ico: "PK" },
];
