import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await API.post("/auth/signup", form);
    navigate("/login");
  };

  return (
    <form onSubmit={submit} className="max-w-sm mx-auto mt-20 bg-white p-6 shadow rounded">
      <h2 className="text-xl mb-4">Signup</h2>
      <input className="input" placeholder="Name" onChange={(e)=>setForm({...form,fullName:e.target.value})}/>
      <input className="input mt-3" placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})}/>
      <input className="input mt-3" type="password" placeholder="Password" onChange={(e)=>setForm({...form,password:e.target.value})}/>
      <button className="btn mt-4">Signup</button>
    </form>
  );
}
