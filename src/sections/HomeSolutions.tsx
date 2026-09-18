import { Link } from 'react-router-dom';
import { solutions } from '../data/solutions';
import { homeSolutionsIntro } from '../data/company';

export default function HomeSolutions() {
  return (
    <section className="section home-solutions">
      <div className="container">
        <header className="section-head">
          <span className="eyebrow">{homeSolutionsIntro.eyebrow}</span>
          <h2 className="section-title">{homeSolutionsIntro.title}</h2>
          <p className="section-lead">{homeSolutionsIntro.lead}</p>
        </header>

        <ul className="home-solutions-list" role="list">
          {solutions.map((s, i) => (
            <li key={s.id} className={`home-solution-row ${i % 2 === 1 ? 'is-reverse' : ''}`}>
              <div className="home-solution-media">
                <img src={s.image} alt="" loading="lazy" />
                <span className="home-solution-scope mono">{s.scope}</span>
              </div>
              <div className="home-solution-body">
                <h3 className="home-solution-title">{s.title}</h3>
                <p className="home-solution-desc">{s.description}</p>
                <ul className="home-solution-deliverables" role="list">
                  {s.deliverables.map((d) => (
                    <li key={d}>
                      <span className="solution-dot" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="home-solution-actions">
                  <Link to="/solutions" className="btn btn-ghost">
                    En savoir plus
                  </Link>
                  <Link to="/contact" className="btn btn-primary">
                    Demander une proposition
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
