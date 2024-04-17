import React, { useState} from "react";
import axios from 'axios'
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
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        <div className="signup">
          <h3>Don't have an account?
<Link to="/auth/register">SignUp</Link>

          </h3>
        </div>
      </form>
    </div>
  );
}
