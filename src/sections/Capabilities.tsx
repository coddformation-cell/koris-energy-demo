import { capabilities } from '../data/capabilities';

export default function Capabilities() {
  return (
    <section id="capabilities" className="section capabilities">
      <div className="container">
        <header className="section-head">
          <span className="eyebrow">Capabilities</span>
          <h2 className="section-title">
            Four disciplines to engineer, install and sustain offshore assets.
          </h2>
          <p className="section-lead">
            Une offre intégrée couvrant la conception, l’installation et la
            maintenance d’infrastructures pétrolières et gazières offshore.
          </p>
        </header>

        <ul className="capabilities-grid" role="list">
          {capabilities.map((c) => (
            <li key={c.id} className="capability-card">
              <div className="capability-media">
                <img src={c.image} alt="" loading="lazy" />
                <span className="capability-index mono">{c.index}</span>
              </div>
              <div className="capability-body">
                <h3 className="capability-title">{c.title}</h3>
                <p className="capability-desc">{c.description}</p>
                <ul className="capability-bullets" role="list">
                  {c.bullets.map((b) => (
                    <li key={b}>
                      <span className="capability-dot" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="capability-standards mono">
                  <span>Applicable standards</span>
                  <strong>{c.standardsHint}</strong>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
