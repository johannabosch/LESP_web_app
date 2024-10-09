"use client"; // enables Next.js client-side rendering

import React, { useState, useRef } from 'react';

// define component props
interface MetricsNavProps {
  selectedSites: string[]; // active sites (multiple selection)
  setSelectedSites: (sites: string[]) => void; // set active sites (multiple selection)
  activeTab: string | null; // active metric
  setActiveTab: (tab: string | null) => void; // set active metric
}

const MetricsNav: React.FC<MetricsNavProps> = ({ selectedSites, setSelectedSites, activeTab, setActiveTab }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // state for controlling open/close
  const dropdownRef = useRef<HTMLDetailsElement>(null); // ref for accessing the dropdown's details element

  // list of study sites
  const studySites = ["Southern Nova Scotia", "Gulf"];

  // list of metrics
  const metrics = ["Population Size", "Productivity", "Survival", "Transition"];

  // Define color for each metric tab
  const tabColors: { [key: string]: string } = {
    "Population Size": "#991e3f",
    "Productivity": "#004aad",
    "Transition": "#60941a",
    "Survival": "#7257b0",
  };

  // function to handle checkbox changes
  const handleSiteSelection = (site: string) => {
    if (selectedSites.includes(site)) {
      // Remove the site if it's already selected
      setSelectedSites(selectedSites.filter((selected) => selected !== site));
    } else {
      // Add the site if it's not selected
      setSelectedSites([...selectedSites, site]);
    }
  };

  return (
    <div className="flex justify-between items-center mb-4">
      {/* Tab buttons for the different metrics */}
      <div className="items-center space-x-4 flex">
        <span className="text-xl font-semibold">Choose a metric:</span>

        <div role="tablist" className="tabs flex space-x-6 relative">
          {metrics.map((metric) => {
            const tabColor = tabColors[metric]; // Get the color for each metric

            return (
              <button
                key={metric}
                className={`relative text-lg px-6 py-2 rounded-md font-semibold transition-all duration-300 transform focus:outline-none ${
                  activeTab === metric ? 'scale-105 shadow-lg text-white' : 'bg-white'
                }`}
                style={{
                  backgroundColor: activeTab === metric ? tabColor : 'white',
                  color: activeTab === metric ? 'white' : tabColor,
                  border: `2px solid ${tabColor}`,
                }}
                onClick={() => setActiveTab(metric)} // set the active tab
              >
                {metric}

                {/* Small underline for the active tab */}
                {activeTab === metric && (
                  <span
                    className="absolute bottom-[-6px] left-0 right-0 mx-auto h-[3px] rounded-full"
                    style={{
                      backgroundColor: tabColor,
                      width: '60%',
                    }}
                  ></span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Dropdown menu for selecting study sites with checkboxes */}
      <div className="dropdown-container relative flex items-center">
        <details 
          className="dropdown" 
          ref={dropdownRef} 
          onToggle={(e) => setIsDropdownOpen(e.currentTarget.open)} // control dropdown open state
        >
          <summary className="btn flex justify-between w-[400px] cursor-pointer select-none text-lg">
            <span>Selected study sites</span>
            
            {/* Rotate the arrow icon */}
            <svg 
              className={`w-4 h-4 ml-2 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M5.293 7.707a1 1 0 011.414 0L10 11.414l3.293-3.707a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </summary>

          {/* Dropdown list with checkboxes */}
          <ul className="absolute text-lg bg-white border border-gray-300 rounded-lg shadow-lg w-full mt-2 p-2 z-10">
            {studySites.map((site, index) => (
              <li key={index} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={site}
                  checked={selectedSites.includes(site)}
                  onChange={() => handleSiteSelection(site)} // handle checkbox selection
                />
                <label htmlFor={site} className="text-lg">{site}</label>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </div>
  );
};

export default MetricsNav;
