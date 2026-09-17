import { site } from '../data/site';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-media" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=2400&q=80&auto=format&fit=crop"
          alt=""
          loading="eager"
        />
        <div className="hero-media-overlay" />
      </div>

      <div className="container hero-content">
        <div className="hero-brandline">
          <span className="mono hero-brand">KORIS ENERGY</span>
          <span className="hero-brandline-dot" aria-hidden="true" />
          <span className="mono hero-brand-region">{site.region}</span>
        </div>

        <h1 className="hero-title">
          Engineering
          <br />
          the depths.
        </h1>

        <p className="hero-sub">{site.subline}</p>

        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Request a quote
            <span aria-hidden="true">→</span>
          </a>
          <a href="#capabilities" className="btn btn-ghost">
            Explore capabilities
          </a>
        </div>

        <dl className="hero-meta">
          <div>
            <dt className="mono">Focus</dt>
            <dd>Offshore · Subsea · Pipeline · IRM</dd>
          </div>
          <div>
            <dt className="mono">Region</dt>
            <dd>Gulf of Guinea — West Africa</dd>
          </div>
          <div>
            <dt className="mono">Contracting</dt>
            <dd>EPCI · Services · IRM programs</dd>
          </div>
        </dl>

        <span className="hero-demo-badge" aria-label="Demonstration website">
          <span className="hero-demo-dot" aria-hidden="true" />
          Demo · Fictional mockup
        </span>
      </div>
    </section>
  );
}
