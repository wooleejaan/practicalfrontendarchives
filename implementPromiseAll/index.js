import { customPromiseAll } from "./customPromiseAll.js";

(function () {
  const init = () => {
    Promise.customAll = customPromiseAll;

    const f1 = Promise.resolve(1);
    const f2 = new Promise((resolve) => {
      setTimeout(() => resolve(2), 1000);
    });
    const f3 = new Promise((resolve) => {
      setTimeout(() => resolve(3), 1000);
    });
    const f4 = Promise.reject("error 4");
    const f5 = Promise.reject("error 5");

    const testForResolve = Promise.customAll([f1, f2, f3])
      .then(console.log) // [1, 2, 3]
      .catch(console.log);

    // Two promises failed. The final output is err4. The return value of the first failure
    const testForReject = Promise.customAll([f1, f2, f3, f4, f5])
      .then(console.log)
      .catch(console.log); // error 4
  };

  window.addEventListener("load", () => {
    init();
  });
})();
