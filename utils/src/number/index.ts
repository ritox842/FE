import {isNumber} from "../validators";

/**
 *
 * @param num - the number to round
 * @param precision - how many placed after the decimal point to retain (default: 2, i.e. to the hundredth decimal)
 * @returns {number} - the rounded number
 */
export function roundToDecimal(num, precision) {
    if (!isNumber(num)) {
        throw 'value to round is not a number';
    }
    if (precision && !isNumber(precision)) {
        throw 'precision value is not a number';
    }
    const factor = precision ? Math.pow(10, precision) : Math.pow(10, 2);
    return Math.round(num * factor) / factor;
}
