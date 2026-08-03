import React from 'react';

// CartSummary component receives an array of cart items via props
// Each item has a name and price
function CartSummary({ cartItems }) {
  // Show message when cart is empty
  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="component">
        <p>Cart is empty</p>
      </div>
    );
  }

  const handleCheckout = () => {
    alert('Proceeding to checkout!');
  };

  return (
    <div className="component">
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {`${item.name} - $${item.price}`}
          </li>
        ))}
      </ul>
      {/* Show checkout button only when enough items are added */}
      {cartItems.length >= 3 && (
        <button className="checkout-button" onClick={handleCheckout}>Checkout Now</button>
      )}
    </div>
  );
}

export default CartSummary;
