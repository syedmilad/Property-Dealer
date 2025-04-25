import React from 'react';
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { chartData } from '../../data/chartData';
import CustomTooltip from './CustomTooltip';
import FilterIcon from './FilterIcon';
import CustomLegend from './Legend';


const totalPaid = chartData.reduce((sum, item) => sum + item.paid, 0);
const totalUnpaid = chartData.reduce((sum, item) => sum + item.unpaid, 0);
const totalBilled = totalPaid + totalUnpaid;


// --- Main Chart Component ---
const RecentTransactionsChart = ({title="Recent Transactions"}) => {
  return (
    <div className="bg-white p-4 sm:p-6 shadow-md rounded-lg h-full w-full ">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-4 ">
        <div>
          <h2 className="text-lg font-semibold text-[#272729 ]">
            {title}
          </h2>
          <p className="text-sm font-normal text-[#BDBDBD]">Jan 24 - Dec 24</p> {/* Make dynamic later */}
        </div>
        <button className="p-1.5 bg-cyan-50 text-cyan-600 hover:bg-cyan-100 rounded-md transition-colors">
          <FilterIcon />
        </button>
      </div>

      {/* Chart Section */}
      <div style={{ width: '100%', height: 250 }} className='flex items-center justify-center'> {/* Fixed height for the chart area */}
        <ResponsiveContainer>
          <BarChart
            data={chartData}
            margin={{
              top: 5,
              right: 0, // No right margin needed if legend is outside
              left: 0, // No left margin for Y-axis
              bottom: 0, // No bottom margin for X-axis labels
            }}
            barGap={4} // Adjust gap between bars of different categories (months)
            barCategoryGap="25%" // Adjust width of bars relative to category space
          >
            <XAxis
              dataKey="name"
              axisLine={false} // Hide the main X axis line
              tickLine={false} // Hide the ticks extending from the axis
              tick={{ fontSize: 12, fill: '#6B7280' }} // Style labels (Tailwind: text-xs text-gray-500)
              dy={10} // Push labels down slightly
            />
            <YAxis hide /> {/* Hide the Y axis */}
            <Tooltip
                cursor={{ fill: 'rgba(230, 230, 230, 0.3)' }} // Light grey semi-transparent cursor on hover
                content={<CustomTooltip />} // Use our custom tooltip
            />

            {/* Define the bars - Order Matters for Stacking & Radius! */}
            {/* Bottom Bar (Paid) - No radius here */}
             <Bar dataKey="paid" stackId="transactions" fill="#82E9DE" /> {/* Light teal */}

             {/* Top Bar (Unpaid) - Apply radius here for overall top rounding */}
             <Bar
                dataKey="unpaid"
                stackId="transactions"
                fill="#25A6E9"  // Darker blue
                radius={[6, 6, 0, 0]} // Apply border radius to top corners only
             />
          </BarChart>
        </ResponsiveContainer>
      <CustomLegend />
      </div>

      {/* Legend Section */}

    </div>
  );
};

export default RecentTransactionsChart;