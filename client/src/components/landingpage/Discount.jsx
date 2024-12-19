import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Discount() {
  const [countdown, setCountdown] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="bg-gradient-to-r from-blue to-orange rounded-2xl p-8 text-dark import React from 'react'  " >
      <h2 className="text-3xl font-bold mb-4">Flash Sale Ending In</h2>
      <div className="flex space-x-4 mb-6">
        <div className="bg-white text-purple-600 rounded-lg p-3">
          <span className="text-2xl font-bold">
            {countdown.hours.toString().padStart(2, "0")}
          </span>
          <span className="text-sm block">Hours</span>
        </div>
        <div className="bg-white text-purple-600 rounded-lg p-3">
          <span className="text-2xl font-bold">
            {countdown.minutes.toString().padStart(2, "0")}
          </span>
          <span className="text-sm block">Minutes</span>
        </div>
        <div className="bg-white text-purple-600 rounded-lg p-3">
          <span className="text-2xl font-bold">
            {countdown.seconds.toString().padStart(2, "0")}
          </span>
          <span className="text-sm block">Seconds</span>
        </div>
      </div>
      <Link to="/products" className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
        Shop the Sale
      </Link>
    </div>
  );
}
