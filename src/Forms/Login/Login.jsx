import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/config";

const Login = ({ show }) => {
  useEffect(() => {
    show(false);
  }, []);
// eslint-disable-next-line react-hooks/rules-of-hooks
const [email, setEmail] = useState("");
// eslint-disable-next-line react-hooks/rules-of-hooks
const [password, setPassword] = useState("");
// eslint-disable-next-line react-hooks/rules-of-hooks
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
          <input type="email"  onChange={(e) => setEmail(e.target.value)}/>
          <h5>Password</h5>
          <input type="password"   onChange={(e) => setPassword(e.target.value)}/>
          <button className="login-signInBtn" type="submit" onClick={(e)=>{
e.preventDefault();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate("/home");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

          }}>
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
