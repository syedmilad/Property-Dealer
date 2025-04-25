// src/data/propertiesData.js
export const propertiesData = Array.from({ length: 129 }, (_, i) => {
    const id = 16281 + Math.floor(i / 6); // Simulate some repeating IDs
    const types = ['Residential', 'Commercial', 'Co Living'];
    const stages = ['Planning', 'Under Construction', 'Completed', 'Rented'];
    const users = ['Mark Jason', 'Alice Smith', 'Bob Doe', 'System Admin'];
    const assigned = i % 4 === 0 ? `mq ar, ${users[i % users.length]}` : (i % 5 === 0 ? 'Column' : `${users[(i+1) % users.length]}`); // Simulate different assignments

    return {
        id: id, // Use the generated ID
        uniqueId: `prop-${1000 + i}`, // Actual unique ID for React keys
        property: `UPRES${31 + Math.floor(i / 10)}`,
        tags: i % 5 === 0 ? ['Hot Deal', 'New'] : (i % 3 === 0 ? ['Featured'] : []),
        size: i % 7 === 0 ? 'Column' : (1500.0 + (i*10)).toFixed(1), // Mix number and string
        noOfUnits: i % 6 === 0 ? null : (5 + i % 15), // Simulate missing data
        managementFees: i % 4 === 0 ? (500 + (i*5)).toFixed(2) : null, // Simulate missing data
        stage: stages[i % stages.length],
        assignedTo: assigned,
        // Add a type field for filtering
        type: types[i % types.length]
    };
});

// Define headers including an 'actions' column
export const propertiesHeaders = [
  { key: 'id', label: 'ID' },
  { key: 'property', label: 'Property' },
  { key: 'tags', label: 'Tags', sortable: false }, // Example: Disable sorting for tags
  { key: 'size', label: 'Size' },
  { key: 'noOfUnits', label: 'No of Units' },
  { key: 'managementFees', label: 'Management Fees' },
  { key: 'stage', label: 'Stage' },
  { key: 'assignedTo', label: 'Assigned To' },
  { key: 'actions', label: 'Actions', sortable: false } // Actions column, not sortable
];