import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import UserLayout from "../layouts/UserLayout";
import Person from "../assets/images/auth/person.png";
import Fb from "../assets/images/auth/fb.png";
import Apple from "../assets/images/auth/apple.png";
import Google from "../assets/images/auth/google.png";


export default function ForgotPassword() {

  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [question, setQuestion] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/forgot-password", {
        email,
        newPassword,
        question
      });

      if (res.data.success) {

        toast.success(res.data.message);

        navigate("/auth/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.error("Error with rest:", err);
      toast.error("🥲 Error with reset");
    }
  };

  return (
    <UserLayout>
      {/* <BackGround/> */}

      <div className=" py-[9px] px-[20px] bg-[rgba(242, 245, 250, 0.6)] w-full rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[6.7px] border-[3px] border-white mt-[100px]">
        <div className="grid grid-cols-2">
        <div className="bg-blue rounded-[50px] h-auto flex items-center justify-center">
            <div className="">
              <img src={Person} alt="" className="img-fluid w-full " />
            </div>
          </div>

          <div className="">
            <div className="not-member flex justify-end">
              <p>
                Not a member?
                <Link to="/auth/register" className="pl-2 text-blue">
                  Register Now
                </Link>
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              method="post "
              className="flex flex-col justify-center items-center mt-12 w-full"
            >
              <div className="w-3/4">
                <div className="flex flex-col items-center gap-5">
                  <h1>Forgot Password!</h1>
                  <p>Dont worry we have you😊!</p>
                </div>
                <div className=" mt-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-[25px] rounded-[15px] w-full"
                    placeholder="Email"
                  />
                </div>
                <div className=" mt-3">
                  <input
                    type="password"
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="p-[25px] rounded-[15px] w-full"
                    placeholder="Password"
                  />
                </div>  
                <div className=" mt-3">
                  <input
                    type="text"
                    required
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="p-[25px] rounded-[15px] w-full"
                    placeholder="What is your pet name?"
                  />
                </div>  
            


                <button className="shadow-[0_25px_50px_#fe6b68] bg-orange rounded-2xl cursor-pointer text-white mt-12 w-full p-3" type="submit">
                  Reset Password
                </button>



              </div>
            </form>

            <div className="mt-12 flex flex-col gap-6">
              <p className="text-center lf-style mr-[11px]">Or continue with</p>
              <div className="flex justify-center items-center">
                <ul className=" flex justify-center social-icons">
                  <li className="w-[20%] h-[20%] m-[10px] ">
                    <img src={Google} className="border-2 border-white object-contain w-full h-full rounded-[10px] p-[10px]" alt="logo" />
                  </li>
                  <li className="w-[20%] h-[20%] m-[10px] ">
                    <img
                      src={Apple}
                      className="border-2 border-white object-contain w-full h-full rounded-[10px] p-[10px] bg-white apple"
                      alt="logo"
                    />
                  </li>
                  <li className="w-[20%] h-[20%] m-[10px] ">
                    <img src={Fb} className="border-2 border-white object-contain w-full h-full rounded-[10px] p-[10px]" alt="logo" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
