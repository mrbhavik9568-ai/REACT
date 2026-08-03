import React from 'react';

// A simple Instagram-style user profile card
function UserProfile(props) {
  return (
    <div className="user-profile-card">
      <img 
        src={props.profilePic} 
        alt={`${props.username}'s profile`} 
        className="profile-pic" 
      />
      <h3 className="username">@{props.username}</h3>
      <p className="followers">{props.followers} followers</p>
    </div>
  );
}

// Defining default props for when they are not passed to this component
UserProfile.defaultProps = {
  followers: 0, // Default followers count is 0
  profilePic: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' // Default placeholder avatar image URL
};

export default UserProfile;
