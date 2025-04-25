import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// --- Icon Component (Example using Heroicons 'filter') ---
const FilterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
    </svg>
);

// --- Main Chart Component ---
const OccupancyStatsChart = ({ occupancyPercentage = 75 }) => {

    const value = occupancyPercentage;
    const remaining = 100 - value;

    // Data for the foreground (actual progress) pie
    const data = [
        { name: 'Occupied', value: value },
        { name: 'Empty', value: remaining },
    ];

    // Data for the background track pie (always 100%)
    const backgroundData = [{ name: 'Total', value: 100 }];

    // Colors
    const OCCUPIED_COLOR = '#82E9DE'; // Teal color from image
    const BACKGROUND_TRACK_COLOR = '#E0F2FE'; // Very light blue/gray background

    // Chart angles (approximate to match image - starts around 7 o'clock, ends around 5 o'clock)
    const startAngle = 210; // Start angle (degrees, 0 is 3 o'clock)
    const endAngle = -30;   // End angle (degrees)
    const cornerRadius = 10; // Rounded ends

    return (
        <div className="bg-white p-4 sm:p-5 rounded-lg shadow-md">
            {/* Header */}
            <div className="flex justify-between items-start mb-2"> {/* Reduced margin bottom */}
                <div className="flex items-center space-x-2">
                    <div className={`w-4 h-4 rounded-sm bg-[${OCCUPIED_COLOR}]`}></div>
                    <h2 className="text-base font-semibold text-gray-700"> {/* Adjusted size/color */}
                        Occupancy Stats
                    </h2>
                </div>
                <button className="p-1.5 bg-cyan-50 text-cyan-600 hover:bg-cyan-100 rounded-md transition-colors">
                    <FilterIcon />
                </button>
            </div>

            {/* Chart Area */}
            <div className="relative w-full h-60 flex flex-col items-center justify-center"> {/* Container for chart + labels */}

                {/* Recharts Container */}
                <div className="absolute inset-0"> {/* Position chart within the container */}
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            {/* Background Track */}
                            <Pie
                                data={backgroundData}
                                dataKey="value"
                                cx="50%"
                                cy="50%"
                                innerRadius="70%" // Adjust for thickness
                                outerRadius="85%" // Adjust for thickness
                                fill={BACKGROUND_TRACK_COLOR}
                                startAngle={startAngle}
                                endAngle={endAngle}
                                stroke="none"
                            />
                            {/* Foreground Progress */}
                            <Pie
                                data={data}
                                dataKey="value"
                                cx="50%"
                                cy="50%"
                                innerRadius="70%" // Must match background
                                outerRadius="85%" // Must match background
                                startAngle={startAngle}
                                endAngle={endAngle}
                                cornerRadius={cornerRadius}
                                paddingAngle={0} // No padding between segments needed here
                                stroke="none" // No border between segments
                            >
                                <Cell key={`cell-occupied`} fill={OCCUPIED_COLOR} />
                                <Cell key={`cell-empty`} fill="transparent" /> {/* Make unused part transparent */}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Central Percentage Text */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <span className={`text-4xl font-medium text-[${OCCUPIED_COLOR}]`}>
                        {value}%
                    </span>
                </div>

                {/* 0% and 100% Labels (Positioned below chart) */}
                <div className="absolute bottom-2 left-0 right-0 flex justify-between px-6 sm:px-8 text-xs text-gray-400"> {/* Adjust positioning/padding */}
                    <span>0%</span>
                    <span>100%</span>
                </div>
            </div>
        </div>
    );
};

export default OccupancyStatsChart; // Export the component