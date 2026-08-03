import React, { useState } from 'react';

// Task 1: LikeButton - click the button and count goes up
function LikeButton() {
  // count keeps track of how many times we clicked
  const [count, setCount] = useState(0);

  // this runs when we click the button
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={boxStyle}>
      <h3>👍 Like Button</h3>
      <p>You liked this <strong>{count}</strong> times</p>
      <button onClick={handleClick} style={btnStyle}>
        Like 👍
      </button>
    </div>
  );
}

// some basic styling
const boxStyle = {
  textAlign: 'center',
  padding: '15px',
};

const btnStyle = {
  backgroundColor: '#3498db',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  padding: '10px 25px',
  fontSize: '16px',
  cursor: 'pointer',
};

export default LikeButton;
