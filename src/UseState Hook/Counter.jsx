import React, { useState } from 'react';

const Counter = () => {
  //step 1 : Create a state variable
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>

      {/* Step 2 : Update state when button is clicked  */}

      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
