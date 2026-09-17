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
            Offshore, subsea, pipeline and IRM services for oil & gas operators
            and EPC contractors — engineered from the Gulf of Guinea.
          </p>
          <ul className="footer-locations" role="list">
            <li>
              <span className="mono">HQ</span> {site.contact.hq}
            </li>
            <li>
              <span className="mono">OPS</span> {site.contact.operationsBase}
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Capabilities</h4>
          <ul>
            {capabilities.map((c) => (
              <li key={c.id}>
                <a href="#capabilities">{c.title}</a>
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
        <span>© {year} KORIS ENERGY (fictional) — All rights reserved.</span>
        <span className="footer-demo">
          Mockup for demonstration purposes only. No real services provided.
        </span>
      </div>
    </footer>
  );
}
