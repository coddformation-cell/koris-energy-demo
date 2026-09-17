import PageHeader from '../components/PageHeader';
import Projects from '../sections/Projects';
import CTAFinal from '../sections/CTAFinal';

export default function Projets() {
  return (
    <>
      <PageHeader
        eyebrow="Projets"
        title="Une sélection illustrative de nos projets."
        lead="Références de projets fictives à des fins de démonstration. Aucune donnée client réelle ni localisation exacte n’est divulguée."
      />
      <Projects />
      <CTAFinal />
    </>
  );
}
