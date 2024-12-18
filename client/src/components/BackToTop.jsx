import React from 'react'  
import { ChevronUpCircle } from "lucide-react";
import "../css/components/backtotop.css"
export default function ScrollToTop({ handleScrollToTop }) {
  return (
    
    
    
    <div className="conatiner">

    <div className="scrollToTop" >
      <a 
        className="btn upward "
        onClick={handleScrollToTop}
      >
        <ChevronUpCircle />
      </a>
    </div>
    </div>
  );
}
