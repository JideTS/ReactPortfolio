/* eslint-disable react/prop-types */
/* Code generated with AutoHTML Plugin for Figma */
import "./BusinessExpertiseCard.css";

export const BusinessExpertiseCard = ({
  advantage1 = "Current State Research",
  advantage2 = "Strategic Ideation Workshops",
  title = "Customer Journey Mapping",
  advantage3 = "Desired State Co-creation",
  className,
  ...props
}) => {
  return (
    <div className={"business-expertise-card " + className}>
      <div className="business-expertise-card-title-frame">
        <div className="business-expertise-card-title">{title} </div>
      </div>
      <div className="business-expertise-card-divider"></div>
      <div className="business-expertise-card-body-frame">
        <div className="business-expertise-card-advantages">
          <div className="business-expertise-card-advantage-1">
            <svg
              className="checkmark-image"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5333 4.5332L5.66666 12.3999L2.46666 9.19987L1.53333 10.1665L5.66666 14.2665L14.4667 5.46654L13.5333 4.5332Z"
                fill="#356100"
              />
            </svg>

            <div className="current-state-research">{advantage1} </div>
          </div>
          <div className="business-expertise-card-advantage-2">
            <svg
              className="checkmark-image2"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5333 4.5332L5.66666 12.3999L2.46666 9.19987L1.53333 10.1665L5.66666 14.2665L14.4667 5.46654L13.5333 4.5332Z"
                fill="#356100"
              />
            </svg>

            <div className="strategic-ideation-workshops">{advantage2} </div>
          </div>
          <div className="business-expertise-card-advantage-3">
            <svg
              className="checkmark-image3"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5333 4.5332L5.66666 12.3999L2.46666 9.19987L1.53333 10.1665L5.66666 14.2665L14.4667 5.46654L13.5333 4.5332Z"
                fill="#356100"
              />
            </svg>

            <div className="desired-state-co-creation">{advantage3} </div>
          </div>
        </div>
      </div>
    </div>
  );
};
