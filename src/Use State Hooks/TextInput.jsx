import { useState } from 'react';

function Textinput() {
  const [text, setText] = useState('');

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
