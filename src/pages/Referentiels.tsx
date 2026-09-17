import PageHeader from '../components/PageHeader';
import Standards from '../sections/Standards';
import CTAFinal from '../sections/CTAFinal';

export default function Referentiels() {
  return (
    <>
      <PageHeader
        eyebrow="Référentiels applicables"
        title="Un cadre de référence international."
        lead="Nos opérations et méthodes peuvent être conduites en alignement avec les référentiels applicables au secteur pétrolier et gazier, offshore et subsea. Aucune accréditation ni certification n’est revendiquée dans cette maquette."
      />
      <Standards />
      <CTAFinal />
    </>
  );
}
