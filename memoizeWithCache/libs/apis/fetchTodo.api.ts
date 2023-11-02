const fetchTodo = <T>(id: number): Promise<T> => {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response) => response.json())
    .then((json) => json);
};

export default fetchTodo;
