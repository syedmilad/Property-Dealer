import axios from "axios";

const API_BACKEND_BASE_URL = "http://localhost:6067/api/v1"; // Replace with your actual API URL
// const API_BACKEND_BASE_URL = "https://subcriptions-tracker.vercel.app/api/v1"; // Replace with your actual API URL

const axiosInstance = axios.create({
  baseURL: API_BACKEND_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },  
}); 

// Request Interceptor to Add Bearer Token  
axiosInstance.interceptors.request.use(
  (config) => {   
    const token = localStorage.getItem("token"); // Get token from localStorage
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // Attach Bearer token
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor to Handle Errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error("API Error:", error.response.data);
      if (error.response.status === 401) {
        console.log("Unauthorized! Redirecting to login...");
        // Handle logout (clear token & redirect)
        // localStorage.removeItem("token");
        // window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
