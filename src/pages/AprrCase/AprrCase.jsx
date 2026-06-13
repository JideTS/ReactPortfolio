// src/pages/AprrCase/AprrCase.jsx

import PropTypes from "prop-types";
import { HashLink as Link } from "react-router-hash-link";

import { CaseStudyCard } from "../../components/CaseStudyCard/CaseStudyCard";
import { cx } from "../../utils/classNames";
import "./AprrCase.css";

export const AprrCase = ({ className }) => {
  return (
    <div className={cx("aprr-case", className)}>
      <div className="body">
        <div className="hero-banner-container" id="topAnchor">
          <div className="hero-banner-subcontainer">
            <svg
              className="aprr-aires"
              width="5000"
              height="1000"
              viewBox="0 0 2500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g clipPath="url(#clip0_1208_38434)">
                <path d="M2500 0H0V500H2500V0Z" fill="url(#pattern0)" />
                <path
                  d="M2500 0H0V500H2500V0Z"
                  fill="black"
                  fillOpacity="0.84"
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
                    xlinkHref="#image0_1208_38434"
                    transform="matrix(0.000520833 0 0 0.00260417 0 -0.90625)"
                  />
                </pattern>
                <clipPath id="clip0_1208_38434">
                  <rect width="2500" height="500" fill="white" />
                </clipPath>
                <image
                  id="image0_1208_38434"
                  width="full"
                  xlinkHref="/aprr-hero.png"
                />
              </defs>
            </svg>

            <div className="hero-text-container">
              <div className="hero-title-frame">
                <div className="hero-title">APRR </div>
              </div>
              <div className="hero-subtitle-frame">
                <div className="hero-subtitle">
                  How did we create a mobile application in five days to meet a
                  client&#039;s needs?{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="db-case-objective-container">
          <div className="db-case-objective-title-frame">
            <div className="db-case-objective-title">OBJECTIVE </div>
          </div>
          <div className="db-case-objective-frame">
            <div className="db-case-objective">
              APRR, the second largest highway group in France and the fourth in
              Europe, wants to launch a high-value mobile application to enhance
              the highway experience in France. A competitive study has
              identified a market opportunity against Google Maps and Waze:
              providing comprehensive information on the services offered at
              highway rest areas in France. The project&#039;s budgetary
              constraints allow five days for designers to deliver the complete
              user experience to the developers.{" "}
            </div>
          </div>
        </div>
        <div className="db-case-collaboration-container">
          <div className="db-case-collaboration-title-frame">
            <div className="db-case-collaboration-title">TEAM SET UP </div>
          </div>
          <div className="db-case-collaboration-frame">
            <img
              className="collaborative-config-aprr"
              src="/collaborative-config-aprr0.png"
              alt="APRR project team set-up and collaboration configuration"
            />
          </div>
        </div>
        <div className="db-case-process-container">
          <div className="db-case-process-title-frame">
            <div className="db-case-process-title">PROCESS </div>
          </div>
          <div className="db-case-process-frame">
            <div className="db-case-process">
              Define UX proto-personas to develop empathy with future users.{" "}
            </div>
          </div>
          <div className="aires-proto-pero-frame">
            <img className="aires-proto-persos" src="/aires-proto-persos0.png" alt="UX proto-personas for the APRR application" />
          </div>
          <div className="db-case-process-frame">
            <div className="db-case-process">
              Identify the motivations of the proto-personas to design the
              application around their natural habits.{" "}
            </div>
          </div>
          <div className="aires-motivations-frame">
            <img className="aires-motivations" src="/aires-motivations0.png" alt="Proto-persona motivations analysis" />
          </div>
          <div className="db-case-process-frame">
            <div className="db-case-process">
              Conduct a comparative graphical study and trend boards (UI) to
              provide the study team with insights into the trends related to
              the application&#039;s theme.{" "}
            </div>
          </div>
          <div className="aires-planche-tendances-frame">
            <img
              className="aires-planche-tendances"
              src="/aires-planche-tendances0.png"
              alt="UI trend boards and comparative graphical study"
            />
          </div>
          <div className="db-case-process-frame">
            <div className="db-case-process">
              Designing the application&#039;s personality (UX) to give it a
              soul by defining its character from its inception.{" "}
            </div>
          </div>
          <div className="aires-personalite-application-frame">
            <img
              className="aires-personalite-application"
              src="/aires-personalite-application0.png"
              alt="Application personality definition"
            />
          </div>
          <div className="db-case-process-frame">
            <div className="db-case-process">
              Create graphical concepts (UI) and generate ideas to script the
              application&#039;s user experience.{" "}
            </div>
          </div>
          <div className="aires-declinaisons-ui-frame">
            <img
              className="aires-declinaisons-ui"
              src="/aires-declinaisons-ui0.png"
              alt="UI graphical concepts and variations"
            />
          </div>
          <div className="db-case-process-frame">
            <div className="db-case-process">
              Design the application architecture (UX) and deliver wireframes
              during a 24-hour UX blitz.{" "}
            </div>
          </div>
          <div className="aires-wireframes-frame">
            <img className="aires-wireframes" src="aires-wireframes-10.png" alt="Application wireframes delivered during the UX blitz" />
          </div>
          <div className="db-case-process-frame">
            <div className="db-case-process">
              Validate the user experience and a creative direction (UX + UI)
              with the client during a dedicated workshop.{" "}
            </div>
          </div>
          <div className="aires-presentation-client-frame">
            <img
              className="aires-presentation-client"
              src="/aires-presentation-client0.png"
              alt="Client presentation workshop"
            />
          </div>
          <div className="db-case-process-frame">
            <div className="db-case-process">
              Create the application&#039;s design system (UI) to optimize the
              implementation of the chosen creative direction from the
              wireframes{" "}
            </div>
          </div>
          <div className="aires-design-system-frame">
            <img
              className="aires-design-system"
              src="/aires-design-system0.png"
              alt="Application design system"
            />
          </div>
          <div className="db-case-process-frame">
            <div className="db-case-process">
              Develop the chosen creative direction from the wireframes and
              create the screens, illustrations, and prototype of the
              application{" "}
            </div>
          </div>
          <div className="aires-mockups-frame">
            <img className="aires-mockups" src="/aires-mockups0.png" alt="Final application mockups and prototype screens" />
          </div>
        </div>
        <div className="db-case-proto-container">
          <div className="db-case-proto-title-frame">
            <div className="db-case-proto-title">PROTOTYPE </div>
          </div>
          <div className="db-case-proto-frame">
            <div className="db-case-proto">
              A comprehensive functional prototype demonstrating the application
              features and main experience flow is available for presentation
              during an interview.{" "}
            </div>
          </div>
        </div>
        <div className="db-case-tech-details-container">
          <div className="db-case-tech-details-title-frame">
            <div className="db-case-tech-details-title">TECHNICAL DETAILS </div>
          </div>
          <div className="db-case-tech-details-frame">
            <div className="db-case-tech-details">
              The prototype was crafted with Sketch and constructed via
              InVision. The collaborative production mode primarily followed a
              waterfall approach, allowing minimal room for errors.{" "}
            </div>
          </div>
        </div>
        <div className="db-case-challenges-container">
          <div className="db-case-challenges-title-frame">
            <div className="db-case-challenges-title">CHALLENGES </div>
          </div>
          <div className="db-case-challenges-frame">
            <div className="db-case-challenges">
              The main challenge was time, as the project&#039;s budgetary
              constraints allow five days for designers to deliver the complete
              user experience to the developers.{" "}
            </div>
          </div>
        </div>
        <div className="db-case-problem-solving-container">
          <div className="db-case-problem-solving-title-frame">
            <div className="db-case-problem-solving-title">
              PROBLEM SOLVING{" "}
            </div>
          </div>
          <div className="db-case-problem-solving-frame">
            <div className="db-case-problem-solving">
              We modified the Google Sprint approach and customized it according
              to our client&#039;s requirements to deliver an exceptional and
              influential product experience right on schedule{" "}
            </div>
          </div>
        </div>
        <div className="db-case-results-impact-container">
          <div className="db-case-results-impact-title-frame">
            <div className="db-case-results-impact-title">
              RESULTS AND IMPACT{" "}
            </div>
          </div>
          <div className="db-case-results-impact-frame">
            <div className="db-case-results-impact">
              Our design&#039;s integration into the realm of trip data
              applications significantly transformed the core features of
              mainstream platforms like Google Maps and Waze, specifically
              enhancing the information available about highway rest areas. This
              achievement aligned perfectly with the primary goal of our
              initiative.{" "}
            </div>
          </div>
        </div>
        <div className="other-online-cases-container">
          <div className="other-online-cases-title-frame">
            <div className="other-online-cases-title">MORE TO DISCOVER </div>
          </div>
          <div className="other-online-cases-frame">
            <div className="other-online-cases-sub-frame">
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

              <a
                href="https://www.aiwair.com"
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
                  caseStudyCardBody="Designed and developed this application to gather open-ended feedback. Aiwair uses AI to summarize all responses into a combined report that helps you grow"
                  showInterviewCaseFrame={false}
                  showFrameLogoShire={false}
                  showCodingChip={true}
                  className="case-study-card-instance"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AprrCase.propTypes = {
  className: PropTypes.string,
};
