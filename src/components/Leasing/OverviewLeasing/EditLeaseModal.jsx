import React, { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const EditLeaseModal = ({ isOpen, onClose, initialData, onSave }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (isOpen && initialData) {
      // Initialize form state only with editable fields
      const initialFormValues = Object.keys(initialData).reduce((acc, key) => {
        if (initialData[key]?.editable) {
           // Handle boolean 'No'/'Yes' mapping if stored as boolean
           if (initialData[key].type === 'boolean') {
               acc[key] = initialData[key].value ? 'Yes' : 'No';
           } else {
               acc[key] = initialData[key].value ?? ''; // Use empty string for null/undefined
           }
        }
        return acc;
      }, {});
      setFormData(initialFormValues);
    }
  }, [isOpen, initialData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
     // For boolean using select, the value is 'Yes'/'No' string
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value // Handle checkbox if used, otherwise use value
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    const updatedData = { ...initialData }; // Start with original structure

    Object.keys(formData).forEach(key => {
      if (updatedData[key] && updatedData[key].editable) { // Ensure key exists and is editable
         // Convert back if needed (e.g., string 'Yes'/'No' to boolean)
          if (updatedData[key].type === 'boolean') {
              updatedData[key].value = formData[key] === 'Yes';
          } else if (updatedData[key].type === 'number' || updatedData[key].type === 'currency') {
               updatedData[key].value = formData[key] === '' ? null : Number(formData[key]); // Convert to number or null
          } else {
               updatedData[key].value = formData[key] === '' ? null : formData[key]; // Set to null if empty string
          }
      }
    });
    onSave(updatedData);
  };

  if (!isOpen) return null;

  // --- Input Field Renderer ---
  const renderInputField = (key) => {
    const config = initialData[key];
    // Only render inputs for fields marked as editable
    if (!config || !config.editable) return null;

    const label = config.label;
    const currentValue = formData[key] ?? '';

    switch (config.type) {
      case 'boolean': // Using Select for Yes/No as in previous example
        return (
          <div key={key} className="mb-4">
            <label htmlFor={`edit-${key}`} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <select
              id={`edit-${key}`}
              name={key}
              value={currentValue} // Value will be 'Yes' or 'No' string
              onChange={handleChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
        );
      case 'number':
      case 'currency':
        return (
          <div key={key} className="mb-4">
            <label htmlFor={`edit-${key}`} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <input
              type="number"
              id={`edit-${key}`}
              name={key}
              value={currentValue}
              onChange={handleChange}
              step={config.type === 'currency' ? '0.1' : '1'} // Step for currency/number
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder={config.placeholder || ''}
            />
             {config.type === 'currency' && config.currency && <span className="text-xs text-gray-500 ml-1">{config.currency}</span>}
          </div>
        );
      case 'date':
          return (
              <div key={key} className="mb-4">
                  <label htmlFor={`edit-${key}`} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                  <input
                      type="date" // Use standard HTML5 date input
                      id={`edit-${key}`}
                      name={key}
                      value={currentValue} // Expects YYYY-MM-DD format
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder={config.placeholder || ''}
                  />
              </div>
          );
      // Add 'textarea', 'select' cases if needed
      case 'text':
      default: // Fallback for text and unknown types considered editable
        return (
          <div key={key} className="mb-4">
            <label htmlFor={`edit-${key}`} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <input
              type="text"
              id={`edit-${key}`}
              name={key}
              value={currentValue}
              onChange={handleChange}
              placeholder={config.placeholder || ''}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        );
    }
  };

  // --- Modal Render ---
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center p-4 transition-opacity duration-300 ease-in-out">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">Edit Lease Information</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
        {/* Body */}
        <form onSubmit={handleSave} className="p-6 overflow-y-auto">
          {Object.keys(initialData).map(key => renderInputField(key))}
          {/* Footer */}
          <div className="mt-6 flex justify-end space-x-3 pt-4 border-t border-gray-200">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 text-sm font-medium">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-sm font-medium">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditLeaseModal;