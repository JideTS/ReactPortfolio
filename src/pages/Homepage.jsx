import { CaseStudyCard } from '../components/CaseStudyCard';
import { ExpertiseCard } from '../components/ExpertiseCard';
import { PortfolioSection } from '../components/PortfolioSection';
import { QuoteCard } from '../components/QuoteCard';
import { homepage } from '../data/homepage';

const interviewMessage = 'This case is exclusively presented during interviews, please chose a case available online or book a meeting with me.';

const CardGrid = ({ cards }) => (
  <div className="card-grid">
    {cards.map((card) => (
      <CaseStudyCard key={`${card.logo.alt}-${card.body}`} card={card} onInterviewClick={() => window.alert(interviewMessage)} />
    ))}
  </div>
);

const ExpertiseGrid = ({ tone, skills }) => (
  <div className="card-grid">
    {skills.map((skill) => (
      <ExpertiseCard key={skill.title} tone={tone} {...skill} />
    ))}
  </div>
);

const DomainGroup = ({ id, title, children }) => (
  <section id={id} className={`domain-group domain-${title.toLowerCase()}`} aria-labelledby={`${id}-title`}>
    <div className="domain-header">
      <h2 id={`${id}-title`}>{title}</h2>
    </div>
    {children}
  </section>
);

export const Homepage = () => (
  <main className="page homepage">
    <section id="topAnchor" className="home-hero" aria-labelledby="hero-title">
      <img className="hero-artwork" src={homepage.hero.image} alt="" aria-hidden="true" />
      <div className="hero-copy">
        <h1 id="hero-title">{homepage.hero.name}</h1>
        <p>{homepage.hero.title}</p>
      </div>
    </section>

    <PortfolioSection id="notableClients" title="NOTABLE CLIENTS">
      <div className="client-logo-grid">
        {homepage.clientLogos.map((logo) => (
          <img key={logo.alt} className={logo.className} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </PortfolioSection>

    <PortfolioSection>
      <div className="approach-copy">
        {homepage.approach.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </PortfolioSection>

    <DomainGroup id="businessAnchor" title="BUSINESS">
      <PortfolioSection title="SKILLS" headingLevel={3}>
        <ExpertiseGrid tone="business" skills={homepage.skills.business} />
      </PortfolioSection>

      <PortfolioSection title="WORKS" headingLevel={3}>
        <CardGrid cards={homepage.cardSections[0].cards} />
      </PortfolioSection>
    </DomainGroup>

    <DomainGroup id="designAnchor" title="DESIGN">
      <PortfolioSection title="EXPERTISES" headingLevel={3}>
        <ExpertiseGrid tone="design" skills={homepage.skills.design} />
      </PortfolioSection>

      <PortfolioSection title="CASES" headingLevel={3}>
        <CardGrid cards={homepage.cardSections[1].cards} />
      </PortfolioSection>
    </DomainGroup>

    <DomainGroup id="codingAnchor" title="CODING">
      <PortfolioSection title="TOOLSET" headingLevel={3}>
        <ExpertiseGrid tone="coding" skills={homepage.skills.coding} />
      </PortfolioSection>

      <PortfolioSection title="PROJECTS" headingLevel={3}>
        <CardGrid cards={homepage.cardSections[2].cards} />
      </PortfolioSection>
    </DomainGroup>

    <DomainGroup id="testimonialsAnchor" title="TESTIMONIALS">
      <PortfolioSection>
        <div className="card-grid testimonials-grid">
          {homepage.testimonials.map((quote) => (
            <QuoteCard key={quote.author} {...quote} />
          ))}
        </div>
      </PortfolioSection>
    </DomainGroup>
  </main>
);