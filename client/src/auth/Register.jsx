import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
// import UserLayout from "../layouts/UserLayout";
import Person from "../assets/images/auth/person.png";
// import Fb from "../assets/images/auth/fb.png";
// import Apple from "../assets/images/auth/apple.png";
// import Google from "../assets/images/auth/google.png";
// import BackGround from "../components/layout/BackGround";
import Modal from "../components/Modal";
import Login from "./Login";
import { useModal } from "../context/modalContext";
import { Eye, EyeOff, Facebook, Instagram, LinkedinIcon } from "lucide-react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [question, setQuestion] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { activePopup, handlePopup } = useModal();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        {
          name,
          email,
          password,
          phone,
          address,
          question,
        }
      );

      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        handlePopup("login")
        // navigate("/auth/login"); // Redirect to login page after successful registration
      } else {
        toast.error(res.data.message); // Display error message from server
      }
    } catch (err) {
      console.log(err);
      toast.error("Error with registration");
    }
  };

  return (
    // <Modal>
    //   <div className="py-[9px] px-[20px] bg-[rgba(242, 245, 250, 0.6)] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[6.7px] border-[3px] border-white mt-[100px]">
    //     <div className="grid grid-cols-2">
    //       <div className="">
    //         <div className="flex my-[15px] mx-[25px] justify-start">
    //           <p>
    //             Already a Member?
    //             <button
    //               type="button"
    //               onClick={() => handlePopup("login")}
    //               className="pl-2 text-blue"
    //             >
    //               LogIn Now
    //             </button>
    //             {activePopup === "login" && (
    //               <Login activePopup={activePopup} handlePopup={handlePopup} />
    //             )}
    //           </p>
    //         </div>
    //         <form
    //           onSubmit={handleSubmit}
    //           method="post"
    //           className="flex flex-col justify-center items-center mt-12 w-full"
    //         >
    //           <div className="w-full p-6 ">
    //             <div className="flex flex-col gap-2 items-center mb-5">
    //               <h1>Welcome!</h1>
    //               <p>Start your journey!</p>
    //             </div>
    //             <div className="grid grid-cols-2 gap-5">
    //               <div className="">
    //                 <input
    //                   type="text"
    //                   required
    //                   value={name}
    //                   onChange={(e) => setName(e.target.value)}
    //                   className="p-[25px] rounded-[15px] w-full"
    //                   placeholder="Name"
    //                 />
    //               </div>
    //               <div className="">
    //                 <input
    //                   type="email"
    //                   required
    //                   value={email}
    //                   onChange={(e) => setEmail(e.target.value)}
    //                   className="p-[25px] rounded-[15px] w-full"
    //                   placeholder="Email"
    //                 />
    //               </div>
    //               <div className="">
    //                 <input
    //                   type="password"
    //                   required
    //                   value={password}
    //                   onChange={(e) => setPassword(e.target.value)}
    //                   className="p-[25px] rounded-[15px] w-full"
    //                   placeholder="Password"
    //                 />
    //               </div>
    //               <div className="">
    //                 <input
    //                   type="password"
    //                   required
    //                   value={confirmPassword}
    //                   onChange={(e) => setConfirmPassword(e.target.value)}
    //                   className="p-[25px] rounded-[15px] w-full"
    //                   placeholder="Confirm Password"
    //                 />
    //               </div>
    //               <div className="">
    //                 <input
    //                   type="number"
    //                   required
    //                   value={phone}
    //                   onChange={(e) => setPhone(e.target.value)}
    //                   className="p-[25px] rounded-[15px] w-full"
    //                   placeholder="Phone No."
    //                 />
    //               </div>
    //               <div className="">
    //                 <input
    //                   type="text"
    //                   required
    //                   value={address}
    //                   onChange={(e) => setAddress(e.target.value)}
    //                   className="p-[25px] rounded-[15px] w-full"
    //                   placeholder="Enter Address"
    //                 />
    //               </div>
    //               <div className="w-full">
    //                 <input
    //                   type="text"
    //                   required
    //                   value={question}
    //                   onChange={(e) => setQuestion(e.target.value)}
    //                   className="p-[25px] rounded-[15px] w-full"
    //                   placeholder="What is your pet's name?"
    //                 />
    //               </div>
    //             </div>
    //             <button
    //               className="shadow-[0_25px_50px_#fe6b68] bg-orange cursor-pointer rounded-2xl text-white mt-12 w-full p-3"
    //               type="submit"
    //             >
    //               SignUp
    //             </button>
    //           </div>
    //         </form>
    //       </div>
    //       <div className="bg-blue rounded-[50px] h-auto flex items-center justify-center">
    //         <div>
    //           <img src={Person} alt="Person" className="img-fluid w-full" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </Modal>
    <>
      <Modal heading="Sign Up">
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
          </div>{" "}
          <div className="relative">
            <label htmlFor="password" className="block text-white mb-2">
              Password
            </label>
            <input
              id="password"
              // type="password"
              value={confirmPassword}
              //                   onChange={(e) => setConfirmPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              // value={password}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 focus:border-white focus:ring-2 focus:ring-white focus:ring-opacity-40 text-white placeholder-white placeholder-opacity-60 outline-none transition duration-300"
              placeholder="Confirm your password"
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
            Sign Up
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
          Already have an account? &nbsp;
          <button
            onClick={() => handlePopup("login")}
            className="text-purple underline font-bold hover:text-gray-200 transition duration-300"
            aria-label="Register"
          >
            LogIn
          </button>
        </p>
      </Modal>

      {activePopup === "login" && (
        <Login activePopup={activePopup} handlePopup={handlePopup} />
      )}
    </>
  );
}
