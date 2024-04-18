import React, { useState } from "react";
import "../css/components/auth.css";
import { Link } from "react-router-dom";

export default function Register() {
  const [activeTab, setActiveTab] = useState("employee");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className="user-ragistration">
        <div className="container register">
          <div className="row">
            <div className="col-md-3 register-left d-flex flex-column align-items-center justify-content-center">
              <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
              <h3>Welcome</h3>
              <p>Already have an account?</p>
              {/* <button className="login-btn border-0  "> */}
              <Link to="/auth/login" className=" login-btn fw-medium" >LogIn</Link>

              {/* </button> */}
              <br />
            </div>
            <div className="col-md-9 register-right">
              <ul
                className="nav nav-tabs nav-justified"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeTab === "employee" ? "active" : ""
                    }`}
                    onClick={() => handleTabChange("employee")}
                  >
                    User
                  </a>
                </li>
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
                    <div className="row register-form">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First Name *"
                            value=""
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name *"
                            value=""
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password *"
                            value=""
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password *"
                            value=""
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
                            value=""
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            minlength="10"
                            maxlength="10"
                            name="txtEmpPhone"
                            className="form-control"
                            placeholder="Your Phone *"
                            value=""
                            required
                          />
                        </div>
                        <div className="form-group">
                          <select className="form-control">
                            <option className="hidden" selected disabled>
                              Please select your Sequrity Question
                            </option>
                            <option>What is your Birthdate?</option>
                            <option>What is Your old Phone Number</option>
                            <option>What is your Pet Name?</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Answer *"
                            value=""
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
                    <div className="row register-form">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First Name *"
                            value=""
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name *"
                            value=""
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email *"
                            value=""
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            maxlength="10"
                            minlength="10"
                            className="form-control"
                            placeholder="Phone *"
                            value=""
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
                            value=""
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password *"
                            value=""
                            required
                          />
                        </div>
                        <div className="form-group">
                          <select className="form-control">
                            <option className="hidden" selected disabled>
                              Please select your Sequrity Question
                            </option>
                            <option>What is your Birthdate?</option>
                            <option>What is Your old Phone Number</option>
                            <option>What is your Pet Name?</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="`Answer *"
                            value=""
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
