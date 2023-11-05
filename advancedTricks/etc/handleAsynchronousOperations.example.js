/**
 * @description
 * Promises and Async/Await are essential to handle asynchronous operations more
 * gracefully and make code more readable and maintainable. They help avoid
 * callbacks hellish and improve error handling.
 */
function fetchData() {}

// Using Promises
function fetchDataByPromise() {
  return new Promise((resolve, reject) => {
    // Asynchronous operation, e.g., fetching data from an API
    // resolve(data) or reject(error) based on the operation result
  });
}

// Using Async/Await
async function fetchDataByAsync() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

fetchData.fetchDataByPromise = fetchDataByPromise;
fetchData.fetchDataByAsync = fetchDataByAsync;
