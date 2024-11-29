// Execute: npm run test
/**
 * Performs a calculation based on the given type and two numbers.
 *
 * @param {string} type - The type of operation to perform. Can be 'SUM', 'SUBTRACT', or 'DIVIDE'.
 * @param {number} a - The first number to be used in the calculation.
 * @param {number} b - The second number to be used in the calculation.
 * @returns {number|string} The result of the calculation. If the type is 'DIVIDE' and the second number rounds to 0, returns 'Error'.
 * @throws {Error} If the type is not one of 'SUM', 'SUBTRACT', or 'DIVIDE'.
 */
function calculateNumber(type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  if (type === 'SUM') {
      return roundedA + roundedB;
  } else if (type === 'SUBTRACT') {
      return roundedA - roundedB;
  } else if (type === 'DIVIDE') {
      if (roundedB === 0) {
          return 'Error';
      }
      return roundedA / roundedB;
  } else {
      throw new Error('Invalid operation type');
  }
}

// Exporting using CommonJS
module.exports = calculateNumber;
