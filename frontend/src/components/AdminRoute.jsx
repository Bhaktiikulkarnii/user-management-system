import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  return localStorage.getItem("role") === "admin"
    ? children
    : <Navigate to="/dashboard" />;
}
