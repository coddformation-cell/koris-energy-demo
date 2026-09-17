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
    scope: 'ROV Survey',
    title: 'Subsea Inspection Campaign',
    description:
      'Campagne d’inspection sous-marine d’infrastructures existantes : pipelines, structures, ancrages et équipements subsea.',
    deliverables: [
      'Video & sonar survey',
      'Anomaly logging & reporting',
      'Integrity findings package',
      'HSE coordination',
    ],
  },
  {
    id: 'epci',
    scope: 'EPCI',
    title: 'Pipeline EPCI Package',
    description:
      'Prise en charge complète d’un lot pipeline offshore : engineering, procurement, construction et installation.',
    deliverables: [
      'Detailed engineering',
      'Procurement & fabrication',
      'Offshore installation',
      'Pre-commissioning & handover',
    ],
    featured: true,
  },
  {
    id: 'irm',
    scope: 'IRM',
    title: 'Offshore IRM Program',
    description:
      'Programme récurrent d’inspection, réparation et maintenance pour prolonger la vie utile des installations offshore.',
    deliverables: [
      'Annual inspection plan',
      'Corrective repair campaigns',
      'Integrity dashboard',
      'On-call intervention',
    ],
  },
];
