import { useEffect, useState } from "react";
import API from "../api/axios";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.get("/users").then(res => setUsers(res.data.users));
  }, []);

  const toggle = async (id, status) => {
    await API.put(`/users/${id}/status`, { status });
    setUsers(users.map(u => u._id === id ? { ...u, status } : u));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">All Users</h2>
      {users.map(u => (
        <div key={u._id} className="flex justify-between bg-white p-3 shadow mb-2">
          <span>{u.email} ({u.role})</span>
          <button
            onClick={()=>toggle(u._id, u.status==="active"?"inactive":"active")}
            className={u.status==="active"?"bg-green-500":"bg-red-500"}
          >
            {u.status}
          </button>
        </div>
      ))}
    </div>
  );
}
