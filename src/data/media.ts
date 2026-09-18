// Centralised image bank for KORIS ENERGY (mockup).
// All URLs point to Unsplash images used as illustrative placeholders.
// To swap any image later, replace only the URL below.

const U = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const media = {
  hero: {
    url: U('1516937941344-00b4e0337589', 2400),
    alt: '',
  },
  manifesto: {
    url: U('1497436072909-60f360e1d4b1', 1800),
    alt: '',
  },
  visualBanner: {
    url: U('1611273426858-450d8e3c9fce', 2400),
    alt: '',
  },
  hse: {
    url: U('1523217582562-09d0def993a6', 1600),
    alt: '',
  },
  about: {
    url: U('1523217582562-09d0def993a6', 2000),
    alt: '',
  },
  capabilities: {
    pipeline: U('1541888946425-d81bb19240f5', 1400),
    subsea: U('1620121692029-d088224ddc74', 1400),
    offshore: U('1518623380242-d992d3c57b37', 1400),
    irm: U('1497436072909-60f360e1d4b1', 1400),
  },
  solutions: {
    survey: U('1620121692029-d088224ddc74', 1400),
    epci: U('1541888946425-d81bb19240f5', 1400),
    irm: U('1585036156171-384164a8c675', 1400),
  },
  projects: {
    'deepwater-flowline': U('1497436072909-60f360e1d4b1', 1800),
    'fpso-inspection': U('1620121692029-d088224ddc74', 1800),
    'riser-irm': U('1585036156171-384164a8c675', 1800),
    'umbilical-repair': U('1524661135-423995f22d0b', 1800),
    'platform-hookup': U('1518623380242-d992d3c57b37', 1800),
    'manifold-retrieval': U('1611273426858-450d8e3c9fce', 1800),
  },
  projectGalleries: {
    'deepwater-flowline': [
      U('1497436072909-60f360e1d4b1', 1200),
      U('1611273426858-450d8e3c9fce', 1200),
      U('1585036156171-384164a8c675', 1200),
      U('1541888946425-d81bb19240f5', 1200),
    ],
    'fpso-inspection': [
      U('1620121692029-d088224ddc74', 1200),
      U('1518623380242-d992d3c57b37', 1200),
      U('1523217582562-09d0def993a6', 1200),
      U('1524661135-423995f22d0b', 1200),
    ],
    'riser-irm': [
      U('1585036156171-384164a8c675', 1200),
      U('1497436072909-60f360e1d4b1', 1200),
      U('1611273426858-450d8e3c9fce', 1200),
      U('1620121692029-d088224ddc74', 1200),
    ],
    'umbilical-repair': [
      U('1524661135-423995f22d0b', 1200),
      U('1585036156171-384164a8c675', 1200),
      U('1620121692029-d088224ddc74', 1200),
      U('1541888946425-d81bb19240f5', 1200),
    ],
    'platform-hookup': [
      U('1518623380242-d992d3c57b37', 1200),
      U('1541888946425-d81bb19240f5', 1200),
      U('1516937941344-00b4e0337589', 1200),
      U('1611273426858-450d8e3c9fce', 1200),
    ],
    'manifold-retrieval': [
      U('1611273426858-450d8e3c9fce', 1200),
      U('1524661135-423995f22d0b', 1200),
      U('1620121692029-d088224ddc74', 1200),
      U('1585036156171-384164a8c675', 1200),
    ],
  },
  pageHeroes: {
    expertises: U('1541888946425-d81bb19240f5', 2200),
    solutions: U('1611273426858-450d8e3c9fce', 2200),
    projets: U('1518623380242-d992d3c57b37', 2200),
    apropos: U('1523217582562-09d0def993a6', 2200),
  },
};

export type MediaKey = keyof typeof media;
