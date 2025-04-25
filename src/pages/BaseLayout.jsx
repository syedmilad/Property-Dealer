import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const BaseLayout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <div className="w-full min-h-[60px] flex-shrink-0">
        <Header />
      </div>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-[240px] flex-shrink-0">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-auto bg-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BaseLayout;
