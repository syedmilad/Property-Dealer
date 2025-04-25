import React from "react";
import { rentSaleDetailsData } from "../../data/chartData";
import RenderDetailItem from "./RenderDetailItem";

const RentSaleDetails = () => {
  return (
    <div className="bg-white p-4 sm:p-6 shadow-md rounded-lg h-full w-full">
      {/* Title */}
      <h1 className="text-base font-semibold text-[#272729] py-4 border-b border-[#EFF5F8]">Rent/Sale Details</h1>
      <p className="text-sm font-medium text-[#272729] py-2 border-b border-[#EFF5F8]">Rent Type</p>
      <div>
        {rentSaleDetailsData?.map((item, index) => (
          <RenderDetailItem item={{ ...item }} key={index} />
        ))}
      </div>
    </div>
  );
};

export default RentSaleDetails;
