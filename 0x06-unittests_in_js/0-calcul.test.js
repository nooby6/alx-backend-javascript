// 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

// Test suite for the calculateNumber function
describe('calculateNumber', () => {
    // Test case: should return 4 for inputs 1 and 3
    it('should return 4 for inputs 1 and 3', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    // Test case: should round and return 5 for inputs 1 and 3.7
    it('should round and return 5 for inputs 1 and 3.7', () => {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });

    // Test case: should round and return 5 for inputs 1.2 and 3.7
    it('should round and return 5 for inputs 1.2 and 3.7', () => {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });

    // Test case: should round and return 6 for inputs 1.5 and 3.7
    it('should round and return 6 for inputs 1.5 and 3.7', () => {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });

    // Test case: should handle negative numbers correctly
    it('should handle negative numbers correctly', () => {
        assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
    });

    // Test case: should return 0 for inputs 0.4 and -0.4
    it('should return 0 for inputs 0.4 and -0.4', () => {
        assert.strictEqual(calculateNumber(0.4, -0.4), 0);
    });
});
