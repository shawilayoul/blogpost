import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
  const [handelError, setHandelError] = useState("");
  const [editPost, setEditPost] = useState({
    title: "",
    body: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();
  const handelSubmit = async () => {
    try {
      await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        JSON.stringify(editPost)
      );
      console.log(editPost)
      navigate('/');
      
    } catch (err) {
      console.log(err.message);
      setHandelError(err.message);
    }
  };
  const handelChange = (e) => {
    const { value, name } = e.target;
    setEditPost({
      ...editPost,
      [name]: value,
    });
  };

  const isUpdated = editPost.title.length === 0 && editPost.body.length === 0;

  return (
    <div>
      {handelError && <h3>{handelError}</h3>}
      <form onSubmit={handelSubmit}>
        <h3>Edit the post</h3>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={editPost.title}
            onChange={handelChange}
          />
        </div>
        <div>
          <label htmlFor="title">Post</label>
          <textarea
            name="body"
            value={editPost.body}
            onChange={handelChange}
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button type="submit" disabled={isUpdated}>
          Update Blog Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;
