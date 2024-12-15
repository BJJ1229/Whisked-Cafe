import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import Home from "../pages/Home";

function Redirect() {
  const { customer } = useContext(AuthContext);
  return customer ? <Navigate to={"/menu"} /> : <Home />;
}

export default Redirect;
