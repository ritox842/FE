/** Coerces a data-bound value (typically a string) to a boolean. */
import {isNumber} from "../validators";

export function toBoolean(value: any, includeZero: boolean = false): boolean {
  return value != null && `${value}` !== 'false' && (includeZero && value !== 0 || !includeZero);
}

/**
 *
 * @param value
 */
export function toNumber(value: any): number;
export function toNumber<D>(value: any, fallback: D): number | D;
export function toNumber(value: any, fallbackValue = 0) {
  return isNumber(value) ? Number(value) : fallbackValue;
}


/**
 *
 * @param value
 * @returns {string}
 */
export function toString(value: any): string {
  return (value || '') && value.toString();
}

/** Wraps the provided value in an array, unless the provided value is an array. */
export function coerceArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value];
}
