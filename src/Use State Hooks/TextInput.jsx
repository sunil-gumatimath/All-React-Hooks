import { useState } from 'react';
import UseEffectExample from '../Use Effect Hooks/UseEffectExample';

function Textinput() {
  const [text, setText] = useState('');
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <strong>You typed : {text}</strong>
    </div>
  );
}

export default Textinput;
