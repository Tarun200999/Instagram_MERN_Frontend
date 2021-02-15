import React from 'react'
import "../css/Home.css";
function Home() {
    return (
        <div className="home">
            <div className="card">
               <div className="card-image">
                <img src="https://picsum.photos/200/300"></img>
               </div>
               <div className="card-content">
                  <h6>My frist post</h6>
                  <input type="text"
                    placeholder="add a comment"
                  ></input>
               </div>
            </div>
        </div>
    )
}

export default Home;
