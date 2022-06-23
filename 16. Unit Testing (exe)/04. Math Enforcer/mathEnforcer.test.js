const { expect } = require("chai")
const { mathEnforcer } = require("./mathEnforcer")

describe('Tests for function mathEnforcer', () => {
    describe('Tests for inner funcion addFive', () => {
        it('Should return correct result for num, negative num and floating', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
            expect(mathEnforcer.addFive(1.1)).to.be.closeTo(6.1, 0.01);
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        });
        it('Incorrect input should return undefined', () => {
            expect(mathEnforcer.addFive('5')).to.equal(undefined);
        });
    });

    describe('Tests for inner funcion subtractTen', () => {
        it('Correct input should return num and floating num - 10', () => {
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
            expect(mathEnforcer.subtractTen(10.1)).to.be.closeTo(0.1, 0.01);
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        });
        it('Incorrect input should return undefined', () => {
            expect(mathEnforcer.subtractTen('10')).to.equal(undefined);
        });
    });

    describe('Tests for inner funcion sum', () => {
        it('Incorrect input data should return undefined', () => {
            expect(mathEnforcer.sum(5, '5')).to.equal(undefined);
            expect(mathEnforcer.sum('5', 5)).to.equal(undefined);
        });
        it('Correct input data should return the sum of the two numbers', () => {
            expect(mathEnforcer.sum(5.1, 5)).to.be.closeTo(10.1, 0.01);
            expect(mathEnforcer.sum(-5, 5)).to.equal(0);
        });
    });
});