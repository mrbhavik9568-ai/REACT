import React from 'react';
import ProductDescription from './components/ProductDescription';
import BestBudgetBlog from './components/BestBudgetBlog';

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>Online Electronics Store</h1>
      <ProductDescription />

      <hr />

      <h2>SEO Image Example</h2>
      <img
        src="/images/pizza.jpg"
        alt="Fresh Margherita pizza with melted cheese, tomato sauce, and basil on a plate"
        width="500"
      />

      <hr />

      <BestBudgetBlog />
    </div>
  );
}
