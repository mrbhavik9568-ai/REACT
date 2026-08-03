// src/context/ThemeContext.jsx
import React, { createContext, useState } from "react";

// Create a context with default theme "light"
export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {}
});

export const ThemeProvider = ({ children }) => {
  // Store the current theme in state; default is "light"
  const [theme, setTheme] = useState("light");

  // Simple function to toggle between light and dark
  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
