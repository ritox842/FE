import {Moment} from "moment";
import * as moment from "moment";

/**
 * Compare 2 date values
 * @param valA
 * @param valB
 * @param invert
 * @return {number}
 */
export function dateCompare(valA, valB, invert?) {
    const dateA: Moment = moment(valA);
    const isValidA = dateA.isValid();
    const dateB: Moment = moment(valB);
    const isValidB = dateB.isValid();
    let result;

    if (!isValidA && !isValidB) {
        return 0;
    } else if (!isValidA) {
        result = -1;
    } else if (!isValidB) {
        result = 1;
    }

    result = result || dateA.diff(dateB);

    return result !== 0 ? result * (invert === true ? -1 : 1) : 0;
}