import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { useModal } from "../../context/modalContext";
import Login from "../../auth/Login";
import { useAuth } from "../../context/auth";

export default function Header() {
  const { activePopup, handlePopup } = useModal();
  const { auth } = useAuth();

  return (
    <>
      <div className="bg-[#dfdfdf]">
        <div className="hidden md:flex justify-between items-center max-w-screen-xl mx-auto w-full py-2 px-5">
          <div className="text-sm text-gray-600">
            <span>support@example.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-3">
              <Link to="#" className="text-gray-600 hover:text-blue-600">
                <Facebook />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-blue-400">
                <Twitter />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-pink-600">
                <Instagram />
              </Link>
            </div>

            {!auth?.user ? (
              <button
                onClick={() => handlePopup("login")}
                className="bg-blue-600 text-dark px-4 py-1 rounded-md text-sm hover:bg-blue-700"
              >
                Login
              </button>
            ) : (
              // <>{!auth?.user}</>
              <>
              
              </>
            )}
          </div>
        </div>
      </div>
      {activePopup && (
        <Login activePopup={activePopup} handlePopup={handlePopup} />
      )}
    </>
  );
}
