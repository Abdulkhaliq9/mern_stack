import React, { createContext, useContext, useRef, useState } from "react";
import gsap from "gsap";

const ModalContext = createContext({
  openAuthModal: () => {},
  closeAuthModal: () => {},
  isModalOpen: false,
});

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const authAnimation = useRef(null);

  const openAuthModal = () => {
    setIsModalOpen(true);
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
    setTimeout(() => setIsModalOpen(false), 800); // Ensure state changes after animation
  };

  return (
    <ModalContext.Provider value={{ openAuthModal, closeAuthModal, isModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
