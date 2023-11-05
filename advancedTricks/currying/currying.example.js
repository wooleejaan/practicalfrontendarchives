/**
 *
 * @description
 * Currying is a functional programming technique in which a function
 * that takes multiple arguments is transformed into a sequence of functions,
 * each taking a single argument. This allows for better reuse and composition of the code.
 */
const multiply = (a) => (b) => a * b;

const multiplyByTwo = multiply(2);
const result = multiplyByTwo(5); // Output: 10
