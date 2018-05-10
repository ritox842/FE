import {dateCompare} from "../src/sort-comparators";
import * as moment from "moment";

describe('Sort Comparators', () => {

    describe('dateCompare', () => {
        const past = moment().subtract(1);
        const present = moment();
        const validDates = [past, present];
        const invalidDates = [null, "asassad"];

        function testDates(valuesA, valuesB, compareFunc: string, invert?: boolean) {
            valuesA.forEach((valA) => {
                valuesB.forEach((valB) => {
                    const datesDiff = dateCompare(valA, valB, invert);
                    expect(datesDiff)[compareFunc](0);
                });
            });
        }

        describe('Regular sort', () => {
            it('should return positive value', () => {
                testDates(validDates, invalidDates, 'toBeGreaterThan');
                expect(dateCompare(present, past)).toBeGreaterThan(0);
            });

            it('should return negative value', () => {
                testDates(invalidDates, validDates, 'toBeLessThan');
                expect(dateCompare(past, present)).toBeLessThan(0);
            });

            it('should return 0', () => {
                const sameDate = dateCompare(past, past);
                const bothInvalid = dateCompare(null, null);
                expect(sameDate).toEqual(0);
                expect(bothInvalid).toEqual(0);
            });
        });

        describe('Inverted sort', () => {
            it('should return negative value', () => {
                testDates(validDates, invalidDates, 'toBeLessThan', true);
                expect(dateCompare(present, past, true)).toBeLessThan(0);
            });

            it('should return positive value', () => {
                testDates(invalidDates, validDates, 'toBeGreaterThan', true);
                expect(dateCompare(past, present, true)).toBeGreaterThan(0);
            });

            it('should return 0', () => {
                const sameDate = dateCompare(past, past, true);
                const bothInvalid = dateCompare(null, null, true);
                expect(sameDate).toEqual(0);
                expect(bothInvalid).toEqual(0);
            });
        });

        describe('Array sorting', () => {
            let testArray;
            const descResult = [present, present, "Jan 2018" , "asdas", null];
            const ascResult = [ "asdas", null , "Jan 2018", present, present];

            beforeEach(() => {
                testArray = [present, "asdas", "Jan 2018", present, null];
            });

            it('should sort array asc by date', function () {
                testArray.sort(dateCompare);
                expect(testArray).toEqual(ascResult);
            });

            it('should sort array desc by date', function () {
                testArray.sort((valA, valB) => dateCompare(valA, valB, true));
                expect(testArray).toEqual(descResult);
            });
        });

    });

});
