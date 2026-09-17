import { Link } from 'react-router-dom';

export default function CTAFinal() {
  return (
    <section className="section cta-final">
      <div className="container cta-final-inner">
        <span className="eyebrow">Contact</span>
        <h2 className="cta-final-title">
          Un projet subsea ou offshore ?
          <br />
          <span>Étudions la solution ensemble.</span>
        </h2>
        <div className="cta-final-actions">
          <Link to="/contact" className="btn btn-primary">
            Demander un devis
            <span aria-hidden="true">→</span>
          </Link>
          <Link to="/projets" className="btn btn-ghost">
            Voir nos projets
          </Link>
        </div>
      </div>
    </section>
  );
}
