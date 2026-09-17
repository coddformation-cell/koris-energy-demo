import Hero from '../sections/Hero';
import Capabilities from '../sections/Capabilities';
import Solutions from '../sections/Solutions';
import KeyFigures from '../sections/KeyFigures';
import CTAFinal from '../sections/CTAFinal';

export default function Home() {
  return (
    <>
      <Hero />
      <Capabilities compact />
      <Solutions />
      <KeyFigures />
      <CTAFinal />
    </>
  );
}
