export type StandardRef = {
  code: string;
  scope: string;
};

// Wording is deliberately non-attributive: these are reference frameworks
// that operations can be aligned with, not certifications KORIS ENERGY holds.
export const standardsIntro = {
  eyebrow: 'Applicable standards',
  title: 'Operations aligned with recognised industry frameworks.',
  lead:
    'Nos opérations et méthodes peuvent être conduites en alignement avec les référentiels internationaux applicables au secteur pétrolier et gazier, offshore et subsea.',
  note:
    'Illustrative reference — this website is a fictional mockup. No accreditation or certification is claimed.',
};

export const standards: StandardRef[] = [
  { code: 'API 1104', scope: 'Welding of pipelines' },
  { code: 'DNV-OS-F101', scope: 'Submarine pipeline systems' },
  { code: 'ISO 9001', scope: 'Quality management' },
  { code: 'ISO 14001', scope: 'Environmental management' },
  { code: 'ISO 45001', scope: 'Occupational health & safety' },
  { code: 'ISO 55001', scope: 'Asset management' },
  { code: 'IMCA R 006', scope: 'ROV operations' },
  { code: 'IMCA M 179', scope: 'Marine assurance' },
];
