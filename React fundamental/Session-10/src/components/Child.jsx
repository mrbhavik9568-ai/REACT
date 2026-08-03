// src/components/Child.jsx
import React from "react";
import GrandChild from "./GrandChild";

// Child component just forwards rendering to GrandChild.
// In a prop‑drilling scenario we might receive a "theme" prop here,
// but we are using Context instead, so no props are needed.
const Child = () => {
  return <GrandChild />;
};

export default Child;
