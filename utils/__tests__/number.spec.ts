import {roundToDecimal} from "../src/number";

describe('Numbers', () => {

    describe('roundToDecimal', () => {

        it('should throw an error when 1st argument is missing', () => {
            expect(roundToDecimal).toThrow('value to round is not a number');
        });

        it('should throw an error when 1st argument is not a number', () => {
            const firstArgumentNotANumber = () => {
                return roundToDecimal('lafa');
            }
            expect(firstArgumentNotANumber).toThrow('value to round is not a number');
        });

        it('should throw an error when 2st argument is not a number', () => {
            const secondArgumentNotANumber = () => {
                return roundToDecimal(100,'pita');
            }
            expect(secondArgumentNotANumber).toThrow('precision value is not a number');
        });

        it('should round the 1st argument to 2 places after the decimal point when the 2nd argument is missing', () => {
            expect(roundToDecimal(10)).toEqual(10);
            expect(roundToDecimal(17.17)).toEqual(17.17);
            expect(roundToDecimal(3.14159265358979323846264)).toEqual(3.14);
        });

        it('should override the rounding precision when 2nd argument is present', () => {
            expect(roundToDecimal(10, 5)).toEqual(10);
            expect(roundToDecimal(17.17, 1)).toEqual(17.2);
            expect(roundToDecimal(3.14159265358979323846264, 17)).toEqual(3.14159265358979324);
        });
    });

});
