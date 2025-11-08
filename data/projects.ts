export interface ProjectData {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  duration: string;
  team: string[];
  tech: string[];
  description: string;
  problem: string;
  solution: string;
  features: string[];
  challenges: string;
  results: string[];
  images: {
    hero: string;
    gallery: string[];
  };
  links: {
    demo?: string;
    github?: string;
    behance?: string;
  };
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
  nextProject?: {
    slug: string;
    title: string;
  };
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    slug: 'nexus',
    title: 'NEXUS',
    subtitle: 'Système de Recommandation Multi-Médias',
    category: 'Développement Web',
    year: '2024',
    duration: '3 mois',
    team: ['Saban Ercan'],
    tech: ['React 18', 'FastAPI', 'PostgreSQL', 'Docker', 'Tailwind CSS', 'Framer Motion', 'JWT', 'SQLAlchemy'],
    description: 'NEXUS est une plateforme web moderne qui révolutionne la découverte de contenu en unifiant films, musique et livres dans une seule interface intuitive. Le système propose des recommandations personnalisées basées sur l\'intelligence artificielle.',
    problem: 'Comment créer une expérience unifiée pour découvrir et noter différents types de médias (films, musique, livres) tout en fournissant des recommandations personnalisées intelligentes à partir de 3 APIs différentes ?',
    solution: 'Architecture microservices avec backend FastAPI asynchrone intégrant 3 APIs externes (TMDB, Spotify, Google Books), frontend React moderne avec animations fluides, système d\'authentification JWT sécurisé, et conteneurisation Docker complète.',
    features: [
      'Découverte et notation de films via TMDB API',
      'Recherche musicale avec intégration Spotify',
      'Catalogue de livres Google Books',
      'Système de recommandations personnalisées',
      'Authentification sécurisée avec JWT',
      'Statistiques et analytics détaillées',
      'Interface responsive avec animations',
      'Architecture microservices containerisée'
    ],
    challenges: 'Gérer l\'authentification et la synchronisation de 3 APIs différentes, optimiser les performances avec des pools de connexions PostgreSQL, implémenter un système de recommandation hybride, et assurer une UX fluide avec des animations complexes.',
    results: [
      'Application full-stack complètement fonctionnelle',
      'Intégration réussie de 3 APIs externes',
      'Système de recommandation opérationnel',
      'Temps de chargement < 2 secondes',
      'Score Lighthouse 90+',
      'Architecture scalable prête pour production'
    ],
    images: {
      hero: '/projects/nexus/nexus-hero.jpg',
      gallery: [
        '/projects/nexus/nexus-dashboard.jpg',
        '/projects/nexus/nexus-movies.jpg',
        '/projects/nexus/nexus-music.jpg',
        '/projects/nexus/nexus-books.jpg',
        '/projects/nexus/nexus-mobile.jpg'
      ]
    },
    links: {
      github: 'https://github.com/SabanErcan/Nexus',
      // demo: 'https://nexus-demo.vercel.app'
    },
    testimonial: {
      text: 'Un projet impressionnant qui démontre une maîtrise complète du développement full-stack moderne.',
      author: 'Prof. Martin Dubois',
      role: 'Enseignant BUT Informatique'
    },
    nextProject: {
      slug: 'radar-avions',
      title: 'Radar Avions'
    }
  },
  {
    id: 2,
    slug: 'radar-avions',
    title: 'Radar Avions',
    subtitle: 'Suivi d\'Avions en Temps Réel',
    category: 'Application Web',
    year: '2024',
    duration: '2 mois',
    team: ['Saban Ercan'],
    tech: ['JavaScript ES6+', 'Leaflet', 'Webpack', 'SCSS', 'OpenSky API', 'REST Countries API'],
    description: 'Application web de suivi d\'avions en temps réel par pays. Permet de visualiser tous les avions actuellement en vol sur une carte interactive avec leurs détails techniques complets.',
    problem: 'Comment visualiser en temps réel la position de milliers d\'avions à travers le monde et afficher leurs informations techniques de manière claire et interactive ?',
    solution: 'Architecture orientée objet avec 6 classes, requêtes asynchrones vers OpenSky Network API, carte interactive Leaflet avec marqueurs rotatifs, et build optimisé avec Webpack.',
    features: [
      'Recherche d\'avions par pays avec validation',
      'Affichage temps réel sur carte OpenStreetMap',
      'Détails techniques (altitude, vitesse, cap)',
      'Informations pays (drapeau, capitale)',
      'Marqueurs d\'avions rotatifs selon cap',
      'Interface responsive complète',
      'Optimisations performance'
    ],
    challenges: 'L\'API OpenSky ne permettant pas de filtrer par pays d\'origine, j\'ai dû récupérer tous les avions du monde (~200 KB) puis filtrer côté client tout en maintenant des performances optimales.',
    results: [
      'Support de 195+ pays',
      'Affichage de 7500+ avions simultanés',
      'Temps de recherche < 1 seconde',
      'Compatible tous navigateurs modernes',
      'Interface intuitive et responsive'
    ],
    images: {
      hero: '/projects/avion/avion1.png',
      gallery: [
        '/projects/avion/avion1.png',
        '/projects/avion/avion2.png'
      ]
    },
    links: {
      github: 'https://github.com/SabanErcan/Radar'
      // demo: 'https://radar-avions.vercel.app'
    },
    nextProject: {
      slug: 'portfolio',
      title: 'Portfolio'
    }
  },
  {
    id: 3,
    slug: 'portfolio',
    title: 'Portfolio Personnel',
    subtitle: 'Site Web Interactif',
    category: 'Design UX/UI',
    year: '2024',
    duration: '1 mois',
    team: ['Saban Ercan'],
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'Vercel'],
    description: 'Portfolio personnel développé avec Next.js 14 mettant en avant mes compétences et projets. Interface moderne avec animations 3D, interactions souris et design responsive.',
    problem: 'Comment créer un portfolio qui se démarque visuellement tout en restant professionnel, performant et en mettant parfaitement en valeur mes compétences techniques ?',
    solution: 'Développement avec Next.js 14 App Router, animations Framer Motion et Three.js, design system cohérent, optimisations de performance avancées et déploiement sur Vercel.',
    features: [
      'Design moderne inspiré des meilleurs',
      'Animations 3D interactives',
      'Effets de souris dynamiques',
      'Thème sombre adaptatif',
      'Navigation fluide et intuitive',
      'Optimisations SEO complètes',
      'Performance score 95+',
      'Responsive design parfait'
    ],
    challenges: 'Créer des animations Three.js performantes, gérer les interactions souris complexes, optimiser le bundle pour un chargement rapide, et assurer une excellente expérience sur tous les appareils.',
    results: [
      'Score Lighthouse 95+',
      'Temps de chargement < 1.5s',
      'Design responsive parfait',
      'Référencement optimisé',
      'Animations fluides 60 FPS',
      'Interface utilisateur exceptionnelle'
    ],
    images: {
      hero: '/projects/portfolio/prtfolio.png',
      gallery: [
        '/projects/portfolio/prtfolio.png',
        '/projects/portfolio/p2.png',
        '/projects/portfolio/p3.png',
        '/projects/portfolio/p4.png'
      ]
    },
    links: {
      // github: 'https://github.com/saban-ercan/portfolio'
    },
    nextProject: {
      slug: 'qt-app',
      title: 'App Qt C++'
    }
  },
  {
    id: 4,
    slug: 'qt-app',
    title: 'Application Qt C++',
    subtitle: 'Interface Graphique Desktop',
    category: 'Application Desktop',
    year: '2024',
    duration: '2 mois',
    team: ['Saban Ercan'],
    tech: ['C++', 'Qt Framework', 'CMake', 'SQLite', 'QML'],
    description: 'Application desktop développée en C++ avec Qt Framework, démontrant la maîtrise des langages bas niveau et des interfaces graphiques natives multi-plateformes.',
    problem: 'Développer une application desktop performante avec interface native, gestion de données locales et compatibilité multi-plateforme.',
    solution: 'Utilisation du framework Qt avec architecture MVC, gestion des signaux/slots, base SQLite intégrée et interface QML moderne.',
    features: [
      'Interface native Qt moderne',
      'Architecture MVC robuste',
      'Base de données SQLite intégrée',
      'Gestion des fichiers système',
      'Notifications système',
      'Multi-plateforme (Windows/Linux/Mac)',
      'Performances optimisées',
      'Interface QML responsive'
    ],
    challenges: 'Maîtriser les concepts avancés du C++ moderne, gérer la mémoire efficacement, créer une interface QML intuitive et assurer la compatibilité multi-plateforme.',
    results: [
      'Application stable et performante',
      'Interface utilisateur intuitive',
      'Code C++ optimisé et maintenable',
      'Compatible 3 plateformes',
      'Gestion mémoire efficace',
      'Architecture extensible'
    ],
    images: {
      hero: '/projects/qt/qt-hero.jpg',
      gallery: [
        '/projects/qt/qt-interface.jpg',
        '/projects/qt/qt-features.jpg'
      ]
    },
    links: {
      // github: 'https://github.com/saban-ercan/qt-app'
    },
    nextProject: {
      slug: 'nexus',
      title: 'NEXUS'
    }
  }
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsData.find(project => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projectsData.map(project => project.slug);
}