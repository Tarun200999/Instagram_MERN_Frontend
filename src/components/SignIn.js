import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import "../css/SignIn.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    console.log("email", email);
    console.log("password", password);
  };
  return (
    <div className="signin">
      <div className="card">
        <h2>Welcome</h2>
        <input
          type="text"
          placeholder="Email Here"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button className="btn btn-success" onClick={handleLogin}>
          Sign In
        </button>
        <h6>
        <Link to="/signup">Haven'nt SignUp ?</Link>
        </h6>
      </div>
    </div>
  );
}
