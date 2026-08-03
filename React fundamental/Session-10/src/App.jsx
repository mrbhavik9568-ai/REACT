// src/App.jsx
import React, { useContext } from "react";
import { UserProvider } from "./context/UserContext";
import { ThemeContext } from "./context/ThemeContext";
import { ThemeProvider } from "./context/ThemeContext";
import { NotificationProvider } from "./context/NotificationContext";
import Navbar from "./components/Navbar";
import Parent from "./components/Parent";
import NotificationDemo from "./components/NotificationDemo";
import "./App.css";

// The top‑level component wraps the whole app with three context providers.
function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <UserProvider>
      <ThemeProvider>
        <NotificationProvider>
          <div className={`app-container ${theme}`}>
            <Navbar />
            {/* Simple demo showing prop‑drilling replacement */}
            <Parent />
            {/* Notification demo placed below the navbar */}
            <NotificationDemo />
          </div>
        </NotificationProvider>
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
