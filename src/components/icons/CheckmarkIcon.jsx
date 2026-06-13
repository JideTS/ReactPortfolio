// src/components/icons/CheckmarkIcon.jsx

import PropTypes from "prop-types";

/**
 * Decorative checkmark icon used by the expertise cards.
 * The `fill` colour is what differentiates each expertise category.
 */
export const CheckmarkIcon = ({ fill, className }) => (
  <svg
    className={className}
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M13.5333 4.5332L5.66666 12.3999L2.46666 9.19987L1.53333 10.1665L5.66666 14.2665L14.4667 5.46654L13.5333 4.5332Z"
      fill={fill}
    />
  </svg>
);

CheckmarkIcon.propTypes = {
  fill: PropTypes.string.isRequired,
  className: PropTypes.string,
};
