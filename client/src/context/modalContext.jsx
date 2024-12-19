// make a modal context
import gsap from "gsap";
import { createContext, useContext, useRef } from "react";

 const ModalContext = createContext();

// provider component
 const ModalProvider = ({ children }) => {
  const authAnimation = useRef(null);
  const openAuthModal = () => {
    authAnimation.current = gsap
      .timeline({ defaults: { ease: "power2.inOut" } })
      .to("#authOverlay", {
        scaleY: 0.01,
        x: 1,
        opacity: 1,
        display: "flex",
        duration: 0.4,
      })
      .to("#authOverlay", {
        scaleY: 1,
        background: "rgba(255,255,255,0.16)",
        duration: 0.6,
      })
      .to(
        "#authOverlay #second",
        { scaleY: 1, opacity: 1, duration: 0.6 },
        "-=0.4"
      )
      .to(
        "#authOverlay #third",
        { scaleY: 1, opacity: 1, duration: 0.4 },
        "-=0.2"
      )
      .to(
        "#authOverlay #fourth",
        {
          background: "rgba(255,255,255,0.3)",
          border: "1px solid rgba(255,255,255,0.3)",
          duration: 0.8,
        },
        "-=0.4"
      );
  };

  const closeAuthModal = () => {
    if (authAnimation.current) {
      authAnimation.current.timeScale(1.6).reverse();
    }
  };

  return (
    <ModalContext.Provider value={{ closeAuthModal, openAuthModal }}>
      {children}
    </ModalContext.Provider>
  );
};



const useModal =  () => useContext(ModalContext)

export {ModalProvider, useModal}