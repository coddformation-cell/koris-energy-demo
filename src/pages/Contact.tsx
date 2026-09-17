import PageHeader from '../components/PageHeader';
import ContactSection from '../sections/Contact';

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Parlons de votre projet offshore, subsea ou pipeline."
        lead="Décrivez brièvement votre besoin — notre équipe revient vers vous sous 48 heures ouvrées."
      />
      <ContactSection />
    </>
  );
}
