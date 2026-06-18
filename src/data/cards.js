import { assetPath } from './assets';

export const logos = {
  sidewalkLabs: {
    src: assetPath('sidewalk-labs-logo-20180.png'),
    alt: 'Logo Sidewalk Labs',
    className: 'logo-wide',
  },
  demopulse: {
    src: assetPath('logo-demopulse0.png'),
    alt: 'Logo Demopulse',
    className: 'logo-wide',
  },
  subZeroWolf: {
    src: assetPath('logo-szw-10.png'),
    alt: 'Logo Sub-Zero Wolf',
    className: 'logo-wide logo-short',
  },
  airbnb: {
    src: assetPath('logo-airbnb0.png'),
    alt: 'Logo Airbnb',
    className: 'logo-medium',
  },
  cogeco: {
    src: assetPath('logo-cogeco0.png'),
    alt: 'Logo Cogeco',
    className: 'logo-wide',
  },
  volkswagen: {
    src: assetPath('logo-volkswagen0.png'),
    alt: 'Logo Volkswagen',
    className: 'logo-mark',
  },
  bdc: {
    src: assetPath('logo-bdc-10.png'),
    alt: 'Logo BDC',
    className: 'logo-small-wide',
  },
  aprr: {
    src: assetPath('aprr-logo0.png'),
    alt: 'Logo APRR',
    className: 'logo-medium-wide',
  },
  shire: {
    src: assetPath('shire-logo0.png'),
    alt: 'Logo Shire',
    className: 'logo-medium',
  },
  healthCheck: {
    src: assetPath('logo-health-check0.png'),
    alt: 'Logo Health Check',
    className: 'logo-wide',
  },
  traigger: {
    src: assetPath('traigger-logo0.png'),
    alt: 'Logo Traigger',
    className: 'logo-wide',
  },
  portfolio: {
    src: assetPath('logo-portfolio0.png'),
    alt: 'Logo Portfolio',
    className: 'logo-medium-wide',
  },
};

export const links = {
  healthCheck: 'https://apps.apple.com/ca/app/health-check-reminders/id6448612606',
  traigger: 'https://traigger.com',
  demopulse: 'https://www.demopulse.com',
  portfolioGithub: 'https://github.com/JideTS/ReactPortfolio',
  tuneMuse: 'https://tune-muse-team.github.io/tunemuse/',
  aiwair: 'https://www.aiwair.com',
};

export const cardTypes = {
  interview: { icon: 'interview', label: 'Presented during interviews' },
  online: { icon: 'globe', label: 'View online' },
  appStore: { icon: 'globe', label: 'View on the AppStore' },
  github: { icon: 'globe', label: 'View on GitHub' },
  figma: { icon: 'globe', label: 'Take the Figma prototype' },
  beta: { icon: 'globe', label: 'Try the Beta version' },
};

export const portfolioCards = {
  sidewalkLabs: {
    logo: logos.sidewalkLabs,
    body: 'Performed international strategic user research for Sidewalk Labs, an Alphabet group (Google) company, to uncover client needs and product requirements',
    disciplines: ['business', 'design'],
    status: 'interview',
  },
  subZeroWolf: {
    logo: logos.subZeroWolf,
    body: 'Collaboratively developed a comprehensive, long-term customer journey map to anticipate the future of the high-end connected kitchen',
    disciplines: ['business', 'design'],
    status: 'interview',
  },
  airbnb: {
    logo: logos.airbnb,
    body: 'Contributed to redesigning the mutual review protocol, aiming to promote genuine reviews and bolster trust within the Airbnb community',
    disciplines: ['business', 'design'],
    status: 'interview',
  },
  cogeco: {
    logo: logos.cogeco,
    body: 'Analyzed and aligned current and desired customer lifecycles to minimize frictions, enhance satisfaction, and foster loyalty',
    disciplines: ['business', 'design'],
    status: 'interview',
  },
  aprr: {
    logo: logos.aprr,
    body: 'Directed a one-week Design Sprint involving executives and management to design and launch a highway road trip planning mobile app',
    disciplines: ['business', 'design'],
    status: 'online',
    to: '/AprrCase',
  },
  volkswagen: {
    logo: logos.volkswagen,
    body: 'Oversaw service appointment improvements, leading to a 27% rise in digital bookings as a proportion of the total appointments',
    disciplines: ['business', 'design'],
    status: 'online',
    to: '/VolkswagenCase',
  },
  bdc: {
    logo: logos.bdc,
    body: 'Conducted cross-expertise design, created high conversion responsive financing request journeys, built an Angular based design system',
    disciplines: ['business', 'design', 'coding'],
    status: 'interview',
  },
  shire: {
    logo: logos.shire,
    body: 'Crafted a cross-platform solution delivering vital medical data to aid healthcare professionals in swiftly treating sick children, saving lives',
    disciplines: ['business', 'design'],
    status: 'interview',
  },
  healthCheck: {
    logo: logos.healthCheck,
    body: 'Designed, developed and launched an iOS app promoting better human performance through fundamental health reminders',
    disciplines: ['business', 'design', 'coding'],
    status: 'appStore',
    href: links.healthCheck,
  },
  traigger: {
    logo: logos.traigger,
    body: 'Designed, developed and launched a AI based web app to help people engineer better AI prompts, using less tokens to get greater results',
    disciplines: ['business', 'design', 'coding'],
    status: 'beta',
    href: links.traigger,
  },
  demopulse: {
    logo: logos.demopulse,
    body: 'Designed and developed Demopulse to give people an intelligent space to follow, rate, and comment political leaders actions',
    disciplines: ['business', 'design', 'coding'],
    status: 'beta',
    href: links.demopulse,
  },
  portfolio: {
    logo: logos.portfolio,
    body: 'Led the design and coding of the React application powering this portfolio. Here feel free to discover the behind-the-scenes making-of',
    disciplines: ['business', 'design', 'coding'],
    status: 'github',
    href: links.portfolioGithub,
  },
  tuneMuse: {
    logo: logos.traigger,
    body: 'Designed and developed this collaborative MVP empowering music enthusiasts by helping them discover new songs via AI',
    disciplines: ['business', 'design', 'coding'],
    status: 'beta',
    href: links.tuneMuse,
  },
  aiwair: {
    logo: logos.demopulse,
    body: 'Designed and developed this application to gather open-ended feedback. Aiwair uses AI to summarize all responses into a combined report that helps you grow',
    disciplines: ['business', 'design', 'coding'],
    status: 'beta',
    href: links.aiwair,
  },
};