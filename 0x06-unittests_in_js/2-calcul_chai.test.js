// 2-calcul_chai.test.js
// const chai = require('chai');
// const expect = chai.expect;
import { expect } from 'chai';
import calculateNumber from './1-calcul.js';
const calculateNumber = require('./2-calcul_chai'); // Assuming the file was copied and renamed correctly

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return the sum of two rounded numbers', function () {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5); // Expect 1.2 and 3.7 to round to 1 and 4, and their sum should be 5
    });
  });

  describe('SUBTRACT', function () {
    it('should return the difference of two rounded numbers', function () {
      expect(calculateNumber('SUBTRACT', 7.4, 2.3)).to.equal(5); // Expect 7.4 and 2.3 to round to 7 and 2, and their difference should be 5
    });
  });

  describe('DIVIDE', function () {
    it('should return the division of two rounded numbers', function () {
      expect(calculateNumber('DIVIDE', 8.4, 2.2)).to.equal(4); // Expect 8.4 and 2.2 to round to 8 and 2, and their division should be 4
    });

    it('should return "Error" when dividing by zero', function () {
      expect(calculateNumber('DIVIDE', 5.1, 0)).to.equal('Error'); // Division by 0 should return "Error"
    });
  });

  describe('Invalid type', function () {
    it('should throw an error for an invalid type', function () {
      expect(() => calculateNumber('INVALID', 5.1, 2.2)).to.throw(Error); // Invalid type should throw an error
    });
  });
});
