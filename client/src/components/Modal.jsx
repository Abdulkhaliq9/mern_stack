import React from "react";
export default function Modal({ children }) {
  



  return (
    <div className=" ">
      <div
        id="authOverlay"
        className="fixed z-10 left-0 top-0 h-full w-full flex items-center justify-center py-3 px-2 overflow-y-auto bg-white/80 backdrop-blur-sm scale-y-0 -translate-x-full opacity-0 origin-center"
      >
        <div
          id="fourth"
          className="bg-white/0 max-w-sm m-auto mb-0 sm:mb-auto p-3 border border-white/0 rounded-2xl shadow-sm"
        >
          <div
            id="second"
            className="bg-white p-4 sm:p-8 w-full rounded-xl shadow-sm scale-y-0 opacity-0"
          >
            {children}

           
          </div>
        </div>
      </div>
      
    </div>
  );
}
