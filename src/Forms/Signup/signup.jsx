import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.scss";

const signup = ({ show }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    show(false);
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate= useNavigate();
  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src="/login-logo.png" alt="logo-img" />
      </Link>
      <div className="login-container">
        <h1>Create account</h1>
        <form>
          <h5> Your Name</h5>
          <input type="text" />
          <h5>Email</h5>
          <input type="email" />
          <h5>Password</h5>
          <input type="password" />
          <h5> Re-enter password</h5>
          <input type="text" />
          <button className="login-signInBtn" type="submit">
            Sign up
          </button>
          <p>
            By continuing, you agree to Amazon's Fake Clone Conditions of Use
            and Privacy Notice.
          </p>
          <div className="cat-btn">
            <p className="cat-div">Already have an account?</p>
          </div>
          <button className="login-registerBtn" onClick={()=> navigate("/login")}>Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default signup;
