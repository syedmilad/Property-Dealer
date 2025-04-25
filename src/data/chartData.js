// --- Mock Data (Replace with your actual data fetching logic) ---
export const chartData = [
  { name: "Jan", paid: 500000, unpaid: 100000 }, // Small values for Jan bar
  { name: "Feb", paid: 5000000, unpaid: 5500000 },
  { name: "Mar", paid: 4500000, unpaid: 4000000 },
  { name: "Apr", paid: 2000000, unpaid: 1500000 },
  { name: "May", paid: 5200000, unpaid: 4800000 },
  { name: "June", paid: 4800000, unpaid: 4600000 },
  { name: "July", paid: 4900000, unpaid: 4500000 },
  { name: "Aug", paid: 3800000, unpaid: 2500000 },
  { name: "Sept", paid: 5100000, unpaid: 4200000 },
  { name: "Oct", paid: 4200000, unpaid: 3800000 },
  { name: "Nov", paid: 5500000, unpaid: 6500000 }, // Tallest bar
  { name: "Dec", paid: 3500000, unpaid: 2800000 },
];

export const facilityData = [
  { label: "Plumbing", value: 80, colorClass: "bg-[#76DDE0]" }, // Custom Teal
  { label: "Electrical", value: 90, colorClass: "bg-[#1C6FC4]" }, // Custom Dark Blue
  { label: "Joinery", value: 70, colorClass: "bg-[#3B82F6]" }, // Tailwind Blue-500
];

export const rentSaleDetailsData = [
  {
    label: "Security Deposit",
    value: "AED 5,000.00", // Example value
  },
  {
    label: "Market Value",
    value: "AED 1,250,000.00", // Example value
  },
  {
    label: "Threshold Value",
    value: "AED 1,110,000.00", // Example value
  },
  {
    label: "Rent Per Square Foot",
    value: "AED 85.50", // Example value
  },
  {
    label: "Actual Rent Value",
    value: "AED 60,000.00", // Example: Could be annual rent
  },
];


export const leaseHistoryData = [
    {
      name: 'John Thomas',
      status: 'Active',
      startDate: '10-12-2024',
      endDate: '09-12-2025',
      rent: '20,000.00'
    },
    {
      name: 'John Thomas',
      status: 'Active',
      startDate: '10-12-2023',
      endDate: '09-12-2024',
      rent: '20,000.00'
    },
    {
      name: 'John Thomas',
      status: 'Active',
      startDate: '10-12-2022',
      endDate: '09-12-2023',
      rent: '20,000.00'
    },
    {
      name: 'John Thomas',
      status: 'Active',
      startDate: '10-12-2021',
      endDate: '09-12-2022',
      rent: '20,000.00'
    },
    {
      name: 'John Thomas',
      status: 'Active',
      startDate: '10-12-2020',
      endDate: '09-12-2021',
      rent: '20,000.00'
    },
    {
      name: 'John Thomas',
      status: 'Active',
      startDate: '10-12-2019',
      endDate: '09-12-2020',
      rent: '20,000.00'
    },
    {
      name: 'John Thomas',
      status: 'Active',
      startDate: '10-12-2018',
      endDate: '09-12-2019',
      rent: '20,000.00'
    }
    // Add more rows if needed, following the pattern
  ];

// Sample Data (Matches the image structure)
export const rentalData = [
  { id: 1, name: 'John Thomas', status: 'Active', startDate: '10-12-2024', endDate: '09-12-2025', rent: 20000.00 },
  { id: 2, name: 'John Thomas', status: 'Active', startDate: '10-12-2023', endDate: '09-12-2024', rent: 20000.00 },
  { id: 3, name: 'John Thomas', status: 'Active', startDate: '10-12-2022', endDate: '09-12-2023', rent: 20000.00 },
  { id: 4, name: 'John Thomas', status: 'Active', startDate: '10-12-2021', endDate: '09-12-2022', rent: 20000.00 },
  { id: 5, name: 'John Thomas', status: 'Active', startDate: '10-12-2020', endDate: '09-12-2021', rent: 20000.00 },
  { id: 6, name: 'John Thomas', status: 'Active', startDate: '10-12-2019', endDate: '09-12-2020', rent: 20000.00 },
  { id: 7, name: 'John Thomas', status: 'Active', startDate: '10-12-2018', endDate: '09-12-2019', rent: 20000.00 },
];