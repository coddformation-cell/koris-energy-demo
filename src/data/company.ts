// All values below are illustrative and fictional.
// They are visual placeholders for a mockup, not real performance data.

export type Testimonial = {
  id: string;
  role: string;
  organisation: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    role: 'Project Director',
    organisation: 'E&P operator (fictional)',
    quote:
      'A clear engineering approach, disciplined execution and reliable HSE culture. Delivery matched the pre-agreed plan.',
  },
  {
    id: 't2',
    role: 'Operations Manager',
    organisation: 'Independent operator (fictional)',
    quote:
      'Their subsea team supported our inspection campaign end-to-end. Concise reporting and quick anomaly triage.',
  },
  {
    id: 't3',
    role: 'HSE Lead',
    organisation: 'FPSO operator (fictional)',
    quote:
      'Strong safety leadership on deck. Toolbox talks, procedures and reporting were treated as first-class deliverables.',
  },
];

// Illustrative key figures — clearly labelled as such in the UI.
export const keyFigures = [
  { value: '+120', label: 'offshore operations', hint: 'Illustrative' },
  { value: '+8', label: 'years experience', hint: 'Illustrative' },
  { value: '+40 km', label: 'pipeline installed', hint: 'Illustrative' },
  { value: '15+', label: 'client engagements', hint: 'Illustrative' },
];

export const processSteps = [
  {
    step: '01',
    title: 'Engagement',
    description:
      'Cadrage initial du besoin : périmètre, contraintes, HSE, planning et interfaces avec les autres contractants.',
  },
  {
    step: '02',
    title: 'Engineering study',
    description:
      'Étude technique détaillée, plans d’installation, méthodologie et sélection des équipements marins et subsea.',
  },
  {
    step: '03',
    title: 'Proposal',
    description:
      'Proposition commerciale et technique, planning contractuel, matrice de responsabilités et cadre HSE.',
  },
  {
    step: '04',
    title: 'Execution & handover',
    description:
      'Mobilisation, exécution offshore, reporting quotidien, pré-commissioning et transfert au client.',
  },
];

export const values = [
  {
    title: 'Safety first',
    text: 'La sécurité des équipes et des opérations est le premier critère de conception et d’exécution.',
  },
  {
    title: 'Technical excellence',
    text: 'Une culture d’ingénierie précise, avec des méthodes cadrées et une revue rigoureuse des livrables.',
  },
  {
    title: 'Local content',
    text: 'Une présence en Côte d’Ivoire et un ancrage régional durable, en support du contenu local.',
  },
  {
    title: 'Reliability',
    text: 'Un engagement fort sur les délais, la qualité et la transparence tout au long des projets.',
  },
];

export const hseStatement = {
  eyebrow: 'HSE & Quality',
  title: 'Safety-led execution.',
  description:
    'Notre approche place la santé, la sécurité, l’environnement et la qualité au cœur de chaque opération. Les procédures, les plans HSE, les toolbox talks et les revues d’incident sont traités comme des livrables opérationnels à part entière.',
  pillars: ['Safety', 'Quality', 'Environment', 'Compliance'],
};
