// src/components/GrandChild.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

// GrandChild demonstrates accessing theme directly via Context.
// This would normally be passed as a prop from Parent -> Child -> GrandChild.
const GrandChild = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      {/* Beginner comment: Context avoids prop drilling */}
      <p>The current theme inside GrandChild is: <strong>{theme}</strong></p>
    </div>
  );
};

export default GrandChild;
