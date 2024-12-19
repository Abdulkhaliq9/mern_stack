import React from 'react'  
import { ChevronUpCircle } from "lucide-react";
// import "../css/components/backtotop.css"
export default function ScrollToTop({ handleScrollToTop }) {
  return (
    
    
    
    <div className="scrollToTop fixed bg-orange bottom-5 right-5 rounded-full hover:bg-purple " >
    <button
      className="btn upward  text-white p-4 border-none"
      onClick={handleScrollToTop}
    >
      <ChevronUpCircle />
    </button>
  </div>
  );
}
