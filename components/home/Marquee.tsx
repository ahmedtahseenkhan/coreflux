const ROW_A = [
  "ERP", "Inventory", "HR & Payroll", "Accounting", "CRM", "Operations",
  "LMS", "Training Portals", "Compliance", "Data Migration", "AI Automation", "Chatbots",
];

const ROW_B = [
  "Knowledge Assistants", "Document Processing", "Web Apps", "Mobile Apps",
  "Booking Platforms", "E-Commerce", "Client Portals", "Admin Dashboards",
  "Web Games", "Mobile Games", "Training Simulations", "Gamification",
];

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        {[...ROW_A, ...ROW_A].map((t, i) => (
          <span key={`a-${i}`}>
            <span className="dot" />
            {t}
          </span>
        ))}
      </div>
      <div className="marquee-track reverse">
        {[...ROW_B, ...ROW_B].map((t, i) => (
          <span key={`b-${i}`}>
            <span className="dot" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
