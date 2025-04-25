// src/components/RentalSnapshot.js
import React, { useState, useEffect } from 'react';
import { FunnelIcon } from '@heroicons/react/24/outline';
import StatCard from '../StatCard';

const fetchSnapshotData = async () => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return [
    { id: 'contractValue', title: 'Contract Value', description: 'Total expected income from lease', value: 1100000, format: 'short', color: 'text-blue-800' },
    { id: 'rentIncome', title: 'Rent Income', description: 'Amount billed in defined period', value: 1100000, format: 'short', color: 'text-blue-800' },
    { id: 'received', title: 'Received', description: 'Amount received during defined period', value: 111111, format: 'number', color: 'text-cyan-500' }, // Light blue
    { id: 'receivable', title: 'Receivable', description: 'Amount still due during the defined period', value: 111111, format: 'number', color: 'text-blue-500' }, // Mid blue
    { id: 'unearned', title: 'Unearned', description: 'Balance during the defined period', value: 111111, format: 'number', color: 'text-red-600' },
    { id: 'upcoming', title: 'Upcoming Invoices', description: 'Schedules invoices in defined period', value: 1100000, format: 'short', color: 'text-blue-800' },
    { id: 'liability', title: 'Liability', description: 'Any amount held towards tenants', value: 111111, format: 'number', color: 'text-red-600' },
    { id: 'overdues', title: 'Overdues', description: 'delayed incoives during the defined period', value: 111111, format: 'number', color: 'text-red-600' }, // Corrected spelling
  ];
};

const OverviewLeasing = () => {
  const [snapshotData, setSnapshotData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchSnapshotData()
      .then(data => {
        setSnapshotData(data);
        setError(null);
      })
      .catch(err => {
        console.error("Failed to fetch snapshot data:", err);
        setError("Could not load snapshot data.");
        setSnapshotData([]); // Clear data on error
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []); // Fetch data on component mount

  const handleFilterClick = () => {
    alert('Filter clicked! Implement filter logic or modal.');
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow mb-6"> {/* Added padding and background */}
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Rental Snapshot
        </h2>
        <button
          onClick={handleFilterClick}
          className="p-1.5 text-cyan-600 hover:text-cyan-800 hover:bg-cyan-50 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-cyan-500"
          aria-label="Filter rental snapshot"
        >
          <FunnelIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Stats Grid Section */}
      {isLoading ? (
        <div className="text-center py-8 text-gray-500">Loading snapshot...</div>
      ) : error ? (
         <div className="text-center py-8 text-red-500">{error}</div>
      ) : snapshotData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {snapshotData.map((stat) => (
            <StatCard
              key={stat.id}
              title={stat.title}
              description={stat.description}
              value={stat.value}
              format={stat.format}
              titleColor={stat.color}
            />
          ))}
        </div>
      ) : (
         <div className="text-center py-8 text-gray-500">No snapshot data available.</div>
      )}
    </div>
  );
};

export default OverviewLeasing;