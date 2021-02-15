import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../css/SignUp.css";
export default function SignUp() {
  const history = useHistory();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState("");

  const PostData = () => {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      fetch("/signup", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          password: password,
          email: email,
        }),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.error) {
            setMessage(response.error);
          } else {
            console.log(response.message);
            history.push("/signin");
          }
        })
        .catch((error) => console.log(error));
    } else {
      setMessage("Invalid Email");
    }
  };
  return (
    <div className="signup">
      <div className="card">
        <h3>Welcome</h3>
        <input
          type="text"
          value={name}
          placeholder="Full name"
          onChange={(event) => setName(event.target.value)}
        ></input>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button onClick={PostData}>SignUp</button>
        <h6>{message}</h6>
        <h6>
          <Link to="/signin">Already SignIn ?</Link>
        </h6>
      </div>
    </div>
  );
}
