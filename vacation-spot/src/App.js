import React from "react";
import Cards from "./Cards";
import data from "./data";

export default function App() {
  const cards = data.map((card) => {
    return <Cards {...card} />;
  });

  return <div>{cards}</div>;
}
