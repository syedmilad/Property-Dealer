// Add logic here to open a filter modal or apply filters
import React from "react";
import RecentTransactionsChart from "../../TransactionChart/RecentTransactionsChart";
import CommissionSnapshot from "./CommissionSnapshot";
import LeaseInformation from "./LeaseInformation";
import OverviewLeasing from "./OverviewLeasing";

const Overview = () => {
  return (
    <div>
      <div className="w-full">
        <OverviewLeasing />
      </div>
      <div className="flex flex-col lg:flex-col xl:flex-row  gap-4 w-full min-h-full pb-8 bg-white">
        {/* Left Column */}
        <div className="flex flex-col gap-4 w-full lg:flex-[1.2]">
          <div className="min-h-[350px] w-full rounded-[5px] border border-[#EFF5F8]">
            <RecentTransactionsChart title="Quick Financials Stats" />
          </div>
          <div className=" w-full rounded-[5px] border border-[#EFF5F8]">
            <CommissionSnapshot />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 w-full lg:flex-[0.8]">
          <div className="min-h-[230px] w-full rounded-[5px] border border-[#EFF5F8]">
         < LeaseInformation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
