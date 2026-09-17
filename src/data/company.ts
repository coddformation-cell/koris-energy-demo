// Toutes les valeurs ci-dessous sont illustratives et fictives.
// Elles servent uniquement de contenu placeholder pour la maquette.

export type Testimonial = {
  id: string;
  role: string;
  organisation: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    role: 'Directeur de projet',
    organisation: 'Opérateur E&P (fictif)',
    quote:
      'Une approche d’ingénierie claire, une exécution disciplinée et une vraie culture HSE. La livraison a suivi le plan convenu.',
  },
  {
    id: 't2',
    role: 'Responsable des opérations',
    organisation: 'Opérateur indépendant (fictif)',
    quote:
      'Leur équipe subsea a piloté notre campagne d’inspection de bout en bout. Reporting concis et priorisation rapide des anomalies.',
  },
  {
    id: 't3',
    role: 'Responsable HSE',
    organisation: 'Opérateur FPSO (fictif)',
    quote:
      'Leadership sécurité fort à bord. Toolbox talks, procédures et reporting ont été traités comme des livrables à part entière.',
  },
];

// Chiffres clés illustratifs — clairement signalés comme tels dans l’UI.
export const keyFigures = [
  { value: '+120', label: 'opérations offshore', hint: 'Chiffre illustratif' },
  { value: '+8', label: 'années d’expérience', hint: 'Chiffre illustratif' },
  { value: '+40 km', label: 'de pipeline installé', hint: 'Chiffre illustratif' },
  { value: '15+', label: 'clients accompagnés', hint: 'Chiffre illustratif' },
];

export const processSteps = [
  {
    step: '01',
    title: 'Cadrage',
    description:
      'Premier échange pour cerner le besoin : périmètre, contraintes, HSE, planning et interfaces avec les autres contractants.',
  },
  {
    step: '02',
    title: 'Étude technique',
    description:
      'Étude détaillée, plans d’installation, méthodologie et sélection des équipements marins et subsea.',
  },
  {
    step: '03',
    title: 'Proposition',
    description:
      'Proposition commerciale et technique, planning contractuel, matrice de responsabilités et cadre HSE.',
  },
  {
    step: '04',
    title: 'Exécution et livraison',
    description:
      'Mobilisation, exécution offshore, reporting quotidien, pré-commissioning et transfert au client.',
  },
];

export const values = [
  {
    title: 'La sécurité d’abord',
    text: 'La sécurité des équipes et des opérations est le premier critère de conception et d’exécution.',
  },
  {
    title: 'Excellence technique',
    text: 'Une culture d’ingénierie précise, avec des méthodes cadrées et une revue rigoureuse des livrables.',
  },
  {
    title: 'Contenu local',
    text: 'Une présence en Côte d’Ivoire et un ancrage régional durable, en support du contenu local.',
  },
  {
    title: 'Fiabilité',
    text: 'Un engagement fort sur les délais, la qualité et la transparence tout au long des projets.',
  },
];

export const hseStatement = {
  eyebrow: 'HSE et qualité',
  title: 'La sécurité au cœur de l’exécution.',
  description:
    'Notre approche place la santé, la sécurité, l’environnement et la qualité au cœur de chaque opération. Procédures, plans HSE, toolbox talks et revues d’incident sont traités comme des livrables opérationnels à part entière.',
  pillars: ['Sécurité', 'Qualité', 'Environnement', 'Conformité'],
};
