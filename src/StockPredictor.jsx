import { useState } from "react";
import axios from "axios";

export default function StockPredictor() {
  const [symbol, setSymbol] = useState("RELIANCE.NS");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {
    setLoading(true);
    try {
      const res = await axios.post("http://127.0.0.1:5000/predict", {
        symbol,
      });
      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert("Error connecting to backend!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>📈 Stock Price Predictor</h1>
      <input
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        placeholder="Enter stock symbol"
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button onClick={handlePredict} disabled={loading}>
        {loading ? "Predicting..." : "Predict"}
      </button>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <h3>Prediction Result</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
