// src/components/Navbar.jsx
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";
import { NotificationContext } from "../context/NotificationContext";

// Simple navigation bar that shows user info, theme toggle and notification count
const Navbar = () => {
  const { username, loggedIn } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { count } = useContext(NotificationContext);

  return (
    <nav className={theme}>
      <div>
        {/* Getting user data from context */}
        <span>Welcome, {username}</span>
        <span style={{ marginLeft: "12px" }}>
          {loggedIn ? "(Logged In)" : "(Logged Out)"}
        </span>
      </div>
      <div>
        {/* Toggle between light and dark mode */}
        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"}
        </button>
        {/* Show unread messages count */}
        <span className="badge">Unread Messages: {count}</span>
      </div>
    </nav>
  );
};

export default Navbar;
