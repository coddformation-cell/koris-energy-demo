import { keyFigures } from '../data/company';

export default function KeyFigures() {
  return (
    <section id="figures" className="section figures">
      <div className="container">
        <header className="section-head figures-head">
          <span className="eyebrow">Key figures</span>
          <h2 className="section-title">
            Illustrative operational footprint.
          </h2>
          <p className="section-lead">
            All figures below are illustrative placeholders for this mockup.
            They do not represent real commercial, operational or HSE
            performance.
          </p>
        </header>

        <ul className="figures-grid" role="list">
          {keyFigures.map((k) => (
            <li key={k.label} className="figure-item">
              <div className="figure-value">{k.value}</div>
              <div className="figure-label">{k.label}</div>
              <div className="figure-hint mono">{k.hint}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
