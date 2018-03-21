import {random, round} from "../src/number";

describe('Numbers', () => {

    describe('round', () => {

        it('should throw an error when 1st argument is missing', () => {
            expect(round).toThrow('value to round is not a number');
        });

        it('should throw an error when 1st argument is not a number', () => {
            const firstArgumentNotANumber = () => {
                return round('lafa');
            }
            expect(firstArgumentNotANumber).toThrow('value to round is not a number');
        });

        it('should throw an error when 2st argument is not a number', () => {
            const secondArgumentNotANumber = () => {
                return round(100,'pita');
            }
            expect(secondArgumentNotANumber).toThrow('precision value is not a number');
        });

        it('should round the 1st argument to 2 places after the decimal point when the 2nd argument is missing', () => {
            expect(round(10)).toEqual(10);
            expect(round(17.17)).toEqual(17.17);
            expect(round(3.14159265358979323846264)).toEqual(3.14);
        });

        it('should override the rounding precision when 2nd argument is present', () => {
            expect(round(10, 5)).toEqual(10);
            expect(round(17.17, 1)).toEqual(17.2);
            expect(round(3.14159265358979323846264, 17)).toEqual(3.14159265358979324);
        });
    });

    describe('random', () => {

        it('should throw an error when 1st argument is not a number', () => {
            const firstNotANumber = () => {
                return random('number', 20);
            };
            expect(firstNotANumber).toThrow('the lower bound is not a number');
        });

        it('should throw an error when 2st argument is not a number', () => {
            const secondNotANumber = () => {
                return random(0, "twenty");
            };
            expect(secondNotANumber).toThrow('the upper bound is not a number');
        });

        it('should return a value between the first argument and the second argument', () => {
            expect(random(0, 20)).toBeLessThanOrEqual(20)
            expect(random(0, 20)).toBeGreaterThanOrEqual(0);
        });

        it('should return a value between 0 and 1 if no range specified', () => {
            expect(random()).toBeLessThanOrEqual(1)
            expect(random()).toBeGreaterThanOrEqual(0);
        });

    });
});
