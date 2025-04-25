import React, { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { unitDataLabels } from '../../data/units';

const EditUnitModal = ({ isOpen, onClose, initialData, onSave }) => {
  const [formData, setFormData] = useState({});

  // Initialize form data when initialData changes or modal opens
  useEffect(() => {
    if (isOpen && initialData) {
      // Extract just the 'value' for the form state
      const initialFormValues = Object.keys(initialData).reduce((acc, key) => {
        acc[key] = initialData[key]?.value;
        return acc;
      }, {});
      setFormData(initialFormValues);
    }
    // Reset form when modal closes (optional, depends on desired behavior)
    // if (!isOpen) setFormData({});
  }, [isOpen, initialData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Reconstruct the data structure expected by the parent
    const updatedData = { ...initialData }; // Start with original structure (types, etc.)
    Object.keys(formData).forEach(key => {
      if (updatedData[key]) { // Ensure key exists in original structure
        updatedData[key].value = formData[key];
      }
    });
    onSave(updatedData); // Pass the updated data back
  };

  if (!isOpen) return null;

  const renderInputField = (key) => {
    const config = initialData[key];
    const label = unitDataLabels[key] || key; // Use predefined label or key
    const currentValue = formData[key] ?? ''; // Handle undefined

    // Basic input type determination (can be expanded)
    switch (config?.type) {
      case 'boolean':
        return (
          <div key={key} className="mb-4 flex items-center">
            <input
              type="checkbox"
              id={`edit-${key}`}
              name={key}
              checked={!!currentValue} // Ensure boolean conversion
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2"
            />
            <label htmlFor={`edit-${key}`} className="block text-sm font-medium text-gray-700">
              {label} ( {currentValue ? 'Yes' : 'No'} )
            </label>
          </div>
        );
      case 'number':
      case 'currency': // Treat currency like number for input
        return (
          <div key={key} className="mb-4">
            <label htmlFor={`edit-${key}`} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <input
              type="number"
              id={`edit-${key}`}
              name={key}
              value={currentValue}
              onChange={handleChange}
              step={config.type === 'currency' ? '0.01' : '1'} // Allow decimals for currency
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        );
      case 'label-below': // Non-editable in this simple example, just display
      case 'faded': // Non-editable display
        return (
           <div key={key} className="mb-4">
             <span className="block text-sm font-medium text-gray-500">{label}</span>
             <span className="block text-sm text-gray-400 mt-1">{config?.value} {config.subLabel && `(${config.subLabel})`}</span>
           </div>
        );
        // Add cases for 'select', 'textarea', etc. if needed
      case 'link': // Render as text input for the link's display value
      case 'text':
      default:
        return (
          <div key={key} className="mb-4">
            <label htmlFor={`edit-${key}`} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <input
              type="text"
              id={`edit-${key}`}
              name={key}
              value={currentValue}
              onChange={handleChange}
              placeholder={config?.placeholder || ''}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center p-4 transition-opacity duration-300 ease-in-out">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">Edit Unit Information</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            aria-label="Close modal"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body (Scrollable Form) */}
        <form onSubmit={handleSave} className="p-6 overflow-y-auto">
          {Object.keys(initialData)
              // Optional: Filter out keys you don't want to be editable
              // .filter(key => initialData[key]?.type !== 'faded' && initialData[key]?.type !== 'label-below')
              .map(key => renderInputField(key))}

          {/* Modal Footer */}
          <div className="mt-6 flex justify-end space-x-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 text-sm font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-sm font-medium"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUnitModal;