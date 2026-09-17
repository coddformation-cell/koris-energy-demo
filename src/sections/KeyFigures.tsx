import { keyFigures } from '../data/company';

export default function KeyFigures() {
  return (
    <section className="section figures">
      <div className="container">
        <header className="section-head figures-head">
          <span className="eyebrow">Chiffres clés</span>
          <h2 className="section-title">
            Empreinte opérationnelle illustrative.
          </h2>
          <p className="section-lead">
            L’ensemble des chiffres ci-dessous sont des valeurs illustratives
            pour la maquette. Ils ne représentent aucune performance
            commerciale, opérationnelle ou HSE réelle.
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
