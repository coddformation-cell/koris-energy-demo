import { Link } from 'react-router-dom';
import { hseStatement, values } from '../data/company';

type Props = { hideHeader?: boolean };

export default function About({ hideHeader = false }: Props) {
  return (
    <section className="section about">
      <div className="container about-inner">
        <div className="about-copy">
          {!hideHeader && (
            <>
              <span className="eyebrow">À propos</span>
              <h2 className="section-title">
                Une équipe d’ingénierie ancrée en Afrique de l’Ouest.
              </h2>
            </>
          )}
          <p className="about-lead">
            KORIS ENERGY (fictif) est une entreprise de services offshore, subsea
            et pipeline conçue pour les opérateurs pétroliers et gaziers ainsi
            que les EPC contractors actifs dans le Golfe de Guinée. De l’étude
            d’ingénierie à l’exécution offshore, notre approche combine rigueur
            technique et culture HSE disciplinée.
          </p>
          <Link to="/contact" className="btn btn-ghost">
            Parler de votre projet
          </Link>
        </div>

        <ul className="about-values" role="list">
          {values.map((v) => (
            <li key={v.title} className="about-value">
              <span className="about-value-mark" aria-hidden="true" />
              <div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <aside className="about-hse">
          <span className="eyebrow">{hseStatement.eyebrow}</span>
          <h3 className="about-hse-title">{hseStatement.title}</h3>
          <p className="about-hse-desc">{hseStatement.description}</p>
          <ul className="about-hse-pillars mono" role="list">
            {hseStatement.pillars.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
