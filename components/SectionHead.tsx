import type { ReactNode } from "react";

export default function SectionHead({
  kicker,
  title,
  blurb,
}: {
  kicker: string;
  title: ReactNode;
  blurb?: ReactNode;
}) {
  return (
    <div className="section-head reveal">
      <div>
        <span className="kicker">{kicker}</span>
        <h2>{title}</h2>
      </div>
      {blurb && <p>{blurb}</p>}
    </div>
  );
}
