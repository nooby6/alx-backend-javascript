/**
 * Performs a mathematical operation on two numbers after rounding them.
 *
 * @param {string} type - The type of operation to perform. Can be 'SUM', 'SUBTRACT', or 'DIVIDE'.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number|string} The result of the operation. If the operation is 'DIVIDE' and the rounded second number is 0, or too close to zero, returns the string "Error".
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
    // Check if b is effectively zero (including very small numbers)
    if (Math.abs(Math.round(b)) < epsilon) {
      return 'Error'; // Return error for small values of b (close to zero)
    } else {
      return Math.round(a) / Math.round(b);
    }
  }
};

export default calculateNumber;
