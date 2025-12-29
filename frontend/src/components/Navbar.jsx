import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between">
      <h1 className="font-bold">User Management</h1>

      <div className="space-x-4">
        {!user && <Link to="/login">Login</Link>}
        {!user && <Link to="/signup">Signup</Link>}

        {user && <Link to="/dashboard">Dashboard</Link>}
        {user?.role === "admin" && <Link to="/admin">Users</Link>}

        {user && (
          <button onClick={logout} className="ml-4">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
