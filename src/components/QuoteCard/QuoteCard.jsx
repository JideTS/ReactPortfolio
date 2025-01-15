// src/components/QuoteCard/QuoteCard.jsx

/* Code generated with AutoHTML Plugin for Figma */
import "./QuoteCard.css";

export const QuoteCard = ({
  quoteAuthorOrganization = "",
  quoteAuthorTitle = "",
  quote = "",
  quoteAuthorName = "",
  className,
  ...props
}) => {
  return (
    <div className={"quote-card " + className}>
      <svg
        className="quote-icon"
        width="48"
        height="47"
        viewBox="0 0 48 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 12.8C7 11.8 7.8 11 8.8 11H19.2C20.2 11 21 11.8 21 12.8V23.1C21 24.1 20.2 24.9 19.2 24.9H13C13 27.7 15.2 29.9 18 29.9V35.9C11.9 35.9 7 31 7 24.9C7 24.5 7 24 7.1 23.6C7 23.4 7 23.3 7 23.1V12.8ZM28.8 11H39.2C40.2 11 41 11.8 41 12.8V23.1C41 24.1 40.2 24.9 39.2 24.9H33C33 27.7 35.2 29.9 38 29.9V35.9C31.9 35.9 27 31 27 24.9C27 24.5 27 24 27.1 23.6C27 23.4 27 23.3 27 23.1V12.8C27 11.8 27.8 11 28.8 11Z"
          fill="#054FB9"
        />
      </svg>

      <div className="quote-text">{quote} </div>
      <div className="quote-author">
        <div className="quote-author-name">{quoteAuthorName} </div>
        <div className="quote-author-role">{quoteAuthorTitle} </div>
        <div className="quote-author-organization">
          {quoteAuthorOrganization}{" "}
        </div>
      </div>
    </div>
  );
};
