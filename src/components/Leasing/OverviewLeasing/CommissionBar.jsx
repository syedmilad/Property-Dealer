// src/components/CommissionBar.js
import React from 'react';

const CommissionBar = ({ label, percentage }) => {
  // Ensure percentage is within 0-100 range
  const validPercentage = Math.max(0, Math.min(100, percentage));

  return (
    <div className="flex items-center space-x-3">
      {/* Label */}
      <span className="text-xs text-gray-600 w-16 truncate" title={label}>
        {label}
      </span>
      {/* Progress Bar Container */}
      <div className="flex-grow bg-cyan-50 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
        {/* Filled Progress */}
        <div
          className="bg-cyan-400 h-1.5 rounded-full"
          style={{ width: `${validPercentage}%` }}
          role="progressbar"
          aria-valuenow={validPercentage}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label={`${label} commission progress`}
        ></div>
      </div>
    </div>
  );
};

export default CommissionBar;