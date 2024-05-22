import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Homepage";
import Slider1 from "./Slider1";
import Slider2 from "./Slider2";
import Slider3 from "./Slider3";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Slider1" element={<Slider1 />} />
        <Route path="/Slider2" element={<Slider2 />} />
        <Route path="/Slider3" element={<Slider3 />} />
      </Routes>
    </Router>
  );
}

export default App;
