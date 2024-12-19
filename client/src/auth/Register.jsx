import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import UserLayout from "../layouts/UserLayout";
import Person from "../assets/images/auth/person.png";
// import Fb from "../assets/images/auth/fb.png";
// import Apple from "../assets/images/auth/apple.png";
// import Google from "../assets/images/auth/google.png";
import BackGround from "../components/layout/BackGround";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [question, setQuestion] = useState("");
  const navigate = useNavigate();

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
          question
        }
      );

      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/auth/login"); // Redirect to login page after successful registration
      } else {
        toast.error(res.data.message); // Display error message from server
      }
    } catch (err) {
      console.log(err);
      toast.error("Error with registration");
    }
  };

  return (
    <UserLayout>
      <BackGround />
      <div className="py-[9px] px-[20px] bg-[rgba(242, 245, 250, 0.6)] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[6.7px] border-[3px] border-white mt-[100px]">
        <div className="grid grid-cols-2">
          <div className="">
            <div className="flex my-[15px] mx-[25px] justify-start">
              <p>
                Already a Member?
                <Link to="/auth/login" className="pl-2 text-blue">
                  LogIn Now
                </Link>
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              method="post"
              className="flex flex-col justify-center items-center mt-12 w-full"
            >
              <div className="w-full p-6 ">
                <div className="flex flex-col gap-2 items-center mb-5">
                  <h1>Welcome!</h1>
                  <p>Start your journey!</p>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div className="">
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                       className="p-[25px] rounded-[15px] w-full"
                      placeholder="Name"
                    />
                  </div>
                  <div className="">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                       className="p-[25px] rounded-[15px] w-full"
                      placeholder="Email"
                    />
                  </div>
                  <div className="">
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                       className="p-[25px] rounded-[15px] w-full"
                      placeholder="Password"
                    />
                  </div>
                  <div className="">
                    <input
                      type="password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                       className="p-[25px] rounded-[15px] w-full"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div className="">
                    <input
                      type="number"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                       className="p-[25px] rounded-[15px] w-full"
                      placeholder="Phone No."
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                       className="p-[25px] rounded-[15px] w-full"
                      placeholder="Enter Address"
                    />
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      required
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                       className="p-[25px] rounded-[15px] w-full"
                      placeholder="What is your pet's name?"
                    />
                  </div>
                </div>
                <button className="shadow-[0_25px_50px_#fe6b68] bg-orange cursor-pointer rounded-2xl text-white mt-12 w-full p-3" type="submit">
                  SignUp
                </button>
              </div>
            </form>
            {/* <div className="social-media mt-12">
              <p className="text-center">Or continue with</p>
              <div className="flex justify-center items-center">
                <ul className="list-unstyled flex justify-center social-icons">
                  <li className="login-brands">
                    <img src={Google} className="img-fluid" alt="Google logo" />
                  </li>
                  <li className="login-brands">
                    <img
                      src={Apple}
                      className="img-fluid bg-white apple"
                      alt="Apple logo"
                    />
                  </li>
                  <li className="login-brands">
                    <img src={Fb} className="img-fluid" alt="Facebook logo" />
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
          <div className="bg-blue rounded-[50px] h-auto flex items-center justify-center">
            <div>
              <img src={Person} alt="Person" className="img-fluid w-full" />
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
