import React from 'react';

// Simple horizontal bar chart for small datasets
// props: data = [{label:'A', value:10}, ...], width,height
const SimpleBarChart = ({ data = [], width = 300, height = 200, barColor = '#06b6d4' }) => {
  if (!data || data.length === 0) return <div className="text-gray-400">No data</div>;

  const max = Math.max(...data.map(d => d.value));
  const barHeight = Math.max(12, Math.floor((height - 20) / data.length) - 8);

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" height={height}>
      {data.map((d, i) => {
        const y = 10 + i * (barHeight + 8);
        const w = (d.value / (max || 1)) * (width - 100);
        return (
          <g key={i}>
            <text x={0} y={y + barHeight - 2} fill="#9ca3af" fontSize={12}>{d.label}</text>
            <rect x={80} y={y} width={w} height={barHeight} rx={4} fill={barColor} opacity={0.95} />
            <text x={85 + w} y={y + barHeight - 2} fill="#fff" fontSize={12}>{d.value}</text>
          </g>
        );
      })}
    </svg>
  );
};

export default SimpleBarChart;
