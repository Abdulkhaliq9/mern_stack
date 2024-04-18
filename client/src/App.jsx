import { Routes, Route } from "react-router-dom";
// import "./App.css";
// import UserLayout from './layouts/UserLayout'
import DashBoard from "./pages/DashBoard.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Products from "./pages/Products.jsx";
import LogIn from "./auth/Login.jsx";

import Register from "./auth/Register.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<DashBoard />} />
        <Route exact path="/details" element={<ProductDetail />} />
        <Route exact path="/products" element={<Products/>} />
        <Route exact path="/auth/login" element={<LogIn/>} />
        <Route exact path="/auth/register" element={<Register/>} />
      </Routes>
    </>
  );
}

export default App;
