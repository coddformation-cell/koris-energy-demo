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

// Timeline entreprise — 100% fictive. Chaque étape porte la mention (fictif).
export const timelineSteps = [
  {
    year: '2018',
    title: 'Création de KORIS ENERGY',
    text: 'Constitution de l’équipe fondatrice, positionnement offshore et subsea sur le Golfe de Guinée. (fictif)',
  },
  {
    year: '2020',
    title: 'Première campagne subsea',
    text: 'Premier programme d’inspection ROV sur un champ pilote. Mise en place des procédures IRM. (fictif)',
  },
  {
    year: '2022',
    title: 'Base opérationnelle San-Pédro',
    text: 'Ouverture d’une base opérationnelle dédiée aux mobilisations rapides. (fictif)',
  },
  {
    year: '2024',
    title: 'Élargissement des expertises',
    text: 'Extension des capacités à l’offshore construction et à l’EPCI pipeline. (fictif)',
  },
  {
    year: '2026',
    title: 'Aujourd’hui',
    text: 'Une équipe pluridisciplinaire au service des opérateurs et EPC contractors de la région. (fictif)',
  },
];

export const manifestoBlock = {
  eyebrow: 'Manifesto',
  title: 'Des infrastructures critiques. Des environnements exigeants.',
  paragraphs: [
    'De la surface aux grandes profondeurs, KORIS ENERGY conçoit, installe et maintient des infrastructures offshore, subsea et pipeline pour le compte d’opérateurs pétroliers et gaziers du Golfe de Guinée.',
    'Notre approche combine rigueur d’ingénierie, discipline HSE et proximité opérationnelle. Chaque intervention est cadrée, documentée et menée à un niveau d’exigence aligné sur les référentiels internationaux du secteur.',
  ],
};

export const visualBannerContent = {
  eyebrow: '',
  title: 'Du fond marin aux infrastructures de surface.',
  cta: 'Explorer nos expertises',
  ctaTo: '/expertises',
};

export const homeProjectsIntro = {
  eyebrow: 'Projets',
  title: 'Une sélection de nos projets illustratifs.',
  lead:
    'Références fictives à titre de démonstration. Chaque projet dispose d’une page dédiée.',
};

export const homeExpertisesIntro = {
  eyebrow: 'Expertises',
  title: 'Quatre expertises. Une chaîne de valeur complète.',
  lead:
    'De l’ingénierie de pipeline à la maintenance IRM, nos équipes couvrent chaque étape des projets offshore et subsea.',
};

export const homeSolutionsIntro = {
  eyebrow: 'Solutions',
  title: 'Trois formules pour cadrer votre besoin.',
  lead:
    'De la campagne d’inspection ciblée à la prise en charge complète d’un lot EPCI, nos solutions sont pensées pour les opérateurs et EPC contractors.',
};

export const referentielsUsage = {
  eyebrow: 'Comment ils interviennent',
  title: 'Des référentiels intégrés à la préparation et à l’exécution.',
  steps: [
    {
      step: '01',
      title: 'Préparation',
      description:
        'Les référentiels applicables sont identifiés dès le cadrage HSE et technique, puis intégrés aux plans d’exécution et aux procédures.',
    },
    {
      step: '02',
      title: 'Exécution',
      description:
        'Les méthodes et les livrables sont conduits en alignement avec les référentiels sélectionnés, sous supervision d’un responsable qualité dédié.',
    },
    {
      step: '03',
      title: 'Retour d’expérience',
      description:
        'Les enseignements de chaque projet alimentent la base documentaire et affinent l’alignement sur les référentiels à long terme.',
    },
  ],
};
