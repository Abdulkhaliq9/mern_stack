// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
// import 'react-toastify/dist/ReactToastify.css';
// import {AuthProvider} from "./context/Auth";

import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./context/auth";
import { SearchProvider } from "./context/searchContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <Router>
      <React.StrictMode>

       <SearchProvider>
       <App />
       </SearchProvider>
      </React.StrictMode>
    </Router>
  </AuthProvider>
);
