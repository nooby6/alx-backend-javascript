// Execute by running: npm run test

const chai = require('chai'); // Import chai using require
const { expect } = chai; // Destructure expect from chai
const calculateNumber = require('./2-calcul_chai.js'); // Import the function using require

// Describe the test suite for the calculateNumber function
describe('calculateNumber', () => {
    // Test suite for the SUM operation
    describe('SUM operation', () => {
        // Test case for adding 1.4 and 4.5
        it('should return 6 when adding 1.4 and 4.5', () => {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });
    });

    // Test suite for the SUBTRACT operation
    describe('SUBTRACT operation', () => {
        // Test case for subtracting 1.4 from 4.5
        it('should return -4 when subtracting 1.4 from 4.5', () => {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });
    });

    // Test suite for the DIVIDE operation
    describe('DIVIDE operation', () => {
        // Test case for dividing by 0
        it('should return "Error" when dividing by 0', () => {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });
    });

    // Test suite for invalid operation type
    describe('Invalid operation type', () => {
        // Test case for an invalid operation type
        it('should throw an error for an invalid type', () => {
            expect(() => calculateNumber('MULTIPLY', 1, 2)).to.throw('Invalid operation type');
        });
    });
});
