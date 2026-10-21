import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromWishlist } from '../actions/wishlistActions'

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items)
  const dispatch = useDispatch()

  return (
    <section className="panel">
      <div className="panel-header">
        <h2>Wishlist</h2>
        <span className="badge">{wishlistItems.length}</span>
      </div>
      {wishlistItems.length === 0 ? (
        <p className="panel-empty">Your wishlist is empty.</p>
      ) : (
        <div className="panel-list">
          {wishlistItems.map((product) => (
            <div key={product.id} className="list-item">
              <div>
                <h4>{product.title}</h4>
                <p>${product.price.toFixed(2)}</p>
              </div>
              <button
                type="button"
                className="btn btn-remove"
                onClick={() => dispatch(removeFromWishlist(product.id))}
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

export default Wishlist
