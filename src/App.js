import React, { useEffect } from "react";
import MenuList from "./MenuList";
import Button from "./Button";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Blog from "./Blog";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useGlobalContext } from "./Context";
import Footer from "./Footer";

function App() {
  const { isLoading } = useGlobalContext();
  if (isLoading) {
    return <div className="loading"></div>;
  }

  return (
    <>
      <Navbar />
      <Button />
      <Routes>
        <Route path="/" element={<MenuList />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
