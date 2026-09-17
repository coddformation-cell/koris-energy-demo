import PageHeader from '../components/PageHeader';
import Capabilities from '../sections/Capabilities';
import Process from '../sections/Process';
import CTAFinal from '../sections/CTAFinal';

export default function Expertises() {
  return (
    <>
      <PageHeader
        eyebrow="Expertises"
        title="Quatre expertises pour concevoir, installer et maintenir vos actifs offshore."
        lead="De l’ingénierie de détail à la maintenance IRM, KORIS ENERGY couvre l’ensemble du cycle des infrastructures pétrolières et gazières offshore et subsea."
      />
      <Capabilities />
      <Process />
      <CTAFinal />
    </>
  );
}
