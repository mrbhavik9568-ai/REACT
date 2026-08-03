import React, { useState } from 'react';

function SongVote() {
  // Let's start the vote count at 0 for a brand new song added to playlist
  const [votes, setVotes] = useState(0);

  // This function adds 1 to the vote count
  const handleUpvote = () => {
    setVotes(votes + 1);
  };

  // This function subtracts 1 from the vote count
  const handleDownvote = () => {
    // We check if votes > 0 so that it doesn't go negative
    if (votes > 0) {
      setVotes(votes - 1);
    } else {
      console.log("Cannot downvote. Votes are already at 0!");
    }
  };

  return (
    <div style={containerStyle}>
      <h4>Component 3: Spotify Song Vote</h4>
      
      <div style={songDetailsStyle}>
        <div>
          <strong style={{ fontSize: '16px' }}>🎵 Blinding Lights</strong>
          <div style={{ fontSize: '13px', color: '#666' }}>The Weeknd</div>
        </div>
        <div style={voteBadgeStyle}>
          Votes: {votes}
        </div>
      </div>

      <div style={buttonContainerStyle}>
        {/* Upvote button */}
        <button onClick={handleUpvote} style={upvoteButtonStyle}>
          👍 Upvote
        </button>

        {/* Downvote button */}
        <button onClick={handleDownvote} style={downvoteButtonStyle}>
          👎 Downvote
        </button>
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
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
};

const songDetailsStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '15px'
};

const voteBadgeStyle = {
  backgroundColor: '#1db954', // Spotify Green color!
  color: 'white',
  padding: '6px 12px',
  borderRadius: '20px',
  fontWeight: 'bold',
  fontSize: '14px'
};

const buttonContainerStyle = {
  display: 'flex',
  gap: '10px'
};

const upvoteButtonStyle = {
  flex: 1,
  backgroundColor: '#e6f4ea',
  color: '#137333',
  border: '1px solid #ceead6',
  borderRadius: '4px',
  padding: '8px 12px',
  cursor: 'pointer',
  fontWeight: 'bold'
};

const downvoteButtonStyle = {
  flex: 1,
  backgroundColor: '#fce8e6',
  color: '#c5221f',
  border: '1px solid #fad2cf',
  borderRadius: '4px',
  padding: '8px 12px',
  cursor: 'pointer',
  fontWeight: 'bold'
};

export default SongVote;
