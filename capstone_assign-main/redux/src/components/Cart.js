import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../actions/cartActions'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  return (
    <section className="panel">
      <div className="panel-header">
        <h2>Cart</h2>
        <span className="badge">{cartItems.length}</span>
      </div>
      {cartItems.length === 0 ? (
        <p className="panel-empty">Your cart is empty.</p>
      ) : (
        <div className="panel-list">
          {cartItems.map((product) => (
            <div key={product.id} className="list-item">
              <div>
                <h4>{product.title}</h4>
                <p>${product.price.toFixed(2)}</p>
              </div>
              <button
                type="button"
                className="btn btn-remove"
                onClick={() => dispatch(removeFromCart(product.id))}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Cart
