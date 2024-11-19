import { useState } from "react";
import axiosInstance from "./axisosInstance";

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [resError, setError] = useState(null);

  const request = async (url, method, options = {}) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance[method](url, options);
      return response;
    } catch (err) {
      setError(err.message);
      throw Error(err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, resError, request };
};

export default useApi;
