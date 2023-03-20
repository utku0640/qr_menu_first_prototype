import React, { useEffect } from "react";
import MenuList from "./MenuList";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Map from "./Map";
import FirstPage from "./FirstPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useGlobalContext } from "./Context";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import QrCode from "./QrCode";

function App() {
  const { isLoading } = useGlobalContext();
  if (isLoading) {
    return <div className="loading"></div>;
  }

  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="menulist" element={<MenuList />} />
        <Route path="firstPage" element={<FirstPage />} />
        <Route path="map" element={<Map />} />
        <Route path="qrCode" element={<QrCode />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
