import React from 'react';
import './App.css';
// Importing our custom beginner components
import ProductCard from './components/ProductCard';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>React Basics Learning Project</h1>
        <p>Created by a beginner student learning components, props, defaultProps, and propTypes.</p>
      </header>

      <main className="app-content">
        {/* Section for Product Cards */}
        <section className="project-section">
          <h2>Product Cards (with PropTypes Validation)</h2>
          <div className="cards-container">
            {/* ProductCard 1 */}
            <ProductCard productName="Cool Gaming Mouse" price={25.99} />
            
            {/* ProductCard 2 */}
            <ProductCard productName="Mechanical Keyboard" price={79.99} />
            
            {/* ProductCard 3 */}
            <ProductCard productName="USB-C Charging Cable" price={12.49} />
          </div>
        </section>

        {/* Section for User Profiles */}
        <section className="project-section">
          <h2>User Profiles (with defaultProps Demonstration)</h2>
          <div className="cards-container">
            {/* Case 1: All props provided */}
            <UserProfile 
              username="alice_explorer" 
              followers={1500} 
              profilePic="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face" 
            />

            {/* Case 2: Omitting followers and profilePic (takes both default values) */}
            <UserProfile 
              username="bob_builder" 
            />

            {/* Case 3: Omitting only profilePic (takes default picture, but followers is custom) */}
            <UserProfile 
              username="charlie_react" 
              followers={480} 
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
