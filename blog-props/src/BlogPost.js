import React from "react";

export default function BlogPost(props) {
  // const post =

  return (
    <div className="blog-post">
      <h1>{props.title}</h1>
      <h2>{props.subTitle}</h2>
      <h3>
        Posted by {props.author} on {props.date}
      </h3>
      <hr></hr>
    </div>
  );
}
