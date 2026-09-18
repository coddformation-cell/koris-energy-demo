import PageHero from '../components/PageHero';
import SolutionsSection from '../sections/Solutions';
import Methodology from '../sections/Methodology';
import CTAFinal from '../sections/CTAFinal';
import { media } from '../data/media';

export default function Solutions() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Des prestations B2B calibrées pour les acteurs de l’offshore."
        lead="Trois formules pour cadrer votre besoin : de la campagne d’inspection subsea à la prise en charge complète d’un lot pipeline en EPCI."
        image={media.pageHeroes.solutions}
      />
      <SolutionsSection hideHeader />
      <Methodology />
      <CTAFinal />
    </>
  );
}
