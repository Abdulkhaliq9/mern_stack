import React, { useState } from "react";
import "../css/components/auth.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

export default function Register() {
  const [activeTab, setActiveTab] = useState("employee");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address
      });

      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/auth/login"); // Redirect to login page after successful registration
      } else {
        toast.error(res.data.message); // Display error message from server
      }
    } catch (err) {
      console.log(err);
      toast.error('Error with registration');
    }
  }

  // const validateForm = () => {
  //   if ((!name || !email || !password || !phone || !address) || (password !== confirmPassword)) {
  //     toast.error('Please fill out all fields and the passwords must match');
  //     return false;
  //   }
  //   return true;
  // }


// console.log(process.env.REACT_APP_API)
  return (
    <>
      <div className="user-registration">
        <Toaster/>
        <div className="container register">
          <div className="row">
            <div className="col-md-3 register-left d-flex flex-column align-items-center justify-content-center">
              <img src="" alt="" />
              <h3>Welcome</h3>
              <p>Already have an account?</p>
              <Link to="/auth/login" className="login-btn fw-medium">
                LogIn
              </Link>
              <br />
            </div>
            <div className="col-md-9 register-right">
              <ul className="nav nav-tabs nav-justified" role="tablist">
                {/* <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeTab === "employee" ? "active" : ""
                    }`}
                    onClick={() => handleTabChange("employee")}
                  >
                    User
                  </a>
                </li> */}
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeTab === "hirer" ? "active" : ""
                    }`}
                    onClick={() => handleTabChange("hirer")}
                  >
                    Seller
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                {activeTab === "employee" && (
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <h3 className="register-heading">Register as a User</h3>
                   <form onSubmit={handleSubmit} action="">
                   <div className="row register-form">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name *"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="address *"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password *"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Your Email *"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                           
                           
                            className="form-control"
                            placeholder="Your Phone *"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password *"
                            value={confirmPassword}
                            onChange={(e) =>
                              setConfirmPassword(e.target.value)
                            }
                            required
                          />
                        </div>
                        <input
                          type="submit"
                          className="btnRegister"
                          value="Register"
                        />
                      </div>
                    </div>
                   </form>
                  </div>
                )}

                {activeTab === "hirer" && (
                  <div
                    className="tab-pane fade show active"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <h3 className="register-heading">Register as a Seller</h3>
                   <form onSubmit={handleSubmit} action="">
                   <div className="row register-form">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name *"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="address *"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email *"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password *"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password *"
                            value={confirmPassword}
                            onChange={(e) =>
                              setConfirmPassword(e.target.value)
                            }
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            maxLength="10"
                            minLength="10"
                            className="form-control"
                            placeholder="Phone *"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                          />
                        </div>
                        {/* <button 
                          type="submit"
                          className="btnRegister"
                          value="Register"
                        /> */}
                        <button className="btnRegister" type="submit">
                          Register
                        </button>
                      </div>
                    </div>
                   </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
