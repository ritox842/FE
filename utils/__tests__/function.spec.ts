import {functionName} from "../src/function";

class testClass {}

describe('Functions', () => {

    describe('functionName', () => {
        it('a null argument should return empty string', () => {
            expect(functionName(null)).toEqual('');
        });

        it('an empty string argument should return empty string', () => {
            expect(functionName('')).toEqual('');
        });

        it('an object should return empty string', () => {
            expect(functionName({})).toEqual('');
        });

        it('a named function should return the function name', () => {
            expect(functionName(function foo(){})).toEqual('foo');
        });

        it('an anonymous function should return an empty string', () => {
            expect(functionName(function(){})).toEqual('');
        });

        it('a class should return the class\'s name', () => {
            expect(functionName(testClass)).toEqual('testClass');
        });

        it('should return the function name', () => {
            const es5Func = function es5() {};
            delete es5Func.name;
            expect(functionName(es5Func)).toEqual('es5');
        });
    });

});