import { Link } from 'react-router-dom';
import { site } from '../data/site';

export default function Hero() {
  return (
    <section className="hero">
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
          Ingénierie
          <br />
          des profondeurs.
        </h1>

        <p className="hero-baseline mono">{site.baseline}</p>

        <p className="hero-sub">{site.subline}</p>

        <div className="hero-actions">
          <Link to="/contact" className="btn btn-primary">
            Parler de votre projet
            <span aria-hidden="true">→</span>
          </Link>
          <Link to="/expertises" className="btn btn-ghost">
            Voir nos expertises
          </Link>
        </div>

        <dl className="hero-meta">
          <div>
            <dt className="mono">Domaines</dt>
            <dd>Offshore · Subsea · Pipeline · IRM</dd>
          </div>
          <div>
            <dt className="mono">Région</dt>
            <dd>Golfe de Guinée — Afrique de l’Ouest</dd>
          </div>
          <div>
            <dt className="mono">Contractualisation</dt>
            <dd>EPCI · Services · Programmes IRM</dd>
          </div>
        </dl>

        <span className="hero-demo-badge" aria-label="Site de démonstration">
          <span className="hero-demo-dot" aria-hidden="true" />
          Démo · Maquette fictive
        </span>
      </div>
    </section>
  );
}
