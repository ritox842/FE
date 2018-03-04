import _debounce from 'lodash.debounce';
import _throttle from 'lodash.throttle';
import _curry from 'lodash.curry';

/**
 *
 * @param func
 * @param wait
 * @param options
 */
export function throttle(func, wait?, options?) {
    return _throttle(func, wait, options)
}

/**
 *
 * @param func
 * @param wait
 * @param options
 */
export function debounce(func, wait?, options?) {
    return _debounce(func, wait, options)
}

/**
 *
 * @param func
 * @param {number} arity
 */
export function curry(func, arity = func.length) {
    return _curry(func, arity)
}