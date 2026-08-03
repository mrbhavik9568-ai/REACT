import React, { useState } from 'react';

// Task 2: SearchBar - Flipkart style search box
function SearchBar() {
  // text stores whatever the user types
  const [text, setText] = useState('');

  // update state whenever user types something
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={boxStyle}>
      <h3>🔍 Flipkart Search Bar</h3>

      {/* search input */}
      <input
        type="text"
        placeholder="Search for products, brands and more"
        value={text}
        onChange={handleChange}
        style={inputStyle}
      />

      {/* show what user is typing in real time */}
      <p style={{ marginTop: '12px', color: '#555' }}>
        You are searching for: <strong>{text || '...'}</strong>
      </p>
    </div>
  );
}

const boxStyle = {
  padding: '15px',
};

const inputStyle = {
  width: '100%',
  padding: '10px 15px',
  fontSize: '15px',
  border: '2px solid #2874f0',
  borderRadius: '4px',
  outline: 'none',
  boxSizing: 'border-box',
};

export default SearchBar;
