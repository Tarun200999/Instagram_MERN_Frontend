import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../css/SignIn.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();
  const handleLogin = () => {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      fetch("/signin", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.error) {
            setMessage(res.error);
          } else {
            console.log(res);
            history.push("/");
          }
        })
        .catch((error) => console.log(error));
    } else {
      setMessage("Invaid Email Addrres");
    }
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
        <h6>{message}</h6>
        <h6>
          <Link to="/signup">Haven'nt SignUp ?</Link>
        </h6>
      </div>
    </div>
  );
}
