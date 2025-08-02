import React from "react";
import { useNavigate } from "react-router-dom"; // Add this
import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.png";

const Login = () => {
  const navigate = useNavigate(); // Add this

  const handleSubmit = (e) => {
    e.preventDefault();
    // After form submission, redirect to dashboard
    navigate("/dashboard"); // Add this
  };

  return (
    <div className="login-container">
      <div className="login-box text-center">
        {/* Logo */}
        <img
          src={logo}
          alt="Cutipets Logo"
          className="mb-2"
          style={{ width: "80px", height: "auto" }}
        />

        {/* App Name */}
        <h2 className="app-title">Cutipets</h2>

        {/* Admin Login Text */}
        <h5 className="admin-text mb-4">Admin Login</h5>

        {/* Login Form */}
        <form onSubmit={handleSubmit}> {/* Add onSubmit handler */}
          <div className="mb-3 text-start">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3 text-start">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-3">
            Login
          </button>
        </form>

        {/* Forgot Password */}
        <div className="text-end">
          <a href="#" className="text-decoration-none small">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;