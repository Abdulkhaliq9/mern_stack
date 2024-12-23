import Category from "./Category";
import Search from "../Search";

import { useState } from "react";
import { MenuIcon, Phone, ShoppingCart, User, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import AddToCart from "../addtocart/AddToCart";
import { useAuth } from "../../context/auth";
import { useModal } from "../../context/modalContext";
import Login from "../../auth/Login";

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalItems, setIsCartOpen, isCartOpen } = useCart();
  const { auth, logout } = useAuth();
  const { activePopup,handlePopup } = useModal();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/products" },
    { name: "About Us", path: "" },
    { name: "Contact Us", path: "" },
  ];

  return (
    <div className="">
      {/* Top Section */}

      {/* Main Navbar */}
      <div className=" py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center text-lg sm:text-3xl font-bold">
            {/* <img
              src="https://images.unsplash.com/photo-1614851099511-773084f6911d"
              alt="Logo"
              className="h-10 w-auto"
            /> */}
            Mega Mart
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  `text-dark hover:text-blue font-bold ${
                    isActive ? "text-purple font-bold" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Profile and Cart */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="  bg-blue  p-3 rounded-full cursor-pointer text-white transition-all"
                aria-label="Shopping Cart"
              >
                <ShoppingCart className="text-xl text-dark" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </div>
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
              >
                <User size={20} />
              </button>
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  {auth?.user ? (
                    <>
                      <NavLink
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Profile
                      </NavLink>
                      <button
                        onClick={logout}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                       type="button"
                        onClick={() => handlePopup("login")}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Login
                      </button>
                    {
                      activePopup === "login" && <Login/>
                    }
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  `block py-2 text-dark font-bold hover:text-blue ${
                    isActive ? "text-purple font-bold" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="mt-4 flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => setIsCartOpen(!isCartOpen)}
                  className="  bg-blue  p-3 rounded-full cursor-pointer text-white transition-all"
                  aria-label="Shopping Cart"
                >
                  <ShoppingCart className="text-xl text-dark" />
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                      {getTotalItems()}
                    </span>
                  )}
                </button>
              </div>
              <button className="text-gray-600 hover:text-blue-600">
                <User size={20} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Section */}
      <div
        className={`py-3 grid grid-cols-12 gap-5 sm:flex  sm:flex-row justify-between items-center `}
      >
        {/* Categories */}
        <div className="relative col-span-6  sm:order-none order-1">
          <Category />
        </div>

        {/* Search Bar */}

        <div className="flex-1 col-span-12 max-w-2xl px-4 sm:order-none order-3">
          <Search />
        </div>

        {/* Contact Info */}
        <div className="flex items-center col-span-6 space-x-4 sm:order-none order-2">
          <div className="flex items-center space-x-2 text-gray-600">
            <Phone className="text-blue-600" />
            <span>1-800-123-4567</span>
          </div>
        </div>
      </div>

      {isCartOpen && <AddToCart />}
    </div>
  );
};

export default Navbar;
