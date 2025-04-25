import { formatCurrency } from "../../utils/helper";

// --- Custom Tooltip (Optional, for hover effects) ---
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const paidValue = payload.find(p => p.dataKey === 'paid')?.value || 0;
      const unpaidValue = payload.find(p => p.dataKey === 'unpaid')?.value || 0;
      const billedValue = paidValue + unpaidValue;
  
      return (
        <div className="bg-white p-3 rounded shadow-lg border border-gray-200 text-xs">
          <p className="font-semibold mb-1">{label}</p>
          <p style={{ color: '#25A6E9' }}>Unpaid: {formatCurrency(unpaidValue)}</p> {/* Darker Blue */}
          <p style={{ color: '#82E9DE' }}>Paid: {formatCurrency(paidValue)}</p>    {/* Light Teal */}
          <hr className="my-1"/>
          <p>Billed: {formatCurrency(billedValue)}</p>
        </div>
      );
    }
    return null;
  };
  

  export default CustomTooltip;