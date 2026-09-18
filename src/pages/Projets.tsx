import PageHero from '../components/PageHero';
import Projects from '../sections/Projects';
import CTAFinal from '../sections/CTAFinal';
import { media } from '../data/media';

export default function Projets() {
  return (
    <>
      <PageHero
        eyebrow="Projets"
        title="Une sélection illustrative de nos projets."
        lead="Références de projets fictives à des fins de démonstration. Aucune donnée client réelle ni localisation exacte n’est divulguée."
        image={media.pageHeroes.projets}
      />
      <Projects hideHeader />
      <CTAFinal />
    </>
  );
}
