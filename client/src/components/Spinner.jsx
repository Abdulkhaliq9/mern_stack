import { useNavigate } from "react-router-dom";
import {useState, useEffect} from "react"

export default function Spinner({ path = "auth/login" }) {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 && navigate(`/${path}`);
    return () => clearInterval(interval);
  }, [navigate, count, path]);

  return (
    <div className="flex flex-col justify-center items-center gap-5 h-screen ">
      <h1 className="text-center text-xl ">
        Redirecting to Login in {count} seconds
      </h1>
      <div
        className="spinner-grow"
        role="status"
        style={{ color: "var(--color4)" }}
      >
        <span className="visually-hidden">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 animate-spin">
            <div className="h-9 w-9 rounded-full bg-gray-200" />
          </div>
        </span>
      </div>
    </div>
  );
}
