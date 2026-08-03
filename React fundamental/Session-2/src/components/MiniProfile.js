import React from 'react';

// This is the MiniProfile component, structured as a functional component.
// It displays a simple Instagram-like profile card.
function MiniProfile() {
  // Simple local user data object
  const user = {
    name: 'Bhavik Patel',
    // We use a high-quality free stock avatar from Unsplash
    avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80',
    status: 'Exploring the world of React! 🚀 #JSX #WebDev'
  };

  return (
    <div className="profile-card">
      {/* 
        JSX Rule: All elements must be closed. 
        Note how the <img> tag has a slash at the end (self-closing) and has an 'alt' attribute.
      */}
      <img 
        className="profile-img" 
        src={user.avatarUrl} 
        alt="User Avatar" 
      />
      
      <div className="profile-info">
        {/* User Name in heading */}
        <h3 className="profile-username">{user.name}</h3>
        {/* Status message */}
        <p className="profile-status">{user.status}</p>
      </div>
    </div>
  );
}

// Exporting so App.js can import it
export default MiniProfile;
