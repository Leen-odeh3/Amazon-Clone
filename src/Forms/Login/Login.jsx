import React, { useEffect } from "react";

const Login = ({ show }) => {
  useEffect(() => {
    show(false);
  }, []);

  return <div>login</div>;
};

export default Login;
