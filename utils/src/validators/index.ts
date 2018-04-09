import _isEmpty from 'lodash.isempty';
import _isEqual from 'lodash.isequal';

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

/**
 * Whether the provided value is considered a number.
 * @docs-private
 */
export function isNumber(value) {
    // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
    // and other non-number values as NaN, where Number just uses 0) but it considers the string
    // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
    return !isNaN(parseFloat(value as any)) && !isNaN(Number(value));
}

/**
 * Performs a deep comparison between two values to determine if they are equivalent.
 * @param valueA
 * @param valueB
 * @returns {boolean}
 */
export function isEqual(valueA, valueB): boolean {
    return _isEqual(valueA, valueB);
}