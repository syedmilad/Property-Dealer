import React, { useState, useEffect } from 'react';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { initialLeaseData,formatCurrency,formatDate } from '../../../data/leaseData';
import EditLeaseModal from './EditLeaseModal';
// --- Mock Data Fetching (Replace with actual API call) ---
const fetchLeaseDetails = async (leaseId) => {
    console.log("Fetching lease details for:", leaseId);
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate delay
    // In a real app, fetch data based on leaseId and return it
    // in the format matching initialLeaseData structure
    return initialLeaseData; // Return mock data for now
};
// --- End Mock Data ---

const LeaseInformation = ({ leaseId = 'default-lease-id' }) => { // Accept an ID prop
  const [leaseData, setLeaseData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data when component mounts or leaseId changes
  useEffect(() => {
    setIsLoading(true);
    fetchLeaseDetails(leaseId)
      .then(data => {
        setLeaseData(data || {});
        setError(null);
      })
      .catch(err => {
        console.error("Failed to fetch lease details:", err);
        setError("Could not load lease information.");
        setLeaseData({});
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [leaseId]); // Re-fetch if leaseId changes

  const handleEditClick = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSaveChanges = (updatedData) => {
    console.log("Saving updated lease data:", updatedData);
    // In a real app, you would send this updatedData to your backend API
    setLeaseData(updatedData); // Update local state optimistically or after API success
    handleCloseModal();
  };

  // --- Value Renderer ---
  const renderValue = (key, item) => {
    if (item?.value === null || item?.value === undefined || item?.value === '') {
      return <span className="text-gray-400 italic">{item?.placeholder || 'N/A'}</span>;
    }

    switch (item?.type) {
      case 'link':
        return (
          <a href={item.href || '#'} className="text-blue-600 hover:text-blue-800 hover:underline truncate">
            {item.value}
          </a>
        );
      case 'currency':
        return formatCurrency(item.value, item.currency);
      case 'date':
        return formatDate(item.value);
      case 'boolean':
        return item.value ? 'Yes' : 'No';
      case 'signature': // Custom display for signature status
         return <span className="text-orange-600 italic">{item.value || item.placeholder || 'Status Unknown'}</span>;
      case 'number':
      case 'text':
      default:
        return String(item.value); // Ensure value is string for rendering
    }
  };

  // --- Component Render ---
  return (
    <div className="bg-white shadow-md rounded-lg min-w-full p-5 relative max-w-md mx-auto my-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 pb-2 border-b border-b-[#EFF5F8]">
        <h2 className="text-base font-semibold text-gray-800">Lease Information</h2>
        <button
          onClick={handleEditClick}
          className="p-1.5 text-cyan-600 hover:text-cyan-800 hover:bg-cyan-50 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-cyan-500"
          aria-label="Edit Lease Information"
        >
          <PencilSquareIcon className="w-4 h-4" />
        </button>
      </div>

      {/* Body */}
      {isLoading ? (
         <div className="text-center py-6 text-gray-500">Loading...</div>
      ) : error ? (
         <div className="text-center py-6 text-red-500">{error}</div>
      ) : Object.keys(leaseData).length === 0 ? (
          <div className="text-center py-6 text-gray-500">No lease data found.</div>
      ) : (
        <div className="space-y-0">
          {Object.entries(leaseData).map(([key, item]) => (
            <div key={key} className="flex justify-between items-center py-2.5 border-b border-b-[#EFF5F8] last:border-b-0 text-sm">
              <span className="font-medium text-gray-600 w-2/5 pr-2">{item?.label || key}</span>
              <span className="text-gray-800 w-3/5 text-left pl-2">
                {renderValue(key, item)}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      <EditLeaseModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initialData={leaseData}
        onSave={handleSaveChanges}
      />
    </div>
  );
};

export default LeaseInformation;