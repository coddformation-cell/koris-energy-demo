export type Capability = {
  id: string;
  index: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  standardsHint: string;
};

export const capabilities: Capability[] = [
  {
    id: 'pipeline',
    index: '01',
    title: 'Pipeline Engineering',
    description:
      'Conception, installation et raccordement de pipelines et flowlines pour les développements offshore.',
    bullets: ['Detailed engineering', 'Installation & tie-in', 'Pre-commissioning'],
    standardsHint: 'API 1104 · DNV-OS-F101',
    image:
      'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1200&q=80&auto=format&fit=crop',
  },
  {
    id: 'subsea',
    index: '02',
    title: 'Subsea Services',
    description:
      'Opérations sous-marines : inspection ROV, intervention légère, pose et maintenance d’équipements subsea.',
    bullets: ['ROV inspection & survey', 'Light intervention', 'Umbilical & flowline works'],
    standardsHint: 'IMCA R 006 · IMCA M 179',
    image:
      'https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=1200&q=80&auto=format&fit=crop',
  },
  {
    id: 'offshore',
    index: '03',
    title: 'Offshore Construction',
    description:
      'Installation, raccordement et mise en service d’infrastructures offshore, en support des opérateurs et EPC.',
    bullets: ['Structures & modules', 'Hook-up & commissioning', 'Marine spread coordination'],
    standardsHint: 'ISO 19901 · ABS · BV',
    image:
      'https://images.unsplash.com/photo-1585036156171-384164a8c675?w=1200&q=80&auto=format&fit=crop',
  },
  {
    id: 'irm',
    index: '04',
    title: 'Inspection & Maintenance',
    description:
      'Programmes IRM (Inspection, Repair, Maintenance) pour prolonger la durée de vie des actifs offshore.',
    bullets: ['Structural inspection', 'Repair campaigns', 'Integrity management'],
    standardsHint: 'ISO 55001 · DNV-RP-G101',
    image:
      'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1200&q=80&auto=format&fit=crop',
  },
];
