// src/pages/Homepage/Homepage.jsx

import PropTypes from "prop-types";
import { HashLink as Link } from "react-router-hash-link";

import { BusinessExpertiseCard } from "../../components/BusinessExpertiseCard/BusinessExpertiseCard";
import { CaseStudyCard } from "../../components/CaseStudyCard/CaseStudyCard";
import { DesignExpertiseCard } from "../../components/DesignExpertiseCard/DesignExpertiseCard";
import { CodingExpertiseCard } from "../../components/CodingExpertiseCard/CodingExpertiseCard";
import { QuoteCard } from "../../components/QuoteCard/QuoteCard";
import { cx } from "../../utils/classNames";
import "./Homepage.css";

export const Homepage = ({ className }) => {
  const handleClick = () => {
    alert(
      "This case is exclusively presented during interviews, please chose a case available online or book a meeting with me."
    );
  };

  return (
    <div className={cx("homepage", className)}>
      <div className="body">
        <div id="topAnchor" className="hero-banner-container">
          <div className="hero-banner-subcontainer">
            <img className="hero-banner" src="hero-banner0.png" alt="Hero banner image" />
          </div>
        </div>
        <div className="client-references-container">
          <div className="client-references-title-frame">
            <div className="client-references-title">NOTABLE CLIENTS </div>
          </div>
          <div className="client-references-logos-frame">
            <div className="frame-logo-volkswagen">
              <img className="logo-volkswagen-1" src="logo-volkswagen-10.png" alt="Logo Volkswagen" />
            </div>
            <div className="frame-logo-airbnb">
              <img
                className="logo-airbnb-light-1"
                src="logo-airbnb-light-10.png"
                alt="Logo Airbnb"
              />
            </div>
            <div className="frame-logo-google">
              <img className="logo-google-1" src="logo-google-10.png" alt="Logo Google" />
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
                    xlinkHref="/logo-bdc-pattern.png"
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
              <br />
              <br />I blend key ingredients:
              <br />
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
                title="Client Journey Mapping"
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
                title="Customer Loyalty Tactics"
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
              <Link onClick={handleClick}>
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
              </Link>

              <Link onClick={handleClick}>
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
              </Link>
            </div>
            <div className="business-works-sub-frame">
            <Link onClick={handleClick}>
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
              </Link>

              <Link onClick={handleClick}>
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
              </Link>
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
                title="Behavior Design Sciences"
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
              <Link to="/AprrCase#topAnchor">
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

              <Link to="/VolkswagenCase#topAnchor">
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
            <Link onClick={handleClick}>
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
                caseStudyCardBody="Conducted cross-expertise design, created high conversion responsive financing request journeys, built an Angular based design system"
                showInterviewCaseFrame={true}
                showFrameLogoShire={false}
                showCodingChip={true}
                className="case-study-card-instance"
              />
              </Link>

              <Link onClick={handleClick}>
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
              </Link>
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
                title="Font End Technologies"
                advantage1="HTML, CSS, JavaScript"
                advantage2="React, Angular"
                advantage3="SwiftUI, Kotlin"
                className="coding-expertise-card-instance"
              />
              <CodingExpertiseCard
                title="Server Side Development"
                advantage1="Node"
                advantage2="Express"
                advantage3="Next"
                className="coding-expertise-card-instance"
              />
            </div>
            <div className="frame-92">
              <CodingExpertiseCard
                title="Hosted Cloud Services"
                advantage1="Azure"
                advantage2="AWS"
                advantage3="Firebase"
                className="coding-expertise-card-instance"
              />
              <CodingExpertiseCard
                title="Code Management"
                advantage1="Git"
                advantage2="npm"
                advantage3="Nexus"
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
                href="https://traigger.com"
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
                  caseStudyCardBody="Designed, developed and launched a AI based web app to help people engineer better AI prompts, using less tokens to get greater results"
                  showInterviewCaseFrame={false}
                  showFrameLogoShire={false}
                  showCodingChip={true}
                  className="case-study-card-instance"
                />
              </a>
            </div>
            <div className="frame-86">
              <a
                href="https://www.demopulse.com"
                target="_blank"
                rel="noreferrer"
              >
                <CaseStudyCard
                  showBetaCaseFrame={true}
                  showFrameLogoAirbnb={false}
                  showGitHubCaseFrame={false}
                  showFrameLogoAdsTrees={false}
                  showFrameLogoAiwair={true}
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
                  caseStudyCardBody="Designed and developed Demopulse to give people an intelligent space to follow, rate, and comment political leaders actions"
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
                  caseStudyCardBody="Led the design and coding of the React application powering this portfolio. Here feel free to discover the behind-the-scenes making-of"
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

Homepage.propTypes = {
  className: PropTypes.string,
};
