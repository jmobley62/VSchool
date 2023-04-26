import React from "react";

export default function BlogPosts(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subTitle}</h2>
      <p>
        Posted by <a href="#">{props.author}</a> on {props.date}
      </p>
      <hr />
    </div>
  );
}
