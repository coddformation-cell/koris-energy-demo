import PageHeader from '../components/PageHeader';
import ContactSection from '../sections/Contact';
import ContactMap from '../components/ContactMap';

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Parlons de votre projet offshore, subsea ou pipeline."
        lead="Décrivez brièvement votre besoin — notre équipe revient vers vous sous 48 heures ouvrées."
      />

      <section className="section contact-map-section">
        <div className="container">
          <ContactMap />
          <p className="contact-map-note mono">
            Représentation stylisée du Golfe de Guinée — à titre illustratif uniquement.
          </p>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
