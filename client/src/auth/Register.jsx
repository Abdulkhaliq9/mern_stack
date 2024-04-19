import React, { useState } from "react";
import "../css/components/auth.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function Register() {
  const [activeTab, setActiveTab] = useState("employee");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();
     if (!validateForm()) return;
     
     let dataToSend = {
       name: name,
       email: email,
       password: password,
       phone: phone,
       city: city,
     };

     try{
        await fetch(`http://localhost:8080/api/${activeTab}s`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
           body: JSON.stringify(dataToSend),
         });
        toast.success('Registration successful');
     } catch(err){
       console.log(err);
      toast.error('Error with registration');
     }
  }

  const validateForm = () => {
    if ((!name || !email || !password || !phone || !city)  || (password !== confirmPassword)) {
      toast.pending('Please fill out all fields and the passwords must match');
      return false;
    }
    return true;
  }

  return (
    <>
      <div className="user-registration">
        <ToastContainer/>
        <div className="container register">
          <div className="row">
            <div className="col-md-3 register-left d-flex flex-column align-items-center justify-content-center">
              <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
              <h3>Welcome</h3>
              <p>Already have an account?</p>
              <Link to="/auth/login" className="login-btn fw-medium">
                LogIn
              </Link>
              <br />
            </div>
            <div className="col-md-9 register-right">
              <ul className="nav nav-tabs nav-justified" role="tablist">
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
                            placeholder="City *"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
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
                            minLength="10"
                            maxLength="10"
                            name="txtEmpPhone"
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
                            placeholder="City *"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
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
