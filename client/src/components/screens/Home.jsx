import React, { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  // Fetch all posts from database when mounted. Similar to ComponentDidMount.
  useEffect(() => {
    fetch("/posts", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.posts);
      });
  }, []);

  return (
    <div className="home">
      {data.map((item) => {
        return (
          <div key={item._id} className="home-card card">
            <h5>{item.postedBy.name}</h5>
            <div className="card-image">
              <img src={item.photo} alt="user-post" />
            </div>
            <div className="card-content">
              <i className="material-icons" style={{ color: "red" }}>
                favorite
              </i>
              <h6>{item.title}</h6>
              <p>{item.body}</p>
              <input type="text" placeholder="Add a comment" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
