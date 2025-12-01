import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm text-white px-6 py-4 fixed top-0 w-full z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-teal-400 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 12H4V21H2V12Z" fill="currentColor"/>
              <path d="M7 3H9V21H7V3Z" fill="currentColor"/>
              <path d="M12 7H14V21H12V7Z" fill="currentColor"/>
              <path d="M17 15H19V21H17V15Z" fill="currentColor"/>
              <path d="M4 8L12 2L20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            StockPredictor
          </h1>
        </div>
        
        <div className="flex items-center space-x-6">
          <Link to="/" className="nav-link hover:text-blue-400 transition-colors duration-200 font-medium">
            Home
          </Link>
          <Link to="/dashboard" className="nav-link hover:text-blue-400 transition-colors duration-200 font-medium">
            Dashboard
          </Link>
          <Link to="/analysis" className="nav-link hover:text-blue-400 transition-colors duration-200 font-medium">
            Real-time Analysis
          </Link>
          <Link to="/predictions" className="nav-link hover:text-blue-400 transition-colors duration-200 font-medium">
            AI Predictions
          </Link>
          <Link to="/about" className="nav-link hover:text-blue-400 transition-colors duration-200 font-medium">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
