import PageHero from '../components/PageHero';
import CapabilityAlternating from '../sections/CapabilityAlternating';
import Process from '../sections/Process';
import CTAFinal from '../sections/CTAFinal';
import { media } from '../data/media';

export default function Expertises() {
  return (
    <>
      <PageHero
        eyebrow="Expertises"
        title="Quatre expertises pour concevoir, installer et maintenir vos actifs offshore."
        lead="De l’ingénierie de détail à la maintenance IRM, KORIS ENERGY couvre l’ensemble du cycle des infrastructures pétrolières et gazières offshore et subsea."
        image={media.pageHeroes.expertises}
      />
      <CapabilityAlternating />
      <Process />
      <CTAFinal />
    </>
  );
}
