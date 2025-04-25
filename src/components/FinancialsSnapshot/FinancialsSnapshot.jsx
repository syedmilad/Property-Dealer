import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { formatCurrency } from '../../utils/helper';


const incomeTrendData = [
    { value: 1000 }, { value: 1300 }, { value: 1200 }, { value: 1500 },
    { value: 1400 }, { value: 1600 }, { value: 1800 }, { value: 2100 },
];

const expenseTrendData = [
    { value: 1500 }, { value: 1200 }, { value: 1300 }, { value: 1100 },
    { value: 1250 }, { value: 1000 }, { value: 900 },  { value: 800 },
];

// Total values shown in the component
const totalIncome = 598720918; // From image
const totalExpense = 20876394; // From image


// --- Icon Components (using Heroicons SVGs for example) ---

const FilterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
    </svg>
);

const UpArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#82E9DE]"> {/* Light Teal */}
      <path fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.03 9.83a.75.75 0 01-1.06-1.06l5.5-5.5a.75.75 0 011.06 0l5.5 5.5a.75.75 0 11-1.06 1.06L10.75 5.612V16.25a.75.75 0 01-.75.75z" clipRule="evenodd" />
    </svg>
);

const DownArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-red-500">
      <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l4.22-4.22a.75.75 0 111.06 1.06l-5.5 5.5a.75.75 0 01-1.06 0l-5.5-5.5a.75.75 0 111.06-1.06l4.22 4.22V3.75A.75.75 0 0110 3z" clipRule="evenodd" />
    </svg>
);


// --- Main Component ---
const FinancialsSnapshot = () => {
  return (
    <div className="bg-white p-4 h-full w-full sm:p-5 rounded-lg"> {/* Adjusted padding */}
      {/* Header */}
      <div className="flex justify-between items-start mb-5"> {/* Adjusted margin */}
        <h2 className="text-lg font-semibold text-[#272729 ]">
          Financials Snapshot
        </h2>
        <button className="p-1.5 bg-cyan-50 text-cyan-600 hover:bg-cyan-100 rounded-md transition-colors">
          <FilterIcon />
        </button>
      </div>

      {/* Content Area */}
      <div className="space-y-5"> {/* Spacing between Income and Expense blocks */}

        {/* Income Section */}
        <div className="flex justify-between items-center">
          {/* Left: Text Info */}
          <div className="flex-shrink-0 pr-4"> {/* Prevent shrinking, add padding */}
            <div className="flex items-center space-x-1 mb-0.5">
                <span className="text-base font-semibold text-[#272729]">Income</span>
                <UpArrowIcon />
            </div>
            <p className="text-[#71EDE2] text-xs font-semibold"> {/* Light Teal, adjusted size/weight */}
              {formatCurrency(totalIncome)}
            </p>
          </div>
          {/* Right: Sparkline Chart */}
          <div className="flex-grow h-14 w-2/5 max-w-[150px]"> {/* Give chart area defined height and width */}
             <ResponsiveContainer width="100%" height="100%">
                <LineChart data={incomeTrendData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                  <Line
                    type="monotone" // Smooth curve
                    dataKey="value"
                    stroke="#82E9DE" // Light Teal color
                    strokeWidth={2}
                    dot={false} // Hide dots on the line
                    isAnimationActive={false} // Optional: disable animation for sparklines
                  />
                </LineChart>
             </ResponsiveContainer>
          </div>
        </div>

        {/* Expense Section */}
        <div className="flex justify-between items-center">
          {/* Left: Text Info */}
           <div className="flex-shrink-0 pr-4">
            <div className="flex items-center space-x-1 mb-0.5">
                <span className="text-base font-semibold text-[#272729]">Expense</span>
                <DownArrowIcon />
            </div>
            <p className="text-[#272729] text-xs font-semibold"> {/* Red color for arrow, neutral for text */}
              {formatCurrency(totalExpense)}
            </p>
          </div>
          {/* Right: Sparkline Chart */}
          <div className="flex-grow h-14 w-2/5 max-w-[150px]">
             <ResponsiveContainer width="100%" height="100%">
                <LineChart data={expenseTrendData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                  <Line 
                    type="monotone"
                    dataKey="value"
                    stroke="#EF4444" // Red-500 color
                    strokeWidth={2}
                    dot={false}
                    isAnimationActive={false}
                  />
                 </LineChart>
              </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FinancialsSnapshot;