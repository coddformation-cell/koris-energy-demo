import { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import { navLinks } from '../data/site';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <Logo />

        <nav className="header-nav" aria-label="Primary">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="header-link">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a href="#contact" className="btn btn-solid header-cta">
            Request a quote
          </a>
          <button
            type="button"
            className={`burger ${open ? 'is-open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <nav className="mobile-nav" aria-label="Mobile">
          {navLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="mobile-link"
              style={{ transitionDelay: `${100 + i * 40}ms` }}
              onClick={close}
            >
              <span className="mobile-link-index">0{i + 1}</span>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn btn-primary mobile-cta" onClick={close}>
          Request a quote
        </a>
      </div>
    </header>
  );
}
