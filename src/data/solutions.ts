export type Solution = {
  id: string;
  scope: string;
  title: string;
  description: string;
  deliverables: string[];
  featured?: boolean;
};

export const solutions: Solution[] = [
  {
    id: 'survey',
    scope: 'Survey ROV',
    title: 'Campagne d’inspection subsea',
    description:
      'Campagne d’inspection sous-marine d’infrastructures existantes : pipelines, structures, ancrages et équipements subsea.',
    deliverables: [
      'Survey vidéo et sonar',
      'Relevé et journal des anomalies',
      'Rapport d’intégrité',
      'Coordination HSE',
    ],
  },
  {
    id: 'epci',
    scope: 'EPCI',
    title: 'Lot pipeline en EPCI',
    description:
      'Prise en charge complète d’un lot pipeline offshore : ingénierie, approvisionnement, construction et installation.',
    deliverables: [
      'Ingénierie de détail',
      'Approvisionnement et fabrication',
      'Installation offshore',
      'Pré-commissioning et remise',
    ],
    featured: true,
  },
  {
    id: 'irm',
    scope: 'IRM',
    title: 'Programme IRM offshore',
    description:
      'Programme récurrent d’inspection, de réparation et de maintenance pour prolonger la vie utile des installations offshore.',
    deliverables: [
      'Plan annuel d’inspection',
      'Campagnes de réparation ciblées',
      'Tableau de bord d’intégrité',
      'Intervention on-call',
    ],
  },
];
