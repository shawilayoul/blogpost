import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DeletePost = () => {
  const [deletePost, setDeletePost] = useState("");
  let { id } = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((resp) => resp.json().then((data) => setDeletePost(data)))
      .catch((err) => console.log(err));
  }, []);
  return <div>Post deleted</div>;
};

export default DeletePost;
