import _get from 'lodash.get';
import _has from 'lodash.has';
import _mapValues from 'lodash.mapvalues';
import _mapKeys from 'lodash.mapkeys';
import _values from 'lodash.values';
import _merge from 'lodash.merge';
import _transform from 'lodash.transform';
import _isEqual from 'lodash.isequal';
import _cloneDeep from 'lodash.clonedeep';
import _deepEqual from "deep-equal";
import {isObject} from "../validators";

/**
 *
 * @param object
 * @param path
 * @param defaultValue
 */
export function get(object, path, defaultValue?) {
    return _get(object, path, defaultValue);
}


/**
 *
 * @param object
 * @param path
 * @returns {any}
 */
export function has(object, path) {
    return _has(object, path);
}


/**
 *
 * @param collection
 * @param iteratee
 */
export function mapValues(collection, iteratee?) {
    return _mapValues(collection, iteratee);
}

/**
 *
 * @param collection
 * @param iteratee
 */
export function mapKeys(collection, iteratee?) {
    return _mapKeys(collection, iteratee);
}

/**
 *
 * @param object
 */
export function values(object) {
    return _values(object);
}

/**
 *
 * @param des
 * @param src
 * @returns {any}
 */
export function merge(des, ...src) {
    return _merge(des, ...src);
}

/**
 *
 * @param object
 * @param base
 * @returns {any[]}
 */
export function diff(object, base) {
    return changes(object, base);
}


/**
 *
 * @param object
 * @param base
 * @returns {any[]}
 */
function changes(object, base) {
    return _transform(object, (result, value, key) => {
        if (!_isEqual(value, base[key])) {
            result[key] = isObject(value) && isObject(base[key]) ? changes(value, base[key]) : value;
        }
    });
}

/**
 * @param {any} objects
 * @returns
 */
export function cloneDeep(objects) {
    return _cloneDeep(objects);
}

/**
 * Remove object's property/ies
 * @param {Object} object - The object to remove from
 * @param {string | string[]} paths - The path/s for the properties to delete
 * @returns {Object}
 */
export function omit(object: Object, paths: string | string[]) {
    if (!object) {
        throw 'No object given';
    }
    if (typeof object !== 'object') {
        throw `Expected an object but got ${typeof object} instead`;
    }
    const pathIsArray = Array.isArray(paths);
    paths = pathIsArray
        ? (paths as string[]).filter((path) => path)
        : paths;
    if (!paths || (pathIsArray && !paths.length)) {
        throw 'No path was given';
    }
    const invalidType = pathIsArray
        ? (paths as any[]).some((key) => typeof key !== 'string')
        : typeof paths !== 'string';
    if (invalidType) {
        throw 'Expected a string / string array but got something else';
    }

    const newObj = {...object};
    if (pathIsArray) {
        return (paths as string[]).reduce((acc, key) => {
            return omitPath(acc, key);
        }, newObj);
    }
    return omitPath(newObj, paths as string);
}

/**
 * Remove a key from an object by a given path
 * @param {Object} obj - The original object
 * @param {string} path - The key's path
 * @returns {{}} The object with the given key removed
 */
function omitPath(obj: Object, path: string) {
    let newObj = {...obj};
    const [key, ...nested] = path.split(".");
    if (obj.hasOwnProperty(key)) {
        if (!nested.length) {
            const {[key]: deletedKey, ...others} = newObj;
            return others;
        }
        newObj[key] = omitPath(newObj[key], nested.join("."));
    } else {
        console.warn(`${key} doesn't exists in given object`);
    }
    return newObj;
}

/**
 * Returns whether the object are equal
 * @param {Object} objectA
 * @param {Object} objectB
 * @param opts
 * @returns {boolean}
 */
export function deepEqual(objectA: Object, objectB: Object, opts: any = {}): boolean {
    return _deepEqual(objectA, objectB, opts);
}
