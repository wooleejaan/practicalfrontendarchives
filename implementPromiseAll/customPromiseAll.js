export const customPromiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    // counter
    let count = 0;
    // Storage results
    let result = [];
    const len = promises.length;

    if (len === 0) {
      return resolve([]);
    }

    promises.forEach((promise, index) => {
      // Some array items may not be Promise and need to be converted manually
      Promise.resolve(promise)
        .then((response) => {
          count++;
          // Collect the return value of each Promise
          result[index] = response;
          // Set the value of Promise to result, when all Promises are successful
          if (count === len) {
            resolve(result);
          }
          // As long as one promise fails, the result is failure
        })
        .catch(reject);
    });
  });
};
