import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import UserDashBoard from "./pages/UserDashboard.jsx";
import AdminDashboard from "./admin/pages/AdminDashboard.jsx";
// import User from "./pages/UserDashboard.jsx";
import Cart from "./pages/Cart.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Products from "./pages/Products.jsx";
import Private from "./routes/Private.jsx";
import AdminRoute from "./routes/AdminRoute.jsx";
import LogIn from "./auth/Login.jsx";
import Register from "./auth/Register.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import AddProducts from "./admin/pages/AddProducts.jsx";
import AddCategory from "./admin/pages/AddCategory.jsx";
import { Toaster } from "react-hot-toast";
import CheckOut from "./pages/CheckOut.jsx";

function App() {
  return (
    <>
      <Routes>
        {/* <Route exact path="/" element={<User />} /> */}
        <Route exact path="/" element={<Private />}>
          <Route index   element={<UserDashBoard />} />
          <Route exact path="/checkout" element={<CheckOut />} />
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route exact path="admin" element={<AdminDashboard />} />
          <Route exact path="addproducts" element={<AddProducts />} />
          <Route exact path="addcategory" element={<AddCategory />} />
        </Route>

        <Route exact path="/cart" element={<Cart />} />

        <Route exact path="/details" element={<ProductDetail />} />

        <Route exact path="/products" element={<Products />} />

        <Route exact path="/login" element={<LogIn />} />

        <Route exact path=" /register" element={<Register />} />

        <Route
          exact
          path="/pages/forgotpassword"
          element={<ForgotPassword />}
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
