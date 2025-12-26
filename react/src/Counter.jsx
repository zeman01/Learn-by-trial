import React from "react";

const Counter = () => {
  let [count, setCount] = React.useState(0);

  // increment function
  const increment = () => {
    if (count < 20) {
      setCount((prev) => prev + 1);
    }
  };

  // decrement function
  const decrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <>
      <h1>Counter Using useState</h1>
      <h1>Count : {count}</h1>
      <br />
      {/* Show Increment button only if count < 20 */}
      {count < 20 && <button onClick={increment}>Increment</button>}
      <br />

      {/* Show Decrement button only if count > 0 */}
      {count > 0 && <button onClick={decrement}>Decrement</button>}
    </>
  );
};

export default Counter;
