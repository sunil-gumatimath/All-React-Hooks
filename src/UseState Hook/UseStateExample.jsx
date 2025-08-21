import React, { useState } from 'react';

const UseStateExample = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <input
        type="text"
        placeholder="type something"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <p>
        You typed: <strong>{inputValue}</strong>
      </p>
    </div>
  );
};

export default UseStateExample;
