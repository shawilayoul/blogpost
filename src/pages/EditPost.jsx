import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
  const [post, setPost] = useState("");
  const [editPost, setEditPost] = useState({
    title: "",
    body: "",
  });

  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((resp) => resp.json().then((data) => setPost(data)))
      .catch((err) => console.log(err));
  }, [id]);
  const handelSubmit = () => {
    console.log(editPost.title);
    console.log(editPost.body);
    navigate(`/`)
  };
  const handelChange = (e) => {
    const { value, name } = e.target;
    setEditPost({
      ...editPost,
      [name]: value,
    });
  };
  return (
    <div>
      <form action="#">
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
        <button type="submit" onClick={handelSubmit}>
          Edit
        </button>
      </form>
    </div>
  );
};

export default EditPost;
