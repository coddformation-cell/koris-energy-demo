import { Link } from 'react-router-dom';
import { capabilities } from '../data/capabilities';
import { homeExpertisesIntro } from '../data/company';

export default function HomeExpertises() {
  const [main, ...rest] = capabilities;
  return (
    <section className="section home-expertises">
      <div className="container">
        <header className="section-head">
          <span className="eyebrow">{homeExpertisesIntro.eyebrow}</span>
          <h2 className="section-title">{homeExpertisesIntro.title}</h2>
          <p className="section-lead">{homeExpertisesIntro.lead}</p>
        </header>

        <div className="home-expertises-grid">
          <Link to="/expertises" className="home-expertise-main">
            <div className="home-expertise-media">
              <img src={main.image} alt="" loading="lazy" />
              <span className="home-expertise-index mono">{main.index}</span>
            </div>
            <div className="home-expertise-body">
              <h3 className="home-expertise-title">{main.title}</h3>
              <p className="home-expertise-desc">{main.description}</p>
              <span className="home-expertise-cta mono">
                Découvrir <span aria-hidden="true">→</span>
              </span>
            </div>
          </Link>

          <div className="home-expertise-secondary">
            {rest.map((c) => (
              <Link key={c.id} to="/expertises" className="home-expertise-card">
                <div className="home-expertise-card-media">
                  <img src={c.image} alt="" loading="lazy" />
                  <span className="home-expertise-index mono">{c.index}</span>
                </div>
                <div className="home-expertise-card-body">
                  <h4 className="home-expertise-card-title">{c.title}</h4>
                  <span className="home-expertise-card-cta mono">
                    Découvrir →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="home-expertises-footer">
          <Link to="/expertises" className="btn btn-ghost">
            Voir toutes les expertises
          </Link>
        </div>
      </div>
    </section>
  );
}
