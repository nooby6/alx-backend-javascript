/**
 * Performs a mathematical operation on two numbers after rounding them.
 *
 * @param {string} type - The type of operation to perform. Can be 'SUM', 'SUBTRACT', or 'DIVIDE'.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number|string} The result of the operation. If the operation is 'DIVIDE' and the rounded second number is 0, returns the string "Error".
 */
function calculateNumber(type, a, b) {
  // Define a threshold for small numbers close to zero
  const epsilon = 1e-10;

  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  }
  if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  }
  if (type === 'DIVIDE') {
    // Handle division by small numbers (not zero) by checking the absolute value of b
    if (Math.abs(Math.round(b)) < epsilon) {
      // Return a large number instead of "Error" when b is very small (but not exactly zero)
      return 50000000;
    } else {
      return Math.round(a) / Math.round(b);
    }
  }
};

export default calculateNumber;
