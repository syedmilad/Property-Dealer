// src/data/leaseData.js (Example)
import { format, parseISO } from 'date-fns'; // Using date-fns for reliable date formatting

// Helper to format dates consistently
const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    try {
        // Assuming date might be ISO string from backend or already formatted
        // If it's already like '15-Dec-2025', maybe just return it?
        // Or parse it robustly if needed. For this example, assume we get parsable dates.
        // Let's assume backend gives 'YYYY-MM-DD' for simplicity in mock data
        const date = parseISO(dateString);
        return format(date, 'dd-MMM-yyyy'); // Format as '15-Dec-2025'
    } catch (error) {
        console.error("Error formatting date:", dateString, error);
        return dateString; // Return original if formatting fails
    }
};

// Helper to format currency
const formatCurrency = (amount, currency = 'AED') => {
    if (amount === null || amount === undefined || isNaN(Number(amount))) return 'N/A';
    return `${currency} ${Number(amount).toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}`;
};


export const initialLeaseData = {
  tenantName: { label: 'Tenant Name', value: '123', type: 'text', editable: true },
  ownerName: { label: 'Owner Name', value: null, type: 'text', editable: true, placeholder: 'Enter owner name' }, // Example: Empty initially
  unit: { label: 'Unit', value: 'Studio - 01 - 1 Bed', type: 'text', editable: false }, // Example: Not editable
  property: { label: 'Property', value: 'Arslan test property', type: 'link', href: '#', editable: false }, // Example: Link, not editable text
  totalRent: { label: 'Total Rent', value: 1000.0, type: 'currency', currency: 'AED', editable: true },
  paymentCycle: { label: 'Payment Cycle', value: 0.0, type: 'number', editable: true }, // Assuming it's a number field
  contractType: { label: 'Contract Type', value: 'N/A', type: 'text', editable: true }, // Or maybe a 'select' type
  occupants: { label: 'No. of Occupants', value: 1, type: 'number', editable: true },
  startDate: { label: 'Start Date', value: '2025-12-15', type: 'date', editable: true }, // Store as ISO format
  endDate: { label: 'End Date', value: '2026-01-16', type: 'date', editable: true }, // Store as ISO format
  payments: { label: 'No. of Payments', value: 0, type: 'number', editable: true },
  shortTerm: { label: 'Short Term', value: 0, type: 'number', editable: true }, // Or boolean? Image shows 0
  remark: { label: 'Remark', value: false, type: 'boolean', editable: true }, // Assuming No means false
  tenantSignature: { label: 'Contract Signature by Tenant', value: null, type: 'signature', editable: false, placeholder: 'Pending' }, // Custom type for display logic
  ownerSignature: { label: 'Contract Signature by Owner', value: null, type: 'signature', editable: false, placeholder: 'Pending' }, // Custom type
};

// Expose formatters if needed elsewhere
export { formatDate, formatCurrency };