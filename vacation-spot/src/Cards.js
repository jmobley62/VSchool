import React from "react";

export default function Cards(props) {
  return (
    <div>
      <h1>{props.place}</h1>
      <h2>{props.price}</h2>
      <h3>{props.timeToGo}</h3>
    </div>
  );
}
