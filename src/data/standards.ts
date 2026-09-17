export type StandardRef = {
  code: string;
  scope: string;
};

// Formulation volontairement non-attributive : ce sont des cadres de
// référence auxquels des opérations peuvent être alignées, pas des
// certifications détenues par KORIS ENERGY.
export const standardsIntro = {
  eyebrow: 'Référentiels applicables',
  title: 'Des opérations alignées sur les référentiels internationaux du secteur.',
  lead:
    'Nos méthodes et opérations peuvent être conduites en alignement avec les référentiels internationaux applicables au secteur pétrolier et gazier, offshore et subsea.',
  note:
    'Référence illustrative — ce site est une maquette fictive. Aucune accréditation ni certification n’est revendiquée.',
};

export const standards: StandardRef[] = [
  { code: 'API 1104', scope: 'Soudage des pipelines' },
  { code: 'DNV-OS-F101', scope: 'Systèmes de pipelines sous-marins' },
  { code: 'ISO 9001', scope: 'Management de la qualité' },
  { code: 'ISO 14001', scope: 'Management environnemental' },
  { code: 'ISO 45001', scope: 'Santé et sécurité au travail' },
  { code: 'ISO 55001', scope: 'Gestion des actifs' },
  { code: 'IMCA R 006', scope: 'Opérations ROV' },
  { code: 'IMCA M 179', scope: 'Assurance marine' },
];
