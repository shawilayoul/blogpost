import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DeletePost = () => {
  let { id } = useParams();
 
  return <div>Post deleted</div>;
};

export default DeletePost;
