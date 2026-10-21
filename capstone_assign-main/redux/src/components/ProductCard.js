import React from 'react'
import { useDispatch } from 'react-redux'
import {
  addToCart,
  removeFromCart,
} from '../actions/cartActions'
import {
  addToWishlist,
  removeFromWishlist,
} from '../actions/wishlistActions'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-details">
        <h3>{product.title}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
      <div className="button-group">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => dispatch(addToCart(product))}
        >
          Add To Cart
        </button>
        <button
          type="button"
          className="btn btn-outline"
          onClick={() => dispatch(removeFromCart(product.id))}
        >
          Remove From Cart
        </button>
      </div>
      <div className="button-group">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => dispatch(addToWishlist(product))}
        >
          Add To Wishlist
        </button>
        <button
          type="button"
          className="btn btn-outline"
          onClick={() => dispatch(removeFromWishlist(product.id))}
        >
          Remove From Wishlist
        </button>
      </div>
    </div>
  )
}

export default ProductCard
