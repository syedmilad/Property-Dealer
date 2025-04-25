import React from 'react';

function ProgressBar({ label, value, colorClass = 'bg-blue-500' }) {
  const widthPercentage = Math.max(0, Math.min(100, value));

  return (
    <div className="mb-3">
      <span className="text-sm font-medium text-gray-600 block mb-1">{label}</span>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className={`h-2 rounded-full ${colorClass}`}
          style={{ width: `${widthPercentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;