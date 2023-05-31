import { useState, useEffect } from "react";
import FAQPage from "./components/FAQPage";
import Homepage from "./components/Homepage";
import "./styles/main.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bgimg home">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/faq" element={<FAQPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
