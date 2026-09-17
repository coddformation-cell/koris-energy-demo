import { testimonials } from '../data/company';

type Props = { hideHeader?: boolean };

export default function Testimonials({ hideHeader = false }: Props) {
  return (
    <section className="section testimonials">
      <div className="container">
        {!hideHeader && (
          <header className="section-head">
            <span className="eyebrow">Témoignages</span>
            <h2 className="section-title">
              Retours illustratifs de nos interlocuteurs B2B.
            </h2>
            <p className="section-lead mono">
              L’ensemble des témoignages ci-dessous sont fictifs — placeholders
              pour la maquette.
            </p>
          </header>
        )}

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
