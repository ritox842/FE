/**
 *  Checks to see if a given string is a valid url.
 *  Accepts http:// or https://.
 *  May start also with www (Not mandatory).
 * @type {RegExp}
 */
export const validUrl = /((?<!\S)(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})(?!\S))/;