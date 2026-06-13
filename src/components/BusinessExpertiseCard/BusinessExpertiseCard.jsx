// src/components/BusinessExpertiseCard/BusinessExpertiseCard.jsx

import PropTypes from "prop-types";

import { CheckmarkIcon } from "../icons/CheckmarkIcon";
import { cx } from "../../utils/classNames";
import "./BusinessExpertiseCard.css";

const CHECKMARK_FILL = "#356100";

export const BusinessExpertiseCard = ({
  advantage1 = "Current State Research",
  advantage2 = "Strategic Ideation Workshops",
  title = "Customer Journey Mapping",
  advantage3 = "Desired State Co-creation",
  className,
}) => {
  const advantages = [
    { text: advantage1, checkmarkClassName: "checkmark-image", textClassName: "current-state-research" },
    { text: advantage2, checkmarkClassName: "checkmark-image2", textClassName: "strategic-ideation-workshops" },
    { text: advantage3, checkmarkClassName: "checkmark-image3", textClassName: "desired-state-co-creation" },
  ];

  return (
    <div className={cx("business-expertise-card", className)}>
      <div className="business-expertise-card-title-frame">
        <div className="business-expertise-card-title">{title} </div>
      </div>
      <div className="business-expertise-card-divider"></div>
      <div className="business-expertise-card-body-frame">
        <div className="business-expertise-card-advantages">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.textClassName}
              className={`business-expertise-card-advantage-${index + 1}`}
            >
              <CheckmarkIcon fill={CHECKMARK_FILL} className={advantage.checkmarkClassName} />
              <div className={advantage.textClassName}>{advantage.text} </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

BusinessExpertiseCard.propTypes = {
  title: PropTypes.string,
  advantage1: PropTypes.string,
  advantage2: PropTypes.string,
  advantage3: PropTypes.string,
  className: PropTypes.string,
};
