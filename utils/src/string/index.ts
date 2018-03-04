import _escape from 'lodash.escape';
import _unescape from 'lodash.unescape';
import _escapeRegExp from 'lodash.escaperegexp';
import _capitalize from 'lodash.capitalize';
import _camelCase from 'lodash.camelcase';
import _kebabcase from 'lodash.kebabcase';

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

/**
 *
 * @param str
 * @returns {string}
 */
export function camelCase(str): string {
  return _camelCase(str);
}

/**
 *
 * @param str
 * @returns {string}
 */
export function kebabCase(str): string {
  return _kebabcase(str);
}
