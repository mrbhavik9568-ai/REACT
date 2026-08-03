import React from 'react';
// Importing PropTypes for prop validation
import PropTypes from 'prop-types';

// A simple product card component
function ProductCard(props) {
  return (
    <div className="product-card">
      <h3 className="product-name">{props.productName}</h3>
      <p className="product-price">Price: ${props.price}</p>
    </div>
  );
}

/* 
  Why prop validation is useful:
  - It helps catch bugs by checking if the component gets the right type of data.
  - If someone passes a string instead of a number for the price, React will show a warning in the console.
  - It works like documentation, showing other developers what props this component expects.
*/
ProductCard.propTypes = {
  productName: PropTypes.string.isRequired, // productName must be a string and is required
  price: PropTypes.number.isRequired       // price must be a number and is required
};

export default ProductCard;
