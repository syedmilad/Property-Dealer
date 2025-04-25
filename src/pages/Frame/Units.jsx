import React, { useState } from "react";
import HeadUnits from "../../components/HeadUnits";
import Tabs from "../../components/Tabs";
import Overview from "../../components/Overview";
import Financials from "../../components/Financials";
import { Tickets } from "lucide-react";
import WorkOrders from "../../components/WorkOrders";
import Attachments from "../../components/Attachments";
import Listings from "../../components/Listings";
import Communication from "../../components/Communication";
import Legal from "../../components/Legal";
import Notes from "../../components/Notes";
import Inspection from "../../components/Inspection";

const tabComponents = {
  Overview: Overview,
  Financials: Financials,
  Tickets: Tickets,
  "Work Orders": WorkOrders,
  Attachments: Attachments,
  Listings: Listings,
  Communication: Communication,
  Legal: Legal,
  Notes: Notes,
  Inspection: Inspection,
};

const Units = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = Object.keys(tabComponents);
  const ActiveComponent = tabComponents[activeTab];
  return (
    <div className="px-4 py-4 bg-[#ffff] flex flex-col h-full min-w-full">
      <div>
        <HeadUnits />
      </div>
      <div className="mt-4">
        <Tabs tabs={tabs} setActiveTab={setActiveTab} activeTab={activeTab} />
      </div>
      {/* Content */}
      <div className="bg-white p-4 mt-4 min-h-screen ">
        <ActiveComponent />
      </div>
    </div>
  );
};

export default Units;
