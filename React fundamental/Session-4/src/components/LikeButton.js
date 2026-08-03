import React, { useState } from 'react';

function LikeButton() {
  // We use useState to keep track of our like count.
  // The count starts at 0.
  // 'likes' holds the current value, and 'setLikes' is the function to update it.
  const [likes, setLikes] = useState(0);

  // This function is called when the user clicks the button
  const handleLike = () => {
    // Increase the current likes by 1
    setLikes(likes + 1);
  };

  return (
    <div style={containerStyle}>
      <h4>Component 1: Like Button</h4>
      <p>Click the button below to increase the count. It uses useState!</p>
      
      {/* Clicking this button triggers handleLike */}
      <button onClick={handleLike} style={buttonStyle}>
        ❤️ Like | <span style={{ fontWeight: 'bold' }}>{likes}</span>
      </button>
    </div>
  );
}

// Simple styling object at the bottom, very typical for a beginner student project
const containerStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  margin: '16px 0',
  backgroundColor: '#fff',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  textAlign: 'center'
};

const buttonStyle = {
  backgroundColor: '#ff4d4f',
  color: 'white',
  border: 'none',
  borderRadius: '20px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
  outline: 'none'
};

export default LikeButton;
