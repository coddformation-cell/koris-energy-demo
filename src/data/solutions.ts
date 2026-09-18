import { media } from './media';

export type Solution = {
  id: string;
  scope: string;
  title: string;
  description: string;
  deliverables: string[];
  featured?: boolean;
  image: string;
};

export const solutions: Solution[] = [
  {
    id: 'survey',
    scope: 'Survey ROV',
    title: 'Campagne d’inspection subsea',
    description:
      'Campagne d’inspection sous-marine d’infrastructures existantes : pipelines, structures, ancrages et équipements subsea. Idéale pour la préparation d’un plan IRM annuel.',
    deliverables: [
      'Survey vidéo et sonar',
      'Relevé et journal des anomalies',
      'Rapport d’intégrité',
      'Coordination HSE',
    ],
    image: media.solutions.survey,
  },
  {
    id: 'epci',
    scope: 'EPCI',
    title: 'Lot pipeline en EPCI',
    description:
      'Prise en charge complète d’un lot pipeline offshore : ingénierie, approvisionnement, construction et installation. Une interface unique pour votre projet de bout en bout.',
    deliverables: [
      'Ingénierie de détail',
      'Approvisionnement et fabrication',
      'Installation offshore',
      'Pré-commissioning et remise',
    ],
    featured: true,
    image: media.solutions.epci,
  },
  {
    id: 'irm',
    scope: 'IRM',
    title: 'Programme IRM offshore',
    description:
      'Programme récurrent d’inspection, de réparation et de maintenance pour prolonger la vie utile des installations offshore et sécuriser leur disponibilité.',
    deliverables: [
      'Plan annuel d’inspection',
      'Campagnes de réparation ciblées',
      'Tableau de bord d’intégrité',
      'Intervention on-call',
    ],
    image: media.solutions.irm,
  },
];

export const methodologySteps = [
  {
    step: '01',
    title: 'Cadrage HSE et technique',
    description:
      'Périmètre, plan HSE, matrice de risques, interfaces avec les autres contractants et pré-mobilisation.',
  },
  {
    step: '02',
    title: 'Étude et préparation',
    description:
      'Ingénierie de mission, sélection des équipements marins et subsea, calendrier détaillé et briefings.',
  },
  {
    step: '03',
    title: 'Mobilisation',
    description:
      'Équipes, spread marin et équipements en route vers la zone d’opération. Chef de projet dédié.',
  },
  {
    step: '04',
    title: 'Exécution offshore',
    description:
      'Opérations conduites en équipes 24/7, reporting quotidien, suivi HSE et gestion d’écart en temps réel.',
  },
  {
    step: '05',
    title: 'Reporting et handover',
    description:
      'Livrables finaux, retour d’expérience, base documentaire d’intégrité et transfert au client.',
  },
];
