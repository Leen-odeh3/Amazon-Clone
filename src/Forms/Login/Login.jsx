import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = ({ show }) => {
  useEffect(() => {
    show(false);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src="/login-logo.png" alt="logo-img" />
      </Link>
      <div className="login-container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input type="email" />
          <h5>Password</h5>
          <input type="password" />
          <button className="login-signInBtn" type="submit">
            Sign in
          </button>
          <p>
            By continuing, you agree to Amazon's Fake Clone Conditions of Use
            and Privacy Notice.
          </p>
          <button
            className="login-registerBtn"
            onClick={() => navigate("/signup")}
          >
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
