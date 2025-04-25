// src/components/CommissionSection.js
import React from 'react';
import CommissionBar from './CommissionBar'; // Adjust path if needed

const CommissionSection = ({ title, data = [] }) => {
  return (
    <div>
      <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-3">
        {title}
      </h4>
      <div className="space-y-3">
        {data.length > 0 ? (
          data.map((item) => (
            <CommissionBar
              key={item.id}
              label={item.label}
              percentage={item.percentage}
            />
          ))
        ) : (
          <p className="text-xs text-gray-400 italic">No commission data.</p>
        )}
      </div>
    </div>
  );
};

export default CommissionSection;
