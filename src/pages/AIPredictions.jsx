import React from "react";
import SimpleLineChart from "../components/SimpleLineChart";
import SimpleBarChart from "../components/SimpleBarChart";

const AIPredictions = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-20">
      {/* Header Section */}
      <div className="flex items-center gap-4 justify-center mb-10">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-teal-400 rounded-xl flex items-center justify-center shadow-lg">
          <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
          AI-Powered Predictions
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Prediction Models */}
            <div className="bg-gray-900/50 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-blue-300 mb-4">AI Models</h2>
              <div className="space-y-4">
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-300">Machine Learning Model</h3>
                  <p className="text-gray-400 mt-2">Advanced prediction algorithms based on historical data</p>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-300">Neural Network Analysis</h3>
                  <p className="text-gray-400 mt-2">Deep learning patterns and market behavior analysis</p>
                </div>
              </div>
            </div>

            {/* Prediction Metrics */}
            <div className="bg-gray-900/50 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-blue-300 mb-4">Prediction Metrics</h2>
              <div className="space-y-4">
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-300">Accuracy Metrics</h3>
                  <p className="text-gray-400 mt-2">Model performance and confidence scores</p>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-300">Risk Assessment</h3>
                  <p className="text-gray-400 mt-2">Market volatility and risk factors analysis</p>
                </div>
              </div>
            </div>
          </div>

          {/* Prediction Chart */}
          <div className="mt-8 bg-gray-900/50 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-blue-300 mb-4">Prediction Visualization</h2>
            <div className="bg-gray-800/50 rounded-lg p-4">
              {/* Charts and sample data */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-1">
                  <SimpleLineChart data={samplePredictionData} width={800} height={320} stroke="#7c3aed" />
                </div>
                <div className="col-span-1 flex flex-col gap-4">
                  <div className="bg-gray-900/40 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-300 mb-2">Predicted Values</h3>
                    <ul className="text-gray-200 space-y-1 text-sm">
                      {samplePredictionData.map((d, i) => (
                        <li key={i} className="flex justify-between">
                          <span className="text-gray-300">{d.date}</span>
                          <span className="font-medium">{d.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-900/40 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-300 mb-2">Model Confidence</h3>
                    <SimpleBarChart data={sampleConfidenceData} width={360} height={220} barColor="#06b6d4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Insights */}
          <div className="mt-8 bg-gray-900/50 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-blue-300 mb-4">Market Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h3 className="text-lg font-medium text-gray-300">Trend Analysis</h3>
                <p className="text-gray-400 mt-2">Market trend predictions and pattern recognition</p>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h3 className="text-lg font-medium text-gray-300">Sentiment Analysis</h3>
                <p className="text-gray-400 mt-2">Market sentiment and news impact analysis</p>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h3 className="text-lg font-medium text-gray-300">Future Projections</h3>
                <p className="text-gray-400 mt-2">Long-term market behavior predictions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPredictions;

// --- sample data for the charts (replace with real API data later) ---
const samplePredictionData = [
  { date: '2025-10-01', value: 1200 },
  { date: '2025-10-02', value: 1215 },
  { date: '2025-10-03', value: 1190 },
  { date: '2025-10-04', value: 1225 },
  { date: '2025-10-05', value: 1250 },
  { date: '2025-10-06', value: 1270 },
  { date: '2025-10-07', value: 1260 },
  { date: '2025-10-08', value: 1285 },
  { date: '2025-10-09', value: 1300 },
  { date: '2025-10-10', value: 1315 },
];

const sampleConfidenceData = [
  { label: 'ML Model', value: 82 },
  { label: 'Neural Net', value: 76 },
  { label: 'Ensemble', value: 88 },
];