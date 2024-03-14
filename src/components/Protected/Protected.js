import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const token = localStorage.getItem("userDetails");
  console.log(token);

  if (token === undefined) {
    return <Navigate to={"/mobilefirst/login"} />;
  }
  return <Outlet />;
};

export default Protected;
