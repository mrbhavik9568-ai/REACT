import React from 'react';
import { NavLink } from 'react-router-dom';

function NotFound() {
  return (
    <div className="page-card">
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <NavLink to="/" className="nav-link" style={{ marginTop: '12px', display: 'inline-block' }}>
        Return to Home
      </NavLink>
    </div>
  );
}

export default NotFound;
