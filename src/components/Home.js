import React, { useEffect, useState, useContext } from "react";
import { UserContext } from ".././App";
import { useHistory } from "react-router-dom";
import "../css/Home.css";
function Home() {
  const [post, setPost] = useState([]);
  const [comment, setComment] = useState("");
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  useEffect(() => {
    if (!state) {
      history.push("/signin");
      return;
    }

    fetch("/showposts", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        //   console.log(result);
        setPost(result.posts);
      })
      .catch((error) => console.log(error));
  }, []);
  const handleComment = (comment, post_id) => {
    if (!comment) {
      alert("Type Something");
      return;
    }
    fetch("/addcomment", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postid: post_id,
        comment: comment,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log("Comment", result);
        const newdata = post.map((item) => {
          if (item._id == result._id) {
            return result;
          } else {
            return item;
          }
        });
        setPost(newdata);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleLike = (post_id) => {
    fetch("/like", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postid: post_id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log("Like", result);
        const newdata = post.map((item) => {
          if (item._id == result._id) {
            return result;
          } else {
            return item;
          }
        });
        setPost(newdata);
      })
      .catch((error) => console.log(error));
  };

  const handleDislike = (post_id) => {
    fetch("/unlike", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postid: post_id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log("Dislike", result);
        const newdata = post.map((item) => {
          if (item._id == result._id) {
            return result;
          } else {
            return item;
          }
        });
        setPost(newdata);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="home">
      {post.map((item) => {
        return (
          <div className="post" key={item._id}>
            <div className="post_image">
              <img src={item.photo} alt={item.title}></img>
            </div>
            <div className="post_details">
              <h6>Title {item.title}</h6>
              <h6>{item.likes.length} likes</h6>
              <h6>Body {item.body}</h6>
              <h6 style={{ color: "red" }}>By :- {item.postBy.name}</h6>
              {item.comments.map((comment) => {
                return (
                  <div key={comment._id}>
                    <h6>{comment.text}</h6>
                    <h6 style={{ color: "blue", fontFamily: "cursive" }}>
                      {comment.postedBy.name}
                    </h6>
                  </div>
                );
              })}

              {item.likes.includes(state._id) ? (
                <button onClick={() => handleDislike(item._id)}>Dislike</button>
              ) : (
                <button onClick={() => handleLike(item._id)}>Like</button>
              )}
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  handleComment(event.target[0].value, item._id);
                  event.target[0].value = "";
                }}
              >
                <input
                  type="text"
                  placeholder="Add Comment In this post"
                ></input>
              </form>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
