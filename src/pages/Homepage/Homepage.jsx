/* Code generated with AutoHTML Plugin for Figma */
import "./Homepage.css";
import { BusinessExpertiseCard } from "../../components/BusinessExpertiseCard/BusinessExpertiseCard";
import { CaseStudyCard } from "../../components/CaseStudyCard/CaseStudyCard";
import { DesignExpertiseCard } from "../../components/DesignExpertiseCard/DesignExpertiseCard";
import { CodingExpertiseCard } from "../../components/CodingExpertiseCard/CodingExpertiseCard";
import { QuoteCard } from "../../components/QuoteCard/QuoteCard";

import { HashLink as Link } from "react-router-hash-link";

export const Homepage = ({ className, ...props }) => {
  return (
    <div className={"homepage " + className}>
      <div className="body">
        <div id="topAnchor" className="hero-banner-container">
          <div className="hero-banner-subcontainer">
            <img className="hero-banner" src="hero-banner0.png" />
          </div>
        </div>
        <div className="client-references-container">
          <div className="client-references-title-frame">
            <div className="client-references-title">NOTABLE CLIENTS </div>
          </div>
          <div className="client-references-logos-frame">
            <div className="frame-logo-volkswagen">
              <img className="logo-volkswagen-1" src="logo-volkswagen-10.png" />
            </div>
            <div className="frame-logo-airbnb">
              <img
                className="logo-airbnb-light-1"
                src="logo-airbnb-light-10.png"
              />
            </div>
            <div className="frame-logo-google">
              <img className="logo-google-1" src="logo-google-10.png" />
            </div>
            <div className="frame-logo-bdc">
              <svg
                className="logo-bdc"
                width="122"
                height="64"
                viewBox="0 0 122 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g clipPath="url(#clip0_1210_111940)">
                  <path
                    d="M120.996 0H0.800781V64H120.996V0Z"
                    fill="url(#pattern0)"
                  />
                </g>
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_1210_111940"
                      transform="scale(0.0021645 0.00406504)"
                    />
                  </pattern>
                  <clipPath id="clip0_1210_111940">
                    <rect
                      width="121"
                      height="64"
                      fill="white"
                      transform="translate(0.800781)"
                    />
                  </clipPath>
                  <image
                    id="image0_1210_111940"
                    width="462"
                    height="246"
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="creative-approach-container">
          <div className="creative-approach-title-frame">
            <div className="creative-approach-title">CREATIVE APPROACH </div>
          </div>
          <div className="creative-approach-frame">
            <div className="creative-approach">
              In the words of Steve Jobs, <br />
              <br />
              &#039;Design is not just what it looks like and feels like. Design
              is how it works.&#039; <br />
              <br />
              This philosophy underpins my approach to creating exceptional
              digital products. <br />
              <br />I blend key ingredients:
              <br />- a factual business vision, data-driven strategies for
              value creation, and profit maximization; <br />- an unwavering
              focus on user experience, ensuring sustainable satisfaction of
              people’s needs;
              <br />- a deep understanding of diverse technology stacks,
              recognizing both their limitations and potential within legacy
              systems.
              <br />
              <br />
              My expertise lies at the intersection of Business Strategy,
              Product Design, and Computer Science, allowing me to deliver
              substantial value to clients across these verticals. By
              continuously honing these skills, I aim to grasp their nuanced
              requirements and contribute meaningfully to their success.{" "}
            </div>
          </div>
        </div>
        <div id="businessAnchor" className="business-skills-container">
          <div className="business-skills-title-frame">
            <div className="business-skills-title">BUSINESS SKILLS </div>
          </div>
          <div className="business-skills-frame">
            <div className="business-skills-sub-frame">
              <BusinessExpertiseCard
                advantage1="Current State Research"
                advantage2="Strategic Ideation Workshops"
                title="Customer Journey Mapping"
                advantage3="Desired State Co-creation"
                className="business-expertise-card-instance"
              />
              <BusinessExpertiseCard
                advantage1="Business Objectives Alignment"
                advantage2="Metrics Definition Refinement"
                title="Strategic Metric Definition"
                advantage3="Decision Mechanisms Setup"
                className="business-expertise-card-instance"
              />
            </div>
            <div className="business-skills-sub-frame">
              <BusinessExpertiseCard
                advantage1="Target Audience Analysis"
                advantage2="Digital Marketing Campaigns"
                title="User Acquisition Growth"
                advantage3="Iterative Improvement Reviews"
                className="business-expertise-card-instance"
              />
              <BusinessExpertiseCard
                advantage1="Customer Base Segmentation"
                advantage2="User Experience Personalization"
                title="Client Engagement Retention"
                advantage3="Client Feedback Enhancement"
                className="business-expertise-card-instance"
              />
            </div>
          </div>
        </div>
        <div className="business-works-container">
          <div className="business-works-title-frame">
            <div className="business-works-title">BUSINESS WORKS </div>
          </div>
          <div className="business-works-frame">
            <div className="business-works-sub-frame">
              <CaseStudyCard
                showBetaCaseFrame={false}
                showFrameLogoAirbnb={false}
                showGitHubCaseFrame={false}
                showFrameLogoAdsTrees={false}
                showFrameLogoBdc={false}
                showFrameLogoSubZeroWolf={false}
                showFrameLogoCogeco={false}
                showFrameLogoVolkswagen={false}
                showOnlineCaseFrame={false}
                showFrameLogoHealthCheck={false}
                showFrameLogoAprr={false}
                showFrameLogoSideWalkLabs={true}
                showFrameLogoTuneMuse={false}
                showFigmaCaseFrame={false}
                showDesignChip={true}
                showFrameLogoPortfolio={false}
                showAppStoreCaseFrame={false}
                showBusinessChip={true}
                caseStudyCardBody="Performed international strategic user research for Sidewalk Labs, an Alphabet group (Google) company, to uncover client needs and product requirements"
                showInterviewCaseFrame={true}
                showFrameLogoShire={false}
                showCodingChip={false}
                className="case-study-card-instance"
              />
              <CaseStudyCard
                showBetaCaseFrame={false}
                showFrameLogoAirbnb={false}
                showGitHubCaseFrame={false}
                showFrameLogoAdsTrees={false}
                showFrameLogoBdc={false}
                showFrameLogoSubZeroWolf={true}
                showFrameLogoCogeco={false}
                showFrameLogoVolkswagen={false}
                showOnlineCaseFrame={false}
                showFrameLogoHealthCheck={false}
                showFrameLogoAprr={false}
                showFrameLogoSideWalkLabs={false}
                showFrameLogoTuneMuse={false}
                showFigmaCaseFrame={false}
                showDesignChip={true}
                showFrameLogoPortfolio={false}
                showAppStoreCaseFrame={false}
                showBusinessChip={true}
                caseStudyCardBody="Collaboratively developed a comprehensive, long-term customer journey map to anticipate the future of the high-end connected kitchen"
                showInterviewCaseFrame={true}
                showFrameLogoShire={false}
                showCodingChip={false}
                className="case-study-card-instance"
              />
            </div>
            <div className="business-works-sub-frame">
              <CaseStudyCard
                showBetaCaseFrame={false}
                showFrameLogoAirbnb={true}
                showGitHubCaseFrame={false}
                showFrameLogoAdsTrees={false}
                showFrameLogoBdc={false}
                showFrameLogoSubZeroWolf={false}
                showFrameLogoCogeco={false}
                showFrameLogoVolkswagen={false}
                showOnlineCaseFrame={false}
                showFrameLogoHealthCheck={false}
                showFrameLogoAprr={false}
                showFrameLogoSideWalkLabs={false}
                showFrameLogoTuneMuse={false}
                showFigmaCaseFrame={false}
                showDesignChip={true}
                showFrameLogoPortfolio={false}
                showAppStoreCaseFrame={false}
                showBusinessChip={true}
                caseStudyCardBody="Contributed to redesigning the mutual review protocol, aiming to promote genuine reviews and bolster trust within the Airbnb community"
                showInterviewCaseFrame={true}
                showFrameLogoShire={false}
                showCodingChip={false}
                className="case-study-card-instance"
              />
              <CaseStudyCard
                showBetaCaseFrame={false}
                showFrameLogoAirbnb={false}
                showGitHubCaseFrame={false}
                showFrameLogoAdsTrees={false}
                showFrameLogoBdc={false}
                showFrameLogoSubZeroWolf={false}
                showFrameLogoCogeco={true}
                showFrameLogoVolkswagen={false}
                showOnlineCaseFrame={false}
                showFrameLogoHealthCheck={false}
                showFrameLogoAprr={false}
                showFrameLogoSideWalkLabs={false}
                showFrameLogoTuneMuse={false}
                showFigmaCaseFrame={false}
                showDesignChip={true}
                showFrameLogoPortfolio={false}
                showAppStoreCaseFrame={false}
                showBusinessChip={true}
                caseStudyCardBody="Analyzed and aligned current and desired customer lifecycles to minimize frictions, enhance satisfaction, and foster loyalty"
                showInterviewCaseFrame={true}
                showFrameLogoShire={false}
                showCodingChip={false}
                className="case-study-card-instance"
              />
            </div>
          </div>
        </div>
        <div id="designAnchor" className="design-expertises-container">
          <div className="design-expertise-title-frame">
            <div className="design-expertise-title">DESIGN EXPERTISES </div>
          </div>
          <div className="design-expertise-frame">
            <div className="design-expertise-sub-frame">
              <DesignExpertiseCard
                advantage3="Live Feedback Integration"
                advantage2="Rapid Iterative Execution"
                advantage1="Prototyping Goals Setup"
                title="Rapid Design Prototyping"
                className="design-expertise-card-instance"
              />
              <DesignExpertiseCard
                title="Agile Collaborative Design"
                advantage1="Cross Functional Alignment"
                advantage2="Iterative Continuous Deliveries"
                advantage3="User Centric Focus"
                className="design-expertise-card-instance"
              />
            </div>
            <div className="design-expertise-sub-frame">
              <DesignExpertiseCard
                title="Behavior Influence Sciences"
                advantage1="Behavior Psychology Studies"
                advantage2="Cohort Behavior Testing "
                advantage3="Data Driven Decisions"
                className="design-expertise-card-instance"
              />
              <DesignExpertiseCard
                title="User Experience Testing"
                advantage1="User Tests Management"
                advantage2="Test Sessions Animation"
                advantage3="Collected Insights Activation"
                className="design-expertise-card-instance"
              />
            </div>
          </div>
        </div>
        <div className="design-cases-container">
          <div className="design-cases-title-frame">
            <div className="design-cases-title">DESIGN CASES </div>
          </div>
          <div className="design-cases-frame">
            <div className="frame-84">
              <Link to="/aprrcase#topAnchor">
                <CaseStudyCard
                  showBetaCaseFrame={false}
                  showFrameLogoAirbnb={false}
                  showGitHubCaseFrame={false}
                  showFrameLogoAdsTrees={false}
                  showFrameLogoBdc={false}
                  showFrameLogoSubZeroWolf={false}
                  showFrameLogoCogeco={false}
                  showFrameLogoVolkswagen={false}
                  showOnlineCaseFrame={true}
                  showFrameLogoHealthCheck={false}
                  showFrameLogoAprr={true}
                  showFrameLogoSideWalkLabs={false}
                  showFrameLogoTuneMuse={false}
                  showFigmaCaseFrame={false}
                  showDesignChip={true}
                  showFrameLogoPortfolio={false}
                  showAppStoreCaseFrame={false}
                  showBusinessChip={true}
                  caseStudyCardBody="Directed a one-week Design Sprint involving executives and management to design and launch a highway road trip planning mobile app"
                  showInterviewCaseFrame={false}
                  showFrameLogoShire={false}
                  showCodingChip={false}
                  className="case-study-card-instance"
                />
              </Link>

              <Link to="/volkswagencase#topAnchor">
                <CaseStudyCard
                  showBetaCaseFrame={false}
                  showFrameLogoAirbnb={false}
                  showGitHubCaseFrame={false}
                  showFrameLogoAdsTrees={false}
                  showFrameLogoBdc={false}
                  showFrameLogoSubZeroWolf={false}
                  showFrameLogoCogeco={false}
                  showFrameLogoVolkswagen={true}
                  showOnlineCaseFrame={true}
                  showFrameLogoHealthCheck={false}
                  showFrameLogoAprr={false}
                  showFrameLogoSideWalkLabs={false}
                  showFrameLogoTuneMuse={false}
                  showFigmaCaseFrame={false}
                  showDesignChip={true}
                  showFrameLogoPortfolio={false}
                  showAppStoreCaseFrame={false}
                  showBusinessChip={true}
                  caseStudyCardBody="Oversaw service appointment improvements, leading to a 27% rise in digital bookings as a proportion of the total appointments"
                  showInterviewCaseFrame={false}
                  showFrameLogoShire={false}
                  showCodingChip={false}
                  className="case-study-card-instance"
                />
              </Link>
            </div>
            <div className="frame-83">
              <CaseStudyCard
                showBetaCaseFrame={false}
                showFrameLogoAirbnb={false}
                showGitHubCaseFrame={false}
                showFrameLogoAdsTrees={false}
                showFrameLogoBdc={true}
                showFrameLogoSubZeroWolf={false}
                showFrameLogoCogeco={false}
                showFrameLogoVolkswagen={false}
                showOnlineCaseFrame={false}
                showFrameLogoHealthCheck={false}
                showFrameLogoAprr={false}
                showFrameLogoSideWalkLabs={false}
                showFrameLogoTuneMuse={false}
                showFigmaCaseFrame={false}
                showDesignChip={true}
                showFrameLogoPortfolio={false}
                showAppStoreCaseFrame={false}
                showBusinessChip={true}
                caseStudyCardBody="Conducted cross-expertise design, created high conversion responsive financing request journeys, trained design team members on Figma"
                showInterviewCaseFrame={true}
                showFrameLogoShire={false}
                showCodingChip={false}
                className="case-study-card-instance"
              />
              <CaseStudyCard
                showBetaCaseFrame={false}
                showFrameLogoAirbnb={false}
                showGitHubCaseFrame={false}
                showFrameLogoAdsTrees={false}
                showFrameLogoBdc={false}
                showFrameLogoSubZeroWolf={false}
                showFrameLogoCogeco={false}
                showFrameLogoVolkswagen={false}
                showOnlineCaseFrame={false}
                showFrameLogoHealthCheck={false}
                showFrameLogoAprr={false}
                showFrameLogoSideWalkLabs={false}
                showFrameLogoTuneMuse={false}
                showFigmaCaseFrame={false}
                showDesignChip={true}
                showFrameLogoPortfolio={false}
                showAppStoreCaseFrame={false}
                showBusinessChip={true}
                caseStudyCardBody="Crafted a cross-platform solution delivering vital medical data to aid healthcare professionals in swiftly treating sick children, saving lives"
                showInterviewCaseFrame={true}
                showFrameLogoShire={true}
                showCodingChip={false}
                className="case-study-card-instance"
              />
            </div>
          </div>
        </div>
        <div id="codingAnchor" className="coding-toolset-container">
          <div className="coding-toolset-title-frame">
            <div className="coding-toolset-title">CODING TOOLSET </div>
          </div>
          <div className="coding-toolset-frame">
            <div className="frame-91">
              <CodingExpertiseCard
                title="Browser Based Technologies"
                advantage1="HTML, CSS, JavaScript"
                advantage2="Progressive Web Applications"
                advantage3="Figma + React.js"
                className="coding-expertise-card-instance"
              />
              <CodingExpertiseCard
                title="Mobile Application Development"
                advantage1="Swift"
                advantage2="Firebase"
                advantage3="React Native"
                className="coding-expertise-card-instance"
              />
            </div>
            <div className="frame-92">
              <CodingExpertiseCard
                title="Server Side Architecture"
                advantage1="Node.js"
                advantage2="Express"
                advantage3="User Authentication"
                className="coding-expertise-card-instance"
              />
              <CodingExpertiseCard
                title="Database Storage Management"
                advantage1="Session Storage"
                advantage2="MySQL"
                advantage3="MongoDB"
                className="coding-expertise-card-instance"
              />
            </div>
          </div>
        </div>
        <div className="coding-projects-container">
          <div className="coding-projects-title-frame">
            <div className="coding-projects-title">CODING PROJECTS </div>
          </div>
          <div className="coding-projects-frame">
            <div className="frame-85">
              <a
                href="https://apps.apple.com/ca/app/health-check-reminders/id6448612606"
                target="_blank"
                rel="noreferrer"
              >
                <CaseStudyCard
                  showBetaCaseFrame={false}
                  showFrameLogoAirbnb={false}
                  showGitHubCaseFrame={false}
                  showFrameLogoAdsTrees={false}
                  showFrameLogoBdc={false}
                  showFrameLogoSubZeroWolf={false}
                  showFrameLogoCogeco={false}
                  showFrameLogoVolkswagen={false}
                  showOnlineCaseFrame={false}
                  showFrameLogoHealthCheck={true}
                  showFrameLogoAprr={false}
                  showFrameLogoSideWalkLabs={false}
                  showFrameLogoTuneMuse={false}
                  showFigmaCaseFrame={false}
                  showDesignChip={true}
                  showFrameLogoPortfolio={false}
                  showAppStoreCaseFrame={true}
                  showBusinessChip={true}
                  caseStudyCardBody="Designed, developed and launched an iOS app promoting better human performance through fundamental health reminders"
                  showInterviewCaseFrame={false}
                  showFrameLogoShire={false}
                  showCodingChip={true}
                  className="case-study-card-instance"
                />
              </a>

              <a
                href="https://tune-muse-team.github.io/tunemuse/"
                target="_blank"
                rel="noreferrer"
              >
                <CaseStudyCard
                  showBetaCaseFrame={true}
                  showFrameLogoAirbnb={false}
                  showGitHubCaseFrame={false}
                  showFrameLogoAdsTrees={false}
                  showFrameLogoBdc={false}
                  showFrameLogoSubZeroWolf={false}
                  showFrameLogoCogeco={false}
                  showFrameLogoVolkswagen={false}
                  showOnlineCaseFrame={false}
                  showFrameLogoHealthCheck={false}
                  showFrameLogoAprr={false}
                  showFrameLogoSideWalkLabs={false}
                  showFrameLogoTuneMuse={true}
                  showFigmaCaseFrame={false}
                  showDesignChip={true}
                  showFrameLogoPortfolio={false}
                  showAppStoreCaseFrame={false}
                  showBusinessChip={true}
                  caseStudyCardBody="Designed and developed this collaborative MVP empowering music enthusiasts by helping them discover new songs via AI"
                  showInterviewCaseFrame={false}
                  showFrameLogoShire={false}
                  showCodingChip={true}
                  className="case-study-card-instance"
                />
              </a>
            </div>
            <div className="frame-86">
              <a
                href="https://www.figma.com/proto/ZEYedhkzLnv6XNF6OaA4d4/AdsTrees_Main?page-id=0%3A1&type=design&node-id=1132-15650&viewport=-24329%2C209%2C0.27&t=4vH83h6lZOqE6rOD-8&scaling=contain&starting-point-node-id=1132%3A15650&hide-ui=1"
                target="_blank"
                rel="noreferrer"
              >
                <CaseStudyCard
                  showBetaCaseFrame={false}
                  showFrameLogoAirbnb={false}
                  showGitHubCaseFrame={false}
                  showFrameLogoAdsTrees={true}
                  showFrameLogoBdc={false}
                  showFrameLogoSubZeroWolf={false}
                  showFrameLogoCogeco={false}
                  showFrameLogoVolkswagen={false}
                  showOnlineCaseFrame={false}
                  showFrameLogoHealthCheck={false}
                  showFrameLogoAprr={false}
                  showFrameLogoSideWalkLabs={false}
                  showFrameLogoTuneMuse={false}
                  showFigmaCaseFrame={true}
                  showDesignChip={true}
                  showFrameLogoPortfolio={false}
                  showAppStoreCaseFrame={false}
                  showBusinessChip={true}
                  caseStudyCardBody="Designed and developed this collaborative MVP allowing people to watch ads in exchange for planting trees, contributing to save the planet"
                  showInterviewCaseFrame={false}
                  showFrameLogoShire={false}
                  showCodingChip={true}
                  className="case-study-card-instance"
                />
              </a>

              <a
                href="https://github.com/JideTS/ReactPortfolio"
                target="_blank"
                rel="noreferrer"
              >
                <CaseStudyCard
                  showBetaCaseFrame={false}
                  showFrameLogoAirbnb={false}
                  showGitHubCaseFrame={true}
                  showFrameLogoAdsTrees={false}
                  showFrameLogoBdc={false}
                  showFrameLogoSubZeroWolf={false}
                  showFrameLogoCogeco={false}
                  showFrameLogoVolkswagen={false}
                  showOnlineCaseFrame={false}
                  showFrameLogoHealthCheck={false}
                  showFrameLogoAprr={false}
                  showFrameLogoSideWalkLabs={false}
                  showFrameLogoTuneMuse={false}
                  showFigmaCaseFrame={false}
                  showDesignChip={true}
                  showFrameLogoPortfolio={true}
                  showAppStoreCaseFrame={false}
                  showBusinessChip={true}
                  caseStudyCardBody="I led the design and coding of the React application powering this portfolio. Here feel free to discover the behind-the-scenes making-of"
                  showInterviewCaseFrame={false}
                  showFrameLogoShire={false}
                  showCodingChip={true}
                  className="case-study-card-instance"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="clients-testimonials-container">
          <div className="clients-testimonials-title-frame">
            <div className="clients-testimonials-title">
              CLIENT TESTIMONIALS{" "}
            </div>
          </div>
          <div className="clients-testimonials-frame">
            <div className="frame-93">
              <QuoteCard
                quoteAuthorOrganization="Biron"
                quoteAuthorTitle="Product Owner"
                quote="Professionalism, competence, and communication are the three words that come to mind when I think about the mandate that Jidé recently completed for us."
                quoteAuthorName="Marjolaine Buteau"
                className="quote-card-instance"
              />
              <QuoteCard
                quoteAuthorName="Jean-Yves Bernard"
                quote="Jidé brought superb UX expertise to a high-visibility project. His skills, adaptability, and approach to the field make him an excellent asset for any organization."
                quoteAuthorTitle="Director Web Experience"
                quoteAuthorOrganization="BDC"
                className="quote-card-instance"
              />
            </div>
            <div className="frame-94">
              <QuoteCard
                quoteAuthorOrganization="EY Fabernovel"
                quoteAuthorTitle="Founder and CEO"
                quote="Jidé is a top performer in all he does and brings his professional athlete background into product development. He was incredibly receptive to our feedback."
                quoteAuthorName="Stéphane Distinguin"
                className="quote-card-instance"
              />
              <QuoteCard
                quoteAuthorOrganization="Stanford University"
                quoteAuthorTitle="Research Lab Director"
                quote="Jidé is very talented and has a special sensitivity. He will do big things in the future and I am glad we had the opportunity to work together."
                quoteAuthorName="BJ Fogg"
                className="quote-card-instance"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
