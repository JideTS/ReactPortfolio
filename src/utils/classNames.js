// src/utils/classNames.js

/**
 * Join truthy class name values into a single, space-separated string.
 * Falsy values (undefined, null, false, "") are ignored so optional
 * `className` props never leak an "undefined" class into the DOM.
 *
 * @param {...(string|false|null|undefined)} classNames
 * @returns {string}
 */
export const cx = (...classNames) => classNames.filter(Boolean).join(" ");
