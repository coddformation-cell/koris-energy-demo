import { solutions } from '../data/solutions';

export default function Solutions() {
  return (
    <section id="solutions" className="section solutions">
      <div className="container">
        <header className="section-head">
          <span className="eyebrow">Solutions</span>
          <h2 className="section-title">
            Prestations B2B pour opérateurs et EPC contractors.
          </h2>
          <p className="section-lead">
            Three service packages tailored to offshore operators, from a single
            inspection campaign to a full pipeline EPCI.
          </p>
        </header>

        <div className="solutions-grid">
          {solutions.map((s) => (
            <article
              key={s.id}
              className={`solution-card ${s.featured ? 'is-featured' : ''}`}
            >
              {s.featured && (
                <span className="solution-badge mono">Most requested</span>
              )}
              <span className="solution-scope mono">{s.scope}</span>
              <h3 className="solution-title">{s.title}</h3>
              <p className="solution-desc">{s.description}</p>

              <div className="solution-deliverables">
                <span className="mono solution-deliv-label">Deliverables</span>
                <ul role="list">
                  {s.deliverables.map((d) => (
                    <li key={d}>
                      <span className="solution-dot" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`btn ${s.featured ? 'btn-primary' : 'btn-ghost'} solution-cta`}
              >
                Request a proposal
              </a>
            </article>
          ))}
        </div>

        <p className="solutions-footnote mono">
          Illustrative offerings — mockup. No pricing shown.
        </p>
      </div>
    </section>
  );
}
