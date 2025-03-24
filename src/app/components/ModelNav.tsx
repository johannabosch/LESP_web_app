"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartColumn, faHeartPulse, faSkullCrossbones } from "@fortawesome/free-solid-svg-icons";
import PopulationSize from "./PopulationSize";
import VitalRates from "./VitalRates";
import Deaths from "./Deaths";

// Updated tabs with corresponding icons
const mainTabs = [
  { name: "Population Size", component: <PopulationSize />, icon: faChartColumn },
  { name: "Vital Rates", component: <VitalRates />, icon: faHeartPulse },
  { name: "Deaths", component: <Deaths />, icon: faSkullCrossbones },
];

const ModelNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState(mainTabs[0].name);

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      
      {/* Navigation Tabs */}
      <div className="flex space-x-4 border-b pb-2">
        {mainTabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex flex-col items-center px-4 py-2 rounded-t-lg text-gray-700 hover:bg-gray-100 text-base sm:text-base md:text-lg lg:text-lg ${
              activeTab === tab.name ? "border-b-2 border-blue-500 font-semibold" : ""
            }`}
          >
            <FontAwesomeIcon icon={tab.icon} className="mb-1 text-black" size="lg" />
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
