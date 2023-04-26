import React from "react";
import BlogPosts from "./BlogPosts";
import data from "./data";

export default function BlogList() {
  const posts = data.map((post) => {
    return <BlogPosts {...post} />;
  });

  return <div>{posts}</div>;
}
