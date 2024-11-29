const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

// Test suite for the calculateNumber function
describe('calculateNumber', () => {
    // Test cases for the SUM operation
    describe('SUM operation', () => {
        it('should return 6 when adding 1.4 and 4.5', () => {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        });

        it('should return -3 when adding -1.4 and -2.5', () => {
            assert.strictEqual(calculateNumber('SUM', -1.4, -2.5), -3);
        });
    });

    // Test cases for the SUBTRACT operation
    describe('SUBTRACT operation', () => {
        it('should return -4 when subtracting 1.4 from 4.5', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });

        it('should return 2 when subtracting -1.4 from -3.5', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -3.5), 2);
        });
    });

    // Test cases for the DIVIDE operation
    describe('DIVIDE operation', () => {
        it('should return 0.2 when dividing 1.4 by 4.5', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });

        it('should return "Error" when dividing 1.4 by 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });
    });

    // Test case for invalid operation type
    describe('Invalid operation type', () => {
        it('should throw an error for an invalid type', () => {
            assert.throws(() => calculateNumber('MULTIPLY', 1, 2), /Invalid operation type/);
        });
    });
});
