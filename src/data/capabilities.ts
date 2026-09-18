import { media } from './media';

export type Capability = {
  id: string;
  index: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  standardsHint: string;
  domains: string[];
  equipment: string[];
  longDescription: string;
};

export const capabilities: Capability[] = [
  {
    id: 'pipeline',
    index: '01',
    title: 'Pipeline Engineering',
    description:
      'Conception, installation et raccordement de pipelines et flowlines pour les développements offshore.',
    longDescription:
      'Nos équipes prennent en charge le cycle complet des systèmes de pipelines offshore : études d’ingénierie de détail, sélection des matériaux, pose (S-lay et reel-lay), raccordement en tie-in et pré-commissioning. L’objectif : livrer des lignes fiables, alignées sur les référentiels internationaux du secteur.',
    bullets: ['Ingénierie de détail', 'Installation et tie-in', 'Pré-commissioning'],
    standardsHint: 'API 1104 · DNV-OS-F101',
    image: media.capabilities.pipeline,
    domains: [
      'Flowlines rigides et flexibles',
      'Umbilicals et lignes de service',
      'Risers et connexions à la plateforme',
      'Tie-in subsea et raccordement d’équipements',
    ],
    equipment: [
      'Pipe-lay vessels (S-lay, reel-lay)',
      'Stations de soudure automatisées',
      'Outillage de raccordement subsea',
      'Équipements de tests d’étanchéité',
    ],
  },
  {
    id: 'subsea',
    index: '02',
    title: 'Subsea Services',
    description:
      'Opérations sous-marines : inspection ROV, intervention légère, pose et maintenance des équipements subsea.',
    longDescription:
      'Nos opérations subsea sont conduites depuis des navires spécialisés équipés de ROV work-class. Nous prenons en charge les campagnes d’inspection, les interventions légères, la pose et la maintenance d’équipements sous-marins, du fond marin peu profond jusqu’aux grandes profondeurs.',
    bullets: ['Inspection et survey ROV', 'Intervention légère', 'Umbilicals et flowlines'],
    standardsHint: 'IMCA R 006 · IMCA M 179',
    image: media.capabilities.subsea,
    domains: [
      'Inspection visuelle et CP survey',
      'Intervention légère sur équipements subsea',
      'Umbilicals, flowlines et lignes de contrôle',
      'Pose et récupération d’équipements',
    ],
    equipment: [
      'ROV work-class pilotés depuis la surface',
      'Cockpits ROV et systèmes de contrôle',
      'Outillage subsea dédié (torque tools, hot stab)',
      'Navires dynamiquement positionnés (DP2/DP3)',
    ],
  },
  {
    id: 'offshore',
    index: '03',
    title: 'Offshore Construction',
    description:
      'Installation, raccordement et mise en service d’infrastructures offshore, en support des opérateurs et EPC contractors.',
    longDescription:
      'De l’installation des structures à la mise en service des modules, nos équipes offshore construction interviennent en support des opérateurs et des EPC contractors. Nous coordonnons les moyens marins, les opérations de levage et les raccordements mécaniques et instrumentés.',
    bullets: ['Structures et modules', 'Hook-up et commissioning', 'Coordination des moyens marins'],
    standardsHint: 'ISO 19901 · ABS · BV',
    image: media.capabilities.offshore,
    domains: [
      'Structures fixes et modules topside',
      'Hook-up et commissioning',
      'Raccordements mécaniques et instrumentés',
      'Coordination marine et opérations de levage',
    ],
    equipment: [
      'Cranes de levage et navires HLV',
      'Équipements de tests et complétion mécanique',
      'Systèmes de coordination marine (DP)',
      'Postes de contrôle et supervision offshore',
    ],
  },
  {
    id: 'irm',
    index: '04',
    title: 'Inspection et maintenance (IRM)',
    description:
      'Programmes IRM (Inspection, Repair, Maintenance) pour prolonger la durée de vie des actifs offshore.',
    longDescription:
      'Les programmes IRM combinent inspections planifiées, campagnes de réparation ciblées et suivi d’intégrité pour maintenir vos actifs offshore à leur niveau de performance. Un plan IRM annuel bien construit préserve la disponibilité tout en maîtrisant les coûts sur la durée de vie.',
    bullets: ['Inspection structurelle', 'Campagnes de réparation', 'Gestion d’intégrité'],
    standardsHint: 'ISO 55001 · DNV-RP-G101',
    image: media.capabilities.irm,
    domains: [
      'Inspection structurelle et corrosion',
      'Programmes annuels d’inspection',
      'Campagnes de réparation ciblées',
      'Gestion d’intégrité et RBI',
    ],
    equipment: [
      'ROV d’inspection et caméras HD',
      'Systèmes de CP (Cathodic Protection)',
      'Outillage NDT (Non-Destructive Testing)',
      'Plateformes de reporting d’intégrité',
    ],
  },
];
