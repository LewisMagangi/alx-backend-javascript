const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return the sum of two rounded numbers', function () {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });
  });

  describe('SUBTRACT', function () {
    it('should return the difference of two rounded numbers', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 7.4, 2.3), 5);
    });
  });

  describe('DIVIDE', function () {
    it('should return the division of two rounded numbers', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 8.4, 2.2), 4);
    });

    it('should return "Error" when dividing by zero', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 5.1, 0), 'Error');
    });
  });

  describe('Invalid type', function () {
    it('should throw an error for an invalid type', function () {
      assert.throws(() => calculateNumber('INVALID', 5.1, 2.2), Error);
    });
  });
});
