// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import RealTimeAnalysis from "./pages/RealTimeAnalysis";
import AIPredictions from "./pages/AIPredictions";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-16"> {/* padding to avoid overlap with fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analysis" element={<RealTimeAnalysis />} />
          <Route path="/predictions" element={<AIPredictions />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;