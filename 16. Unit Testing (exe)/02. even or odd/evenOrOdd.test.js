const { expect } = require('chai');
const { isOddOrEven } = require('./evenOrOdd');

describe('Even or Odd', () => {
    it('returns false if the value is not string', () => {
        expect(isOddOrEven(5)).to.be.undefined;
        expect(isOddOrEven([])).to.be.undefined;
        expect(isOddOrEven({})).to.be.undefined;
    });

    it('should return odd if the string is odd', () => {
        expect(isOddOrEven('aaa')).to.equal('odd');
    });

    it('should return even if the string is even', () => {
        expect(isOddOrEven('bb')).to.equal('even');
    });
});