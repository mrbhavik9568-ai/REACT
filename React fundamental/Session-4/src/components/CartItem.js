import React, { useState } from 'react';

function CartItem() {
  // Initializing quantity to 1 because usually when we see an item in a cart,
  // there is at least 1 item selected.
  const [quantity, setQuantity] = useState(1);

  // Function to increase quantity when '+' is clicked
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  // Function to decrease quantity when '-' is clicked
  const handleDecrease = () => {
    // Check if the quantity is greater than 0 so it never goes below 0
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      alert("Quantity cannot be negative!");
    }
  };

  return (
    <div style={cardStyle}>
      <h4>Component 2: Flipkart Cart Item</h4>
      <div style={productInfoStyle}>
        <span style={productNameStyle}>🎧 Sony Wireless Headphones</span>
        <span style={priceStyle}>$99.99</span>
      </div>

      <div style={controlsStyle}>
        {/* Decrease button */}
        <button onClick={handleDecrease} style={buttonStyle}>-</button>
        
        {/* Display current quantity */}
        <span style={quantityStyle}>{quantity}</span>
        
        {/* Increase button */}
        <button onClick={handleIncrease} style={buttonStyle}>+</button>
      </div>

      {quantity === 0 && (
        <p style={{ color: '#ff4d4f', fontSize: '12px', marginTop: '8px' }}>
          Item will be removed from cart if quantity is 0.
        </p>
      )}
    </div>
  );
}

// Simple styling objects for styling the component
const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  margin: '16px 0',
  backgroundColor: '#fff',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
};

const productInfoStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '15px'
};

const productNameStyle = {
  fontWeight: 'bold',
  fontSize: '16px'
};

const priceStyle = {
  color: '#388e3c',
  fontWeight: 'bold'
};

const controlsStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px'
};

const buttonStyle = {
  width: '32px',
  height: '32px',
  fontSize: '18px',
  fontWeight: 'bold',
  cursor: 'pointer',
  backgroundColor: '#f1f1f1',
  border: '1px solid #ccc',
  borderRadius: '4px'
};

const quantityStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
  width: '24px',
  textAlign: 'center'
};

export default CartItem;
