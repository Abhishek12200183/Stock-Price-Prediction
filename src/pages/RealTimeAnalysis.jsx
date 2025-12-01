import React, { useEffect, useMemo, useState } from "react";
import SimpleLineChart from "../components/SimpleLineChart";
import SimpleBarChart from "../components/SimpleBarChart";

const RealTimeAnalysis = () => {
  // --- sample OHLC + volume data (mock) ---
  const sampleOHLC = [
    { date: '2025-09-11', open: 1750, high: 1820, low: 1740, close: 1800, volume: 1200 },
    { date: '2025-09-12', open: 1800, high: 1840, low: 1790, close: 1830, volume: 1100 },
    { date: '2025-09-13', open: 1830, high: 1845, low: 1780, close: 1795, volume: 1400 },
    { date: '2025-09-14', open: 1795, high: 1860, low: 1790, close: 1850, volume: 1600 },
    { date: '2025-09-15', open: 1850, high: 1880, low: 1840, close: 1875, volume: 1500 },
    { date: '2025-09-16', open: 1875, high: 1910, low: 1860, close: 1900, volume: 1700 },
    { date: '2025-09-17', open: 1900, high: 1915, low: 1870, close: 1880, volume: 1300 },
    { date: '2025-09-18', open: 1880, high: 1930, low: 1875, close: 1925, volume: 1800 },
    { date: '2025-09-19', open: 1925, high: 1960, low: 1910, close: 1950, volume: 2000 },
    { date: '2025-09-20', open: 1950, high: 1990, low: 1940, close: 1980, volume: 1900 },
    { date: '2025-09-21', open: 1980, high: 2000, low: 1960, close: 1995, volume: 1750 },
    { date: '2025-09-22', open: 1995, high: 2020, low: 1980, close: 2010, volume: 1650 },
    { date: '2025-09-23', open: 2010, high: 2030, low: 2000, close: 2025, volume: 1550 },
    { date: '2025-09-24', open: 2025, high: 2050, low: 2015, close: 2040, volume: 1600 },
    { date: '2025-09-25', open: 2040, high: 2060, low: 2020, close: 2055, volume: 1700 },
    { date: '2025-09-26', open: 2055, high: 2075, low: 2040, close: 2065, volume: 1800 },
    { date: '2025-09-27', open: 2065, high: 2080, low: 2050, close: 2070, volume: 1500 },
    { date: '2025-09-28', open: 2070, high: 2090, low: 2060, close: 2085, volume: 1400 },
    { date: '2025-09-29', open: 2085, high: 2100, low: 2075, close: 2095, volume: 1300 },
    { date: '2025-09-30', open: 2095, high: 2110, low: 2080, close: 2105, volume: 1250 },
  ];

  // helper calculations
  const closes = sampleOHLC.map((d) => d.close);

  const computeSMA = (values, period) => {
    const res = [];
    for (let i = 0; i < values.length; i++) {
      if (i < period - 1) res.push(null);
      else {
        const slice = values.slice(i - period + 1, i + 1);
        const sum = slice.reduce((a, b) => a + b, 0);
        res.push(sum / period);
      }
    }
    return res;
  };

  const computeRSI = (values, period = 14) => {
    const deltas = [];
    for (let i = 1; i < values.length; i++) deltas.push(values[i] - values[i - 1]);
    const rsis = [];
    let gain = 0;
    let loss = 0;
    for (let i = 0; i < deltas.length; i++) {
      const d = deltas[i];
      if (i < period) {
        if (d > 0) gain += d;
        else loss += Math.abs(d);
        if (i === period - 1) {
          gain = gain / period;
          loss = loss / period;
          const rs = loss === 0 ? 100 : gain / loss;
          rsis.push(100 - 100 / (1 + rs));
        } else rsis.push(null);
      } else {
        const change = deltas[i];
        const g = change > 0 ? change : 0;
        const l = change < 0 ? Math.abs(change) : 0;
        gain = (gain * (period - 1) + g) / period;
        loss = (loss * (period - 1) + l) / period;
        const rs = loss === 0 ? 100 : gain / loss;
        rsis.push(100 - 100 / (1 + rs));
      }
    }
    // align with original length (prepend null)
    return [null].concat(rsis);
  };

  const computeEMA = (values, period) => {
    const k = 2 / (period + 1);
    const ema = [];
    let prev = values[0];
    ema.push(prev);
    for (let i = 1; i < values.length; i++) {
      const val = values[i] * k + prev * (1 - k);
      ema.push(val);
      prev = val;
    }
    return ema;
  };

  const computeMACD = (values, fast = 12, slow = 26, signal = 9) => {
    // Compute EMAs even if the series is shorter than the nominal 'slow' period.
    // This produces MACD and a signal line aligned to the input length so we
    // can always derive a histogram for visualization on small sample sets.
    if (!values || values.length === 0) return { macd: [], signal: [], hist: [] };

    const emaFast = computeEMA(values, fast);
    const emaSlow = computeEMA(values, slow);

    // When emaSlow doesn't have an entry at index i (because slow > length),
    // fall back to using the earliest slow EMA value (emaSlow[0]) to keep
    // macd defined for all points. This avoids empty histogram arrays.
    const macd = emaFast.map((v, i) => {
      const slowVal = emaSlow[i] !== undefined ? emaSlow[i] : emaSlow[0] || 0;
      return v - slowVal;
    });

    // Replace any null/undefined with 0 for signal computation
    const macdValid = macd.map((v) => (v == null ? 0 : v));
    const signalLine = computeEMA(macdValid, signal);

    const hist = macd.map((v, i) => {
      const sig = signalLine[i] !== undefined ? signalLine[i] : signalLine[signalLine.length - 1] || 0;
      const hh = (v == null ? 0 : v - sig);
      return hh;
    });

    return { macd, signal: signalLine, hist };
  };

  const sma20Series = computeSMA(closes, 20);
  const sma50Series = computeSMA(closes, 50);
  const rsiSeries = computeRSI(closes, 14);
  const macdObj = computeMACD(closes, 12, 26, 9);

  // series for charts
  const priceSeries = sampleOHLC.map((d) => ({ date: d.date, value: d.close }));
  const volumeSeries = sampleOHLC.slice(-10).map((d) => ({ label: d.date, value: d.volume }));
  const sma20 = sma20Series[sma20Series.length - 1];
  const sma50 = sma50Series[sma50Series.length - 1];
  const rsiSeriesForChart = rsiSeries.map((v, i) => ({ date: sampleOHLC[i] ? sampleOHLC[i].date : i, value: v || 0 }));
  const latestRSI = rsiSeries[rsiSeries.length - 1];
  const macdHist = macdObj.hist || [];
  const latestMACD = macdObj.macd && macdObj.macd[macdObj.macd.length - 1];
  const macdHistogramSeries = macdHist.map((v, i) => ({ label: sampleOHLC[i] ? sampleOHLC[i].date : i, value: Math.round((v || 0) * 100) }));

  // expose variables to jsx via memo to avoid recalculation on each render
  // (they're pure and small, so memo not strictly necessary)
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-20">
      {/* Header Section */}
      <div className="flex items-center gap-4 justify-center mb-10">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-teal-400 rounded-xl flex items-center justify-center shadow-lg">
          <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9H7V21H3V9Z" fill="currentColor"/>
            <path d="M10 4H14V21H10V4Z" fill="currentColor"/>
            <path d="M17 12H21V21H17V12Z" fill="currentColor"/>
            <path d="M4 8L12 2L20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
          Real-time Analysis
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Market Overview */}
            <div className="bg-gray-900/50 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-blue-300 mb-4">Market Overview</h2>
              <div className="space-y-4">
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-300">Market Trends</h3>
                  {/* Add real-time market trend data here */}
                </div>
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-300">Volume Analysis</h3>
                  {/* Add volume analysis data here */}
                </div>
              </div>
            </div>

            {/* Technical Indicators */}
            <div className="bg-gray-900/50 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-blue-300 mb-4">Technical Indicators</h2>
              <div className="space-y-4">
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-300">Moving Averages</h3>
                  {/* Add moving averages data here */}
                </div>
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-300">RSI & MACD</h3>
                  {/* Add RSI and MACD data here */}
                </div>
              </div>
            </div>
          </div>

          {/* Chart Section */}
          <div className="mt-8 bg-gray-900/50 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-blue-300 mb-4">Live Chart</h2>
            <div className="bg-gray-800/50 rounded-lg p-4">
              {/* Charts: price, volume, indicators */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm text-gray-400 mb-2">Price (Close)</h3>
                  <SimpleLineChart data={priceSeries} width={800} height={260} stroke="#06b6d4" />
                </div>

                <div>
                  <h3 className="text-sm text-gray-400 mb-2">Volume (last 10 days)</h3>
                  <SimpleBarChart data={volumeSeries} width={400} height={220} barColor="#3b82f6" />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-gray-900/40 rounded-lg">
                  <h4 className="text-md font-semibold text-blue-300 mb-2">Moving Averages</h4>
                  <p className="text-gray-200">SMA (20): <span className="font-semibold">{sma20?.toFixed(2) ?? '—'}</span></p>
                  <p className="text-gray-200">SMA (50): <span className="font-semibold">{sma50?.toFixed(2) ?? '—'}</span></p>
                </div>

                <div className="p-4 bg-gray-900/40 rounded-lg">
                  <h4 className="text-md font-semibold text-blue-300 mb-2">Oscillators</h4>
                  <p className="text-gray-200">RSI (14): <span className="font-semibold">{latestRSI?.toFixed(2) ?? '—'}</span></p>
                  <p className="text-gray-200">MACD: <span className="font-semibold">{latestMACD?.toFixed(2) ?? '—'}</span></p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-md font-semibold text-blue-300 mb-3">Indicator Charts</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-900/40 p-3 rounded-lg">
                    <h5 className="text-sm text-gray-400 mb-2">RSI (14)</h5>
                    <SimpleLineChart data={rsiSeriesForChart} width={700} height={180} stroke="#f97316" />
                  </div>
                  <div className="bg-gray-900/40 p-3 rounded-lg">
                    <h5 className="text-sm text-gray-400 mb-2">MACD Histogram</h5>
                    <SimpleBarChart data={macdHistogramSeries} width={400} height={180} barColor="#7c3aed" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTimeAnalysis;
