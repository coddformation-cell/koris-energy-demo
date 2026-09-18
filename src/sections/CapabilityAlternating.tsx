import { Link } from 'react-router-dom';
import { capabilities } from '../data/capabilities';

export default function CapabilityAlternating() {
  return (
    <section className="section capability-alt">
      <div className="container">
        <ul className="capability-alt-list" role="list">
          {capabilities.map((c, i) => (
            <li
              key={c.id}
              className={`capability-alt-row ${i % 2 === 1 ? 'is-reverse' : ''}`}
            >
              <div className="capability-alt-media">
                <img src={c.image} alt="" loading="lazy" />
                <span className="capability-alt-index mono">{c.index}</span>
              </div>
              <div className="capability-alt-body">
                <h3 className="capability-alt-title">{c.title}</h3>
                <p className="capability-alt-desc">{c.longDescription}</p>

                <div className="capability-alt-cols">
                  <div>
                    <span className="capability-alt-label mono">Domaines d’intervention</span>
                    <ul role="list">
                      {c.domains.map((d) => (
                        <li key={d}>
                          <span className="capability-dot" aria-hidden="true" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="capability-alt-label mono">Équipements et technologies</span>
                    <ul role="list">
                      {c.equipment.map((e) => (
                        <li key={e}>
                          <span className="capability-dot" aria-hidden="true" />
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="capability-alt-footer">
                  <div className="capability-alt-standards mono">
                    <span>Référentiels applicables</span>
                    <strong>{c.standardsHint}</strong>
                  </div>
                  <Link to="/contact" className="btn btn-ghost">
                    Discuter d’un projet
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
