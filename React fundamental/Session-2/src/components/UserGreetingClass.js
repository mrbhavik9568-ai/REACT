import React from 'react';

// This is a class-based component named UserGreetingClass.
// It must extend React.Component to get React features.
class UserGreetingClass extends React.Component {
  // A class component must always have a render() method.
  render() {
    return (
      <div className="greeting-card class-card">
        {/* In class components, props are accessed via 'this.props' instead of a parameter */}
        <p>Hello, {this.props.username}!</p>
      </div>
    );
  }
}

// Export the class component so we can use it elsewhere.
export default UserGreetingClass;
