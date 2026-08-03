import React from 'react';
import LikeButton from './components/LikeButton';
import SearchBar from './components/SearchBar';
import LoginForm from './components/LoginForm';
import PlaylistAdder from './components/PlaylistAdder';
import './App.css';

// Main App component - renders all our practice components
function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>React Hooks Practice: <code>useState</code></h1>
        <p className="subtitle">
          Session 5 - Forms, Events and State Management with useState hook.
        </p>
      </header>

      <main className="assignment-grid">
        {/* Task 1: Like Button */}
        <section className="component-card-wrapper">
          <div className="section-title">Task 1: Like Button</div>
          <LikeButton />
        </section>

        {/* Task 2: Search Bar */}
        <section className="component-card-wrapper">
          <div className="section-title">Task 2: Flipkart Search Bar</div>
          <SearchBar />
        </section>

        {/* Task 3 & 5: Login Form (with refactored clear) */}
        <section className="component-card-wrapper">
          <div className="section-title">Task 3 & 5: Login Form (Refactored)</div>
          <LoginForm />
        </section>

        {/* Task 4: Playlist Adder */}
        <section className="component-card-wrapper">
          <div className="section-title">Task 4: Playlist Adder</div>
          <PlaylistAdder />
        </section>
      </main>

      <footer className="app-footer">
        <p>Created by Bhavik (React Student) - Session 5 Practice</p>
      </footer>
    </div>
  );
}

export default App;
