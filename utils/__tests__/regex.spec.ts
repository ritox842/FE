import {validUrl} from "../src/regex";

describe('Regex', () => {

    describe('validUrl', () => {
            it('should pass test for url regex"', () => {
                const URLsArray = [
                    'http://www.google.com',
                    'https://www.google.com',
                    'www.google.com',
                    'http://google.com',
                    'https://google.com',
                ];

                const errorFlag = URLsArray.some((URL) => !validUrl.test(URL));
                expect(errorFlag).toBeFalsy();
            });


            it('should not pass test for invalid url regex', () => {
                const URLsArray = [
                    'httpss://www.google.com',
                    'http//www.google.com',
                    'http:/www.google.com',
                    'google.com',
                    'www.google',
                ];

                const errorFlag = URLsArray.some((URL) => validUrl.test(URL));
                expect(errorFlag).toBeFalsy();
            });
    });

});
