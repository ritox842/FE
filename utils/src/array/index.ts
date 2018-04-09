import _intersection from 'lodash.intersection';
import _union from 'lodash.union';
import _difference from 'lodash.difference';
import _findIndex from 'lodash.findindex';
import _minBy from 'lodash.minby';

/**
 *
 * @param arrays
 */
export function intersection(...arrays) {
  return _intersection(...arrays);
}

/**
 *
 * @param arrays
 */
export function union(...arrays) {
  return _union(...arrays);
}

/**
 *
 * @param arrays
 */
export function difference(...arrays) {
  return _difference(...arrays);
}

/**
 *
 * @param array
 * @param predicate
 * @param fromIndex
 */
export function findIndex(array, predicate?, fromIndex?) {
  if (!Array.prototype.findIndex) {
      return array.findIndex(predicate);
  }
  
  return _findIndex(array, predicate, fromIndex);
}

/**
 *
 * @param array
 * @param iteratee
 */
export function minBy(array, iteratee) {
  return _minBy(array, iteratee);
}

/**
 *
 *
 * @template T
 * @param {T[]} arr
 * @returns {T} - last element in array or undefined if no elemnets.
 * @memberof ArrayUtil
 */
export function last<T>(arr: T[]): T {
  return arr && arr.length ? arr[arr.length - 1] : undefined;
}

/**
 * Remove array duplicates
 * @param array
 */
export function uniq<T>(array: T[]): T[] {
    return Array.from(new Set(array));
}

/**
 * Remove the first n (passed param) items in the given array
 * @param {T[]} array - The array to drop from
 * @param {number} n - number of items to remove defaults to 1
 * @returns {T[]}
 */
export function drop<T>(array: T[], n = 1): T[] {
    return array.filter((e, index) => index >= n);
}

/**
 * Remove the item in a given index from array
 * @param {T[]} array - The array to drop from
 * @param removeIndex - The target item index
 * @returns {T[]}
 */
export function dropIndex<T>(array: T[], removeIndex): T[] {
    return array.slice().splice(removeIndex, 1);
}