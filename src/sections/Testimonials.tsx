import { testimonials } from '../data/company';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <header className="section-head">
          <span className="eyebrow">Client voices</span>
          <h2 className="section-title">
            Illustrative feedback from B2B stakeholders.
          </h2>
          <p className="section-lead mono">
            All testimonials below are fictional — placeholders for a mockup.
          </p>
        </header>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <figure key={t.id} className="testimonial-card">
              <span className="testimonial-mark mono" aria-hidden="true">
                &#8220;
              </span>
              <blockquote>
                <p>{t.quote}</p>
              </blockquote>
              <figcaption>
                <div>
                  <strong>{t.role}</strong>
                  <span>{t.organisation}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
