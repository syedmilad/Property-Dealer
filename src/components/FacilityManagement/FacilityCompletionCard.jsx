import React from 'react';
import { FunnelIcon } from '@heroicons/react/24/outline';
import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';
import ProgressBar from './ProgressBar';

// Mock data - replace with actual data/props
const facilityData = [
  { label: 'Plumbing', value: 85, colorClass: 'bg-cyan-400' },
  { label: 'Electrical', value: 95, colorClass: 'bg-blue-600' },
  { label: 'Joinery', value: 70, colorClass: 'bg-blue-500' },
];

const completionPercentage = 75;
const completionColor = '#4fd1c5'; // Approx teal color from image (Tailwind: text-cyan-400 or similar)
const trackColor = '#E2E8F0'; // Tailwind: bg-gray-200 or text-gray-200

// Data for Recharts RadialBarChart
const radialData = [
  {
    name: 'Completion',
    value: completionPercentage,
    fill: completionColor, // Color for the progress arc
  },
];


function FacilityCompletionCard() {
    // Calculate radius for rounded corners based on bar thickness
    // Example: Outer 80%, Inner 70% => Thickness 10%
    const outerRadius = 80; // Percentage or fixed value
    const innerRadius = 70; // Percentage or fixed value
    const barThickness = outerRadius - innerRadius; // In percentage points or pixels
    const cornerRadius = barThickness / 2; // Make it fully rounded

  return (
    <div className="bg-white shadow-md p-5 rounded-lg  space-y-8">

      {/* --- Facility Management Section --- */}
      <div>
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-lg font-semibold text-gray-800">Facility Management</h3>
          <button className="p-1 rounded text-cyan-500 hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-300">
            <FunnelIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="space-y-3">
          {facilityData.map((item) => (
            <ProgressBar
              key={item.label}
              label={item.label}
              value={item.value}
              colorClass={item.colorClass}
            />
          ))}
        </div>
      </div>

      {/* --- Completion Status Section (Using Recharts) --- */}
      <div className="flex flex-row justify-center gap-4 items-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Completion Status</h3>

        {/* Container for chart and text overlay */}
        <div className="relative w-[250px] h-[250px]"> {/* Adjust size as needed */}
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              cx="50%" // Center X
              cy="50%" // Center Y
              innerRadius={`${innerRadius}%`} // Adjust thickness
              outerRadius={`${outerRadius}%`} // Adjust thickness
              barSize={barThickness} // Explicit bar thickness (optional if using inner/outer)
              data={radialData}
              startAngle={90}   // Start from Top
              endAngle={-270} // Go 360 degrees clockwise
            >
              {/* Axis defining the scale (0-100 for percentage) */}
              <PolarAngleAxis
                type="number"
                domain={[0, 100]} // Our scale is 0 to 100%
                angleAxisId={0}
                tick={false} // Hide ticks
                axisLine={false} // Hide axis line
              />

              {/* Background Track */}
               <RadialBar
                  background={{ fill: trackColor }} // Use background prop for the track
                  dataKey="value" // This bar technically draws the full circle bg
                  cornerRadius={cornerRadius} // Round the background ends too
                  angleAxisId={0} // Associate with the angle axis
                  fill="transparent" // Make the actual bar part transparent
              />

              {/* Actual Progress Bar */}
              <RadialBar
                // background // No background needed here, we handle it above
                dataKey="value" // The actual value to display
                angleAxisId={0} // Associate with the angle axis
                cornerRadius={cornerRadius} // Round the ends
                // fill is defined in the `radialData` object
              />

            </RadialBarChart>
          </ResponsiveContainer>

          {/* Text Overlay */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <span className="text-3xl font-bold" style={{ color: completionColor }}>
              {`${completionPercentage}%`}
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default FacilityCompletionCard;