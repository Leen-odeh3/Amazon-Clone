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
  const [haserror,sethaserror] = useState(false);
  const [message,setmessage] = useState("");
  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src="/login-logo.png" alt="logo-img" />
      </Link>
      <div className="login-container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login-signInBtn"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  navigate("/home");
                  show(true);
                  // ...
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
sethaserror(true);
switch(errorMessage){
  case 'auth/invalid-password':
    setmessage("The password you entered is incorrect.");
break;
case 'auth/too-many-requests':
  setmessage("The number of requests exceeds the maximum allowed.");
break;
case 'auth/user-not-found	':
  setmessage("");
break;
case 'auth/invalid-email':
  setmessage("The email you entered is not associated with an account");
break;
    default:
      setmessage("Plz Create Account/ Or Enter Valid Info");
}


                });
            }}
          >
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
        {haserror && <h6 style={{color:"red",fontSize:"15px"}}>{message}</h6>}
      </div>
    </div>
  );
};

export default Login;
