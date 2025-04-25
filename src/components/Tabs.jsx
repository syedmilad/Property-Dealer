import React from "react";

const Tabs = ({tabs,setActiveTab,activeTab}) => {
  return (
    <div className="w-full h-full ">
      {/* Tabs */}
      <div className="border-b border-[#83CFFF] bg-[#F7FaFb] px-4 py-2">
        <div className="flex space-x-4 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 text-sm font-medium whitespace-nowrap rounded-t ${
                activeTab === tab
                  ? "bg-dropBg text-white" 
                  : "text-[#83CFFF] hover:text-dropBg"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
