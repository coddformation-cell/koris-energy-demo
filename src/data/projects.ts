export type Project = {
  id: string;
  title: string;
  category: 'pipeline' | 'subsea' | 'offshore' | 'irm';
  categoryLabel: string;
  field: string; // fictional
  waterDepth: string;
  scope: string;
  year: string;
  image: string;
};

// Tous les noms de projets, champs et chiffres sont des références fictives.
export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Installation de flowline en eaux profondes',
    category: 'pipeline',
    categoryLabel: 'Pipeline',
    field: 'Sassandra-Sud (référence fictive)',
    waterDepth: '850 m',
    scope: 'Installation et tie-in d’une flowline 24"',
    year: '2025',
    image:
      'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1400&q=80&auto=format&fit=crop',
  },
  {
    id: 'p2',
    title: 'Campagne d’inspection subsea sur FPSO',
    category: 'subsea',
    categoryLabel: 'Subsea',
    field: 'FPSO Poseidon (référence fictive)',
    waterDepth: '1 240 m',
    scope: 'Inspection ROV visuelle et CP — ancrages, risers',
    year: '2025',
    image:
      'https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=1400&q=80&auto=format&fit=crop',
  },
  {
    id: 'p3',
    title: 'Programme IRM sur risers',
    category: 'irm',
    categoryLabel: 'IRM',
    field: 'Champ Marlin-2 (référence fictive)',
    waterDepth: '620 m',
    scope: 'Inspection annuelle et réparation des risers',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1585036156171-384164a8c675?w=1400&q=80&auto=format&fit=crop',
  },
  {
    id: 'p4',
    title: 'Intervention de réparation d’umbilical',
    category: 'subsea',
    categoryLabel: 'Subsea',
    field: 'Bloc CI-99 (référence fictive)',
    waterDepth: '740 m',
    scope: 'Section et remplacement de connecteur d’umbilical',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=1400&q=80&auto=format&fit=crop',
  },
  {
    id: 'p5',
    title: 'Hook-up et commissioning de plateforme',
    category: 'offshore',
    categoryLabel: 'Offshore',
    field: 'Plateforme Ivorien-Sud (référence fictive)',
    waterDepth: '95 m',
    scope: 'Hook-up des modules, complétion mécanique',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1400&q=80&auto=format&fit=crop',
  },
  {
    id: 'p6',
    title: 'Récupération et repose de manifold',
    category: 'offshore',
    categoryLabel: 'Offshore',
    field: 'Champ Delta-1 (référence fictive)',
    waterDepth: '980 m',
    scope: 'Récupération et réinstallation d’un manifold subsea',
    year: '2023',
    image:
      'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1400&q=80&auto=format&fit=crop',
  },
];

export const projectFilters = [
  { id: 'all', label: 'Tous' },
  { id: 'pipeline', label: 'Pipeline' },
  { id: 'subsea', label: 'Subsea' },
  { id: 'offshore', label: 'Offshore' },
  { id: 'irm', label: 'IRM' },
] as const;

export type ProjectFilter = (typeof projectFilters)[number]['id'];
