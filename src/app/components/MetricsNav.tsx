"use client"; // enables Next.js client-side rendering

import React, { useState, useRef, useEffect } from 'react';

// Define component props
interface MetricsNavProps {
  selectedSites: string[]; // active sites (multiple selection)
  setSelectedSites: (sites: string[]) => void; // set active sites (multiple selection)
  activeTab: string | null; // active metric
  setActiveTab: (tab: string | null) => void; // set active metric
  resetSelection: () => void; // function to reset selection (added prop)
}

const MetricsNav: React.FC<MetricsNavProps> = ({ selectedSites, setSelectedSites, activeTab, setActiveTab, resetSelection }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // state for controlling open/close
  const [isRotating, setIsRotating] = useState(false); // state to track rotation
  const dropdownRef = useRef<HTMLDetailsElement>(null); // ref for accessing the dropdown's details element
  const [showInfoPopup, setShowInfoPopup] = useState(false); // state to control info popup visibility

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false); // Close the dropdown if click is outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // List of study sites and metrics
  const studySites = ["Southern Nova Scotia", "Gulf"];
  const metrics = ["Population Size", "Productivity", "Survival", "Transition"];

  // Define color for each metric tab
  const tabColors: { [key: string]: string } = {
    "Population Size": "#991e3f",
    "Productivity": "#004aad",
    "Transition": "#60941a",
    "Survival": "#7257b0",
  };

  const metricInfo = {
    "Population Size": "The total number of individuals within a population.",
    "Productivity": "The rate at which new individuals are produced by the population.",
    "Survival": "The rate of survival of individuals within the population.",
    "Transition": "The rate at which individuals move between life stages or states."
  };

  const handleSiteSelection = (site: string) => {
    if (selectedSites.includes(site)) {
      setSelectedSites(selectedSites.filter((selected) => selected !== site));
    } else {
      setSelectedSites([...selectedSites, site]);
    }
  };

  const handleResetClick = () => {
    setIsRotating(true); // Start the rotation animation
    resetSelection(); // Perform reset action

    setTimeout(() => {
      setIsRotating(false); // Reset rotation after animation duration
    }, 500);
  };

  return (
    <section className="flex p-10 mt-[100px] h-screen bg-white dark:bg-gray-900">
      <div className="w-full max-w-screen-xl px-4 mx-auto">
        {/* Start coding here */}
        <div className="relative overflow-hidden bg-white shadow-md shadow-gray-300 border border-gray-100 border-[1px]
        dark:bg-gray-800 md:rounded-lg p-5">

          <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
            {/* Metric Tabs */}
            <div className="inline-flex flex-col w-full rounded-md shadow-sm md:w-auto md:flex-row" role="group">
              <span className="text-xl font-semibold">Choose a metric:</span>
              {metrics.map((metric) => {
                const tabColor = tabColors[metric]; // Get the color for each metric

                return (
                  <button
                    key={metric}
                    className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-t-lg md:rounded-tr-none md:rounded-l-lg 
                      ${activeTab === metric ? `bg-${tabColor} text-white` : 'hover:bg-gray-100 hover:text-primary-700'} 
                      focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-primary-500 dark:focus:text-white`}
                    onClick={() => setActiveTab(metric)} // set the active tab
                  >
                    {metric}
                    {/* Underline for active tab */}
                    {activeTab === metric && (
                      <span
                        className="absolute bottom-[-6px] left-0 right-0 mx-auto h-[3px] rounded-full"
                        style={{ backgroundColor: tabColor, width: '60%' }}
                      ></span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Info Button */}
            <div
              className="relative flex items-center justify-center mb-5 right-1 cursor-pointer text-black"
              onMouseEnter={() => setShowInfoPopup(true)}
              onMouseLeave={() => setShowInfoPopup(false)}
            >
              <span className="text-sm font-bold rounded-full bg-white w-5 h-5 flex items-center justify-center border border-black">i</span>
              {showInfoPopup && (
                <div className="absolute top-full left-0 mt-2 w-[550px] bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-10">
                  <ul>
                    {metrics.map((metric) => (
                      <li key={metric} className="mb-2 text-lg">
                        <strong>{metric}:</strong> {metricInfo[metric as keyof typeof metricInfo]}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Reset Button with Rotation Effect */}
            <div className="bg-gray-400 px-3 py-[2px] rounded-lg hover:bg-gray-600">
              <button
                className={`text-lg text-white transition-transform duration-500 ${isRotating ? 'rotate' : ''}`}
                onClick={handleResetClick}
              >
                ↺
              </button>
            </div>
          </div>
        </div>

        {/* Dropdown for Study Sites */}
        <div className="dropdown-container relative flex items-center mt-5">
          <details
            className="dropdown"
            ref={dropdownRef}
            open={isDropdownOpen} // Control open state
            onToggle={(e) => setIsDropdownOpen(e.currentTarget.open)} // control dropdown open state
          >
            <summary className="btn flex justify-between w-[400px] cursor-pointer select-none text-lg">
              <span>{selectedSites.length === 0 ? 'Select a study site' : 'Selected study sites'}</span>
              <svg
                className={`w-4 h-4 ml-2 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.707a1 1 0 011.414 0L10 11.414l3.293-3.707a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </summary>

            {/* Dropdown List */}
            <ul className="absolute text-lg bg-white border border-gray-300 rounded-lg shadow-lg w-full mt-2 p-2 z-10">
              {studySites.map((site, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={site}
                    checked={selectedSites.includes(site)}
                    onChange={() => handleSiteSelection(site)} // handle checkbox selection
                    className="w-5 h-5 m-2"
                  />
                  <label htmlFor={site} className="text-lg">{site}</label>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </section>
  );
};

export default MetricsNav;
