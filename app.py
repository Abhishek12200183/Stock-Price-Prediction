from flask import Flask, request, jsonify
from flask_cors import CORS
import yfinance as yf
from sklearn.linear_model import LinearRegression
import numpy as np

app = Flask(__name__)
CORS(app)  # Allow frontend requests

@app.route('/')
def home():
    return "Backend running!"

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        symbol = data.get("symbol", "RELIANCE.NS").upper()

        # Download last 1 month of stock prices
        df = yf.download(symbol, period="1mo")['Close'].dropna()

        if len(df) < 10:
            return jsonify({"error": "Not enough data for prediction"}), 400

        # Prepare data
        X = np.arange(len(df)).reshape(-1, 1)
        y = df.values

        # Train Linear Regression model
        model = LinearRegression()
        model.fit(X, y)

        # Predict next 5 days
        next_days = np.arange(len(df), len(df) + 5).reshape(-1, 1)
        preds = model.predict(next_days)

        # ✅ Flatten, round, and convert to floats (important!)
        preds = [float(round(p, 2)) for p in preds.flatten()]

        # Send data to frontend
        return jsonify({
            "symbol": symbol,
            "predictions": preds
        })

    except Exception as e:
        print("Backend error:", e)
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
