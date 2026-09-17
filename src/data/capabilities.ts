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
    bullets: ['Ingénierie de détail', 'Installation et tie-in', 'Pré-commissioning'],
    standardsHint: 'API 1104 · DNV-OS-F101',
    image:
      'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1200&q=80&auto=format&fit=crop',
  },
  {
    id: 'subsea',
    index: '02',
    title: 'Subsea Services',
    description:
      'Opérations sous-marines : inspection ROV, intervention légère, pose et maintenance des équipements subsea.',
    bullets: ['Inspection et survey ROV', 'Intervention légère', 'Umbilicals et flowlines'],
    standardsHint: 'IMCA R 006 · IMCA M 179',
    image:
      'https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=1200&q=80&auto=format&fit=crop',
  },
  {
    id: 'offshore',
    index: '03',
    title: 'Offshore Construction',
    description:
      'Installation, raccordement et mise en service d’infrastructures offshore, en support des opérateurs et EPC contractors.',
    bullets: ['Structures et modules', 'Hook-up et commissioning', 'Coordination des moyens marins'],
    standardsHint: 'ISO 19901 · ABS · BV',
    image:
      'https://images.unsplash.com/photo-1585036156171-384164a8c675?w=1200&q=80&auto=format&fit=crop',
  },
  {
    id: 'irm',
    index: '04',
    title: 'Inspection et maintenance (IRM)',
    description:
      'Programmes d’inspection, réparation et maintenance pour prolonger la durée de vie des actifs offshore.',
    bullets: ['Inspection structurelle', 'Campagnes de réparation', 'Gestion d’intégrité'],
    standardsHint: 'ISO 55001 · DNV-RP-G101',
    image:
      'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1200&q=80&auto=format&fit=crop',
  },
];
