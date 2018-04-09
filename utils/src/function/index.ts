import _debounce from 'lodash.debounce';
import _throttle from 'lodash.throttle';
import _curry from 'lodash.curry';
import _partial from "lodash.partial";

/**
 *
 * @param func
 * @param wait
 * @param options
 */
export function throttle(func, wait?, options?) {
    return _throttle(func, wait, options);
}

/**
 *
 * @param func
 * @param wait
 * @param options
 */
export function debounce(func, wait?, options?) {
    return _debounce(func, wait, options);
}

/**
 *
 * @param func
 * @param {number} arity
 */
export function curry(func, arity = func.length) {
    return _curry(func, arity);
}

/**
 *  Return a composed function
 * @param funcs
 * @returns {(value) => any}
 */
export function compose(...funcs) {
    return (value) => {
        return funcs.reduce((value, func) => func(value), value);
    };
}

/**
 *
 * @param func
 * @param args
 */
export function partial(func, ...args) {
    return _partial(func, ...args);
}

/**
 * Return the name of the function
 * @example getFunctionName(function myAwesomeFunc(){}) ---> 'myAwesomeFunc'
 * @param func
 */
export function getFunctionName(func) {

    if (func == null || typeof func !== 'function') {
        return '';
    }

    // check if we've the name property (ES6)
    if (func.hasOwnProperty('name')) {
        return func.name;
    }

    // ES5
    let funcName = func.toString();
    funcName = funcName.substr('function '.length);
    funcName = funcName.substr(0, funcName.indexOf('('));
    return funcName;
}
