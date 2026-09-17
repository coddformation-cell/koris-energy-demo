import { hseStatement, values } from '../data/company';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-inner">
        <div className="about-copy">
          <span className="eyebrow">About</span>
          <h2 className="section-title">
            An engineering-led team, anchored in West Africa.
          </h2>
          <p className="about-lead">
            KORIS ENERGY (fictional) is an offshore, subsea and pipeline services
            organisation designed for oil & gas operators and EPC contractors
            active in the Gulf of Guinea. From engineering studies to offshore
            execution, our approach combines technical rigour and disciplined
            HSE culture.
          </p>
          <a href="#contact" className="btn btn-ghost">
            Discuss a project
          </a>
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
