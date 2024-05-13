import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../context/auth";
import UserLayout from "../layouts/UserLayout";

export default function Login() {
  const [auth, setAuth] = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/login", {
        email,
        password,
      });

      if (res.data.success) {
        setAuth({
          user: res.data.user,
          token: res.data.token,
        });
        toast.success(res.data.message);
        localStorage.setItem("auth", JSON.stringify({
          user: res.data.user,
          token: res.data.token
        }));
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.error("Error with login:", err);
      toast.error("Error with Login");
    }
  };

  return (
    <UserLayout>
      <div className="user-registration">
        <Toaster />
        <div className="container register">
          <div className="row">
            <div className="col-md-5 register-left d-flex flex-column align-items-center justify-content-center mt-0">
              <img src="" alt="" />
              <h3>Welcome</h3>
              <p>Don't have an account?</p>
              <Link to="/auth/register" className="login-btn fw-medium">
                Register
              </Link>
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
                  <form onSubmit={handleSubmit}>
                    <div className="row register-form">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your Email *"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password *"
                            required
                          />
                        </div>
                        <button type="submit" className="btnRegister">
                          Log In
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}
