import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { UserContext } from ".././App";
export default function Navbar() {
  const { state, dispatch } = useContext(UserContext);
  const handleLogout = () => {
    localStorage.clear();
    dispatch({ type: "CLEAR" });
  };
  const customLink = () => {
    if (!state) {
      return [
        <li>
          <Link to="/signin">Login</Link>
        </li>,
        <li>
          <Link to="/signup">Signup</Link>
        </li>,
      ];
    } else {
      return [
        <li>
          <Link to={state ? "/profile" : "/signup"}>Profile</Link>
        </li>,
        <li>
          <Link to={state ? "/createpost" : "/signup"}>New Post</Link>
        </li>,
        <button onClick={handleLogout}>LogOut</button>,
      ];
    }
  };
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Instagram
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {customLink()}
        </ul>
      </div>
    </nav>
  );
}
