export const invoiceData = [
    {
      id: 'inv-001', // Unique ID for React key prop
      description: 'John Thomas',
      invoiceAmount: 5000, // First 'Amount' column
      invoiceDate: '10-12-2024',
      status: 'Paid',
      totalAmount: 20000.00 // Second 'Amount' column
    },
    {
      id: 'inv-002',
      description: 'John Thomas',
      invoiceAmount: 5000,
      invoiceDate: '10-12-2023',
      status: 'Unpaid',
      totalAmount: 20000.00
    },
    {
      id: 'inv-003',
      description: 'John Thomas',
      invoiceAmount: 5000,
      invoiceDate: '10-12-2022',
      status: 'Hold',
      totalAmount: 20000.00
    },
    {
      id: 'inv-004',
      description: 'John Thomas',
      invoiceAmount: 5000,
      invoiceDate: '10-12-2021',
      status: 'Bad Debt',
      totalAmount: 20000.00
    },
    {
      id: 'inv-005',
      description: 'John Thomas',
      invoiceAmount: 5000,
      invoiceDate: '10-12-2020',
      status: 'Overdue',
      totalAmount: 20000.00
    },
    {
      id: 'inv-006',
      description: 'John Thomas',
      invoiceAmount: 5000,
      invoiceDate: '10-12-2019',
      status: 'Paid',
      totalAmount: 20000.00
    },
    {
      id: 'inv-007',
      description: 'John Thomas',
      invoiceAmount: 5000,
      invoiceDate: '10-12-2018',
      status: 'Unpaid',
      totalAmount: 20000.00
    },
  ];

  export const alternativeInvoiceData = [
    {
      id: 'inv-alt-001', // Unique ID
      description: 'Alice Martin',
      invoiceAmount: 7500,
      invoiceDate: '11-05-2024',
      status: 'Paid',
      totalAmount: 15000.00
    },
    {
      id: 'inv-alt-002',
      description: 'Bob Williams',
      invoiceAmount: 4200,
      invoiceDate: '10-28-2024',
      status: 'Unpaid',
      totalAmount: 8400.00
    },
    {
      id: 'inv-alt-003',
      description: 'Charlie Davis',
      invoiceAmount: 10000,
      invoiceDate: '09-15-2024',
      status: 'Overdue',
      totalAmount: 10000.00
    },
    {
      id: 'inv-alt-004',
      description: 'Diana Garcia',
      invoiceAmount: 6000,
      invoiceDate: '08-20-2024',
      status: 'Hold',
      totalAmount: 12000.00
    },
    {
      id: 'inv-alt-005',
      description: 'Ethan Rodriguez',
      invoiceAmount: 3500,
      invoiceDate: '07-01-2024',
      status: 'Paid',
      totalAmount: 7000.00
    },
    {
      id: 'inv-alt-006',
      description: 'Fiona Smith',
      invoiceAmount: 9500,
      invoiceDate: '05-10-2024',
      status: 'Bad Debt',
      totalAmount: 9500.00
    },
      {
      id: 'inv-alt-007',
      description: 'George Miller',
      invoiceAmount: 2500,
      invoiceDate: '03-19-2024',
      status: 'Unpaid',
      totalAmount: 5000.00
    },
      {
      id: 'inv-alt-008',
      description: 'Hannah Wilson',
      invoiceAmount: 8800,
      invoiceDate: '01-25-2024',
      status: 'Paid',
      totalAmount: 17600.00
    },
  ];

  export const initialUnitData = {
    owner: { value: 'Manohar Lahori, Karen Foz, seen w', type: 'link', href: '#' },
    property: { value: 'My Propety', type: 'link', href: '#' },
    unitTags: { value: '', type: 'text', placeholder: 'N/A' }, // Assuming tags could be added
    unitSize: { value: 'N/A', type: 'text' },
    assignedTo: { value: '', type: 'text', placeholder: 'Unassigned' }, // Assuming it could be assigned
    unitNo: { value: 2, type: 'number' },
    unitType: { value: 'Hotel', type: 'text' },
    unitCategory: { value: 'Commercial', type: 'text' },
    status: { value: 'Vacant', type: 'link', href: '#' }, // Example link for status
    offPlan: { value: false, type: 'boolean' }, // Use boolean for Yes/No
    furnished: { value: 'Unfurnished', type: 'faded' },
    smoking: { value: 'Smoking Not Allowed', type: 'faded' },
    forSale: { value: false, type: 'boolean' },
    unitCode: { value: 'propCOM2', type: 'text' },
    electricityNo: { value: 'N/A', type: 'text' },
    gasNo: { value: 'N/A', type: 'text' },
    underRenovation: { value: false, type: 'boolean' },
    underDispute: { value: false, type: 'boolean' }, // Changed from "No" to false
    beds: { value: '1 Bed', type: 'label-below', subLabel: 'Beds' }, // Special type for label structure
    parking: { value: 'Not Available', type: 'label-below', subLabel: 'Parking' }, // Special type
    serviceChargesPerSqFt: { value: 0.0, type: 'currency', currency: 'AED' },
    totalServiceCharges: { value: 0.0, type: 'currency', currency: 'AED' },
  };
  
  // Helper to get display labels (optional but good for consistency)
  export const unitDataLabels = {
    owner: 'Owner',
    property: 'Property',
    unitTags: 'Unit Tags',
    unitSize: 'Unit Size',
    assignedTo: 'Assigned to',
    unitNo: 'Unit No',
    unitType: 'Unit Type',
    unitCategory: 'Unit Category',
    status: 'Status',
    offPlan: 'Off Plan',
    furnished: 'Furnished',
    smoking: 'Smoking',
    forSale: 'For Sale',
    unitCode: 'Unit Code',
    electricityNo: 'Electricity No',
    gasNo: 'Gas No',
    underRenovation: 'Under Renovation',
    underDispute: 'Under Dispute',
    beds: '1 Bed', // Keep the specific label from image
    parking: 'Not Available', // Keep the specific label from image
    serviceChargesPerSqFt: 'Service Charges Per Square Foot',
    totalServiceCharges: 'Total Service Charges',
  };