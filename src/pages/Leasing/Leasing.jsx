import React, { useState } from "react";
import HeadUnits from "../../components/HeadUnits";
import Checks from "../../components/Leasing/Checks/Checks";
import CommunicationLeasing from "../../components/Leasing/CommunicationLeasing/CommunicationLeasing";
import FinancialsLeasing from "../../components/Leasing/FinancialsLeasing/FinancialsLeasing";
import LegalLeasing from "../../components/Leasing/LegalLeasing/LegalLeasing";
import NotesLeasing from "../../components/Leasing/NotesLeasing/NotesLeasing";
import Overview from "../../components/Leasing/OverviewLeasing/Overview";
import RequestWO from "../../components/Leasing/RequestWO/RequestWO";
import Residents from "../../components/Leasing/Residents/Residents";
import UnitsLeasing from "../../components/Leasing/UnitsLeasing/UnitsLeasing";
import Tabs from "../../components/Tabs";

const tabComponents = {
  Overview: Overview,
  Residents: Residents,
  Units: UnitsLeasing,
  "Financials": FinancialsLeasing,
  "Request/WO": RequestWO,
  Checks: Checks,
  Communication: CommunicationLeasing,
  Legal: LegalLeasing,
  Notes: NotesLeasing,
};

const Units = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = Object.keys(tabComponents);
  const ActiveComponent = tabComponents[activeTab];
  return (
    <div className="px-4 py-4 bg-[#ffff] flex flex-col h-full min-w-full">
      <div>
        <HeadUnits title="Tenant Name | Property | Unit No" status="Lease Status" btnTitle="Draft" />
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
