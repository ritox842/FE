import {omit} from "../src/object";

describe('Objects', () => {

    describe('Omit', () => {
        let originalObj;

        beforeEach(() => {
            originalObj = {
                a: {b: {c: {}}},
                d: {e: {}},
                f: {}
            }
        });

        describe('invalid inputs', () => {

            it('should throw "no object given"', () => {
                const firstArgumentNotAObject = () => omit(null, "a");
                expect(omit).toThrow('No object given');
                expect(firstArgumentNotAObject).toThrow('No object given');
            });

            it('should throw "expected type object"', () => {
                const firstArgumentNotAString = () => omit("pita", "a");
                const firstArgumentNotANumber = () => omit(1, "a");
                expect(firstArgumentNotANumber).toThrow('Expected an object but got number instead');
                expect(firstArgumentNotAString).toThrow('Expected an object but got string instead');
            });

            it('should throw "no path given"', () => {
                const noSecondArgument = () => omit({});
                const secondArgumentEmptyString = () => omit({}, '');
                const secondArgumentEmptyArray = () => omit({}, []);
                const secondArgumentArrayWithEmptyString = () => omit({}, ['']);
                expect(noSecondArgument).toThrow('No path was given');
                expect(secondArgumentEmptyString).toThrow('No path was given');
                expect(secondArgumentEmptyArray).toThrow('No path was given');
                expect(secondArgumentArrayWithEmptyString).toThrow('No path was given');
            });

            it('should throw "Expected a string / string array but got something else"', () => {
                const secondArgumentNumber = () => omit({}, 2);
                const secondArgumentNumbersArray = () => omit({}, [2]);
                const secondArgumentMixedArray = () => omit({}, ['a', 2]);
                expect(secondArgumentNumber).toThrow('Expected a string / string array but got something else');
                expect(secondArgumentNumbersArray).toThrow('Expected a string / string array but got something else');
                expect(secondArgumentMixedArray).toThrow('Expected a string / string array but got something else');
            });

            it('should should write a warning in the console "key doesn\'t exist"', () => {
                spyOn(console, "warn");
                const key = 'a';
                omit({}, key);
                expect(console.warn).toBeCalledWith(`${key} doesn't exists in given object`);
            });

        });

        describe('single key', () => {

            it('should remove property from object', () => {
                const result = omit(originalObj, 'f');
                expect(result.f).toBeUndefined();
            });

            it('should remove nested property', () => {
                const result = omit(originalObj, 'a.b.c');
                expect(result.a.b.c).toBeUndefined();
            });
        });

        describe('array of keys', () => {

            it('should remove property from object', () => {
                const result = omit(originalObj, ['f']);
                expect(result.f).toBeUndefined();
            });

            it('should remove all the given keys', () => {
                const result = omit(originalObj, ['f', 'a.b.c']);
                expect(result.f).toBeUndefined();
                expect(result.a.b.c).toBeUndefined();
            });

        });

    });
});
