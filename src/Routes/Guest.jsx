import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function Guest({ children }) {
  const {customer} = useContext(AuthContext);

  return !customer ? <Navigate to="/" /> : children;
}
