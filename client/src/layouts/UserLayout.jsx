import { useState, useEffect } from "react";
import BackToTop from "../components/BackToTop.jsx";
import Footer from "../components/Footer.jsx";
// import BackGround from "../components/BackGround.jsx";
import Header from "../components/layout/Header.jsx";
import Navbar from "../components/navbar/Navbar.jsx";

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
      {/* <BackGround /> */}
      <div className="user-layout">
        <Header />
        <div className="max-w-screen-xl mx-auto w-full px-5 ">
          <header>
            <Navbar />
          </header>
          <main className="">{children}</main>

          {showButton && (
            <div className="back-to-top">
              <BackToTop handleScrollToTop={handleScrollToTop} />
            </div>
          )}
        </div>
        <Footer/>
      </div>
    </>
  );
}
