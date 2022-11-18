import React, { useState, useEffect } from "react";
import "./App.css";
import Posts from "./components/Posts";

const App = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(posts);
  return (
    <div className="App">
      <h3>Posts</h3>
      <div>
        {posts.map((post) => (
          <Posts id={post.id} key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
};

export default App;
