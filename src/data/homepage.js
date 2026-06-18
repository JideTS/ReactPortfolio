import { assetPath } from './assets';
import { portfolioCards } from './cards';

export const homepage = {
  hero: {
    image: assetPath('hero-artwork.svg'),
    name: 'JIDÉ',
    title: 'AI Design Engineer',
  },
  clientLogos: [
    { src: assetPath('logo-volkswagen-10.png'), alt: 'Logo Volkswagen', className: 'client-logo-mark' },
    { src: assetPath('logo-airbnb-light-10.png'), alt: 'Logo Airbnb', className: 'client-logo-mark' },
    { src: assetPath('logo-google-10.png'), alt: 'Logo Google', className: 'client-logo-mark' },
    { src: assetPath('logo-bdc-10.png'), alt: 'Logo BDC', className: 'client-logo-wide' },
  ],
  approach: [
    'My expertise lies at the intersection of Business Strategy, Product Design, and Computer Science, allowing me to deliver substantial value to clients across these verticals. By continuously honing these skills, I aim to grasp their nuanced requirements and contribute meaningfully to their success.',
  ],
  skills: {
    business: [
      {
        title: 'Client Journey Mapping',
        advantages: ['Current State Research', 'Strategic Ideation Workshops', 'Desired State Co-creation'],
      },
      {
        title: 'Strategic Metric Definition',
        advantages: ['Business Objectives Alignment', 'Metrics Definition Refinement', 'Decision Mechanisms Setup'],
      },
      {
        title: 'User Acquisition Growth',
        advantages: ['Target Audience Analysis', 'Digital Marketing Campaigns', 'Iterative Improvement Reviews'],
      },
      {
        title: 'Customer Loyalty Tactics',
        advantages: ['Customer Base Segmentation', 'User Experience Personalization', 'Client Feedback Enhancement'],
      },
    ],
    design: [
      {
        title: 'Rapid Design Prototyping',
        advantages: ['Prototyping Goals Setup', 'Rapid Iterative Execution', 'Live Feedback Integration'],
      },
      {
        title: 'Agile Collaborative Design',
        advantages: ['Cross Functional Alignment', 'Iterative Continuous Deliveries', 'User Centric Focus'],
      },
      {
        title: 'Behavior Design Sciences',
        advantages: ['Behavior Psychology Studies', 'Cohort Behavior Testing', 'Data Driven Decisions'],
      },
      {
        title: 'User Experience Testing',
        advantages: ['User Tests Management', 'Test Sessions Animation', 'Collected Insights Activation'],
      },
    ],
    coding: [
      {
        title: 'Front End Technologies',
        advantages: ['HTML, CSS, JavaScript', 'React, Angular', 'SwiftUI, Kotlin'],
      },
      {
        title: 'Server Side Development',
        advantages: ['Node', 'Express', 'Next'],
      },
      {
        title: 'Hosted Cloud Services',
        advantages: ['Azure', 'AWS', 'Firebase'],
      },
      {
        title: 'Code Management',
        advantages: ['Git', 'npm', 'Nexus'],
      },
    ],
  },
  cardSections: [
    {
      title: 'WORKS',
      cards: [portfolioCards.sidewalkLabs, portfolioCards.subZeroWolf, portfolioCards.airbnb, portfolioCards.cogeco],
    },
    {
      title: 'CASES',
      cards: [portfolioCards.aprr, portfolioCards.volkswagen, portfolioCards.bdc, portfolioCards.shire],
    },
    {
      title: 'PROJECTS',
      cards: [portfolioCards.healthCheck, portfolioCards.traigger, portfolioCards.demopulse, portfolioCards.portfolio],
    },
  ],
  testimonials: [
    {
      quote: 'Professionalism, competence, and communication are the three words that come to mind when I think about the mandate that Jidé recently completed for us.',
      author: 'Marjolaine Buteau',
      title: 'Product Owner',
      organization: 'Biron',
    },
    {
      quote: 'Jidé brought superb UX expertise to a high-visibility project. His skills, adaptability, and approach to the field make him an excellent asset for any organization.',
      author: 'Jean-Yves Bernard',
      title: 'Director Web Experience',
      organization: 'BDC',
    },
    {
      quote: 'Jidé is a top performer in all he does and brings his professional athlete background into product development. He was incredibly receptive to our feedback.',
      author: 'Stéphane Distinguin',
      title: 'Founder and CEO',
      organization: 'EY Fabernovel',
    },
    {
      quote: 'Jidé is very talented and has a special sensitivity. He will do big things in the future and I am glad we had the opportunity to work together.',
      author: 'BJ Fogg',
      title: 'Research Lab Director',
      organization: 'Stanford University',
    },
  ],
};