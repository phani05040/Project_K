import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate(); // ✅ inside function

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
        role
      });

      alert("Login Success ✅");

      if (res.data.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/home");
      }

    } catch (err) {
      alert("Invalid Credentials ❌");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>

      <select onChange={(e) => setRole(e.target.value)}>
        <option value="student">Student</option>
        <option value="admin">Admin</option>
      </select>

      <br /><br />

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login; // ✅ VERY IMPORTANT