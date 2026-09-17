import PageHeader from '../components/PageHeader';
import SolutionsSection from '../sections/Solutions';
import CTAFinal from '../sections/CTAFinal';

export default function Solutions() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title="Des prestations B2B calibrées pour les acteurs de l’offshore."
        lead="Trois formules pour cadrer votre besoin : de la campagne d’inspection subsea à la prise en charge complète d’un lot pipeline en EPCI."
      />
      <SolutionsSection />
      <CTAFinal />
    </>
  );
}
