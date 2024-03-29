import React, { useEffect, useState } from "react";
import "./homepage.css";
import Post from "./Post";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json().then((data) => setPosts(data)))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <ul>
        {posts.map(({ id, title, body }) => {
          return (
            <div
              key={id}
              onClick={() => {
                navigate(`/post/${id}`);
              }}
            >
              <div>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default HomePage;
