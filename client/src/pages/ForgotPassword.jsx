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

      <div className=" login-card mt-5">
        <div className="row">
          <div className="col-md-6 img-bg">
            <div className="">
              <img src={Person} alt="" className="img-fluid w-100 " />
            </div>
          </div>

          <div className="col-lg-6 col-sm-12">
            <div className="not-member d-flex justify-content-end">
              <p>
                Not a member?
                <Link to="/auth/register" className="ps-2">
                  Register Now
                </Link>
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              method="post "
              className="d-flex flex-column justify-content-center align-items-center mt-5 w-100"
            >
              <div className="w-75">
                <div className="d-flex flex-column align-items-center">
                  <h1>Forgot Password!</h1>
                  <p>Dont worry we have you😊!</p>
                </div>
                <div className="input-fields mt-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-holders"
                    placeholder="Email"
                  />
                </div>
                <div className="input-fields mt-3">
                  <input
                    type="password"
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="input-holders"
                    placeholder="Password"
                  />
                </div>  
                <div className="input-fields mt-3">
                  <input
                    type="text"
                    required
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="input-holders"
                    placeholder="What is your pet name?"
                  />
                </div>  
            


                <button className="btn text-white mt-5 w-100 p-3" type="submit">
                  Reset Password
                </button>



              </div>
            </form>

            <div className="social-media mt-5">
              <p className="text-center">Or continue with</p>
              <div className="d-flex justify-content-center align-items-center">
                <ul className="list-unstyled d-flex justify-content-center social-icons">
                  <li className="login-brands">
                    <img src={Google} className="img-fluid" alt="logo" />
                  </li>
                  <li className="login-brands">
                    <img
                      src={Apple}
                      className="img-fluid bg-white apple"
                      alt="logo"
                    />
                  </li>
                  <li className="login-brands">
                    <img src={Fb} className="img-fluid" alt="logo" />
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
