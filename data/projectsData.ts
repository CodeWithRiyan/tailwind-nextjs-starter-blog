export interface IProject {
  slug: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  image: string
  screenshots: string[]
  liveUrl?: string
  githubUrl?: string
  completionDate: string
  teamSize: string
  keyFeatures: string[]
  challenges: string[]
  solutions: string[]
  featured?: boolean
}


// data/projectsData.ts

export const projects: IProject[] = [

  {
    slug: 'smart-gum',
    title: 'Smart GUM (Smart Plantation)',
    description: 'A smart plantation management system built with Next.js, featuring sophisticated rainfall and areal calculations, comprehensive dashboards, and role-based access control.',
    longDescription: 'Smart GUM is an advanced plantation management platform that combines powerful data analysis with intuitive visualization. The system excels in processing complex rainfall calculations and areal statements through sophisticated PostgreSQL queries, presenting the results in interactive dashboards and detailed reports. Built with React.js and Next.js, the platform implements a robust role management system for secure access control. Working in a two-member team, we developed a hierarchical dashboard architecture that efficiently translates complex native database queries into meaningful charts and actionable documents, providing plantation managers with comprehensive insights for informed decision-making.',
    technologies: ['Tailwind', 'React.js', 'Next.js'],
    image: '/static/images/portfolio/smart-gum.png',
    screenshots: ['/static/images/portfolio/smart-gum/1.png', '/static/images/portfolio/smart-gum/2.png', '/static/images/portfolio/smart-gum/3.png'],
    featured: false,
    completionDate: '2024',
    teamSize: '2 members',
    keyFeatures: [
      'Calculation Rainfall',
      'Calculation Areal Statement',
      'Role Management System',
      'Dashboard Rainfall',
      'Dashboard Areal Statement',
    ],
    challenges: [
      'Create complex Query',
      'Convert Query into nice Chart',
      'Convert Query into document'
    ],
    solutions: [
      'Developed hierarchical dashboard system and API',
      'Using Complex Native Query',
      'Implement Native Postgresql'
    ]
  },
  {
    slug: 'seed-property',
    title: 'Seed Property (Australia Property Agent)',
    description: 'A modern property agency website built with Next.js and Tailwind CSS, featuring dark mode support and pixel-perfect implementation from Figma designs.',
    longDescription: 'Seed Property is an Australian property agency website that showcases modern web development practices. Built with React.js and Next.js for optimal performance, the site features a sophisticated theme switching system including dark mode support. The project demonstrates meticulous attention to detail through pixel-perfect implementation of Figma designs, complex CSS animations, and fully responsive layouts. Working in a two-member team, we developed a hierarchical component system that prioritizes reusability and maintainability, resulting in a polished and professional real estate platform.',
    technologies: ['Tailwind', 'React.js', 'Next.js'],
    image: '/static/images/portfolio/seed-property.png',
    screenshots: ['/static/images/portfolio/seed-property/1.png', '/static/images/portfolio/seed-property/2.png', '/static/images/portfolio/seed-property/3.png'],
    featured: false,
    completionDate: '2024',
    teamSize: '2 members',
    keyFeatures: [
      'Switch Theme',
      'Dark Mode',
      'Animation',
      'Mobile Responsive',
      'Slicing from Figma',
      'Perfect Pixel'
    ],
    challenges: [
      'Create complex CSS with Tailwind',
      'Implement Dark Mode',
      'Perfect Pixel implemented'
    ],
    solutions: [
      'Developed hierarchical landing page system and component',
      'Created reusable React.js Component',
      'Implemented Dark Mode Switching'
    ]
  },
  {
    slug: 'madaar-io',
    title: 'Madaar (Start-Up Mentoring)',
    description: 'A multilingual startup mentoring platform featuring an elegant, responsive design with Arabic language support, providing comprehensive resources and guidance for emerging entrepreneurs.',
    longDescription: `Madaar is a sophisticated startup mentoring platform designed to connect emerging entrepreneurs with experienced mentors. The platform features a seamlessly integrated bilingual interface supporting both English and Arabic, complete with right-to-left text rendering capabilities. Built with modern web technologies, it offers an intuitive user experience through interactive carousels, dynamic content tabs, and comprehensive FAQ sections. The platform's pixel-perfect implementation from Figma designs ensures a professional and polished presentation that caters to both Western and Middle Eastern audiences.`,
    technologies: ['Bootstrap', 'Vue.js', 'Nuxt.js'],
    image: '/static/images/portfolio/landing-page-madaar.png',
    screenshots: ['/static/images/portfolio/madaar/1.png', '/static/images/portfolio/madaar/2.png', '/static/images/portfolio/madaar/3.png'],
    featured: false,
    completionDate: '2024',
    teamSize: '2 members',
    keyFeatures: [
      'Switch Language',
      'Carousel Image',
      'Switch Tabs',
      'Accordion FAQ',
      'Slicing from Figma',
      'Right to Left Text Arabic'
    ],
    challenges: [
      'Create complex CSS with Bootstrap',
      'Implement Arabic Language',
      'Perfect Pixel implemented'
    ],
    solutions: [
      'Developed hierarchical landing page system and component',
      'Created reusable Vue.js Component',
      'Implemented Internationalization with Nuxt.js'
    ]
  },
  {
    slug: 'bni-pln',
    title: 'BNI PLN (E-Budgeting)',
    description: 'A comprehensive e-budgeting solution offering budget planning, expense tracking, and financial forecasting tools with integrated approval workflows and reporting capabilities.',
    longDescription: `BNI PLN is a sophisticated e-budgeting platform that streamlines financial planning and management. It combines advanced budget planning tools, detailed expense tracking, and comprehensive financial forecasting with automated approval workflows.`,
    technologies: ['Bootstrap', 'React.js', 'React Query'],
    image: '/static/images/portfolio/bni-pln-dashboard.png',
    screenshots: ['/static/images/portfolio/bni-pln/1.png', '/static/images/portfolio/bni-pln/2.png', '/static/images/portfolio/bni-pln/3.png'],
    featured: false,
    completionDate: '2023',
    teamSize: '5 members',
    keyFeatures: [
      'Budget planning tools',
      'Expense tracking',
      'Financial forecasting',
      'Approval workflows',
      'Report generation',
      'Budget monitoring'
    ],
    challenges: [
      'Managing complex budget hierarchies',
      'Implementing approval workflows',
      'Creating accurate forecasts'
    ],
    solutions: [
      'Developed hierarchical system',
      'Created flexible workflow engine',
      'Implemented forecasting algorithms'
    ]
  },

  {
    slug: 'combatgo',
    title: 'CombatGo (Boxing Timer and Virtual Combo Coach)',
    description: 'An interactive boxing training application featuring customizable interval timing, virtual combo sequences, and progress tracking for both beginners and advanced athletes.',
    longDescription: `CombatGo is an innovative boxing training application that combines interval timing with virtual coaching. It provides customizable workout routines, virtual combo sequences, and comprehensive progress tracking for athletes of all levels.`,
    technologies: ['Tailwind', 'React.js', 'Next.js'],
    image: '/static/images/portfolio/combat-go-landing-page.png',
    screenshots: ['/static/images/portfolio/combat-go/1.png', '/static/images/portfolio/combat-go/2.png', '/static/images/portfolio/combat-go/3.png'],
    featured: false,
    completionDate: '2023',
    teamSize: '2 members',
    keyFeatures: [
      'Interval timer',
      'Virtual combo trainer',
      'Progress tracking',
      'Customizable workouts',
      'Performance analytics',
      'Training plans'
    ],
    challenges: [
      'Creating accurate timing system',
      'Developing combo recognition',
      'Implementing progress tracking'
    ],
    solutions: [
      'Built precise timer system',
      'Developed pattern recognition',
      'Created performance metrics'
    ]
  },

  {
    slug: 'cms-dss',
    title: 'CMS DSS (Advertising Content Management System)',
    description: 'A sophisticated content management system specialized for digital advertising, offering campaign scheduling, asset management, and performance analytics tools.',
    longDescription: `CMS DSS is a specialized content management system designed for digital advertising needs. It provides comprehensive tools for campaign management, digital asset handling, and detailed performance analytics to optimize advertising efforts.`,
    technologies: ['Ant Design', 'React.js', 'Next.js'],
    image: '/static/images/portfolio/cms-dss.png',
    screenshots: [],
    featured: false,
    completionDate: '2023',
    teamSize: '4 members',
    keyFeatures: [
      'Campaign scheduling',
      'Asset management',
      'Performance tracking',
      'A/B testing',
      'Automated reporting',
      'Multi-platform integration'
    ],
    challenges: [
      'Managing large media assets',
      'Implementing complex scheduling',
      'Tracking cross-platform performance'
    ],
    solutions: [
      'Created efficient asset management',
      'Developed advanced scheduler',
      'Implemented unified analytics'
    ]
  },

  {
    slug: 'flowstep',
    title: 'Flowstep (API Generator)',
    description: 'An innovative API development tool that automates the creation of RESTful APIs, featuring intuitive workflow design, documentation generation, and testing capabilities.',
    longDescription: `Flowstep is an innovative API development platform that simplifies the process of creating and managing RESTful APIs. It provides intuitive workflow design tools, automated documentation generation, and comprehensive testing capabilities.`,
    technologies: ['Tailwind', 'React.js', 'Next.js'],
    image: '/static/images/portfolio/flowstep-api-generator.png',
    screenshots: [],
    featured: true,
    completionDate: '2023',
    teamSize: '3 members',
    keyFeatures: [
      'Visual API designer',
      'Auto-documentation',
      'Testing suite',
      'Version control',
      'Code generation',
      'API monitoring'
    ],
    challenges: [
      'Creating intuitive visual interface',
      'Generating efficient code',
      'Managing API versions'
    ],
    solutions: [
      'Developed drag-and-drop interface',
      'Implemented template-based generation',
      'Created version control system'
    ]
  },

  {
    slug: 'ecodoe',
    title: 'Ecodoe (Procurement Application)',
    description: 'A streamlined procurement management system featuring vendor evaluation, purchase order automation, and comprehensive spend analytics for optimized supply chain operations.',
    longDescription: `Ecodoe is a comprehensive procurement management platform that streamlines the entire procurement process. It features advanced vendor management, automated purchase orders, and detailed spend analytics to optimize supply chain operations.`,
    technologies: ['Bootstrap', 'React.js', 'Next.js', 'Firebase'],
    image: '/static/images/portfolio/ecodoe-procurement-application.png',
    screenshots: [],
    featured: false,
    completionDate: '2023',
    teamSize: '5 members',
    keyFeatures: [
      'Vendor management system',
      'Purchase order automation',
      'Spend analytics',
      'Approval workflow',
      'Contract management',
      'Budget tracking'
    ],
    challenges: [
      'Managing complex approval workflows',
      'Implementing budget controls',
      'Handling document processing'
    ],
    solutions: [
      'Created flexible workflow engine',
      'Developed budget tracking system',
      'Implemented document management system'
    ]
  },

  {
    slug: 'advika',
    title: 'Advika (Online Customer Service)',
    description: 'A modern customer service platform integrating multi-channel communication, ticket management, and automated response systems for enhanced customer support efficiency.',
    longDescription: `Advika is a comprehensive customer service solution that brings together multi-channel communication, efficient ticket management, and smart automated responses to streamline customer support operations.`,
    technologies: ['Bootstrap', 'React.js', 'Next.js'],
    image: '/static/images/portfolio/advika-customer-service-online.png',
    screenshots: [],
    featured: false,
    completionDate: '2023',
    teamSize: '4 members',
    keyFeatures: [
      'Multi-channel integration',
      'Smart ticket routing',
      'Automated responses',
      'Performance analytics',
      'Customer feedback system',
      'SLA monitoring'
    ],
    challenges: [
      'Integrating multiple communication channels',
      'Building efficient ticket routing',
      'Implementing real-time updates'
    ],
    solutions: [
      'Created unified communication API',
      'Developed smart routing algorithm',
      'Implemented WebSocket system'
    ]
  },

  {
    slug: 'agilascout',
    title: 'Agilascout (Web Scrapper Ecommerce)',
    description: 'An advanced web scraping tool designed specifically for e-commerce platforms, providing automated price monitoring, competitor analysis, and market trend insights.',
    longDescription: `Agilascout is a sophisticated web scraping solution built specifically for e-commerce businesses. It provides automated price monitoring, competitor analysis, and market trend insights to help businesses stay competitive in the digital marketplace.`,
    technologies: ['Python', 'Flask', 'Tailwind'],
    image: '/static/images/portfolio/agilascout-web-scrapper-for-ecommerce.png',
    screenshots: [],
    featured: false,
    completionDate: '2023',
    teamSize: '3 members',
    keyFeatures: [
      'Automated data collection',
      'Price monitoring system',
      'Competitor analysis tools',
      'Market trend analysis',
      'Custom scraping rules',
      'Data visualization'
    ],
    challenges: [
      'Handling different website structures',
      'Managing rate limiting',
      'Processing large datasets'
    ],
    solutions: [
      'Developed adaptive scraping algorithms',
      'Implemented proxy rotation',
      'Created efficient data processing pipeline'
    ]
  },

  {
    slug: 'bnv-examination',
    title: 'BNV (Examination Application)',
    description: 'A comprehensive digital examination platform with secure test delivery, automated grading, and detailed analytics for educational institutions and corporate training programs.',
    longDescription: `BNV is an advanced examination platform that revolutionizes how educational institutions conduct assessments. The platform provides secure test delivery, automated grading capabilities, and comprehensive analytics to streamline the examination process.`,
    technologies: ['Bootstrap', 'Codeigniter', 'MySQL', 'JQuery'],
    image: '/static/images/portfolio/bni-corporate-university.png',
    screenshots: [],
    featured: true,
    completionDate: '2023',
    teamSize: '5 members',
    keyFeatures: [
      'Secure exam delivery',
      'Automated grading system',
      'Real-time monitoring',
      'Result analytics',
      'Anti-cheating measures',
      'Custom report generation'
    ],
    challenges: [
      'Ensuring exam security',
      'Handling large concurrent users',
      'Maintaining system stability'
    ],
    solutions: [
      'Implemented advanced security protocols',
      'Optimized server infrastructure',
      'Developed load balancing system'
    ]
  },
  {
    slug: 'boskasir',
    title: 'Boskasir (Cashier Application)',
    description: 'A robust point-of-sale solution offering inventory management, sales tracking, and financial reporting capabilities for retail businesses of all sizes.',
    longDescription: `Boskasir is a comprehensive point-of-sale solution designed to streamline retail operations. The application combines powerful features for inventory management, real-time sales tracking, and detailed financial reporting to help businesses make data-driven decisions.`,
    technologies: ['Bootstrap', 'Codeigniter', 'MySQL', 'JQuery'],
    image: '/static/images/portfolio/boskasir-cashier-app.png',
    screenshots: [],
    featured: false,
    completionDate: '2023',
    teamSize: '3 members',
    keyFeatures: [
      'Intuitive POS interface',
      'Real-time inventory tracking',
      'Sales analytics dashboard',
      'Multi-store management',
      'Employee performance tracking',
      'Financial reporting suite'
    ],
    challenges: [
      'Ensuring fast transaction processing',
      'Handling offline operations',
      'Managing multi-store synchronization'
    ],
    solutions: [
      'Implemented queue-based processing',
      'Developed offline-first architecture',
      'Created robust sync mechanism'
    ]
  },
  {
    slug: 'i2i-custom',
    title: 'I2I Custom (Apparel E-Commerce Platform)',
    description: 'A specialized e-commerce platform for custom apparel, featuring an intuitive design interface, real-time pricing calculator, and comprehensive order management system.',
    longDescription: `I2I Custom is a sophisticated e-commerce platform specifically designed for the custom apparel industry. The platform seamlessly integrates advanced features including real-time design visualization, dynamic pricing calculations, and a comprehensive order management system. Users can easily customize their apparel designs while getting instant pricing feedback, making the ordering process smooth and transparent.`,
    technologies: ['Bootstrap', 'Codeigniter', 'MySQL', 'JQuery'],
    image: '/static/images/portfolio/ecommerce-i2icustom.png',
    screenshots: [],
    featured: false,
    completionDate: '2023',
    teamSize: '4 members',
    keyFeatures: [
      'Real-time design customization interface',
      'Dynamic pricing calculator',
      'Comprehensive order management',
      'Inventory tracking system',
      'Customer profile management',
      'Multi-payment gateway integration'
    ],
    challenges: [
      'Building a responsive design interface',
      'Implementing complex pricing logic',
      'Managing high-resolution design assets'
    ],
    solutions: [
      'Developed modular design components',
      'Created flexible pricing algorithm',
      'Implemented efficient asset optimization'
    ]
  }
]