import React, { useState } from 'react';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import EditUnitModal from '../Common/EditUnitModal';
import { initialUnitData, unitDataLabels } from '../../data/units';

const UnitInformation = () => {
  const [unitData, setUnitData] = useState(initialUnitData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveChanges = (updatedData) => {
    setUnitData(updatedData); // Update the state with edited data 
    setIsModalOpen(false); // Close the modal
  };

  // Helper function to render the value based on its type
  const renderValue = (key, item) => {
    const value = item?.value;
    switch (item?.type) {
      case 'link':
        return (
          <a href={item.href || '#'} className="text-blue-600 hover:text-blue-800 hover:underline truncate">
            {value || item.placeholder || 'N/A'}
          </a>
        );
      case 'boolean':
        return value ? 'Yes' : 'No'; // Display Yes/No for booleans
      case 'currency':
         // Basic currency format
         const formattedValue = typeof value === 'number'
             ? value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
             : value;
        return `${item.currency || ''} ${formattedValue}`;
      case 'faded':
        return <span className="text-gray-400">{value || item.placeholder || ''}</span>;
       case 'label-below': // Already handled by structure below
           return value; // Just return the main value part
      case 'number':
      case 'text':
      default:
        return value || item?.placeholder || 'N/A'; // Display value or placeholder or N/A
    }
  };

  return (
    <div className="bg-white shadow-md w-full h-full rounded-lg p-6 relative max-w-2xl mx-auto my-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg font-semibold text-gray-800">Unit Information</h2>
        <button
          onClick={handleEditClick}
          className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500"
          aria-label="Edit Unit Information"
        >
          <PencilSquareIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Information List */}
      <div className="space-y-0"> {/* Use space-y-0 to rely on row padding/border */}
        {Object.entries(unitData).map(([key, item]) => {
          const label = unitDataLabels[key] || key; // Get label from map or use key

          // Special handling for 'label-below' type
          if (item?.type === 'label-below') {
              return (
                   <div key={key} className="flex justify-between items-start py-3 border-b border-[#EFF5F8] last:border-b-0">
                      {/* Combine main label and sublabel */}
                      <span className="text-sm font-medium text-gray-600 w-1/3">
                          {label}
                           {item.subLabel && <span className="block text-xs text-gray-400 font-normal">{item.subLabel}</span>}
                      </span>
                      <span className="text-sm text-gray-800 w-2/3 text-left pl-4">
                          {renderValue(key, item)}
                      </span>
                  </div>
              )
          }

          // Standard row structure
          return (
            <div key={key} className="flex justify-between items-center py-3 border-b border-[#EFF5F8] last:border-b-0">
              <span className="text-sm font-medium text-gray-600 w-1/3">{label}</span>
              <span className="text-sm text-gray-800 w-2/3 text-left pl-4">
                {renderValue(key, item)}
              </span>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      <EditUnitModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initialData={unitData}
        onSave={handleSaveChanges}
      />
    </div>
  );
};

export default UnitInformation;