import React from "react";
import "../css/Profile.css";
export default function Profile() {
  return (
    <div className="profile">
      <div className="profile_details">
        <div className="profile_image">
          <img src="https://picsum.photos/200/300"></img>
        </div>
        <div className="profile_info">
          <h3>Tarun kumar</h3>
          <div className="profile_follower">
            <h6>posts 80</h6>
            <h6>follower 80</h6>
            <h6>following 80</h6>
          </div>
          <h5>i am a developer and the college student</h5>
        </div>
      </div>
      <div className="profile_posts">
        <img className="post_item" src="https://picsum.photos/200/300"></img>
        <img className="post_item" src="https://picsum.photos/200/300"></img>
        <img className="post_item" src="https://picsum.photos/200/300"></img>
        <img className="post_item" src="https://picsum.photos/200/300"></img>
        <img className="post_item" src="https://picsum.photos/200/300"></img>
        <img className="post_item" src="https://picsum.photos/200/300"></img>
        <img className="post_item" src="https://picsum.photos/200/300"></img>
        <img className="post_item" src="https://picsum.photos/200/300"></img>
        <img className="post_item" src="https://picsum.photos/200/300"></img>
        <img className="post_item" src="https://picsum.photos/200/300"></img>
      </div>
    </div>
  );
}
