const { expect } = require("chai")
const { lookupChar } = require("./charLookup")

describe('Testing lookup Char', () => {
    it('return undefined for incorrect input data', () => {
        expect(lookupChar(0, 0)).to.equal(undefined);
        expect(lookupChar('aa', 'test')).to.equal(undefined);
        expect(lookupChar('aaa', 0.1)).to.equal(undefined);
    });

    it('return incorrect index value', () => {
        expect(lookupChar('aa', 10)).to.equal("Incorrect index");
        expect(lookupChar('aa', -10)).to.equal("Incorrect index");
    });

    it('return value for correct input data', () => {
        expect(lookupChar('aaa', 0)).to.equal('a');
    });
});