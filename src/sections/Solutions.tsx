import { Link } from 'react-router-dom';
import { solutions } from '../data/solutions';

export default function Solutions() {
  return (
    <section className="section solutions">
      <div className="container">
        <header className="section-head">
          <span className="eyebrow">Solutions</span>
          <h2 className="section-title">
            Des prestations B2B pour opérateurs et EPC contractors.
          </h2>
          <p className="section-lead">
            Trois formules pensées pour les acteurs offshore, d’une campagne
            d’inspection ciblée à un lot pipeline EPCI complet.
          </p>
        </header>

        <div className="solutions-grid">
          {solutions.map((s) => (
            <article
              key={s.id}
              className={`solution-card ${s.featured ? 'is-featured' : ''}`}
            >
              {s.featured && (
                <span className="solution-badge mono">La plus demandée</span>
              )}
              <span className="solution-scope mono">{s.scope}</span>
              <h3 className="solution-title">{s.title}</h3>
              <p className="solution-desc">{s.description}</p>

              <div className="solution-deliverables">
                <span className="mono solution-deliv-label">Livrables</span>
                <ul role="list">
                  {s.deliverables.map((d) => (
                    <li key={d}>
                      <span className="solution-dot" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact"
                className={`btn ${s.featured ? 'btn-primary' : 'btn-ghost'} solution-cta`}
              >
                Demander une proposition
              </Link>
            </article>
          ))}
        </div>

        <p className="solutions-footnote mono">
          Prestations illustratives — maquette. Aucun prix n’est affiché.
        </p>
      </div>
    </section>
  );
}
