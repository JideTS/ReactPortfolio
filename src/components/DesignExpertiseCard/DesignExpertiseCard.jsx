// src/components/DesignExpertiseCard/DesignExpertiseCard.jsx

import PropTypes from "prop-types";

import { CheckmarkIcon } from "../icons/CheckmarkIcon";
import { cx } from "../../utils/classNames";
import "./DesignExpertiseCard.css";

const CHECKMARK_FILL = "#A6175A";

export const DesignExpertiseCard = ({
  title = "Rapid Design Prototyping",
  advantage1 = "Prototyping Goals Setup",
  advantage2 = "Rapid Iterative Execution",
  advantage3 = "Live Feedback Integration",
  className,
}) => {
  const advantages = [
    { text: advantage1, checkmarkClassName: "checkmark-image", textClassName: "prototyping-goals-setup" },
    { text: advantage2, checkmarkClassName: "checkmark-image2", textClassName: "rapid-iterative-execution" },
    { text: advantage3, checkmarkClassName: "checkmark-image3", textClassName: "live-feedback-integration" },
  ];

  return (
    <div className={cx("design-expertise-card", className)}>
      <div className="design-expertise-card-title-frame">
        <div className="design-expertise-card-title">{title} </div>
      </div>
      <div className="design-expertise-card-divider"></div>
      <div className="design-expertise-card-body-frame">
        <div className="design-expertise-card-advantages">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.textClassName}
              className={`design-expertise-card-advantage-${index + 1}`}
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

DesignExpertiseCard.propTypes = {
  title: PropTypes.string,
  advantage1: PropTypes.string,
  advantage2: PropTypes.string,
  advantage3: PropTypes.string,
  className: PropTypes.string,
};
