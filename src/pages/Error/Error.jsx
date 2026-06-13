// src/pages/Error/Error.jsx

import PropTypes from "prop-types";

import { cx } from "../../utils/classNames";
import "./Error.css";

export const Error = ({ className }) => {
  return (
    <div className={cx("error", className)}>
      <div className="body">
        <div className="error-page-title-frame">
          <div className="error-page-title">IT’S NOT YOU, IT’S ME </div>
        </div>
        <div className="error-page-picture-frame">
          <img className="error-page-picture" src="error-page-picture0.png" alt="" />
        </div>
        <div className="error-page-baseline-frame">
          <div className="error-page-baseline">
            an unexpected error happened{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

Error.propTypes = {
  className: PropTypes.string,
};
