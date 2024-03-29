import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json().then((data) => setPosts(data)))
      .catch((err) => console.log(err));
  }, []);
  console.log(posts);
  return <div>home page</div>;
};

export default HomePage;
