/**
 * Web Workers allow you to run JavaScript code in the background,
 * alongside the main thread. They are useful for offloading CPU-intensive tasks,
 * Avoid UI hangs and improve performance Responsiveness.
 */

// In the main thread
const worker = new Worker("worker.js");
worker.postMessage({ data: "some data" });

// In the worker.js file
self.addEventListener("message", function (event) {
  const data = event.data;
  // Perform heavy computations with the data
  // Post the result back to the main thread
  self.postMessage({ result: computedResult });
});
