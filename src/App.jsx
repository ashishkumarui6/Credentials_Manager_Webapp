import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Nabar";
import { Route, Routes } from "react-router-dom";
import From from "./pages/From";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
