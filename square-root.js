/**
 * Find a square root of a given number
 * Use Math.sqrt() to get the square root
 * Use Math.floor() to round down to the nearest integer
 * Use Math.abs() to ensure the results is always positive
 */

const squareRoot = x => {
  return Math.abs(Math.floor(Math.sqrt(x)));
}

console.log(squareRoot(25)); // returns 5