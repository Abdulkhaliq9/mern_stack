import React, { useState } from "react";
import axios from "axios";
import "../css/components/auth.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/login", { email, password });
      localStorage.setItem("token", response.data.token);
      setIsAdmin(response.data.isAdmin);
      // Redirect or do something based on isAdmin state
    } catch (error) {
      console.error(error);
      // Handle error, show message, etc.
    }
  };

  return (
    <div className="user-ragistration">
      <div className="container register">
        <div className="row">
          <div className="col-md-5 register-left d-flex flex-column align-items-center justify-content-center mt-0">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
            <h3>Welcome</h3>
            <p>Don't have an account?</p>
            {/* <button className="login-btn border-0  "> */}
            <Link to="/auth/register" className="login-btn fw-medium">
              Register
            </Link>

            {/* </button> */}
            <br />
          </div>
          <div className="col-md-7 register-right">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <h3 className="register-heading">Log In to your account!</h3>
                <div className="row register-form">
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password *"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email *"
                        required
                      />
                    </div>
                    <input
                      type="submit"
                      className="btnRegister"
                      value="Log In"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
