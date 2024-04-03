import axios from "axios";
import React, {  useState } from "react";
import { useNavigate} from "react-router-dom";

const EditPost = () => {
  //const [post, setPost] = useState("");
  const [editPost, setEditPost] = useState({
    title: "",
    body: "",
  });

  //let { id } = useParams();
  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("https://jsonplaceholder.typicode.com/posts",editPost);
      console.log("post has been updated")
    } catch (error) {
      console.log(" error editting post",error);
    }
    navigate(`/`);
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
          Edit Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;
