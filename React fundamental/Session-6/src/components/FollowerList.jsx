import React from 'react';

// FollowerList component receives an array of usernames via props
// It checks if the array is empty before rendering
function FollowerList({ followers }) {
  // Show message when no followers exist
  if (!followers || followers.length === 0) {
    return (
      <div className="component">
        <p>No followers yet</p>
      </div>
    );
  }

  return (
    <div className="component">
      <ul>
        {followers.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default FollowerList;
