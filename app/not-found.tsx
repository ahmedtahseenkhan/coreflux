import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap max-w-[640px]">
        <span className="kicker">404</span>
        <h1 className="title" style={{ fontSize: "clamp(48px,7vw,80px)" }}>
          Page <em>not</em> found.
        </h1>
        <p className="lede">
          The page you&rsquo;re looking for isn&rsquo;t here. Could be a typo,
          could be a draft we haven&rsquo;t shipped yet.
        </p>
        <div className="hero-ctas">
          <Link href="/" className="btn primary">
            Back to home <span className="arrow">↗</span>
          </Link>
          <Link href="/case-studies" className="btn ghost">
            See our work
          </Link>
        </div>
      </div>
    </section>
  );
}
