import _sortby from 'lodash.sortby';
import _find from 'lodash.find';
import _forEach from 'lodash.foreach';
import _map from 'lodash.map';
import _keyBy from 'lodash.keyby';
import _reject from 'lodash.reject';
import _groupBy from 'lodash.groupby';
import _filter from 'lodash.filter';
import _findKey from 'lodash.findkey';
import { toBoolean } from '../coercion';
import {isObject} from '../validators';

/**
 *
 * @param collection
 * @param predicate
 */
export function findKey(collection, predicate) {
  return _findKey(collection, predicate);
}
/**
 *
 * @param collection
 * @param iteratees
 */
export function sortBy(collection, iteratees?) {
  return _sortby(collection, iteratees);
}

/**
 *
 * @param collection
 * @param predicate
 * @param fromIndex
 */
export function find(collection, predicate?, fromIndex?) {
  return _find(collection, predicate, fromIndex);
}

/**
 *
 * @param collection
 * @param iteratee
 */
export function forEach(collection, iteratee?) {
  return _forEach(collection, iteratee);
}

/**
 *
 * @param collection
 * @param iteratee
 */
export function map(collection, iteratee?) {
  return _map(collection, iteratee);
}

/**
 *
 * @param collection
 * @param iteratee
 */
export function keyBy(collection, iteratee?) {
  return _keyBy(collection, iteratee);
}

/**
 *
 * @param collection
 * @param predicate
 * @returns {any}
 */
export function reject(collection, predicate?) {
  return _reject(collection, predicate);
}


/**
 *
 * @param collection
 * @param iteratee
 */
export function groupBy(collection, iteratee?) {
  return _groupBy(collection, iteratee);
}

/**
 *
 * @param collection
 * @param predicate
 * @returns {any}
 */
export function filter(collection, predicate?) {
  return _filter(collection, predicate);
}

/**
 *
 * @param collection
 */
export function size(collection) {
  if(Array.isArray(collection)) {
    return collection.length;
  }

  if(isObject(collection)) {
    return Object.keys(collection).length;
  }

  return toBoolean(collection) ? collection.length : 0;
}

/**
 *
 * @param source
 * @param object
 * @returns {boolean}
 */
export function rawDiff(source, object) {
  return JSON.stringify(source) !== JSON.stringify(object);
}
