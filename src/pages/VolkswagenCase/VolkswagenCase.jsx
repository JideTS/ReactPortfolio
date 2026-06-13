// src/pages/VolkswagenCase/VolkswagenCase.jsx

import PropTypes from "prop-types";
import { HashLink as Link } from "react-router-hash-link";

import { CaseStudyCard } from "../../components/CaseStudyCard/CaseStudyCard";
import { cx } from "../../utils/classNames";
import "./VolkswagenCase.css";

export const VolkswagenCase = ({ className }) => {
  return (
    <div className={cx("volkswagen-case", className)}>
      <div className="body">
        <div className="hero-banner-container" id="topAnchor">
          <div className="hero-banner-subcontainer">
            <svg
              className="vw-van-frame"
              width="5000"
              height="1000"
              viewBox="0 0 2500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
       
            >
              <g clipPath="url(#clip0_1208_38352)">
                <path
                  d="M2500.89 0H0.892578V500H2500.89V0Z"
                  fill="url(#pattern0)"
                />
                <path
                  d="M2500.89 0H0.892578V500H2500.89V0Z"
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
                    xlinkHref="#image0_1208_38352"
                    transform="matrix(0.000357143 0 0 0.00178571 0 -1.16696)"
                  />
                </pattern>
                <clipPath id="clip0_1208_38352">
                  <rect width="2500" height="500" fill="white" />
                </clipPath>
                <image
                  width="full"
                  id="image0_1208_38352"        
                  xlinkHref="/vw-hero.jpg"
                />
              </defs>
            </svg>

            <div className="hero-text-container">
              <div className="hero-title-frame">
                <div className="hero-title">VOLKSWAGEN </div>
              </div>
              <div className="hero-subtitle-frame">
                <div className="hero-subtitle">
                  Oversaw service appointment improvements, leading to a 27%
                  rise in digital bookings as a proportion of the total
                  appointments{" "}
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
              Volkswagen France aims to modernize its online service for quotes
              and appointment scheduling in dealerships in France for its brands
              Volkswagen, Audi, Skoda, and Seat. The goal is to double the
              digital share in total quotes and appointment bookings for the
              group. How did we increase by 27% the number of online appointment
              bookings and quotes made for the Volkswagen group?{" "}
            </div>
          </div>
        </div>
        <div className="db-case-collaboration-container">
          <div className="db-case-collaboration-title-frame">
            <div className="db-case-collaboration-title">TEAM SET UP </div>
          </div>
          <div className="db-case-collaboration-frame">
            <img
              className="collaborative-config-vw"
              src="/collaborative-config-vw0.png"
              alt="Volkswagen project team set-up and collaboration configuration"
            />
          </div>
        </div>
        <div className="db-case-process-container">
          <div className="db-case-process-title-frame">
            <div className="db-case-process-title">PROCESS </div>
          </div>
          <div className="db-case-process-frame">
            <div className="db-case-process">
              Examine key metrics to pinpoint obstacles and areas for enhancing
              the experience in order to drive modernization.{" "}
            </div>
          </div>
          <div className="funnel-conversion-vw-frame">
            <img
              className="funnel-conversion-vw"
              src="/funnel-conversion-vw0.png"
              alt="Conversion funnel analysis for the Volkswagen booking service"
            />
          </div>
          <div className="db-case-process-frame">
            <div className="db-case-process">
              Facilitate workshops and create wireframes, mockups, and
              prototypes for the client to visualize the new user experience.{" "}
            </div>
          </div>
          <div className="mockups-vw-frame">
            <img className="mockup-vw" src="/mockup-vw0.png" alt="Volkswagen booking experience mockup" />
          </div>
          <div className="db-case-process-frame">
            <div className="db-case-process">
              Confirm hypotheses through remote user testing and ensure
              resolution of all identified issues or friction points.{" "}
            </div>
          </div>
          <div className="vw-tests-utilisateurs-frame">
            <img className="user-test-vw" src="/user-test-vw0.png" alt="Remote user testing session results" />
          </div>
          <div className="db-case-process-frame">
            <div className="db-case-process">
              Adapt the mock-ups for the brands while considering the specific
              requirements and guidelines of each one.{" "}
            </div>
          </div>
          <div className="skoda-mockup-frame">
            <img className="skoda-mockup" src="/skoda-mockup0.png" alt="Skoda brand mockup adaptation" />
          </div>
          <div className="seat-mockup-frame">
            <img className="seat-mockup" src="/seat-mockup0.png" alt="Seat brand mockup adaptation" />
          </div>
        </div>
        <div className="db-case-proto-container">
          <div className="db-case-proto-title-frame">
            <div className="db-case-proto-title">PROTOTYPE </div>
          </div>
          <div className="db-case-proto-frame">
            <div className="db-case-proto">
              A comprehensive functional prototype demonstrating the entire
              service appointment booking journey for Volkswagen is available
              for presentation during an interview.{" "}
            </div>
          </div>
        </div>
        <div className="db-case-tech-details-container">
          <div className="db-case-tech-details-title-frame">
            <div className="db-case-tech-details-title">TECHNICAL DETAILS </div>
          </div>
          <div className="db-case-tech-details-frame">
            <div className="db-case-tech-details">
              The test prototype was crafted with Sketch and constructed via
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
              The main challenge was keeping consistent with the same design
              backbone for different brand guidelines and specificities.{" "}
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
              Maintaining consistency across various brand guidelines and
              specific requirements posed the primary challenge, necessitating a
              unified design backbone for the project.{" "}
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
              The revamp of the online service appointment portal led to a
              notable 27% surge in the digital share among the total volume of
              appointments.{" "}
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

VolkswagenCase.propTypes = {
  className: PropTypes.string,
};
