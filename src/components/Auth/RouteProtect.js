import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuth";
const RouteProtect = ({ children }) => {
  const { user } = useUserAuth();

  console.log("Check user in Private: ", user);
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default RouteProtect;