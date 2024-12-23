import React from "react";
import { useModal } from "../context/modalContext";
import { X } from "lucide-react";
// import gsap from "gsap";
export default function Modal({ children, heading }) {
  const { closePopup } = useModal();

  // if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            // onClick={() => setIsModalOpen(false)}
          ></div>
          
          <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-8 w-full max-w-md mx-4 relative z-10 border border-white border-opacity-30 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">{heading}</h2>
              <button
                onClick={closePopup}
                className="text-white hover:text-gray-200 transition duration-300"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

        {children}
          </div>
        </div>
  );
}
