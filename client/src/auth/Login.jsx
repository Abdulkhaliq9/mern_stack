import React, { useState } from "react";
import axios from "axios";
import "../css/components/auth.css";
import { Link, useNavigate  } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../context/auth";
export default function Login() {
  const [auth, setAuth] = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/login", {
        email,
        password,
      });

      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify({ user: res.data.user, token: res.data.token }));
        
        navigate("/"); // Redirect to login page after successful registration
      } else {
        toast.error(res.data.message); // Display error message from server
      }
    } catch (err) {
      console.log(err);
      toast.error("Error with Login");
    }
  };
  return (
    <div className="user-ragistration">
      <Toaster />
      <div className="container register">
        <div className="row">
          <div className="col-md-5 register-left d-flex flex-column align-items-center justify-content-center mt-0">
            <img src="  " alt="" />
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
                <form action="" onSubmit={handleSubmit}>
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="form-control"
                        placeholder="Password *"
                        required
                      />
                    </div>

                    <button className="btnRegister" type="submit">
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
  );
}
