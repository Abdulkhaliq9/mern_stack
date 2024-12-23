import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const ModalContext = createContext({
  openAuthModal: () => {},
  closeAuthModal: () => {},
  isModalOpen: false,
});

export const ModalProvider = ({ children }) => {
  const navigate = useNavigate();
  const [activePopup, setActivePopup] = useState(false);

  const handlePopup = (type) => {
    setActivePopup(type);
  };

  const closePopup = () => {
    setActivePopup(null);
    navigate("/");
  };
  return (
    <ModalContext.Provider value={{ activePopup, handlePopup, closePopup }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
