import { useState } from 'react';
import UseEffectExample from './UseEffectExample';

function Example() {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      {toggle && <UseEffectExample />}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  );
}

export default Example;
