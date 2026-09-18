import { media } from './media';

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: 'pipeline' | 'subsea' | 'offshore' | 'irm';
  categoryLabel: string;
  field: string;
  waterDepth: string;
  scope: string;
  year: string;
  image: string;
  summary: string;
  presentation: string;
  context: string;
  challenge: string;
  approach: string;
  gallery: string[];
  specs: Array<{ label: string; value: string }>;
  featured?: boolean;
};

const projectSpecs = (extras: Array<{ label: string; value: string }>) => extras;

export const projects: Project[] = [
  {
    id: 'p1',
    slug: 'deepwater-flowline',
    title: 'Installation de flowline en eaux profondes',
    category: 'pipeline',
    categoryLabel: 'Pipeline',
    field: 'Sassandra-Sud (référence fictive)',
    waterDepth: '850 m',
    scope: 'Installation et tie-in d’une flowline 24"',
    year: '2025',
    image: media.projects['deepwater-flowline'],
    summary:
      'Pose d’une flowline 24" sur ~12 km, avec deux raccordements subsea dans une zone à courants forts.',
    presentation:
      'Ce projet fictif porte sur la pose d’une flowline rigide 24" reliant un manifold subsea à une plateforme fixe en eaux profondes. La mission a mobilisé un pipe-lay vessel dédié et des équipes ROV en support permanent, sur une fenêtre météo courte.',
    context:
      'Le développement fictif « Sassandra-Sud » (référence de démonstration) se situe dans une zone à forts courants, avec un fond marin varié et des équipements subsea préexistants à contourner. La complexité résidait dans l’enchaînement rigoureux des opérations pour tenir la fenêtre météo.',
    challenge:
      'Deux défis principaux : garantir la stabilité de la ligne pendant la pose malgré la houle et les courants, et exécuter deux tie-in subsea de précision sur des interfaces déjà installées. Chaque opération de raccordement était limitée à une fenêtre de moins de 6 heures.',
    approach:
      'Nous avons combiné un plan d’installation en cascade avec des ROV work-class en surveillance permanente et un système de reporting en temps réel entre le vessel et la base opérationnelle. Les tie-in ont été préparés en amont via une simulation full-scale à quai.',
    gallery: media.projectGalleries['deepwater-flowline'],
    specs: projectSpecs([
      { label: 'Bloc', value: 'Bloc CI-DEMO-1 (fictif)' },
      { label: 'Client', value: 'E&P Operator confidentiel (fictif)' },
      { label: 'Durée', value: '11 semaines' },
      { label: 'Vessel', value: 'Pipe-lay vessel S-lay' },
      { label: 'Équipements', value: 'Flowline 24" · ROV work-class · Stinger' },
      { label: 'Livrables', value: 'Ligne installée · As-built · Documentation d’intégrité' },
      { label: 'Référentiels', value: 'API 1104 · DNV-OS-F101' },
    ]),
    featured: true,
  },
  {
    id: 'p2',
    slug: 'fpso-inspection',
    title: 'Campagne d’inspection subsea sur FPSO',
    category: 'subsea',
    categoryLabel: 'Subsea',
    field: 'FPSO Poseidon (référence fictive)',
    waterDepth: '1 240 m',
    scope: 'Inspection ROV visuelle et CP — ancrages, risers',
    year: '2025',
    image: media.projects['fpso-inspection'],
    summary:
      'Campagne subsea complète sur un FPSO fictif : inspection ROV visuelle, cathodic protection, relevés d’anomalies.',
    presentation:
      'Cette mission fictive porte sur une campagne d’inspection subsea d’un FPSO en production. Objectif : évaluer l’état des ancrages, des risers et des équipements sous-marins associés, en vue de préparer le plan IRM des trois années suivantes.',
    context:
      'Le FPSO Poseidon (référence fictive) est ancré par un système multi-lignes en 1 240 m d’eau. Après plusieurs années d’exploitation, une inspection approfondie était nécessaire pour cartographier l’état des ouvrages et prioriser les actions.',
    challenge:
      'Combiner en une seule campagne l’inspection visuelle, les mesures de CP et le relevé sonar, sans interrompre la production. Trois systèmes d’acquisition différents devaient être synchronisés et corrélés pour produire un rapport unique.',
    approach:
      'Deux ROV work-class opérant en parallèle depuis un DSV dédié, avec un poste de reporting unifié à bord. Nous avons produit une base documentaire par équipement, priorisée par criticité, remise au client dès la fin de mission.',
    gallery: media.projectGalleries['fpso-inspection'],
    specs: projectSpecs([
      { label: 'Bloc', value: 'Bloc CI-DEMO-2 (fictif)' },
      { label: 'Client', value: 'FPSO Operator confidentiel (fictif)' },
      { label: 'Durée', value: '5 semaines' },
      { label: 'Vessel', value: 'Diving Support Vessel (DSV)' },
      { label: 'Équipements', value: '2× ROV work-class · CP probes · Sonar' },
      { label: 'Livrables', value: 'Rapport d’inspection · Base d’intégrité · Plan IRM' },
      { label: 'Référentiels', value: 'IMCA R 006 · DNV-RP-G101' },
    ]),
  },
  {
    id: 'p3',
    slug: 'riser-irm',
    title: 'Programme IRM sur risers',
    category: 'irm',
    categoryLabel: 'IRM',
    field: 'Champ Marlin-2 (référence fictive)',
    waterDepth: '620 m',
    scope: 'Inspection annuelle et réparation des risers',
    year: '2024',
    image: media.projects['riser-irm'],
    summary:
      'Programme IRM annuel sur risers rigides et flexibles : inspection, mesure d’anomalies, réparations ciblées.',
    presentation:
      'Ce projet fictif est un contrat cadre IRM d’une durée d’un an couvrant l’ensemble des risers du champ Marlin-2. Le programme combine inspections planifiées, campagnes correctives ciblées et interventions à la demande.',
    context:
      'Après une dizaine d’années d’exploitation, la campagne visait à renforcer la disponibilité des risers face à la corrosion et à la fatigue. Le client (fictif) attendait un plan d’action priorisé et une exécution rapide des réparations critiques.',
    challenge:
      'Concilier la fréquence élevée d’inspections, la mobilisation rapide sur anomalie et l’absence d’impact sur la production. Chaque intervention devait être documentée pour alimenter la base d’intégrité.',
    approach:
      'Une équipe dédiée basée à San-Pédro (fictif), un ROV en stand-by permanent, et un tableau de bord d’intégrité mis à jour à chaque campagne. Les réparations ciblées ont été planifiées en fenêtres météo.',
    gallery: media.projectGalleries['riser-irm'],
    specs: projectSpecs([
      { label: 'Bloc', value: 'Bloc CI-DEMO-3 (fictif)' },
      { label: 'Client', value: 'Independent Operator (fictif)' },
      { label: 'Durée', value: '12 mois' },
      { label: 'Vessel', value: 'IMR / Stand-by vessel' },
      { label: 'Équipements', value: 'ROV inspection · NDT · CP survey' },
      { label: 'Livrables', value: 'Rapports IRM trimestriels · Base d’intégrité' },
      { label: 'Référentiels', value: 'ISO 55001 · DNV-RP-G101' },
    ]),
  },
  {
    id: 'p4',
    slug: 'umbilical-repair',
    title: 'Intervention de réparation d’umbilical',
    category: 'subsea',
    categoryLabel: 'Subsea',
    field: 'Bloc CI-99 (référence fictive)',
    waterDepth: '740 m',
    scope: 'Section et remplacement de connecteur d’umbilical',
    year: '2024',
    image: media.projects['umbilical-repair'],
    summary:
      'Intervention subsea rapide : diagnostic, section propre d’un umbilical et remplacement d’un connecteur.',
    presentation:
      'Ce projet fictif est une intervention corrective sur un umbilical de contrôle après détection d’une anomalie électrique. La mission a été déclenchée sur un préavis court et a nécessité une mobilisation rapide des moyens marins.',
    context:
      'L’umbilical relie un manifold subsea à la plateforme et transporte les signaux de contrôle et les fluides d’injection. Une dégradation du connecteur avait provoqué une chute de performance sur plusieurs puits.',
    challenge:
      'Réaliser une section propre à 740 m de profondeur, remonter la section endommagée, préparer un connecteur de rechange et le raccorder avec un torque contrôlé. Le tout dans une fenêtre météo réduite.',
    approach:
      'Nous avons mobilisé un IMR vessel avec ROV work-class et un connecteur pré-préparé à quai. La procédure a été simulée en surface avant descente, puis exécutée en deux plongées ROV successives.',
    gallery: media.projectGalleries['umbilical-repair'],
    specs: projectSpecs([
      { label: 'Bloc', value: 'Bloc CI-99 (fictif)' },
      { label: 'Client', value: 'E&P Operator confidentiel (fictif)' },
      { label: 'Durée', value: '3 semaines' },
      { label: 'Vessel', value: 'IMR vessel' },
      { label: 'Équipements', value: 'ROV work-class · Connecteur de rechange · Torque tool' },
      { label: 'Livrables', value: 'Rapport d’intervention · Umbilical rétabli' },
      { label: 'Référentiels', value: 'IMCA R 006 · IMCA M 179' },
    ]),
  },
  {
    id: 'p5',
    slug: 'platform-hookup',
    title: 'Hook-up et commissioning de plateforme',
    category: 'offshore',
    categoryLabel: 'Offshore',
    field: 'Plateforme Ivorien-Sud (référence fictive)',
    waterDepth: '95 m',
    scope: 'Hook-up des modules, complétion mécanique',
    year: '2024',
    image: media.projects['platform-hookup'],
    summary:
      'Hook-up et commissioning d’une plateforme fixe fictive : raccordements process, utilities et instrumentation.',
    presentation:
      'Ce projet fictif porte sur le hook-up et la mise en service d’une plateforme fixe. Les équipes ont raccordé les modules process, utilities et instrumentation puis conduit la complétion mécanique et les tests avant démarrage.',
    context:
      'Après l’installation des modules par un HLV, la plateforme devait être raccordée et testée avant démarrage. Chaque système (process, utilities, instrumentation) devait être livré selon les procédures du client.',
    challenge:
      'Coordonner plusieurs corps de métier sur un espace restreint, tenir un planning contraint par la fenêtre de démarrage et documenter chaque système à un niveau d’exigence élevé.',
    approach:
      'Un chef de projet unique côté KORIS ENERGY et un planning « one-team » ont permis de tenir les échéances. Les tests ont été priorisés par système et validés progressivement avant la remise finale.',
    gallery: media.projectGalleries['platform-hookup'],
    specs: projectSpecs([
      { label: 'Bloc', value: 'Bloc CI-DEMO-5 (fictif)' },
      { label: 'Client', value: 'Independent Operator (fictif)' },
      { label: 'Durée', value: '8 semaines' },
      { label: 'Vessel', value: 'Accommodation vessel' },
      { label: 'Équipements', value: 'Outillage complétion mécanique · NDT · Instrumentation' },
      { label: 'Livrables', value: 'Systèmes hooké et commissionés · MC certificate' },
      { label: 'Référentiels', value: 'ISO 19901 · ABS' },
    ]),
  },
  {
    id: 'p6',
    slug: 'manifold-retrieval',
    title: 'Récupération et repose de manifold',
    category: 'offshore',
    categoryLabel: 'Offshore',
    field: 'Champ Delta-1 (référence fictive)',
    waterDepth: '980 m',
    scope: 'Récupération et réinstallation d’un manifold subsea',
    year: '2023',
    image: media.projects['manifold-retrieval'],
    summary:
      'Récupération d’un manifold subsea, révision à quai, puis réinstallation dans une zone de champ voisine.',
    presentation:
      'Ce projet fictif est une opération de récupération d’un manifold subsea existant en vue d’une révision et d’un redéploiement sur une zone voisine du même champ. Une mission complexe alliant levage, révision et repose.',
    context:
      'Le manifold, en service depuis plusieurs années, devait être révisé et repositionné pour desservir une nouvelle grappe de puits. L’opération devait être conduite sans perte de production sur le reste du champ.',
    challenge:
      'Le levage à 980 m nécessitait un plan rigoureux et un HLV équipé. La révision à quai devait tenir un délai serré, et la repose imposait une précision de positionnement millimétrique.',
    approach:
      'Nous avons mobilisé un HLV avec deep-water rigging, planifié la révision à quai en parallèle et utilisé un système de guidance ROV pour la repose. Chaque étape a été validée par un point de contrôle client.',
    gallery: media.projectGalleries['manifold-retrieval'],
    specs: projectSpecs([
      { label: 'Bloc', value: 'Bloc CI-DEMO-6 (fictif)' },
      { label: 'Client', value: 'E&P Operator confidentiel (fictif)' },
      { label: 'Durée', value: '14 semaines' },
      { label: 'Vessel', value: 'Heavy Lift Vessel (HLV)' },
      { label: 'Équipements', value: 'Deep-water rigging · ROV work-class · Guidance system' },
      { label: 'Livrables', value: 'Manifold révisé et repositionné' },
      { label: 'Référentiels', value: 'IMCA M 179 · DNV-OS-F101' },
    ]),
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

export const featuredProjects = projects.filter((p) => p.featured).concat(
  projects.filter((p) => !p.featured).slice(0, 2)
);
