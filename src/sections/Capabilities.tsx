import { capabilities } from '../data/capabilities';

type Props = {
  compact?: boolean;
  hideHeader?: boolean;
};

export default function Capabilities({ compact = false, hideHeader = false }: Props) {
  return (
    <section className="section capabilities">
      <div className="container">
        {!hideHeader && (
          <header className="section-head">
            <span className="eyebrow">Expertises</span>
            <h2 className="section-title">
              Quatre expertises pour concevoir, installer et maintenir vos actifs
              offshore.
            </h2>
            {!compact && (
              <p className="section-lead">
                Une offre intégrée couvrant l’ingénierie, l’installation et la
                maintenance des infrastructures pétrolières et gazières offshore.
              </p>
            )}
          </header>
        )}

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
                  <span>Référentiels applicables</span>
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
