import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import { navLinks, site } from '../data/site';
import { capabilities } from '../data/capabilities';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo />
          <p>
            Services offshore, subsea, pipeline et IRM pour les opérateurs
            pétroliers et gaziers et les EPC contractors — pensés depuis le
            Golfe de Guinée.
          </p>
          <ul className="footer-locations" role="list">
            <li>
              <span className="mono">Siège</span> {site.contact.hq}
            </li>
            <li>
              <span className="mono">Base</span> {site.contact.operationsBase}
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Expertises</h4>
          <ul>
            {capabilities.map((c) => (
              <li key={c.id}>
                <Link to="/expertises">{c.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href={`tel:${site.contact.phone.replace(/\s/g, '')}`}>
                {site.contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </li>
          </ul>
          <div className="footer-socials">
            {site.socials.map((s) => (
              <a key={s.name} href={s.href} aria-label={s.name}>
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {year} KORIS ENERGY (fictif) — Tous droits réservés.</span>
        <span className="footer-demo">
          Maquette de démonstration — aucun service réel n’est fourni.
        </span>
      </div>
    </footer>
  );
}
