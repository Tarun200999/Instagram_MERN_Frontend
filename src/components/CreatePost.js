import React, { useState } from "react";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  return (
    <div className="card input-filed">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="title"
      ></input>
      <input
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></input>
      <input type="file" onChange={(e) => setImage(e.target.files[0])}></input>
    </div>
  );
}

export default CreatePost;
