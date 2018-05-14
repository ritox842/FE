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

export function stringCompare(stringA: string, stringB: string, caseInsensitive: boolean = true, invert: boolean = false, key?: string) {
    let nameA: string;
    let nameB: string;
    let result = 0;
    if (caseInsensitive) {
        nameA = (key ? stringA[key] : stringA).toUpperCase();
        nameB = (key ? stringB[key] : stringB).toUpperCase();
    } else {
        nameA = stringA;
        nameB = stringB;
    }

    if (nameA < nameB) {
        result = -1;
    } else if (nameA > nameB) {
        result = 1;
    }

    return result !== 0 ? result * (invert === true ? -1 : 1) : 0;
}