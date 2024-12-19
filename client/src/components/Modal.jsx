import React from "react";
import { useModal } from "../context/modalContext";
// import gsap from "gsap";
export default function Modal({ children }) {
  const { closeAuthModal } = useModal();

  // if (!isModalOpen) return null;

  return (
    <div
      id="authOverlay"
      className="fixed z-10 left-0 top-0 h-full w-full flex items-center justify-center py-3 px-2 overflow-y-auto bg-white/80 backdrop-blur-sm"
      // aria-hidden={!isModalOpen}
      aria-modal="true"
    >
      <div
        id="fourth"
        className="bg-white/0  m-auto mb-0 sm:mb-auto p-3 border border-white/0 rounded-2xl shadow-sm"
      >
        <div
          id="second"
          className="bg-white p-4 sm:p-8 w-full rounded-xl shadow-sm"
        >
          {children}
          <button
            onClick={closeAuthModal}
            className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
