import React, { useEffect } from "react";

const signup = ({ show }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    show(false);
  }, []);

  return <div>signup</div>;
};

export default signup;
