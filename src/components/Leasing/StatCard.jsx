// src/components/StatCard.js
import React from 'react';
import clsx from 'clsx';

// Helper function to format numbers (can be moved to a utils file)
const formatValue = (value, formatType = 'number') => {
  if (value === null || value === undefined) return 'N/A';

  if (formatType === 'short') {
    if (value >= 1_000_000) {
      return (value / 1_000_000).toFixed(1) + 'm';
    }
    if (value >= 1_000) {
      return (value / 1_000).toFixed(1) + 'k';
    }
    return value.toString();
  }

  // Default 'number' format with commas
  if (typeof value === 'number') {
    return value.toLocaleString('en-US');
  }
  return value; // Return as is if not a number
};

const StatCard = ({ title, description, value, format, titleColor = 'text-blue-800' }) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-blue-200 shadow-sm flex flex-col justify-between min-h-[120px]">
      <div>
        <h3 className={clsx('text-sm font-semibold mb-1', titleColor)}>
          {title}
        </h3>
        <p className="text-xs text-gray-500 mb-2">
          {description}
        </p>
      </div>
      <p className="text-2xl font-medium text-gray-900">
        {formatValue(value, format)}
      </p>
    </div>
  );
};

export default StatCard;