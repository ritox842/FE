import {isString} from "../src/validators";

describe('Validators', () => {

    describe('isString', () => {

        it('should return true when passing string', () => {
            const string = isString('aaaa');
            expect(string).toBe(true);
        });

        it('should return false when passing non string', () => {
            const object = isString({});
            const number = isString(33);
            const functionVal = isString(() => {});
            const nonVal = isString(null);
            const undefinedVal = isString();
            expect(object).toBe(false);
            expect(number).toBe(false);
            expect(functionVal).toBe(false);
            expect(nonVal).toBe(false);
            expect(undefinedVal).toBe(false);
        });
    });

});
