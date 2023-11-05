import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrement = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };
  const onDecrement = (e) => {
    e.preventDefault();
    setCount(count - 1);
  };
  return (
    <div>
      <p>Current Counter: {count}</p>
      <br />
      <button onClick={onIncrement}>increase +</button>
      <br />
      <button onClick={onDecrement}>decrease +</button>
    </div>
  );
};
