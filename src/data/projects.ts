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

// All project names, fields and figures are fictional references.
export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Deepwater flowline installation',
    category: 'pipeline',
    categoryLabel: 'Pipeline',
    field: 'Sassandra-South (fictional reference)',
    waterDepth: '850 m',
    scope: '24" flowline installation & tie-in',
    year: '2025',
    image:
      'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1400&q=80&auto=format&fit=crop',
  },
  {
    id: 'p2',
    title: 'FPSO subsea inspection campaign',
    category: 'subsea',
    categoryLabel: 'Subsea',
    field: 'Poseidon FPSO (fictional reference)',
    waterDepth: '1 240 m',
    scope: 'ROV visual & CP survey — mooring, risers',
    year: '2025',
    image:
      'https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=1400&q=80&auto=format&fit=crop',
  },
  {
    id: 'p3',
    title: 'Riser IRM program',
    category: 'irm',
    categoryLabel: 'IRM',
    field: 'Marlin-2 field (fictional reference)',
    waterDepth: '620 m',
    scope: 'Annual riser inspection & repair',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1585036156171-384164a8c675?w=1400&q=80&auto=format&fit=crop',
  },
  {
    id: 'p4',
    title: 'Umbilical repair intervention',
    category: 'subsea',
    categoryLabel: 'Subsea',
    field: 'Block CI-99 (fictional reference)',
    waterDepth: '740 m',
    scope: 'Umbilical severance & connector replacement',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=1400&q=80&auto=format&fit=crop',
  },
  {
    id: 'p5',
    title: 'Platform hook-up & commissioning',
    category: 'offshore',
    categoryLabel: 'Offshore',
    field: 'Ivorien-Sud platform (fictional reference)',
    waterDepth: '95 m',
    scope: 'Module hook-up, mechanical completion',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1400&q=80&auto=format&fit=crop',
  },
  {
    id: 'p6',
    title: 'Manifold retrieval & redeployment',
    category: 'offshore',
    categoryLabel: 'Offshore',
    field: 'Delta-1 field (fictional reference)',
    waterDepth: '980 m',
    scope: 'Subsea manifold recovery & reinstallation',
    year: '2023',
    image:
      'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1400&q=80&auto=format&fit=crop',
  },
];

export const projectFilters = [
  { id: 'all', label: 'All' },
  { id: 'pipeline', label: 'Pipeline' },
  { id: 'subsea', label: 'Subsea' },
  { id: 'offshore', label: 'Offshore' },
  { id: 'irm', label: 'IRM' },
] as const;

export type ProjectFilter = (typeof projectFilters)[number]['id'];
