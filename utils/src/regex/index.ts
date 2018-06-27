/**
 *  Checks to see if a given string is a valid url.
 *  Accepts http:// or https://.
 *  May start also with www (Not mandatory).
 * @type {RegExp}
 */
export const validUrl = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");