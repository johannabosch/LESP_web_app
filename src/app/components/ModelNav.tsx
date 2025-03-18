"use client";

import React, { useState } from "react";
import PopulationSize from "./PopulationSize";
import VitalRates from "./VitalRates";
import Deaths from "./Deaths";

const mainTabs = [
  { name: "Population Size", component: <PopulationSize /> },
  { name: "Vital Rates", component: <VitalRates /> },
  { name: "Deaths", component: <Deaths /> },
];

const ModelNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState(mainTabs[0].name);

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <div className="flex space-x-4 border-b pb-2">
        {mainTabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`px-4 py-2 rounded-t-lg text-gray-700 hover:bg-gray-100 text-base sm:text-base md:text-lg lg:text-lg ${
              activeTab === tab.name ? "border-b-2 border-blue-500 font-semibold" : ""
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Display Active Tab Content */}
      <div className="w-full">
        {mainTabs.find((tab) => tab.name === activeTab)?.component}
      </div>
    </div>
  );
};

export default ModelNav;