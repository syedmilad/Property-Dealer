import React from "react";
import FinancialsSnapshot from "./FinancialsSnapshot/FinancialsSnapshot";
import OccupancyStatsChart from "./OccupancyStatsChart/OccupancyStatsChart";
import RecentTransactionsChart from "./TransactionChart/RecentTransactionsChart";
import FacilityCompletionCard from "./FacilityManagement/FacilityCompletionCard";
import RentSaleDetails from "./RentSaleDetails/RentSaleDetails";
import LeaseHistory from "./LeaseHistory/LeaseHistory";
import CommisionDetails from "./CommisionDetails/CommisionDetails";
import UnitInformation from "./UnitInformation/UnitInformation";

const Overview = () => {
  return (
    <div className="flex flex-col lg:flex-col xl:flex-row  gap-4 w-full min-h-full pb-8 bg-white">
      
      {/* Left Column */}
      <div className="flex flex-col gap-4 w-full lg:flex-[1.2]">
        <div className="min-h-[350px] w-full rounded-[5px] border border-[#EFF5F8]">
          <RecentTransactionsChart />
        </div>
        <div className="min-h-[350px] w-full rounded-[5px] border border-[#EFF5F8]">
          <RentSaleDetails />
        </div>
        <div className="min-h-[500px] p-4 sm:p-6 shadow-md w-full rounded-[5px] border border-[#EFF5F8]">
          <LeaseHistory />
        </div>
        <div className="min-h-[1000px] p-4 sm:p-6 shadow-md w-full rounded-[5px] border border-[#EFF5F8]">
          <CommisionDetails />
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-4 w-full lg:flex-[0.8]">
        <div className="min-h-[230px] w-full rounded-[5px] border border-[#EFF5F8]">
          <FinancialsSnapshot />
        </div>
        <div className="min-h-[230px] w-full rounded-[5px] border border-[#EFF5F8]">
          <OccupancyStatsChart />
        </div>
        <div className="min-h-[230px] w-full rounded-[5px] border border-[#EFF5F8]">
          <FacilityCompletionCard />
        </div>
        <div className="min-h-[230px] w-full rounded-[5px] border border-[#EFF5F8]">
          <UnitInformation />
        </div>
      </div>
    </div>
  );
};

export default Overview;
