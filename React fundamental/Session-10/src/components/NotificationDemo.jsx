// src/components/NotificationDemo.jsx
import React, { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";

// Simple demo component to manipulate notification count.
const NotificationDemo = () => {
  const { count, add, clear } = useContext(NotificationContext);

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Notification Demo</h3>
      <p>Unread Messages: {count}</p>
      <button onClick={add}>Add Message</button>
      <button onClick={clear} style={{ marginLeft: "8px" }}>
        Clear Messages
      </button>
    </div>
  );
};

export default NotificationDemo;
