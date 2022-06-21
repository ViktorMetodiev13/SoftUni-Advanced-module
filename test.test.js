const { expect, assert } =  require('chai');
const { isSymmetric } = require('./test');

describe('Symmetry Checker', () => {
    it('works with symmetric numeric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it('returns false for non-symmetric numeric array', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });

    it('not correct input type', () => {
        expect(isSymmetric(['1', 2, 3])).to.be.false;
        expect(isSymmetric([1, '2', 3])).to.be.false;
        expect(isSymmetric([1, 2, '3'])).to.be.false;
    });

    it('input is not array', () => {
        expect(isSymmetric(typeof a == '')).to.
    });
});