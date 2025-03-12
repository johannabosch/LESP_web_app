"use client";

import React, { useState } from "react";
import PopulationSize from "./PopulationSize";
import Productivity from "./Productivity";
import Survival from "./Survival";
import Mortality from "./Mortality";

// Define tabs and their corresponding components
const tabs = [
  { name: "Population Size", component: <PopulationSize /> },
  { name: "Productivity", component: <Productivity /> },
  { name: "Survival", component: <Survival /> },
  { name: "Mortality", component: <Mortality /> },
];

const ModelNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      {/* Tab Navigation */}
      <div className="flex space-x-4 border-b pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`px-4 py-2 rounded-t-lg text-gray-700 hover:bg-gray-100 ${
              activeTab === tab.name ? "border-b-2 border-blue-500 font-semibold" : ""
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Display Active Tab Content */}
      <div className="w-full">
        {tabs
          .find((tab) => tab.name === activeTab)
          ?.component}
      </div>
    </div>
  );
};

export default ModelNav;
