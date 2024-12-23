import { useState } from "react";
import { useAuth } from "../context/auth";
import { Eye, EyeOff, Facebook, Instagram, LinkedinIcon } from "lucide-react";

import Modal from "../components/Modal";
import { useModal } from "../context/modalContext";
import Register from "./Register";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { activePopup, handlePopup } = useModal();
  // const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // const payload = 
    login({
      email,
      password,
    })
  
  };

  return (
    <>
      <Modal heading="Login">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-white mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 focus:border-white focus:ring-2 focus:ring-white focus:ring-opacity-40 text-white placeholder-white placeholder-opacity-60 outline-none transition duration-300"
              placeholder="Enter your email"
              aria-label="Email input"
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-white mb-2">
              Password
            </label>
            <input
              id="password"
              // type="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 focus:border-white focus:ring-2 focus:ring-white focus:ring-opacity-40 text-white placeholder-white placeholder-opacity-60 outline-none transition duration-300"
              placeholder="Enter your password"
              aria-label="Password input"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[60%] text-dark"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-lg font-semibold transition duration-300"
          >
            Login
          </button>

          <div className="relative flex items-center justify-center">
            <div className="border-t border-white border-opacity-20 w-full"></div>
            <span className="bg-transparent px-4 text-white text-sm">Or</span>
            <div className="border-t border-white border-opacity-20 w-full"></div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <button
              type="button"
              // onClick={() => handleSocialLogin("Google")}
              className="flex items-center justify-center p-3 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg transition duration-300"
              aria-label="Login with Google"
            >
              <LinkedinIcon className="text-white text-xl" />
            </button>
            <button
              type="button"
              // onClick={() => handleSocialLogin("Facebook")}
              className="flex items-center justify-center p-3 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg transition duration-300"
              aria-label="Login with Facebook"
            >
              <Facebook className="text-white text-xl" />
            </button>
            <button
              type="button"
              // onClick={() => handleSocialLogin("Apple")}
              className="flex items-center justify-center p-3 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg transition duration-300"
              aria-label="Login with Apple"
            >
              <Instagram className="text-white text-xl" />
            </button>
          </div>
        </form>
        <p className="mt-8 text-center text-white">
          Don&apos;t have an account? &nbsp;
          <button
            onClick={() => handlePopup("register")}
            className="text-purple underline font-bold hover:text-gray-200 transition duration-300"
            aria-label="Register"
          >
            Sign up
          </button>
        </p>
      </Modal>
      {activePopup === "register" && (
        <Register activePopup={activePopup} handlePopup={handlePopup} />
      )}
    </>
  );
}
