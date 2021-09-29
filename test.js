const { stringLength } = require('./functions/script.js');

describe('Testing Practice', () => {
  describe('Task 1: String length function', () => {
    test('Should return length of a sting', () => {
      expect(stringLength('hello')).toBe(5);
      expect(stringLength('hello')).toBeGreaterThanOrEqual(1);
      expect(stringLength('hello')).toBeLessThanOrEqual(10);
    });
  });
});
