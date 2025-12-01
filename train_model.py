import argparse
import yfinance as yf
import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
from math import sqrt
import joblib

def generate_demo_data(n=200):
    """Generate fake stock-like data (for offline demo)."""
    np.random.seed(42)
    x = np.arange(n)
    noise = np.random.normal(0, 10, n)
    prices = 2500 + 0.5 * x + noise
    df = pd.DataFrame({'Close': prices})
    print("📊 Using demo synthetic stock data (no internet required).")
    return df

def main(symbol="RELIANCE.NS", period="1y", window=10, predict_horizon=5, demo=False):
    if demo:
        df = generate_demo_data()
    else:
        print(f"Downloading {symbol} data for period={period} ...")
        df = yf.download(symbol, period=period, interval="1d")[['Close']].dropna()
        if len(df) < window + predict_horizon:
            print("❌ Not enough data to train. Try smaller window/predict_horizon or use --demo.")
            return

    # Prepare training data
    df['Target'] = df['Close'].shift(-predict_horizon)
    df = df.dropna()
    X, y = [], []
    for i in range(len(df) - window - predict_horizon):
        X.append(df['Close'].iloc[i:i+window].values)
        y.append(df['Target'].iloc[i+window-1])
    X, y = np.array(X), np.array(y)

    # Split train/test
    split = int(len(X) * 0.8)
    X_train, X_test = X[:split], X[split:]
    y_train, y_test = y[:split], y[split:]

    model = LinearRegression()
    model.fit(X_train, y_train)
    preds = model.predict(X_test)

    rmse = sqrt(mean_squared_error(y_test, preds))
    print(f"✅ Model trained successfully | RMSE: {rmse:.2f}")

    joblib.dump(model, 'model.pkl')
    print("💾 Model saved as model.pkl")

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--symbol", type=str, default="RELIANCE.NS")
    parser.add_argument("--period", type=str, default="1y")
    parser.add_argument("--window", type=int, default=10)
    parser.add_argument("--predict_horizon", type=int, default=5)
    parser.add_argument("--demo", action="store_true", help="Use demo synthetic data (no internet needed)")
    args = parser.parse_args()

    main(symbol=args.symbol, period=args.period, window=args.window,
         predict_horizon=args.predict_horizon, demo=args.demo)
