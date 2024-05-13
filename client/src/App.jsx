import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import DashBoard from "./admin/pages/Dashboard.jsx";
import User from "./pages/User.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Products from "./pages/Products.jsx";
import Private from "./routes/Private.jsx";
import LogIn from "./auth/Login.jsx";
import Register from "./auth/Register.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<User />} />
        <Route exact path="/admin/pages/dashboard" element={<Private />}>
          <Route exact path="" element={<DashBoard />} />
        </Route>

        <Route exact path="/details" element={<ProductDetail />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/auth/login" element={<LogIn />} />
        <Route exact path="/auth/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
