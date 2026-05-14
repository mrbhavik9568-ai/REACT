import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "../login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.js"; // adjust path if needed

function LoginwithFirebase({ setIsLogin }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log("Login success:", userCredential.user);

      localStorage.setItem("login", "true");
      navigate("/counter");
    } catch (error) {
      console.log(error.message);
      alert("Invalid email or password");
    }
  };

//   const handleGoback = () => {
//     navigate("/");
//   };

  return (
    <>
      <div>
        {/* <button onClick={handleGoback}>⬅ Back</button> */}

        <form className="form-style" onSubmit={handleSubmit}>
          <h1>Login</h1>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
           <p style={{cursor:'pointer'}}onClick={() => navigate("/signup")}>Don't have an account? Signup</p>
        </form>
       
      </div>
    </>
  );
}

export default LoginwithFirebase;
