/**
 *
 * @description
 * Closures are functions that remember the environment in which they were created,
 * even if that environment is no longer accessible. They are useful for creating
 * private variables and for behavior encapsulation.
 */
function createCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
