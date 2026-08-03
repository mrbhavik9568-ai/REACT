// src/context/NotificationContext.jsx
import React, { createContext, useState } from "react";

// Default notification state
const defaultNotification = {
  count: 0,
  add: () => {},
  clear: () => {}
};

export const NotificationContext = createContext(defaultNotification);

export const NotificationProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const add = () => setCount(prev => prev + 1);
  const clear = () => setCount(0);

  return (
    <NotificationContext.Provider value={{ count, add, clear }}>
      {children}
    </NotificationContext.Provider>
  );
};
