import React from "react";
import Header from "./Header";
import BlogList from "./BlogList";
// import Footer from "./Footer";

export default function App() {
  return (
    <div>
      <h1>My Blog</h1>
      <Header />
      <BlogList />
      {/* <Footer /> */}
    </div>
  );
}
