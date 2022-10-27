import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/UserContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading === true) {
    return (
      <div className="mx-auto text-center my-5">
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" />
      </div>
    );
  }

  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
