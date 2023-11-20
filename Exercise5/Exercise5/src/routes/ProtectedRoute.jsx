import { Navigate } from "react-router-dom";
import { UsernameContext } from "../context/UsernameContext";
import { useContext } from "react";

export default function ProtectedRoute({ redirectPath = "/login", children }) {
  const [currentUsername] = useContext(UsernameContext);

  if (!currentUsername) {
    return <Navigate to={redirectPath} replace />;
  }
  return children && children;
}
