import React from 'react';

// OrderStatus component receives a boolean prop isDelivered
// It uses a ternary operator for conditional rendering
function OrderStatus({ isDelivered }) {
  // Check if order is delivered
  return (
    <div className="component">
      <p>{isDelivered ? 'Order Delivered 🎉' : 'Order on the way 🚚'}</p>
    </div>
  );
}

export default OrderStatus;
