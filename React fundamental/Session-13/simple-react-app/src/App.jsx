import React, { useState } from 'react';
import './App.css';

// main App component
function App() {
  // state for counter
  const [count, setCount] = useState(0);

  // state for dark mode toggle
  const [isDark, setIsDark] = useState(false);

  // toggle dark mode
  const toggleDark = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? 'app dark' : 'app'}>
      <h1>🎵 Simple Music Counter</h1>
      <p>Songs played today: {count}</p>

      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>▶ Play Song</button>
        <button onClick={() => setCount(0)}>🔄 Reset</button>
      </div>

      <br />

      {/* dark mode toggle button */}
      <button className="toggle-btn" onClick={toggleDark}>
        {isDark ? '☀ Light Mode' : '🌙 Dark Mode'}
      </button>

      <footer>
        <p>Made by Bhavik | Session 13 Assignment</p>
      </footer>
    </div>
  );
}

export default App;
