import React, { useState } from "react";

const Dashboard = () => {
  const [symbol, setSymbol] = useState("");
  const [predictions, setPredictions] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {
    if (!symbol.trim()) {
      alert("Please enter a stock symbol!");
      return;
    }

    setLoading(true);
    setError("");
    setPredictions([]);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ symbol }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || "Server error");
        setLoading(false);
        return;
      }

      const data = await response.json();
      console.log("Response from backend:", data); // Debug line

      if (data.predictions && data.predictions.length > 0) {
        setPredictions(data.predictions);
      } else {
        setError("No predictions returned from backend.");
      }
    } catch (err) {
      console.error("Frontend error:", err);
      setError("Error connecting to backend");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6">
      <div className="flex items-center gap-4 mb-10">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-teal-400 rounded-xl flex items-center justify-center shadow-lg">
          <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9H7V21H3V9Z" fill="currentColor"/>
            <path d="M10 4H14V21H10V4Z" fill="currentColor"/>
            <path d="M17 12H21V21H17V12Z" fill="currentColor"/>
          </svg>
        </div>
        <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
          Dashboard
        </h1>
      </div>

      <div className="bg-gray-800/50 p-8 rounded-3xl shadow-2xl w-[600px] text-center backdrop-blur-sm border border-gray-700">
        <input
          type="text"
          placeholder="Enter stock symbol (e.g. RELIANCE.NS)"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          className="w-full p-4 rounded-xl text-white mb-6 text-xl font-medium bg-gray-800/50 border border-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handlePredict}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-xl text-xl transition-all duration-200 transform hover:scale-[1.02]"
          disabled={loading}
        >
          {loading ? "Predicting..." : "Predict Stock"}
        </button>

        {error && <p className="text-red-400 mt-6 text-xl">{error}</p>}

        {predictions.length > 0 && (
          <div className="mt-8 text-left bg-gray-900/50 p-6 rounded-2xl">
            <p className="text-2xl font-bold mb-4 text-blue-300">
              Predicted Prices (Next {predictions.length} Day{predictions.length !== 1 ? 's' : ''}):
            </p>
            <ul className="space-y-3 text-gray-200">
              {predictions.map((p, i) => (
                <li key={i} className="text-xl font-medium flex items-center gap-2">
                  <span className="text-blue-400">Day {i + 1}:</span>
                  <span className="text-2xl font-semibold">₹{p.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
