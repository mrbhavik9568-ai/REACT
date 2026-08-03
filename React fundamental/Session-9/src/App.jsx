import { NavLink, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import DealsPage from './pages/DealsPage';
import CartPage from './pages/CartPage';
import NotFound from './pages/NotFound';

function App() {
  // Simple navigation bar with active link styling
  const activeStyle = { color: '#ff6600' }; // orange for active link

  return (
    <div className="app-container">
      <nav className="navbar">
        <NavLink to="/" end style={({ isActive }) => (isActive ? activeStyle : undefined)} className="nav-link">
          Home
        </NavLink>
        <NavLink to="/deals" style={({ isActive }) => (isActive ? activeStyle : undefined)} className="nav-link">
          Deals
        </NavLink>
        <NavLink to="/cart" style={({ isActive }) => (isActive ? activeStyle : undefined)} className="nav-link">
          Cart
        </NavLink>
      </nav>

      <main className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/deals" element={<DealsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
