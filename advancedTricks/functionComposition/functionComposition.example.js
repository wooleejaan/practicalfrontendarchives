/**
 *
 * @description
 * Function composition is the process of combining two or more functions
 * to create a new function. It encourages code reuse and helps create
 * transformations complex step by step.
 */
const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((acc, fn) => fn(acc), x);

const add = (x) => x + 1;
const multiplyByTwo = (x) => x * 2;
const addAndMultiply = compose(multiplyByTwo, add);
console.log(addAndMultiply(3)); // Output: 8
