// src/pages/Home.jsx
import React from "react";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-20">
      {/* Background stock patterns */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64">
          <img
            src="https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&w=800"
            alt="Stock Chart 1"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute top-40 right-10 w-72 h-72">
          <img
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800"
            alt="Stock Chart 2"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute bottom-20 left-20 w-80 h-80">
          <img
            src="https://images.unsplash.com/photo-1642790106736-8854f0c84041?auto=format&fit=crop&w=800"
            alt="Stock Chart 3"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Smart Stock Predictions
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Harness the power of AI to make informed investment decisions with our advanced stock prediction platform.
          </p>
          
          {/* Featured stock graphs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm border border-gray-700">
              <img
                src="https://img.freepik.com/premium-photo/stock-market-forex-trading-graph_73426-190.jpg"
                alt="Stock Analysis"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-blue-300">Real-time Analysis</h3>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm border border-gray-700">
              <img
                src="https://img.freepik.com/premium-photo/financial-stock-market-graph-chart-stock-market-investment-trading-stock-market-technology_73426-173.jpg"
                alt="AI Stock Prediction"
                className="w-full h-48 object-cover rounded-lg mb-4 bg-gray-900"
              />
              <h3 className="text-lg font-semibold text-blue-300">AI-Powered Predictions</h3>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="px-8 py-3 bg-transparent border-2 border-blue-400 hover:bg-blue-400/10 rounded-lg font-semibold transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
