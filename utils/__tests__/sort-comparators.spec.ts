import {dateCompare, stringCompare} from "../src/sort-comparators";
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

    describe('stringCompare', () => {

        describe('strings sort', () => {
            it('should return positive value', () => {
                expect(stringCompare('Burns', 'Author')).toBeGreaterThan(0);
            });

            it('should return negative value', () => {
                expect(stringCompare('Author', 'Burns')).toBeLessThan(0);
            });

            it('should return 0', () => {
                expect(stringCompare('Author', 'Author')).toEqual(0);
            });
        });

        describe('strings sort case sensitive', () => {
            it('should return positive value', () => {
                expect(stringCompare('author', 'Burns', false)).toBeGreaterThan(0);
            });

            it('should return negative value', () => {
                expect(stringCompare('Author', 'author', false)).toBeLessThan(0);
            });

            it('should return 0', () => {
                expect(stringCompare('Author', 'Author', false)).toEqual(0);
            });
        });

        describe('Inverted sort', () => {
            it('should return negative value', () => {
                expect(stringCompare('Author', 'Burns', true)).toBeLessThan(0);
            });

            it('should return positive value', () => {
                expect(stringCompare('Author', 'Burns', true, true)).toBeGreaterThan(0);
            });
        });

        describe('array of objects sorting by key', () => {
            let writers;
            const ascResult = JSON.stringify([{name: 'Alfred'}, {name: 'Stephen'}]);
            const descResult = JSON.stringify([{name: 'Stephen'}, {name: 'Alfred'}]);
            beforeEach(() => {
                writers = [{name: 'Stephen'}, {name: 'Alfred'}];
            });

            it('should sort array of objects asc by name property', function () {
                writers.sort( (valA, valB) => stringCompare(valA, valB, true, false, 'name'));
                expect(JSON.stringify(writers)).toEqual(ascResult);
            });

            it('should sort array of objects desc by name property', function () {
                writers.sort( (valA, valB) => stringCompare(valA, valB, true, true, 'name'));
                expect(JSON.stringify(writers)).toEqual(descResult);
            });
        });

    });
});

