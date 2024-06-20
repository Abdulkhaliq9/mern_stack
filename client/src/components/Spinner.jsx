import { useState, useEffect } from "react";
// import Login from "../auth/Login"
import { useNavigate } from "react-router-dom";

export default function Spinner() {
const [count, setCount] = useState(5)
const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
       setCount((prevValue) => --prevValue)
    }, 1000);
    count === 0 && navigate('/auth/login')
    return () => clearInterval(interval)
    
}, [navigate, count]);


  return (
    <div className="d-flex flex-column justify-content-center align-items-center " style={{height:"100vh"}}>
        <h1 className="text-center">Redirecting to Login in {count} seconds</h1>
      <div className="spinner-grow" role="status" style={{color:"var(--color4)"}}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}







