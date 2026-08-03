import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// We create the root React element targeting the div with id 'root' in index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render our App inside StrictMode (which helps identify potential issues during development)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
