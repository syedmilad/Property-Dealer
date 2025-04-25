import React from "react";
import { alternativeInvoiceData, invoiceData } from "../../data/units";
import DataTable from "../Common/DataTable";

const CommisionDetails = () => {
  return (
    <div className="flex flex-col w-full h-full bg-[#fff]">
      {/* Header */}
      <div className=" pt-4 pb-4 ">
        <h1 className="text-[#272729] font-medium text-lg">
          Commission Details
        </h1>
      </div>
      <div>
        <div className="flex justify-start  pt-4 pb-4">
          <span className="text-[#272729] font-medium text-base ">
          Tenant Commission
          </span>
        </div>
        {/* Main Content */}
        <div>
          <DataTable data={invoiceData} isFirstFormat={true} />
        </div>
      </div>
      <div>
        <div className="flex justify-start pt-4 pb-4">
          <span className="text-[#272729] font-medium text-base ">
          Owner Commission
          </span>
        </div>
        {/* Main Content */}
        <div>
          <DataTable data={alternativeInvoiceData} isFirstFormat={true} />
        </div>
      </div>
    </div>
  );
};

export default CommisionDetails;
