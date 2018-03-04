import _escape from 'lodash.escape';
import _unescape from 'lodash.unescape';
import _escapeRegExp from 'lodash.escaperegexp';
import _capitalize from 'lodash.capitalize';


/**
 *
 * @param str
 */
export function escape(str) {
  return _escape(str);
}

/**
 *
 * @param str
 */
export function unescape(str) {
  return _unescape(str);
}

/**
 *
 * @param str
 * @returns {any}
 */
export function escapeRegExp(str) {
  return _escapeRegExp(str);
}

/**
 *
 * @param str
 * @returns {any}
 */
export function capitalize(str) {
  return _capitalize(str);
}
