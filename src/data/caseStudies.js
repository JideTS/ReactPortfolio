import { assetPath } from './assets';
import { portfolioCards } from './cards';

const discoverCards = [portfolioCards.healthCheck, portfolioCards.tuneMuse, portfolioCards.aiwair];

export const caseStudies = {
  aprr: {
    id: 'aprr',
    paths: ['AprrCase', 'aprrcase'],
    title: 'APRR',
    subtitle: "How did we create a mobile application in five days to meet a client's needs?",
    heroImage: assetPath('aprr-hero.png'),
    heroAlt: 'APRR highway rest area application hero image',
    sections: [
      {
        title: 'OBJECTIVE',
        body: "APRR, the second largest highway group in France and the fourth in Europe, wants to launch a high-value mobile application to enhance the highway experience in France. A competitive study has identified a market opportunity against Google Maps and Waze: providing comprehensive information on the services offered at highway rest areas in France. The project's budgetary constraints allow five days for designers to deliver the complete user experience to the developers.",
      },
      {
        title: 'TEAM SET UP',
        image: {
          src: assetPath('collaborative-config-aprr0.png'),
          alt: 'APRR project team set-up and collaboration configuration',
          className: 'case-image-compact',
        },
      },
      {
        title: 'PROCESS',
        steps: [
          {
            body: 'Define UX proto-personas to develop empathy with future users.',
            image: { src: assetPath('aires-proto-persos0.png'), alt: 'UX proto-personas for the APRR application' },
          },
          {
            body: 'Identify the motivations of the proto-personas to design the application around their natural habits.',
            image: { src: assetPath('aires-motivations0.png'), alt: 'Proto-persona motivations analysis' },
          },
          {
            body: "Conduct a comparative graphical study and trend boards (UI) to provide the study team with insights into the trends related to the application's theme.",
            image: { src: assetPath('aires-planche-tendances0.png'), alt: 'UI trend boards and comparative graphical study' },
          },
          {
            body: "Designing the application's personality (UX) to give it a soul by defining its character from its inception.",
            image: { src: assetPath('aires-personalite-application0.png'), alt: 'Application personality definition' },
          },
          {
            body: "Create graphical concepts (UI) and generate ideas to script the application's user experience.",
            image: { src: assetPath('aires-declinaisons-ui0.png'), alt: 'UI graphical concepts and variations' },
          },
          {
            body: 'Design the application architecture (UX) and deliver wireframes during a 24-hour UX blitz.',
            image: { src: assetPath('aires-wireframes-10.png'), alt: 'Application wireframes delivered during the UX blitz' },
          },
          {
            body: 'Validate the user experience and a creative direction (UX + UI) with the client during a dedicated workshop.',
            image: { src: assetPath('aires-presentation-client0.png'), alt: 'Client presentation workshop' },
          },
          {
            body: "Create the application's design system (UI) to optimize the implementation of the chosen creative direction from the wireframes",
            image: { src: assetPath('aires-design-system0.png'), alt: 'Application design system' },
          },
          {
            body: "Develop the chosen creative direction from the wireframes and create the screens, illustrations, and prototype of the application",
            image: { src: assetPath('aires-mockups0.png'), alt: 'Final application mockups and prototype screens' },
          },
        ],
      },
      {
        title: 'PROTOTYPE',
        body: 'A comprehensive functional prototype demonstrating the application features and main experience flow is available for presentation during an interview.',
      },
      {
        title: 'TECHNICAL DETAILS',
        body: 'The prototype was crafted with Sketch and constructed via InVision. The collaborative production mode primarily followed a waterfall approach, allowing minimal room for errors.',
      },
      {
        title: 'CHALLENGES',
        body: "The main challenge was time, as the project's budgetary constraints allow five days for designers to deliver the complete user experience to the developers.",
      },
      {
        title: 'PROBLEM SOLVING',
        body: "We modified the Google Sprint approach and customized it according to our client's requirements to deliver an exceptional and influential product experience right on schedule",
      },
      {
        title: 'RESULTS AND IMPACT',
        body: "Our design's integration into the realm of trip data applications significantly transformed the core features of mainstream platforms like Google Maps and Waze, specifically enhancing the information available about highway rest areas. This achievement aligned perfectly with the primary goal of our initiative.",
      },
    ],
    moreToDiscover: [portfolioCards.healthCheck, portfolioCards.volkswagen, ...discoverCards.slice(1)],
  },
  volkswagen: {
    id: 'volkswagen',
    paths: ['VolkswagenCase', 'volkswagencase'],
    title: 'VOLKSWAGEN',
    subtitle: 'Oversaw service appointment improvements, leading to a 27% rise in digital bookings as a proportion of the total appointments',
    heroImage: assetPath('vw-hero.jpg'),
    heroAlt: 'Volkswagen service appointment project hero image',
    sections: [
      {
        title: 'OBJECTIVE',
        body: 'Volkswagen France aims to modernize its online service for quotes and appointment scheduling in dealerships in France for its brands Volkswagen, Audi, Skoda, and Seat. The goal is to double the digital share in total quotes and appointment bookings for the group. How did we increase by 27% the number of online appointment bookings and quotes made for the Volkswagen group?',
      },
      {
        title: 'TEAM SET UP',
        image: {
          src: assetPath('collaborative-config-vw0.png'),
          alt: 'Volkswagen project team set-up and collaboration configuration',
          className: 'case-image-compact',
        },
      },
      {
        title: 'PROCESS',
        steps: [
          {
            body: 'Examine key metrics to pinpoint obstacles and areas for enhancing the experience in order to drive modernization.',
            image: { src: assetPath('funnel-conversion-vw0.png'), alt: 'Conversion funnel analysis for the Volkswagen booking service' },
          },
          {
            body: 'Facilitate workshops and create wireframes, mockups, and prototypes for the client to visualize the new user experience.',
            image: { src: assetPath('mockup-vw0.png'), alt: 'Volkswagen booking experience mockup' },
          },
          {
            body: 'Confirm hypotheses through remote user testing and ensure resolution of all identified issues or friction points.',
            image: { src: assetPath('user-test-vw0.png'), alt: 'Remote user testing session results' },
          },
          {
            body: 'Adapt the mock-ups for the brands while considering the specific requirements and guidelines of each one.',
            image: { src: assetPath('skoda-mockup0.png'), alt: 'Skoda brand mockup adaptation' },
          },
          {
            image: { src: assetPath('seat-mockup0.png'), alt: 'Seat brand mockup adaptation' },
          },
        ],
      },
      {
        title: 'PROTOTYPE',
        body: 'A comprehensive functional prototype demonstrating the entire service appointment booking journey for Volkswagen is available for presentation during an interview.',
      },
      {
        title: 'TECHNICAL DETAILS',
        body: 'The test prototype was crafted with Sketch and constructed via InVision. The collaborative production mode primarily followed a waterfall approach, allowing minimal room for errors.',
      },
      {
        title: 'CHALLENGES',
        body: 'The main challenge was keeping consistent with the same design backbone for different brand guidelines and specificities.',
      },
      {
        title: 'PROBLEM SOLVING',
        body: 'Maintaining consistency across various brand guidelines and specific requirements posed the primary challenge, necessitating a unified design backbone for the project.',
      },
      {
        title: 'RESULTS AND IMPACT',
        body: 'The revamp of the online service appointment portal led to a notable 27% surge in the digital share among the total volume of appointments.',
      },
    ],
    moreToDiscover: [portfolioCards.healthCheck, portfolioCards.aprr, ...discoverCards.slice(1)],
  },
};