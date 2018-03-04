/** Coerces a data-bound value (typically a string) to a boolean. */
export function toBoolean(value: any): boolean {
  return value != null && `${value}` !== 'false';
}

/**
 *
 * @param value
 */
export function toNumber(value: any): number;
export function toNumber<D>(value: any, fallback: D): number | D;
export function toNumber(value: any, fallbackValue = 0) {
  return _isNumberValue(value) ? Number(value) : fallbackValue;
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

/**
 * Whether the provided value is considered a number.
 * @docs-private
 */
function _isNumberValue(value: any): boolean {
  // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
  // and other non-number values as NaN, where Number just uses 0) but it considers the string
  // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
  return !isNaN(parseFloat(value as any)) && !isNaN(Number(value));
}