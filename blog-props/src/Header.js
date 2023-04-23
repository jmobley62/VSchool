import React from "react";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header>
      <div className="header">
        <h2 className="logo">Start Bootstrap</h2>
        <NavBar />
      </div>
      <div className="blog-header">
        <h1>Clean Blog</h1>
        <h2>A Blog Theme by Start Bootstrap</h2>
      </div>
    </header>
  );
}
