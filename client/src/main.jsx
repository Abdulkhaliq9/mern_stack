// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./context/auth";
import { ModalProvider } from "./context/modalContext.jsx";
import { SearchProvider } from "./context/searchContext.jsx";
import { CartProvider } from "./context/cartContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ModalProvider>
     <CartProvider>
     <Router>
        <React.StrictMode>
          <SearchProvider>
            <App />
          </SearchProvider>
        </React.StrictMode>
      </Router>
     </CartProvider>
    </ModalProvider>
  </AuthProvider>
);
