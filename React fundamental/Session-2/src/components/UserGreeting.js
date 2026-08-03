import React from 'react';

// This is a functional component named UserGreeting.
// It accepts 'props' (properties) as an argument, which is an object containing data passed from the parent.
function UserGreeting(props) {
  return (
    <div className="greeting-card">
      {/* We use curly braces {} to output the value of props.username in JSX */}
      <p>Hello, {props.username}!</p>
    </div>
  );
}

// We export the component so we can import and render it in App.js
export default UserGreeting;
