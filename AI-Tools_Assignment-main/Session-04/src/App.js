import React from 'react';
import './index.css';
import foodScooter from './assets/food-scooter.webp';

function App() {
  return (
    <div className="app">
      <h1>Food Delivery Icon</h1>
      <img src={foodScooter} alt="Food Delivery" width={200} />
    </div>
  );
}

export default App;
