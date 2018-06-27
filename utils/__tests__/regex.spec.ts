import {validUrl} from "../src/regex";
​
describe('Regex', () => {
​
  describe('validUrl', () => {
    it('should pass test for url regex"', () => {
      const URLsArray = [
        'http://www.google.com',
        'https://www.google.com',
        'www.google.com',
        'http://google.com',
        'https://google.com',
      ];
​
      let failedURL = null;
      const errorFlag = URLsArray.some((URL) => {
        if (!validUrl.test(URL)) {
          failedURL = URL;
          return true;
        }
​
        return false;
      });
​
      /**Log the problematic URL */
      if (failedURL !== null) {
        console.log(`The failed url is - ${failedURL}`);
      }
​
      expect(errorFlag).toBeFalsy();
    });
​
​
    it('should not pass test for invalid url regex', () => {
      const URLsArray = [
        'httpss://www.google.com',
        'http//www.google.com',
        'http:/www.google.com',
        'google.com',
        'www.google',
      ];
      let passedURL = null;
      const errorFlag = URLsArray.some((URL) => {
        if (validUrl.test(URL)) {
          passedURL = URL;
          return true;
        }
​
        return false
      });
​
      /**Log the problematic URL */
      if (passedURL !== null) {
        console.log(`The passed url is - ${passedURL}`);
      }
​
      expect(errorFlag).toBeFalsy();
    });
  });
​
});