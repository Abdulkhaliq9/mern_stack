import { useState } from "react";
import "../css/components/auth.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import UserLayout from "../layouts/UserLayout";
import Person from "../assets/images/auth/person.png";
import Fb from "../assets/images/auth/fb.png";
import Apple from "../assets/images/auth/apple.png";
import Google from "../assets/images/auth/google.png";
import BackGround from "../components/BackGround";

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
      <div className="login-card mt-5">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div className="not-member d-flex justify-content-start">
              <p>
                Already a Member?
                <Link to="/auth/login" className="ps-2">
                  LogIn Now
                </Link>
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              method="post"
              className="d-flex flex-column justify-content-center align-items-center mt-5 w-100"
            >
              <div className="w-100 p-3">
                <div className="d-flex flex-column align-items-center">
                  <h1>Welcome!</h1>
                  <p>Start your journey!</p>
                </div>
                <div className="row">
                  <div className="input-fields col-md-6 mt-3">
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="input-holders"
                      placeholder="Name"
                    />
                  </div>
                  <div className="input-fields col-md-6 mt-3">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input-holders"
                      placeholder="Email"
                    />
                  </div>
                  <div className="input-fields col-md-6 mt-3">
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="input-holders"
                      placeholder="Password"
                    />
                  </div>
                  <div className="input-fields col-md-6 mt-3">
                    <input
                      type="password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="input-holders"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div className="input-fields col-md-6 mt-3">
                    <input
                      type="number"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="input-holders"
                      placeholder="Phone No."
                    />
                  </div>
                  <div className="input-fields col-md-6 mt-3">
                    <input
                      type="text"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="input-holders"
                      placeholder="Enter Address"
                    />
                  </div>
                  <div className="input-fields col-md-12 mt-3">
                    <input
                      type="text"
                      required
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      className="input-holders"
                      placeholder="What is your pet's name?"
                    />
                  </div>
                </div>
                <button className="btn text-white mt-5 w-100 p-3" type="submit">
                  SignUp
                </button>
              </div>
            </form>
            <div className="social-media mt-5">
              <p className="text-center">Or continue with</p>
              <div className="d-flex justify-content-center align-items-center">
                <ul className="list-unstyled d-flex justify-content-center social-icons">
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
            </div>
          </div>
          <div className="col-md-6 img-bg">
            <div>
              <img src={Person} alt="Person" className="img-fluid w-100" />
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
