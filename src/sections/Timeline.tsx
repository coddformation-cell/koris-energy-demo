import { timelineSteps } from '../data/company';

export default function Timeline() {
  return (
    <section className="section timeline">
      <div className="container">
        <header className="section-head">
          <span className="eyebrow">Histoire</span>
          <h2 className="section-title">Étapes clés d’une trajectoire fictive.</h2>
          <p className="section-lead mono">
            Cette timeline est entièrement fictive et illustrative. Elle sert de contenu de
            démonstration pour la maquette.
          </p>
        </header>

        <ol className="timeline-list">
          {timelineSteps.map((t, i) => (
            <li key={t.year} className="timeline-step">
              <div className="timeline-step-year mono">{t.year}</div>
              <div className="timeline-step-mark" aria-hidden="true">
                <span />
                {i < timelineSteps.length - 1 && <span className="timeline-step-line" />}
              </div>
              <div className="timeline-step-body">
                <h3 className="timeline-step-title">{t.title}</h3>
                <p className="timeline-step-desc">{t.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
