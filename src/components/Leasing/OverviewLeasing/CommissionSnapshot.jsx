// src/components/CommissionSnapshot.js
import React, { useState, useEffect } from 'react';
import CommissionSection from './CommissionSection'; // Adjust path if needed
import { FunnelIcon } from '@heroicons/react/24/outline';

// --- Mock Data (Replace with your actual data source/fetching) ---
const mockCommissionData = {
  owner: [
    { id: 'owner-agency', label: 'Agency', percentage: 60 },
    { id: 'owner-agent1', label: 'Agent 1', percentage: 85 },
    { id: 'owner-agent2', label: 'Agent 2', percentage: 70 },
  ],
  tenant: [
    { id: 'tenant-agency', label: 'Agency', percentage: 55 },
    { id: 'tenant-agent1', label: 'Agent 1', percentage: 75 },
    { id: 'tenant-agent2', label: 'Agent 2', percentage: 65 },
  ],
};

const fetchCommissionData = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 400));
  return mockCommissionData;
};
// --- End Mock Data ---


const CommissionSnapshot = () => {
  const [commissionData, setCommissionData] = useState({ owner: [], tenant: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

   useEffect(() => {
    setIsLoading(true);
    fetchCommissionData()
      .then(data => {
        setCommissionData(data || { owner: [], tenant: [] }); // Ensure fallback
        setError(null);
      })
      .catch(err => {
        console.error("Failed to fetch commission data:", err);
        setError("Could not load commission data.");
        setCommissionData({ owner: [], tenant: [] });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleFilterClick = () => {
    alert('Filter clicked! Implement filter logic or modal.');
    // Add logic here
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100">
          Commission Snapshot
        </h3>
        <button
          onClick={handleFilterClick}
          className="p-1.5 text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 hover:bg-cyan-50 dark:hover:bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-gray-800 focus:ring-cyan-500"
          aria-label="Filter commission snapshot"
        >
          <FunnelIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Content Area */}
      {isLoading ? (
         <div className="text-center py-6 text-gray-500 dark:text-gray-400">Loading commissions...</div>
      ) : error ? (
         <div className="text-center py-6 text-red-500">{error}</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {/* Owner Commission Section */}
          <CommissionSection
            title="Commission from Owner"
            data={commissionData.owner}
          />

          {/* Tenant Commission Section */}
          <CommissionSection
            title="Commission from Tenant"
            data={commissionData.tenant}
          />
        </div>
      )}
    </div>
  );
};

export default CommissionSnapshot;
