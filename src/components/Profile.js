import React, { useEffect, useState, useContext } from "react";
import "../css/Profile.css";
import { UserContext } from ".././App";
export default function Profile() {
  const [mypost, setPost] = useState([]);
  useEffect(() => {
    fetch("/mypost", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setPost(result.post);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="profile">
      <div className="profile_details">
        <div className="profile_image">
          <img src="https://picsum.photos/200/300"></img>
        </div>
        <div className="profile_info">
          <h3>Tarun</h3>
          <div className="profile_follower">
            <h6>posts 80</h6>
            <h6>follower 80</h6>
            <h6>following 80</h6>
          </div>
          <h5>i am a developer and the college student</h5>
        </div>
      </div>
      <div className="profile_posts">
        {mypost.map((item) => {
          return <img src={item.photo}></img>;
        })}
      </div>
    </div>
  );
}
