import _escape from 'lodash.escape';
import _unescape from 'lodash.unescape';
import _escapeRegExp from 'lodash.escaperegexp';

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
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 *
 * @param str
 * @returns {string}
 */
export function camelCase(str): string {
  const camelCase = str => {
    let string = str.toLowerCase().replace(/[^A-Za-z0-9]/g, ' ').split(' ')
      .reduce((result, word) => result + capitalize(word.toLowerCase()));
    return string.charAt(0).toLowerCase() + string.slice(1)
  }

  const capitalize = str => str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
  return camelCase(str);
}

/**
 *
 * @param str
 * @returns {string}
 */
export function kebabCase(str): string {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase();
}

/**
 * Create a GUID
 * @returns {string} - The GUID
 */
export function createGUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0, v = c == 'x' ? r : ( r & 0x3 | 0x8);
        return v.toString(16);
    });

}