// src/components/CodingExpertiseCard/CodingExpertiseCard.jsx

/* Code generated with AutoHTML Plugin for Figma */
import "./CodingExpertiseCard.css";

export const CodingExpertiseCard = ({
  title = "Customer Journey Mapping",
  advantage1 = "HTML, CSS, JavaScript",
  advantage2 = "Progressive Web Applications",
  advantage3 = "Figma + React.js",
  className,
  ...props
}) => {
  return (
    <div className={"coding-expertise-card " + className}>
      <div className="coding-expertise-card-title-frame">
        <div className="business-expertise-card-title">{title} </div>
      </div>
      <div className="coding-expertise-card-divider"></div>
      <div className="coding-expertise-card-body-frame">
        <div className="coding-expertise-card-advantages">
          <div className="coding-expertise-card-advantage-1">
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
                fill="#9D3801"
              />
            </svg>

            <div className="html-css-java-script">{advantage1} </div>
          </div>
          <div className="coding-expertise-card-advantage-2">
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
                fill="#9D3801"
              />
            </svg>

            <div className="progressive-web-applications">{advantage2} </div>
          </div>
          <div className="coding-expertise-card-advantage-3">
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
                fill="#9D3801"
              />
            </svg>

            <div className="figma-react-js">{advantage3} </div>
          </div>
        </div>
      </div>
    </div>
  );
};
