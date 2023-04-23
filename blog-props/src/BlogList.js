import React from "react";
import BlogPost from "./BlogPost";
import data from "./data";

export default function BlogList() {
  const posts = data.map((post) => {
    return <BlogPost {...post} />;
  });

  return (
    <div className="blog-list">
      <div>{posts}</div>
    </div>
  );
}
