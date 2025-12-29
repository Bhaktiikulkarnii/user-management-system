import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AdminUsers from "./pages/AdminUsers";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import { useContext } from "react";

const Protected = ({ children, admin }) => {
  const { user } = useContext(AuthContext);
  if (!user) return <Navigate to="/login" />;
  if (admin && user.role !== "admin") return <Navigate to="/dashboard" />;
  return children;
};

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Protected><Dashboard/></Protected>} />
          <Route path="/admin" element={<Protected admin><AdminUsers/></Protected>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
