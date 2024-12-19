import Category from "./Category";
import Search from "../Search";

import { useState } from "react";
import {
  Cross,
  MenuIcon,
  Phone,
  
  ShoppingCart,
  User,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/products" },
    { name: "About Us", path: "#" },
    { name: "Contact Us", path: "#" },
  ];

  return (
    <div className="">
      {/* Top Section */}

      {/* Main Navbar */}
      <div className=" py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center text-xl font-bold">
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
            {isMobileMenuOpen ? <Cross size={24} /> : <MenuIcon size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className="text-gray-600 hover:text-blue-600 active"
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Profile and Cart */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-600 hover:text-blue-600">
              <ShoppingCart size={20} />
            </button>
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
              >
                <User size={20} />
              </button>
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <NavLink
                    to=""
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </NavLink>
                  <NavLink
                    to=""
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </NavLink>
                  <NavLink
                    to=""
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </NavLink>
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
                className="block py-2 text-gray-600 hover:text-blue-600"
              >
                {link.name}
              </NavLink>
            ))}
            <div className="mt-4 flex items-center space-x-4">
              <button className="text-gray-600 hover:text-blue-600">
                <ShoppingCart size={20} />
              </button>
              <button className="text-gray-600 hover:text-blue-600">
                <User size={20} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Section */}
      <div className="py-3 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Categories */}
        <div className="relative">
          <Category />
        </div>

        {/* Search Bar */}


        <div className="flex-1 max-w-2xl px-4">
      
       <Search/>
      </div>


        {/* Contact Info */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-gray-600">
            <Phone className="text-blue-600" />
            <span>1-800-123-4567</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
