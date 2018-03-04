import _isEmpty from 'lodash.isempty';

/**
 *
 * @param value
 * @returns {boolean}
 */
export function isFunction(value) {
  return typeof value === 'function';
}

/**
 *
 * @param value
 * @returns {boolean}
 */
export function isObject(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
}

/**
 *
 * @param value
 * @returns {any}
 */
export function isEmpty(value) {
  return _isEmpty(value);
}