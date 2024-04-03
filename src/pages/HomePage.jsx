import React, { useEffect, useState } from "react";
import "./homepage.css";
import { useNavigate } from "react-router-dom";
//import Post from "./Post";
import axios from "axios";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(data);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      }
    };
    fetchPost();
  }, []);

  const deletePost = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      console.log("post deleted", id);
      navigate("/");
      setPosts(posts.filter((post) => post.id !== id));
    } catch (err) {
      console.log("error deleting post", err);
    }
  };
  return (
    <div className="home-container">
      {error && <h3>{error}</h3>}
      <ul>
        {posts.map(({ id, title, body }) => {
          return (
            <div key={id}>
              <div
                onClick={() => {
                  navigate(`/post/${id}`);
                }}
                className="posts"
              >
                <p>{`post number ${id}`}</p>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
              <button onClick={() => deletePost(id)} className="delete-btn">
                Delete
              </button>
              <button
                onClick={() => {
                  navigate(`/post/edit/${id}`);
                }}
                className="edit-btn"
              >
                Edit
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default HomePage;
