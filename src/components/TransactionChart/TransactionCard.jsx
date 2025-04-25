import React from "react";
import TransactionChart from "./RecentTransactionsChart";
import Legend from "./Legend";
import FilterButton from "./FilterButton";

const TransactionCard = () => {
  return (
    <div className="bg-white shadow-sm rounded-lg p-4">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Recent Transactions</h2>
          <p className="text-sm text-gray-400">Jan 24 - Dec 24</p>
        </div>
        <FilterButton />
      </div>

      <div className="flex">
        <div className="w-full">
          <TransactionChart />
        </div>
        <Legend />
      </div>
    </div>
  );
};

export default TransactionCard;
