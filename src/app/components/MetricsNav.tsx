// MetricsNav.tsx

/*
  This component provides a navigation bar for selecting multiple study sites using checkboxes in a dropdown
  and viewing associated metrics (Population, Productivity, Survival, Transition).
  The selected sites and metrics are used to update the app's state and determine what data to display.
*/

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
    <div className="flex items-center space-x-4 mb-4">
      
      {/* Dropdown menu for selecting study sites with checkboxes */}
      <div className="dropdown-container relative">
        <details 
          className="dropdown" 
          ref={dropdownRef} // attach ref to details element
          onToggle={(e) => setIsDropdownOpen(e.currentTarget.open)} // control dropdown open state
        >
          <summary className="btn text-xl flex items-center justify-between w-72 cursor-pointer select-none">
            {/* Show the selected sites or prompt the user to select one */}
            <span>{selectedSites.length > 0 ? selectedSites.join(', ') : 'Select study sites'}</span>

            {/* Rotate the arrow icon for fun! */}
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

      {/* Metrics Tabs container to the right of the dropdown */}
      <div className="flex items-center space-x-4">
        <span className="text-xl font-semibold">Choose a metric:</span>

        {/* Tab buttons for the different metrics */}
        <div role="tablist" className="tabs flex space-x-2 relative">
          {metrics.map((metric) => (
            <button
              key={metric}
              className={`btn ${activeTab === metric 
                ? 'bg-plover text-white font-bold border-black relative'  // highlight the active tab
                : 'btn-outline hover:bg-plover-hover'} text-xl px-4 py-2 transition-colors duration-200`} 
              onClick={() => setActiveTab(metric)} // set the active tab
            >
              {/* Display metric name */}
              {metric}

              {/* small triangle to go under the active tab */}
              {activeTab === metric && (
                <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-plover"></span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MetricsNav;
