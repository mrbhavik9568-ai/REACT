import React from 'react';
import './App.css';

// Import our custom components from the components folder
import UserGreeting from './components/UserGreeting';
import UserGreetingClass from './components/UserGreetingClass';
import MiniProfile from './components/MiniProfile';

// This is our main root component, App
function App() {
  return (
    <div className="App">
      {/* Requirement 2: JSX heading */}
      <h1 className="main-title">Welcome to React JSX!</h1>
      
      <div className="comparison-section">
        <h2>Comparing Functional vs. Class Components</h2>
        <p className="comparison-sub">Both components receive the prop username="Bhavik"</p>
        
        <div className="comparison-row">
          {/* Section 1: Rendering functional greeting component */}
          <div className="comparison-card">
            <h3>Functional Component</h3>
            <UserGreeting username="Bhavik" />
          </div>
          
          {/* Section 2: Rendering class-based greeting component */}
          <div className="comparison-card">
            <h3>Class Component</h3>
            <UserGreetingClass username="Bhavik" />
          </div>
        </div>
      </div>
      
      <hr className="section-divider" />
      
      {/* Section 3: Instagram-style Profile Card */}
      <div className="profile-container">
        <h2>Instagram-Style Mini Profile</h2>
        <MiniProfile />
      </div>
    </div>
  );
}

export default App;
