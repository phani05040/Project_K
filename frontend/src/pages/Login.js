import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaLock,
  FaSignInAlt,
} from "react-icons/fa";

import "../App.css";


function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");


  const login = async () => {

    try {

      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email,
          password,
          role,
        }
      );


      alert("Login Success ✅");


      if(res.data.role === "admin"){
        navigate("/admin");
      }
      else{
        navigate("/home");
      }


    } catch(err){

      alert("Invalid Credentials ❌");

    }

  };



  return (

    <div className="login-page">


      <div className="login-card">


        <div className="login-icon">
          <FaUser />
        </div>


        <h2>
          Hostel Login
        </h2>


        <p>
          Sign in to access your dashboard
        </p>



        <select
          value={role}
          onChange={(e)=>setRole(e.target.value)}
        >

          <option value="student">
            Student
          </option>

          <option value="admin">
            Admin
          </option>

        </select>




        <div className="input-box">

          <FaUser />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

        </div>




        <div className="input-box">

          <FaLock />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

        </div>




        <button
          className="login-btn"
          onClick={login}
        >

          <FaSignInAlt />
          Login

        </button>



      </div>


    </div>

  );

}


export default Login;