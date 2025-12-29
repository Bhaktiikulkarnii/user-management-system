import { useState, useContext } from "react";
import API from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", { email, password });
      login(res.data);
      navigate("/dashboard");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={submit} className="max-w-sm mx-auto mt-20 bg-white p-6 shadow rounded">
      <h2 className="text-xl mb-4">Login</h2>
      <input className="input" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
      <input className="input mt-3" type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
      <button className="btn mt-4">Login</button>
    </form>
  );
}
