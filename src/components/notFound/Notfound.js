import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };
  return (
    <div>
      <h1>Not Found Page</h1>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Notfound;
