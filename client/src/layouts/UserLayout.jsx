import { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import BackToTop from "../components/BackToTop.jsx";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer.jsx";
import BackGround from "../components/BackGround.jsx";

export default function UserLayout({ children }) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleToTop = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", handleToTop);

    return () => {
      window.removeEventListener("scroll", handleToTop);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
    <BackGround/>
      <div className="user-layout">
        
        <div className="conatiner-layout">




          
          <Toaster />
          <header>
            <Navbar />
          </header>
          <main>
            <div className="container main-content">
             
              {children}
            </div>
          </main>

          {showButton && (
            <div className="back-to-top">
              <BackToTop handleScrollToTop={handleScrollToTop} />
            </div>
          )}
          <footer className="mt-5">
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
}
