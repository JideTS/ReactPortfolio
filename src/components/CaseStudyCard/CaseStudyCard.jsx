// src/components/CaseStudyCard/CaseStudyCard.jsx

import PropTypes from "prop-types";

import { GlobeIcon, InterviewIcon } from "../icons/CaseLinkIcons";
import { cx } from "../../utils/classNames";
import "./CaseStudyCard.css";

// Client logos, rendered in this fixed order. `show` maps each logo to the
// boolean prop that controls its visibility.
const LOGOS = [
  { show: "showFrameLogoSideWalkLabs", frameClassName: "frame-logo-side-walk-labs", imgClassName: "sidewalk-labs-logo-2018", src: "sidewalk-labs-logo-20180.png", alt: "Logo Sidewalks Labs" },
  { show: "showFrameLogoAiwair", frameClassName: "frame-logo-aiwair", imgClassName: "logo-aiwair", src: "logo-demopulse0.png", alt: "Logo Demopulse" },
  { show: "showFrameLogoSubZeroWolf", frameClassName: "frame-logo-sub-zero-wolf", imgClassName: "logo-szw-1", src: "logo-szw-10.png", alt: "Logo Sub Zero Wolf" },
  { show: "showFrameLogoAirbnb", frameClassName: "frame-logo-airbnb", imgClassName: "logo-airbnb", src: "logo-airbnb0.png", alt: "Logo Airbnb" },
  { show: "showFrameLogoCogeco", frameClassName: "frame-logo-cogeco", imgClassName: "logo-cogeco", src: "logo-cogeco0.png", alt: "Logo Cogeco" },
  { show: "showFrameLogoVolkswagen", frameClassName: "frame-logo-volkswagen", imgClassName: "logo-volkswagen", src: "logo-volkswagen0.png", alt: "Logo Volkswagen" },
  { show: "showFrameLogoBdc", frameClassName: "frame-logo-bdc", imgClassName: "logo-bdc-1", src: "logo-bdc-10.png", alt: "Logo BDC" },
  { show: "showFrameLogoAprr", frameClassName: "frame-logo-aprr", imgClassName: "aprr-logo", src: "aprr-logo0.png", alt: "Logo APRR" },
  { show: "showFrameLogoShire", frameClassName: "frame-logo-shire", imgClassName: "shire-logo", src: "shire-logo0.png", alt: "Logo Shire" },
  { show: "showFrameLogoHealthCheck", frameClassName: "frame-logo-health-check", imgClassName: "logo-health-check", src: "logo-health-check0.png", alt: "Logo Health Check" },
  { show: "showFrameLogoTuneMuse", frameClassName: "frame-logo-tune-muse", imgClassName: "traigger-logo", src: "traigger-logo0.png", alt: "Logo Traigger" },
  { show: "showFrameLogoAdsTrees", frameClassName: "frame-logo-ads-trees", imgClassName: "ads-trees-logo", src: "logo-demopulse0.png", alt: "Logo Demopulse" },
  { show: "showFrameLogoPortfolio", frameClassName: "frame-logo-portfolio", imgClassName: "logo-portfolio", src: "logo-portfolio0.png", alt: "Logo Portfolio" },
];

// Expertise chips, rendered in this fixed order.
const CHIPS = [
  { show: "showBusinessChip", chipClassName: "business-chip", labelClassName: "business", label: "BUSINESS " },
  { show: "showDesignChip", chipClassName: "design-chip", labelClassName: "design", label: "DESIGN " },
  { show: "showCodingChip", chipClassName: "coding-chip", labelClassName: "code", label: "CODE " },
];

// Call-to-action link frames, rendered in this fixed order. The interview frame
// uses a dedicated icon; every other frame uses the shared globe icon.
const LINK_FRAMES = [
  { show: "showInterviewCaseFrame", frameClassName: "interview-case-frame", iconClassName: "interview", labelClassName: "interview-case", label: "Presented during interviews ", Icon: InterviewIcon },
  { show: "showOnlineCaseFrame", frameClassName: "online-case-frame", iconClassName: "internet", labelClassName: "online-case", label: "Online ", Icon: GlobeIcon },
  { show: "showAppStoreCaseFrame", frameClassName: "app-store-case-frame", iconClassName: "internet2", labelClassName: "app-store", label: "View on the AppStore ", Icon: GlobeIcon },
  { show: "showGitHubCaseFrame", frameClassName: "git-hub-case-frame", iconClassName: "internet3", labelClassName: "git-hub", label: "View on GitHub ", Icon: GlobeIcon },
  { show: "showFigmaCaseFrame", frameClassName: "figma-case-frame", iconClassName: "internet4", labelClassName: "figma", label: "Take the Figma prototype ", Icon: GlobeIcon },
  { show: "showBetaCaseFrame", frameClassName: "beta-case-frame", iconClassName: "internet5", labelClassName: "beta", label: "Try the Beta version ", Icon: GlobeIcon },
];

export const CaseStudyCard = ({
  showBetaCaseFrame = true,
  showGitHubCaseFrame = true,
  showFrameLogoAdsTrees = true,
  showFrameLogoSubZeroWolf = true,
  showFrameLogoAirbnb = true,
  showFrameLogoCogeco = true,
  showFrameLogoVolkswagen = true,
  showOnlineCaseFrame = true,
  showFrameLogoHealthCheck = true,
  showFrameLogoBdc = true,
  showFrameLogoAprr = true,
  showFrameLogoSideWalkLabs = true,
  showFrameLogoTuneMuse = true,
  showFigmaCaseFrame = true,
  showDesignChip = true,
  showFrameLogoPortfolio = true,
  showFrameLogoAiwair = false,
  showAppStoreCaseFrame = true,
  showBusinessChip = true,
  caseStudyCardBody = "Performed international strategic user research for Sidewalk Labs, an Alphabet group (Google) company, to uncover client needs and product requirements",
  showInterviewCaseFrame = true,
  showFrameLogoShire = true,
  showCodingChip = true,
  className,
}) => {
  const flags = {
    showBetaCaseFrame,
    showGitHubCaseFrame,
    showFrameLogoAdsTrees,
    showFrameLogoSubZeroWolf,
    showFrameLogoAirbnb,
    showFrameLogoCogeco,
    showFrameLogoVolkswagen,
    showOnlineCaseFrame,
    showFrameLogoHealthCheck,
    showFrameLogoBdc,
    showFrameLogoAprr,
    showFrameLogoSideWalkLabs,
    showFrameLogoTuneMuse,
    showFigmaCaseFrame,
    showDesignChip,
    showFrameLogoPortfolio,
    showFrameLogoAiwair,
    showAppStoreCaseFrame,
    showBusinessChip,
    showInterviewCaseFrame,
    showFrameLogoShire,
    showCodingChip,
  };

  return (
    <div className={cx("case-study-card", className)}>
      <div className="case-study-card-client-logo-frame">
        {LOGOS.filter((logo) => flags[logo.show]).map((logo) => (
          <div key={logo.frameClassName} className={logo.frameClassName}>
            <img className={logo.imgClassName} src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
      <div className="case-study-card-divider"></div>
      <div className="case-study-card-body-frame">
        <div className="case-study-card-body">{caseStudyCardBody} </div>
      </div>
      <div className="case-study-card-divider"></div>
      <div className="case-study-card-expertise-chips-frame">
        {CHIPS.filter((chip) => flags[chip.show]).map((chip) => (
          <div key={chip.chipClassName} className={chip.chipClassName}>
            <div className={chip.labelClassName}>{chip.label}</div>
          </div>
        ))}
      </div>
      <div className="case-study-card-divider"></div>
      {LINK_FRAMES.filter((frame) => flags[frame.show]).map(({ Icon, ...frame }) => (
        <div key={frame.frameClassName} className={frame.frameClassName}>
          <Icon className={frame.iconClassName} />
          <div className={frame.labelClassName}>{frame.label}</div>
        </div>
      ))}
    </div>
  );
};

CaseStudyCard.propTypes = {
  showBetaCaseFrame: PropTypes.bool,
  showGitHubCaseFrame: PropTypes.bool,
  showFrameLogoAdsTrees: PropTypes.bool,
  showFrameLogoSubZeroWolf: PropTypes.bool,
  showFrameLogoAirbnb: PropTypes.bool,
  showFrameLogoCogeco: PropTypes.bool,
  showFrameLogoVolkswagen: PropTypes.bool,
  showOnlineCaseFrame: PropTypes.bool,
  showFrameLogoHealthCheck: PropTypes.bool,
  showFrameLogoBdc: PropTypes.bool,
  showFrameLogoAprr: PropTypes.bool,
  showFrameLogoSideWalkLabs: PropTypes.bool,
  showFrameLogoTuneMuse: PropTypes.bool,
  showFigmaCaseFrame: PropTypes.bool,
  showDesignChip: PropTypes.bool,
  showFrameLogoPortfolio: PropTypes.bool,
  showFrameLogoAiwair: PropTypes.bool,
  showAppStoreCaseFrame: PropTypes.bool,
  showBusinessChip: PropTypes.bool,
  caseStudyCardBody: PropTypes.string,
  showInterviewCaseFrame: PropTypes.bool,
  showFrameLogoShire: PropTypes.bool,
  showCodingChip: PropTypes.bool,
  className: PropTypes.string,
};
