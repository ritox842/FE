import {isNumber} from "../validators";

/**
 *
 * @param num - the number to round
 * @param precision - how many placed after the decimal point to retain (default: 2, i.e. to the hundredth decimal)
 * @returns {number} - the rounded number
 */
export function round(num, precision) {
    if (!isNumber(num)) {
        throw 'value to round is not a number';
    }
    if (precision && !isNumber(precision)) {
        throw 'precision value is not a number';
    }
    const factor = precision ? Math.pow(10, precision) : Math.pow(10, 2);
    return Math.round(num * factor) / factor;
}

/**
 * Random number in given range, example:
 *
 * ```javascript
 * random(10, 20)
 * ```
 *
 * @param {number} lower bound of random range
 * @param {number} upper bound of random range
 * @returns {number}
 */

export function random(lower: number = 0, upper: number = 1) {
    if(!isNumber(lower)) {
        throw 'the lower bound is not a number';
    }
    if(!isNumber(upper)) {
        throw 'the upper bound is not a number';
    }
    if(lower > upper) {
        throw 'the upper bound should be grater than the lower bound';
    }
    if(lower === 0 && upper === 1) {
        return Math.random();
    }
    return lower + Math.floor(Math.random() * (upper - lower + 1));
}

/**
 * Checks if a given number is a fraction or an integer
 * @param {number} number - The number to check
 * @returns {boolean} - True if the number is a fraction
 */
export function isFraction(number: number) {
    if (!isNumber(number)) {
        throw `expected a number but got ${typeof number}`;
    }
    return number % 1 !== 0
}