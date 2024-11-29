import chai from 'chai';
import calculateNumber from './2-calcul_chai.js'; // Assuming your calculateNumber is exported correctly

const { expect } = chai;

// Test suite for SUM operation
describe("calculateNumber(SUM)", function () {
    it("sum of two whole numbers", function() {
        expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });
    it("floating point numbers", function() {
        expect(calculateNumber('SUM', 1.0, 3.0)).to.equal(4);
    });
    it("rounding off a backwards and add", function() {
        expect(calculateNumber('SUM', 1.223, 3)).to.equal(4);
    });
    it("rounding off a forward and add", function() {
        expect(calculateNumber('SUM', 1.678, 3)).to.equal(5);
    });
    it("rounding b back and adding", function() {
        expect(calculateNumber('SUM', 1, 3.333)).to.equal(4);
    });
    it("rounding off b forward and adding", function () {
        expect(calculateNumber('SUM', 1, 3.764)).to.equal(5);
    });
    it("rounding off forward both a and b and add them together", function () {
        expect(calculateNumber('SUM', 1.8956, 3.844)).to.equal(6);
    });
    it("rounding down both a and b with trailing 9's", function () {
        expect(calculateNumber('SUM', 1.4999, 3.49999)).to.equal(4);
    });
});

// Test suite for SUBTRACT operation
describe("calculateNumber(SUBTRACT)", function() {
    it("Subtract two whole numbers when b>a", function() {
        expect(calculateNumber('SUBTRACT', 3, 1)).to.equal(2);
    });
    it("Subtracting whole numbers when a>b", function() {
        expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });
    it("rounding down a using trailing 9's", function() {
        expect(calculateNumber('SUBTRACT', 3.4999, 1)).to.equal(2);
    });
    it("rounding up a with trailing 0's", function() {
        expect(calculateNumber('SUBTRACT', 3.50000, 1)).to.equal(3);
    });
    it("rounding down b with trailing 9's", function() {
        expect(calculateNumber('SUBTRACT', 3, 1.499999)).to.equal(2);
    });
    it("rounding up b with trailing 0's", function() {
        expect(calculateNumber('SUBTRACT', 3, 1.50000)).to.equal(1);
    });
    it("rounding down both a and b", function() {
        expect(calculateNumber('SUBTRACT', 3.4999, 1.4999)).to.equal(2);
    });
    it("rounding up both a and b", function() {
        expect(calculateNumber('SUBTRACT', 3.5, 1.5)).to.equal(2);
    });
});

// Test suite for DIVIDE operation
describe("calculateNumber(DIVIDE)", function() {
    it("When b=0", function() {
        expect(calculateNumber('DIVIDE', 4, 0)).to.equal('Error');
    });
    it("divide by very small number", function() {
        expect(calculateNumber('DIVIDE', 5, 0.0000001)).to.equal(50000000);
    });
    it("rounding down a using trailing 9's", function() {
        expect(calculateNumber('DIVIDE', 3.4999, 1)).to.equal(3);
    });
    it("rounding up a with trailing 0's", function() {
        expect(calculateNumber('DIVIDE', 3.50000, 1)).to.equal(4);
    });
    it("rounding down b with trailing 9's", function() {
        expect(calculateNumber('DIVIDE', 4, 1.499999)).to.equal(4);
    });
    it("rounding up b with trailing 0's", function() {
        expect(calculateNumber('DIVIDE', 4, 1.50000)).to.equal(2);
    });
    it("rounding down both a and b", function() {
        expect(calculateNumber('DIVIDE', 3.4999, 1.4999)).to.equal(3);
    });
    it("rounding up both a and b", function() {
        expect(calculateNumber('DIVIDE', 3.5, 1.5)).to.equal(2);
    });
});
