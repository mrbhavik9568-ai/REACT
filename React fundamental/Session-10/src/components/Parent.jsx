// src/components/Parent.jsx
import React from "react";
import Child from "./Child";

// Parent component that simply renders its child.
// In a real app we might pass props down, but here we rely on context.
const Parent = () => {
  return <Child />;
};

export default Parent;
