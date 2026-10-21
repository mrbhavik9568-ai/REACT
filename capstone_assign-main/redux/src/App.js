import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import ProductCard from './components/ProductCard'
import Cart from './components/Cart'
import Wishlist from './components/Wishlist'
import Offers from './components/Offers'
import './App.css'

const products = [
  {
    id: 1,
    title: 'Wireless Headphones',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80',
    category: 'Electronics',
  },
  {
    id: 2,
    title: 'Classic Sneakers',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1528701800489-20b8f3749b5d?auto=format&fit=crop&w=400&q=80',
    category: 'Footwear',
  },
  {
    id: 3,
    title: 'Travel Backpack',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
    category: 'Accessories',
  },
  {
    id: 4,
    title: 'Smart Watch',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80',
    category: 'Wearables',
  },
  {
    id: 5,
    title: 'Denim Jacket',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=400&q=80',
    category: 'Apparel',
  },
  {
    id: 6,
    title: 'Coffee Mug',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80',
    category: 'Home',
  },
]

function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <header className="hero-banner">
          <div>
            <p className="eyebrow">College Practical Assignment</p>
            <h1>Shopping Cart & Wishlist using Redux</h1>
            <p className="hero-copy">
              Practice Redux state management with cart, wishlist, and async offers.
            </p>
          </div>
        </header>

        <main>
          <section className="content-grid">
            <div className="products-panel">
              <div className="panel-header">
                <h2>Products</h2>
              </div>
              <div className="products-grid">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
            <div className="side-panels">
              <Offers />
              <Cart />
              <Wishlist />
            </div>
          </section>
        </main>
      </div>
    </Provider>
  )
}

export default App;
