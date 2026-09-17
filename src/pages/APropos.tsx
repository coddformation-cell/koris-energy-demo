import PageHeader from '../components/PageHeader';
import About from '../sections/About';
import Testimonials from '../sections/Testimonials';
import CTAFinal from '../sections/CTAFinal';

export default function APropos() {
  return (
    <>
      <PageHeader
        eyebrow="À propos"
        title="Une équipe d’ingénierie ancrée en Afrique de l’Ouest."
        lead="KORIS ENERGY (fictif) accompagne les acteurs de l’industrie pétrolière et gazière offshore et subsea, avec une culture technique exigeante et une discipline HSE au cœur de l’exécution."
      />
      <About hideHeader />
      <Testimonials hideHeader />
      <CTAFinal />
    </>
  );
}
