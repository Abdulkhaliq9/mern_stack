import { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useModal } from "./modalContext";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const { handlePopup } = useModal();
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  const login = async ({ email,password}) => {
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/login", {
        email,password
      });

      if (res.data.success) {
        setAuth({
          user: res.data.user,
          token: res.data.token,
        });
        toast.success(res.data.message);
        sessionStorage.setItem(
          "auth",
          JSON.stringify({
            user: res.data.user,
            token: res.data.token,
          })
        );
        navigate("/");
        handlePopup();
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.error("Error with login:", err);
      toast.error("Error with Login");
    }
  };

  const logout = () => {
    setAuth({ user: null, token: "" });
    sessionStorage.removeItem("auth");
    toast.success("You have successfully logged out.");
  };

  axios.defaults.headers.common["Authorization"] = auth?.token;

  // Function to login the user and save
  useEffect(() => {
    const data = sessionStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({ ...auth, user: parseData.user, token: parseData.token });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
