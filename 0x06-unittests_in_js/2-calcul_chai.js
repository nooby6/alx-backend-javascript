/**
 * Performs a mathematical operation on two numbers after rounding them.
 *
 * @param {string} type - The type of operation to perform. Can be 'SUM', 'SUBTRACT', or 'DIVIDE'.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number|string} The result of the operation. If the operation is 'DIVIDE' and the rounded second number is 0, returns the string "Error".
 */
function calculateNumber(type, a, b) {
  if (type === 'SUM'){
      return Math.round(a) + Math.round(b);
  }
  if (type === 'SUBTRACT'){
      return Math.round(a) - Math.round(b);
  }
  if (type === 'DIVIDE') {
      if (Math.round(b) === 0) {
          return ("Error");
      } else {
          return Math.round(a) / Math.round(b);
      }
  }
  
};

module.exports = calculateNumber;
