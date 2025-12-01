import React from 'react';

// Simple responsive SVG line chart component
// Props: data = [{date: '2025-01-01', value: 123}, ...], width, height
const SimpleLineChart = ({ data = [], width = 700, height = 300, stroke = '#3b82f6' }) => {
  if (!data || data.length === 0) return <div className="text-gray-400">No data</div>;

  // map values
  const values = data.map((d) => d.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const padding = 20;
  const w = width - padding * 2;
  const h = height - padding * 2;

  const points = data.map((d, i) => {
    const x = padding + (i / (data.length - 1)) * w;
    // invert y (SVG origin at top)
    const y = padding + (1 - (d.value - min) / (max - min || 1)) * h;
    return [x, y];
  });

  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0].toFixed(2)} ${p[1].toFixed(2)}`).join(' ');

  // small grid lines (5)
  const gridLines = 5;
  const grid = [];
  for (let i = 0; i <= gridLines; i++) {
    const gy = padding + (i / gridLines) * h;
    grid.push(gy);
  }

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox={`0 0 ${width} ${height}`} width="100%" height={height}>
        {/* background */}
        <defs>
          <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={stroke} stopOpacity="0.16" />
            <stop offset="100%" stopColor={stroke} stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* grid lines */}
        {grid.map((gy, idx) => (
          <line key={idx} x1={padding} x2={width - padding} y1={gy} y2={gy} stroke="#222" strokeWidth="1" />
        ))}

        {/* area under curve */}
        <path d={`${pathD} L ${width - padding} ${height - padding} L ${padding} ${height - padding} Z`} fill="url(#grad)" stroke="none" />

        {/* main line */}
        <path d={pathD} fill="none" stroke={stroke} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />

        {/* points */}
        {points.map((p, i) => (
          <circle key={i} cx={p[0]} cy={p[1]} r={3.5} fill="#fff" stroke={stroke} strokeWidth={1} />
        ))}

        {/* y axis labels (min/max) */}
        <text x={8} y={padding + 10} fill="#9ca3af" fontSize={12}>{max.toFixed(2)}</text>
        <text x={8} y={height - padding} fill="#6b7280" fontSize={12}>{min.toFixed(2)}</text>

        {/* x axis labels (first/last) */}
        <text x={padding} y={height - 4} fill="#6b7280" fontSize={12}>{data[0].date}</text>
        <text x={width - padding - 60} y={height - 4} fill="#6b7280" fontSize={12}>{data[data.length - 1].date}</text>
      </svg>
    </div>
  );
};

export default SimpleLineChart;
