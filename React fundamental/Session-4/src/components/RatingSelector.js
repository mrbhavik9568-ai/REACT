import React, { useState } from 'react';

function RatingSelector() {
  // We keep track of the selected rating. 
  // It starts at 0 (meaning no stars clicked yet).
  const [rating, setRating] = useState(0);

  // We can use a simple array of numbers [1, 2, 3, 4, 5] to render our 5 stars
  const starList = [1, 2, 3, 4, 5];

  return (
    <div style={containerStyle}>
      <h4>Component 4: Zomato Star Rating</h4>
      <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#555' }}>
        Please rate your food experience:
      </p>

      {/* Star rendering section */}
      <div style={starsContainerStyle}>
        {starList.map((starIndex) => {
          return (
            <span
              key={starIndex}
              onClick={() => setRating(starIndex)}
              style={starStyle}
            >
              {/* If the current star's number is less than or equal to the selected rating, 
                  we show a filled star (★). Otherwise, we show an empty star (☆) */}
              {starIndex <= rating ? '★' : '☆'}
            </span>
          );
        })}
      </div>

      {/* Display rating status below the stars */}
      <div style={statusStyle}>
        {rating > 0 ? (
          <span>
            You rated this: <strong style={{ color: '#cb202d' }}>{rating} / 5 stars</strong>
          </span>
        ) : (
          <span style={{ color: '#888' }}>Tap a star to give a rating.</span>
        )}
      </div>
    </div>
  );
}

// Simple styling objects
const containerStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  margin: '16px 0',
  backgroundColor: '#fff',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  textAlign: 'center'
};

const starsContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '8px',
  marginBottom: '10px'
};

const starStyle = {
  fontSize: '35px',
  cursor: 'pointer',
  color: '#cb202d', // Zomato Red/Crimson color!
  userSelect: 'none'
};

const statusStyle = {
  fontSize: '14px',
  fontWeight: '500',
  marginTop: '5px'
};

export default RatingSelector;
