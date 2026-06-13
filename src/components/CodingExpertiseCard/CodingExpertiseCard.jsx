// src/components/CodingExpertiseCard/CodingExpertiseCard.jsx

import PropTypes from "prop-types";

import { CheckmarkIcon } from "../icons/CheckmarkIcon";
import { cx } from "../../utils/classNames";
import "./CodingExpertiseCard.css";

const CHECKMARK_FILL = "#9D3801";

export const CodingExpertiseCard = ({
  title = "Customer Journey Mapping",
  advantage1 = "HTML, CSS, JavaScript",
  advantage2 = "Progressive Web Applications",
  advantage3 = "Figma + React.js",
  className,
}) => {
  const advantages = [
    { text: advantage1, checkmarkClassName: "checkmark-image", textClassName: "html-css-java-script" },
    { text: advantage2, checkmarkClassName: "checkmark-image2", textClassName: "progressive-web-applications" },
    { text: advantage3, checkmarkClassName: "checkmark-image3", textClassName: "figma-react-js" },
  ];

  return (
    <div className={cx("coding-expertise-card", className)}>
      <div className="coding-expertise-card-title-frame">
        <div className="business-expertise-card-title">{title} </div>
      </div>
      <div className="coding-expertise-card-divider"></div>
      <div className="coding-expertise-card-body-frame">
        <div className="coding-expertise-card-advantages">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.textClassName}
              className={`coding-expertise-card-advantage-${index + 1}`}
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

CodingExpertiseCard.propTypes = {
  title: PropTypes.string,
  advantage1: PropTypes.string,
  advantage2: PropTypes.string,
  advantage3: PropTypes.string,
  className: PropTypes.string,
};
