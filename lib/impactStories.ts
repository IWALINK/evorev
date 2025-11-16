export type StoryBadgeVariant = "emerald" | "primary" | "orange" | "indigo";

export type ImpactStoryContentBlock = {
  heading: string;
  body: string[];
};

export type ImpactStory = {
  slug: string;
  title: string;
  description: string;
  category: string;
  location: string;
  color: string;
  bgPattern: "circles" | "dots";
  heroImage: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  readTime: string;
  badges: {
    label: string;
    variant: StoryBadgeVariant;
  }[];
  stats: {
    label: string;
    value: string;
  }[];
  tags: string[];
  daysRemaining: number;
  backers: number;
  content: ImpactStoryContentBlock[];
  quote?: {
    text: string;
    author: string;
    role: string;
  };
  highlights: {
    title: string;
    description: string;
  }[];
};

export const impactStories: ImpactStory[] = [
  {
    slug: "drone-livraison-autonome",
    title: "Drone de livraison autonome",
    description:
      "Révolutionner la logistique du dernier kilomètre avec une technologie précise et décarbonée.",
    category: "Innovation technologique",
    location: "Lausanne",
    color: "from-emerald-500 to-emerald-700",
    bgPattern: "circles",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDu89GK-d8lN30a9Z0mTbFHqK2-wEmZhARQxj0Hzh4wjH2lCNtZj8d2EKniY19nHZ1J4BNqxW8FLhhazWjDX2H-lbL9HguYkKb30HVKpasvTJtQVztB1pS2RCLgPkxlY2w6yxk4g8aGNDSzakRCsq7N3yPLuxZZ7aXCmJGjkT2cIcbUFGcM6Txrgqfvju12aLYrPxv0A2_UGzxmcgykTpaJPRvi6sdWvWEhuBNj6BcSyBBdyRyFEyMl9_Ss6zrc95ao57yrLEGYH65p",
    excerpt:
      "Un collectif d'ingénieurs lausannois déploie une flotte de drones capables de livrer des colis de 8 kg en moins de 15 minutes, tout en réduisant de 62 % les émissions liées au transport urbain.",
    author: "Équipe Impact Évorev",
    publishedAt: "2025-10-14",
    readTime: "6 min",
    badges: [
      { label: "Actif", variant: "emerald" },
      { label: "Presque financé", variant: "orange" },
    ],
    stats: [
      { label: "Montant recherché", value: "CHF 250 000" },
      { label: "Collecté", value: "CHF 218 000" },
      { label: "Emplois créés", value: "18" },
    ],
    tags: ["Mobilité", "Climat", "Technologie"],
    daysRemaining: 12,
    backers: 158,
    content: [
      {
        heading: "Pourquoi ce projet change la donne",
        body: [
          "Les centres-villes suisses voient leurs rues saturées par les livraisons express. L'équipe TechInnov propose une solution hybride : des drones autonomes qui s'alignent sur les couloirs aériens existants, évitent les pics de trafic et réduisent drastiquement les nuisances sonores.",
          "Grâce à un module de navigation développé avec l'EPFL, chaque drone anticipe les rafales alpines et choisit en temps réel le couloir le plus sûr. Cette avance technologique attire déjà de grandes coopératives qui souhaitent verdir leur logistique.",
        ],
      },
      {
        heading: "Où ira votre contribution",
        body: [
          "40 % financeront la dernière phase de certification auprès de l'OFAC.",
          "35 % seront dédiés à l'assemblage des 25 premiers drones de série en Suisse romande.",
          "Le reste servira à former une première cohorte de pilotes superviseurs issus de programmes d'insertion.",
        ],
      },
      {
        heading: "Impact attendu dans les 12 prochains mois",
        body: [
          "Plus de 120 000 livraisons décarbonées réalisées sur l'arc lémanique.",
          "Un réseau de trois hubs urbains opérés par des jeunes techniciens en reconversion.",
        ],
      },
    ],
    quote: {
      text: "Chaque livraison réalisée par drone évite en moyenne 3 km parcourus par un utilitaire thermique en centre-ville.",
      author: "Nadia Bertholet",
      role: "Co-fondatrice, TechInnov",
    },
    highlights: [
      {
        title: "62 % d'émissions évitées",
        description: "Comparé à une flotte de camionnettes diesel sur un périmètre équivalent.",
      },
      {
        title: "25 drones construits localement",
        description: "Assemblés avec des matériaux recyclés issus de l'industrie horlogère.",
      },
      {
        title: "18 emplois qualifiés",
        description: "Postes dédiés à la supervision, à la maintenance et à la formation.",
      },
    ],
  },
  {
    slug: "exposition-art-immersif",
    title: "Exposition d'art immersif",
    description:
      "Une expérience sensorielle qui marie arts numériques et artisanat traditionnel pour revitaliser les centres culturels locaux.",
    category: "Culture & Création",
    location: "Genève",
    color: "from-fuchsia-500 to-purple-700",
    bgPattern: "dots",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCmyFvittwHlIdJCccRWtkUAYgTgMaA-WwoHE3NG33UxdTiBbkuzOqW95NBHL39DqfuzhaThoCoAonLJWf9w9VTU0HVw2Twj6cWnXIcJMcQRk4-UhvUrMBvX4OIeK4C4QMsvq_rBdpPZ-wjdLIibqr4Cv-nm3aLCfrd6BqXuuj3ThLH9KZkcTHDh2-YBnQamnzgsLO70R1VCA7qXfteDDB0O3ClIZ9QDamujiDUi1IKPwJCqFu8gI1DVpnsk_tSYtAdloYHrSoPD62B",
    excerpt:
      "Une scénographie immersive qui redonne au public le goût de l'art vivant grâce à des dispositifs XR accessibles et fabriqués en Suisse.",
    author: "Léa Dutoit",
    publishedAt: "2025-09-30",
    readTime: "5 min",
    badges: [{ label: "Nouveau", variant: "primary" }],
    stats: [
      { label: "Montant recherché", value: "CHF 120 000" },
      { label: "Préventes", value: "2 450 billets" },
      { label: "Collectifs impliqués", value: "7" },
    ],
    tags: ["Culture", "Économie locale", "XR"],
    daysRemaining: 58,
    backers: 34,
    content: [
      {
        heading: "Un format pensé pour la médiation culturelle",
        body: [
          "L'installation propose trois parcours complémentaires : découverte tactile des matières, immersion XR et ateliers collaboratifs. Tout est pensé pour rendre les arts numériques accessibles aux familles et aux écoles.",
        ],
      },
      {
        heading: "Un modèle économique hybride",
        body: [
          "Le projet combine préventes, mécénat d'entreprises locales et soutien des collectivités. Les fonds recherchés via Évorev sécurisent la production de modules immersifs produits par des PME genevoises.",
        ],
      },
    ],
    highlights: [
      {
        title: "45 % du budget en circuit court",
        description: "Prestataires créatifs basés entre Genève et Lausanne.",
      },
      {
        title: "5 000 visiteurs attendus",
        description: "Dont 1 200 élèves grâce aux partenariats scolaires.",
      },
      {
        title: "Programme XR accessible",
        description: "Guides, audiodescription et interfaces multilingues.",
      },
    ],
  },
  {
    slug: "jardin-urbain-communautaire",
    title: "Jardin urbain communautaire",
    description:
      "Transformer une friche industrielle en un espace nourricier qui emploie et forme des jeunes sans emploi.",
    category: "Transition écologique",
    location: "Neuchâtel",
    color: "from-green-500 to-lime-500",
    bgPattern: "circles",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrpQ7dA5H-wenRxr606asgLyhobY7tVq4i5qR_5MlUoZgJvhuu-ENTcoeMkLpuTvZamJDJblVvGGHa2fiLAcxCuwrfavoQnL5jzbmDn6LvA9a2UFQj8AgYp-ZYWIo3Wz3OKtZcpoDMCY1WySEdBDQs7pkl-lODetBR9YnouCWPJRtPElIfz3XDahk9WNzF5qdzCvT6GouIaXiU2mB48pZ4SyD7i0tbO4m2OmsOOJ7c0C6D0oL_E3KbvlbGCKpHdy4tkvvJ7nSF0T15",
    excerpt:
      "Une coopérative citoyenne crée un jardin productif de 4 000 m², irrigué par les eaux grises d'un quartier et géré comme un living lab alimentaire.",
    author: "Équipe Impact Évorev",
    publishedAt: "2025-08-19",
    readTime: "7 min",
    badges: [{ label: "Actif", variant: "emerald" }],
    stats: [
      { label: "Montant recherché", value: "CHF 180 000" },
      { label: "Parcelles solidaires", value: "65" },
      { label: "Tonnes produites/an", value: "48" },
    ],
    tags: ["Agriculture urbaine", "Insertion", "Résilience"],
    daysRemaining: 31,
    backers: 89,
    content: [
      {
        heading: "Un laboratoire de résilience alimentaire",
        body: [
          "Serres passives, cultures en buttes et ferme aquaponique fonctionnent de pair pour fournir légumes, herbes aromatiques et poissons. Le tout est géré par une coopérative ouverte aux habitants.",
        ],
      },
      {
        heading: "Insertion et entrepreneuriat",
        body: [
          "12 jeunes adultes suivent un parcours certifiant de 9 mois axé sur la production, la transformation et la vente directe. Chaque participant est accompagné par un mentor issu des métiers verts.",
        ],
      },
    ],
    highlights: [
      {
        title: "4 000 m² reverdis",
        description: "Un ancien parking devient une oasis comestible.",
      },
      {
        title: "12 parcours d'insertion",
        description: "Avec un taux de sortie positive visé de 75 %. ",
      },
      {
        title: "Bilan carbone positif",
        description: "Grâce au compostage et à la captation de CO₂ par les haies.",
      },
    ],
  },
  {
    slug: "mobilier-modulaire-ecologique",
    title: "Mobilier modulaire écologique",
    description:
      "Du mobilier circulaire fabriqué à partir de composites de chanvre et de bois recyclé pour aménager les micro-logements urbains.",
    category: "Design durable",
    location: "Fribourg",
    color: "from-amber-500 to-orange-600",
    bgPattern: "dots",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAi5VZfBpag6l1SOvOMbstAlystQ0Y493EfUIDL0UV-D9HBpWnrQb7yHLx8oJO_shxZg49qQ54-Ni_rjAJZpiKgzpvpoFzFGvKA6dFNZ8t1Oj1ijtTS0pv5GgiOnVRWJ6fNUQLU5MLVCRCSLaOGF55zDTborHerDHx8ilDBQA1lGo9UP_ZfBwNBhk1X8OuqV9P2TXRCjxSVJ4EG7n2A05DdvsgMrHMzzV0ja_ejOQEXnIzGp6ErSUiSyo3LvOr_1q9A4vxfkKb348lt",
    excerpt:
      "Une entreprise fribourgeoise invente des modules d'ameublement qui se montent sans outils et suivent votre parcours de vie.",
    author: "Maël Lorenz",
    publishedAt: "2025-07-11",
    readTime: "4 min",
    badges: [{ label: "Actif", variant: "emerald" }],
    stats: [
      { label: "Montant recherché", value: "CHF 90 000" },
      { label: "Taux de matière recyclée", value: "82 %" },
      { label: "Commandes B2B", value: "310 unités" },
    ],
    tags: ["Design", "Économie circulaire", "Industrie"],
    daysRemaining: 25,
    backers: 212,
    content: [
      {
        heading: "Un process zéro colle",
        body: [
          "Les panneaux sont assemblés grâce à un système d'encoches inspiré de la menuiserie japonaise. Chaque pièce se démonte en moins de 3 minutes pour simplifier le recyclage.",
        ],
      },
      {
        heading: "Industrialisation locale",
        body: [
          "Les fonds financeront un moule haute précision et un stock tampon de fibres naturelles afin de répondre aux appels d'offres des coopératives d'habitat partagé.",
        ],
      },
    ],
    highlights: [
      {
        title: "82 % de matières recyclées",
        description: "Revalorisation de déchets bois et textiles.",
      },
      {
        title: "2 ateliers protégés partenaires",
        description: "Pièces fabriquées avec des équipes en insertion.",
      },
      {
        title: "Durée de vie doublée",
        description: "Modules réparables pièce par pièce.",
      },
    ],
  },
  {
    slug: "imprimante-3d-open-source",
    title: "Imprimante 3D open-source",
    description:
      "Une imprimante 3D modulaire, montée en kit, qui permet aux fablabs régionaux de produire des pièces complexes à faible coût.",
    category: "Tech citoyenne",
    location: "Bâle",
    color: "from-sky-500 to-indigo-600",
    bgPattern: "circles",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDkta0Irt7lm1_rOX9N6DvjpJuNZr60-RM5MlJf8OPAxvSZJPQoYaT_OTe7ID4u3-jTJws2rzT7n2-sBnBK5Xnrpu452CJ1gzm1P5nS0qExvXzUcAmpZjlrVqs4Xt9sIobr-xn1alEigLi9qNsMhZ_TwhatG4ITeEuOLO4gyIN8-zTS4_WPTFWOp5dDBMB02zkpGngCyJs2S3jGv0zZVM3LuK-mSMBlzUxJ3VmjBUYkg9Qm9sIOgHPtV-eb8uEtBx6_kJCJcHsPNNxI",
    excerpt:
      "Un collectif open hardware partage des plans et des kits pour démocratiser la fabrication additive dans les écoles techniques.",
    author: "Équipe Impact Évorev",
    publishedAt: "2025-09-05",
    readTime: "6 min",
    badges: [{ label: "Bientôt terminé", variant: "orange" }],
    stats: [
      { label: "Montant recherché", value: "CHF 60 000" },
      { label: "Kits pré-commandés", value: "145" },
      { label: "Communautés partenaires", value: "18" },
    ],
    tags: ["Éducation", "Open-source", "Industrie 4.0"],
    daysRemaining: 5,
    backers: 95,
    content: [
      {
        heading: "Une machine pensée pour être enseignée",
        body: [
          "Chaque kit est accompagné de modules pédagogiques co-écrits avec des professeurs d'EMS. La machine accepte les filaments biosourcés et se répare avec des pièces imprimées en interne.",
        ],
      },
      {
        heading: "Un modèle communautaire",
        body: [
          "Les plans resteront en licence libre. Les contributions récoltées servent à financer la documentation, les ateliers itinérants et un fonds d'entraide pour fournir des kits aux régions périphériques.",
        ],
      },
    ],
    highlights: [
      {
        title: "145 kits déjà réservés",
        description: "Dont 30 pour des établissements publics.",
      },
      {
        title: "Réduction des coûts de 45 %",
        description: "Par rapport aux modèles classiques équivalents.",
      },
      {
        title: "Communauté open hardware",
        description: "18 fablabs suisses impliqués dans la R&D.",
      },
    ],
  },
  {
    slug: "plateforme-education-interactive",
    title: "Plateforme d'éducation interactive",
    description:
      "Un environnement d'apprentissage adaptatif, pensé avec des enseignants romands, qui combine IA, narration et mentorat humain.",
    category: "Éducation",
    location: "Zurich",
    color: "from-indigo-500 to-blue-700",
    bgPattern: "dots",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC3IznmvqupAe9pr9LBI9-VHDW1HJr3To8dzMzuhAX8MXZ-ni8p_xL7gzOrN5nSF9Ztrl0JGZ3PmmwYSCKPX1pquhRvS2LQDYKcxMayKBvh9GA6G_zExz0kDq8TXarw1GIvuUhem0qFNAYtr6k_d1CSd6Y81ZtRWzqsC0G2Av3Qd_chj4FliPER-E_Y7Qnp628Vff-n7OehYeZcLGULXeHx3A5Et9HhB7mvHVQ4ON-iHR1mZueVJa3umy9ZXruvFAfUHuHLa6ra4V99",
    excerpt:
      "Une plateforme qui personnalise les parcours scolaires tout en mettant l'enseignant au centre du dispositif.",
    author: "Anouk Steiner",
    publishedAt: "2025-11-04",
    readTime: "8 min",
    badges: [
      { label: "Actif", variant: "emerald" },
      { label: "Tendance", variant: "indigo" },
    ],
    stats: [
      { label: "Montant recherché", value: "CHF 310 000" },
      { label: "Écoles pilotes", value: "24" },
      { label: "Élèves accompagnés", value: "12 500" },
    ],
    tags: ["Edtech", "IA responsable", "Inclusion"],
    daysRemaining: 40,
    backers: 350,
    content: [
      {
        heading: "Une IA transparente",
        body: [
          "Les modèles sont entraînés sur des données synthétiques et validés avec des enseignants pour éviter les biais. Chaque recommandation pédagogique est explicable et documentée.",
        ],
      },
      {
        heading: "Des parcours ancrés dans le réel",
        body: [
          "La plateforme inclut des défis ancrés dans les contextes locaux (écologie, mobilité, culture). Les mentors partenaires – entrepreneurs, artisans, scientifiques – interviennent en visioconférence ou en présentiel.",
        ],
      },
      {
        heading: "Un financement pour accélérer l'impact",
        body: [
          "Les fonds couvriront la traduction en 4 langues supplémentaires, le renforcement des équipes de support pédagogique et l'ouverture d'un site dédié au Tessin.",
        ],
      },
    ],
    highlights: [
      {
        title: "12 500 élèves suivis",
        description: "Dont 42 % issus d'établissements REP.",
      },
      {
        title: "IA auditable",
        description: "Chaque décision est traçable via un journal d'apprentissage.",
      },
      {
        title: "Mentorat hybride",
        description: "245 experts bénévoles mobilisés cette année.",
      },
    ],
  },
];

export const impactStoriesMap = new Map(
  impactStories.map((story) => [story.slug, story]),
);

export const getImpactStory = (slug: string) =>
  impactStoriesMap.get(slug) ?? null;

