// src/components/DesignExpertiseCard/DesignExpertiseCard.jsx

/* Code generated with AutoHTML Plugin for Figma */
import "./DesignExpertiseCard.css";

export const DesignExpertiseCard = ({
  title = "Rapid Design Prototyping",
  advantage1 = "Prototyping Goals Setup",
  advantage2 = "Rapid Iterative Execution",
  advantage3 = "Live Feedback Integration",
  className,
  ...props
}) => {
  return (
    <div className={"design-expertise-card " + className}>
      <div className="design-expertise-card-title-frame">
        <div className="design-expertise-card-title">{title} </div>
      </div>
      <div className="design-expertise-card-divider"></div>
      <div className="design-expertise-card-body-frame">
        <div className="design-expertise-card-advantages">
          <div className="design-expertise-card-advantage-1">
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
                fill="#A6175A"
              />
            </svg>

            <div className="prototyping-goals-setup">{advantage1} </div>
          </div>
          <div className="design-expertise-card-advantage-2">
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
                fill="#A6175A"
              />
            </svg>

            <div className="rapid-iterative-execution">{advantage2} </div>
          </div>
          <div className="design-expertise-card-advantage-3">
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
                fill="#A6175A"
              />
            </svg>

            <div className="live-feedback-integration">{advantage3} </div>
          </div>
        </div>
      </div>
    </div>
  );
};
