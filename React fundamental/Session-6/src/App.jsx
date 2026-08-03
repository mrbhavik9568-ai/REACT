// Student‑style React demo showcasing props, map, and conditional rendering
import './App.css';
import Playlist from './components/Playlist.jsx';
import OrderStatus from './components/OrderStatus.jsx';
import FollowerList from './components/FollowerList.jsx';
import CartSummary from './components/CartSummary.jsx';

function App() {
  // sample data arrays for demonstration
  const songs = [
    { title: 'Imagine', artist: 'John Lennon' },
    { title: 'Hey Jude', artist: 'The Beatles' },
    { title: 'Bohemian Rhapsody', artist: 'Queen' },
  ];

  const followers = ['alice', 'bob', 'charlie'];

  const cartItems = [
    { name: 'Apple', price: 1.5 },
    { name: 'Banana', price: 0.9 },
    { name: 'Cherry', price: 2.2 },
  ];

  const isDelivered = false; // toggle true/false to see conditional rendering

  return (
    <div className="app">
      <h1>React Fundamentals Demo</h1>

      <section className="section">
        <h2>Playlist</h2>
        {/* Display all songs using map */}
        <Playlist songs={songs} />
      </section>

      <section className="section">
        <h2>Order Status</h2>
        {/* Check if order is delivered */}
        <OrderStatus isDelivered={isDelivered} />
      </section>

      <section className="section">
        <h2>Followers</h2>
        {/* Show message when no followers exist */}
        <FollowerList followers={followers} />
      </section>

      <section className="section">
        <h2>Cart Summary</h2>
        {/* Show checkout button only when enough items are added */}
        <CartSummary cartItems={cartItems} />
      </section>
    </div>
  );
}

export default App;
