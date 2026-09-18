import { methodologySteps } from '../data/solutions';

export default function Methodology() {
  return (
    <section className="section methodology">
      <div className="container">
        <header className="section-head">
          <span className="eyebrow">Déroulement d’une mission</span>
          <h2 className="section-title">Cinq étapes cadrées, de la préparation à la livraison.</h2>
          <p className="section-lead">
            Chaque mission suit une méthodologie éprouvée pour tenir les délais, la qualité et la
            sécurité — quel que soit le périmètre.
          </p>
        </header>

        <ol className="methodology-list">
          {methodologySteps.map((s, i) => (
            <li key={s.step} className="methodology-step">
              <div className="methodology-step-head">
                <span className="methodology-step-index mono">{s.step}</span>
                {i < methodologySteps.length - 1 && (
                  <span className="methodology-step-line" aria-hidden="true" />
                )}
              </div>
              <div className="methodology-step-body">
                <h3 className="methodology-step-title">{s.title}</h3>
                <p className="methodology-step-desc">{s.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
