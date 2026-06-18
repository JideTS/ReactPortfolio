import { CaseStudyCard } from '../components/CaseStudyCard';
import { PortfolioSection } from '../components/PortfolioSection';

const renderImage = (image) => (
  <figure className="case-figure">
    <img className={image.className || ''} src={image.src} alt={image.alt} />
  </figure>
);

const renderBody = (body) => (body ? <p className="case-copy">{body}</p> : null);

export const CasePage = ({ caseStudy }) => (
  <main className={`page case-page ${caseStudy.id}`}>
    <section id="topAnchor" className="case-hero">
      <img src={caseStudy.heroImage} alt={caseStudy.heroAlt} />
      <div className="case-hero-overlay" />
      <div className="case-hero-copy">
        <h1>{caseStudy.title}</h1>
        <p>{caseStudy.subtitle}</p>
      </div>
    </section>

    {caseStudy.sections.map((section) => (
      <PortfolioSection key={section.title} title={section.title} narrow={!section.steps && !section.image}>
        {renderBody(section.body)}
        {section.image ? renderImage(section.image) : null}
        {section.steps?.map((step) => (
          <div className="case-step" key={`${section.title}-${step.body || step.image.alt}`}>
            {renderBody(step.body)}
            {step.image ? renderImage(step.image) : null}
          </div>
        ))}
      </PortfolioSection>
    ))}

    <PortfolioSection title="MORE TO DISCOVER">
      <div className="card-grid discover-grid">
        {caseStudy.moreToDiscover.map((card) => (
          <CaseStudyCard key={`${card.logo.alt}-${card.body}`} card={card} />
        ))}
      </div>
    </PortfolioSection>
  </main>
);