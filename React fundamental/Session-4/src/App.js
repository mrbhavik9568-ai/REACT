import React from 'react';
import LikeButton from './components/LikeButton';
import CartItem from './components/CartItem';
import SongVote from './components/SongVote';
import RatingSelector from './components/RatingSelector';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>React Hooks Learning Project: <code>useState</code></h1>
        <p className="subtitle">
          An assignment showing simple real-world examples of how state changes in React using functional components.
        </p>
      </header>

      <main className="assignment-grid">
        {/* Section 1: Like Button */}
        <section className="component-card-wrapper">
          <div className="section-title">Example 1: Like Counter</div>
          <LikeButton />
        </section>

        {/* Section 2: Cart Item Quantity */}
        <section className="component-card-wrapper">
          <div className="section-title">Example 2: Shopping Cart Item</div>
          <CartItem />
        </section>

        {/* Section 3: Song Voting */}
        <section className="component-card-wrapper">
          <div className="section-title">Example 3: Playlist Song Voting</div>
          <SongVote />
        </section>

        {/* Section 4: Rating Selector */}
        <section className="component-card-wrapper">
          <div className="section-title">Example 4: Restaurant Star Rating</div>
          <RatingSelector />
        </section>
      </main>

      <footer className="app-footer">
        <p>Created by Bhavik (React Hooks Student) - Session 4 Practice</p>
      </footer>
    </div>
  );
}

export default App;
