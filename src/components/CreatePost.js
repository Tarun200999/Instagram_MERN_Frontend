import React, { useState, useEffect} from "react";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [photoURL, setUrl] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (photoURL) {
      fetch("/create", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          title: title,
          body: body,
          photo: photoURL,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setTitle("");
          setBody("");
          setImage("")
          setUrl("");
          setMessage("Post Created Succesfully");
        })
        .catch((error) => console.log(error));
    }
  }, [photoURL]);
  const uploadPost = () => {
    if (!title || !body || !image) {
      setMessage("Enter the All the fields");
      return;
    } else {
      const data = new FormData(); //uploading data to cloudnairy here
      data.append("file", image);
      data.append("upload_preset", "insta_clone");
      data.append("cloud_name", "tarun035");
      fetch("https://api.cloudinary.com/v1_1/tarun035/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => setUrl(data.secure_url))
        .catch((error) => console.log(error));
    }
  };
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
      <label for="files">{image?"Photo Selected":"Select File"}</label>
      <input type="file" id="files" accept="image/*" onChange={(e) => setImage(e.target.files[0])}></input>
      <button onClick={uploadPost}>Add New</button>
      <h6>{message}</h6>
    </div>
  );
}

export default CreatePost;
