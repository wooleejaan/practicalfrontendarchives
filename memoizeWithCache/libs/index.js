import fetchTodo from "./apis/fetchTodo.api";

import memoizePromiseFn from "./helpers/memoizePromiseFn.helper";

import get from "./hooks/getElem.hook";

(function () {
  "use strict";

  const $root = get("#root");

  let cachedFetchTodos = memoizePromiseFn(fetchTodo);

  const createElements = async () => {
    /* jsx */
    $root.innerHTML = /* html */ `
      <button type="button" id="btn">call api!</button>
      `;

    const btn = get("#btn");

    btn.addEventListener("click", async () => {
      const response2 = await cachedFetchTodos(2);
      console.log(response2); // Caching API calls by memoizing promises
    });

    /* load init state */
    const response1 = await cachedFetchTodos(1);
    console.log(response1);
  };

  const init = () => {
    window.addEventListener("DOMContentLoaded", () => {
      createElements();
    });
  };
  init();
})();
