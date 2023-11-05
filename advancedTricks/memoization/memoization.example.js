/**
 * @description
 * Memoization: Storage is a caching technique used to store the results of
 * expensive function calls and avoid unnecessary recalculations.
 * It can significantly slow performance long-term recursive or consuming functions.
 */
const memoizedFibonacci = (function () {
  const cache = {};

  return function fib(n) {
    if (n in cache) return cache[n];
    if (n <= 1) return n;

    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  };
})();

const exampleResults = [];

exampleResults.push(memoizedFibonacci(1));
exampleResults.push(memoizedFibonacci(2));
exampleResults.push(memoizedFibonacci(3));
exampleResults.push(memoizedFibonacci(4));
exampleResults.push(memoizedFibonacci(5));

console.log(exampleResults); // [1, 1, 2 , 3, 5]
