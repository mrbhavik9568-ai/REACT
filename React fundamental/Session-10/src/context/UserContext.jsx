// src/context/UserContext.jsx
import React, { createContext } from "react";

// Default user information
const defaultUser = {
  username: "Bhavik",
  loggedIn: true,
};

export const UserContext = createContext(defaultUser);

// Simple provider that just forwards the default values
export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={defaultUser}>
      {children}
    </UserContext.Provider>
  );
};
