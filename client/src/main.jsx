// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./context/auth";
import { ModalProvider } from "./context/modalContext.jsx";
import { SearchProvider } from "./context/searchContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <Router>
        <React.StrictMode>
      <ModalProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
      </ModalProvider>
        </React.StrictMode>
    </Router>
  </AuthProvider>
);
