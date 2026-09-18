import PageHero from '../components/PageHero';
import About from '../sections/About';
import Timeline from '../sections/Timeline';
import HSEBlock from '../sections/HSEBlock';
import Testimonials from '../sections/Testimonials';
import CTAFinal from '../sections/CTAFinal';
import { media } from '../data/media';

export default function APropos() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Une équipe d’ingénierie ancrée en Afrique de l’Ouest."
        lead="KORIS ENERGY (fictif) accompagne les acteurs de l’industrie pétrolière et gazière offshore et subsea, avec une culture technique exigeante et une discipline HSE au cœur de l’exécution."
        image={media.pageHeroes.apropos}
      />
      <About hideHeader />
      <Timeline />
      <HSEBlock />
      <Testimonials hideHeader />
      <CTAFinal />
    </>
  );
}
