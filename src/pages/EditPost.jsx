import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const EditPost = () => {
  const [editPost, setEditPost] = useState("")
  let {id}  = useParams()
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((resp) => resp.json().then((data) => setEditPost(data)))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      Eidt post
    </div>
  )
}

export default EditPost
