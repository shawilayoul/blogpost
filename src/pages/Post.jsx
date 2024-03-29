import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Post = () => {
  const [post, setPost] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((resp) => resp.json().then((data) => setPost(data)))
      .catch((err) => console.log(err));
  }, [id]);

  // deleting a post
  return (
    <div>
      <div>
        <p>{post.title}</p>
        <p>{post.body}</p>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Post;
