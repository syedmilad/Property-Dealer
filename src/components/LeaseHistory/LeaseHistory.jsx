import React from "react";
import DataTable from "../Common/DataTable";
import { rentalData } from "../../data/chartData";

const LeaseHistory = () => {
  return (
    <div className="flex flex-col w-full h-full bg-[#fff]">
      {/* Header */}
      <div className="flex justify-start p-4">
        <span className="text-[#272729] font-medium text-base ">
          Lease History
        </span>
      </div>
      {/* Main Content */}
      <div>
        <DataTable data={rentalData} />
      </div>
    </div>
  );
};

export default LeaseHistory;
