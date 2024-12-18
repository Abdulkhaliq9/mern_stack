import { Facebook, Instagram, Twitter } from "lucide-react";
import React from 'react'  
import Navbar from "../../components/navbar/Navbar"
import { Link } from "react-router-dom";

export default function Header() {
  return (
  <>
       <div className="bg-[#dfdfdf] ">
    <div className="hidden md:flex justify-between items-center max-w-screen-xl mx-auto w-full    py-2  px-5">
       <div className="text-sm text-gray-600">
          <span>support@example.com</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex space-x-3">
            <Link to="#" className="text-gray-600 hover:text-blue-600"><Facebook /></Link>
            <Link to="#" className="text-gray-600 hover:text-blue-400"><Twitter /></Link>
            <Link to="#" className="text-gray-600 hover:text-pink-600"><Instagram /></Link>
          </div>
          <button className="bg-blue-600 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-700">
            Login
          </button>
        </div>
       </div>
      </div>
    {/* <Navbar/> */}
  </>
  );
}
