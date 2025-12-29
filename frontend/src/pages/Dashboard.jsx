import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <div className="bg-white p-4 shadow rounded w-80">
        <p><b>Name:</b> {user.fullName}</p>
        <p><b>Email:</b> {user.email}</p>
        <p><b>Role:</b> {user.role}</p>
      </div>
    </div>
  );
}
