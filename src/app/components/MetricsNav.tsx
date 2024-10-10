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
      // Check if the click was outside the dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false); // Close the dropdown
      }
    };

    // Add event listener for clicks on the document
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // List of study sites
  const studySites = ["Southern Nova Scotia", "Gulf"];

  // List of metrics
  const metrics = ["Population Size", "Productivity", "Survival", "Transition"];

  // Define color for each metric tab
  const tabColors: { [key: string]: string } = {
    "Population Size": "#991e3f",
    "Productivity": "#004aad",
    "Transition": "#60941a",
    "Survival": "#7257b0",
  };

  // Information about the population metrics
  const metricInfo = {
    "Population Size": "The total number of individuals within a population.",
    "Productivity": "The rate at which new individuals are produced by the population.",
    "Survival": "The rate of survival of individuals within the population.",
    "Transition": "The rate at which individuals move between life stages or states."
  };

  // Function to handle checkbox changes
  const handleSiteSelection = (site: string) => {
    if (selectedSites.includes(site)) {
      // Remove the site if it's already selected
      setSelectedSites(selectedSites.filter((selected) => selected !== site));
    } else {
      // Add the site if it's not selected
      setSelectedSites([...selectedSites, site]);
    }
  };

  // Function to handle reset button click and rotation
  const handleResetClick = () => {
    setIsRotating(true); // Start the rotation animation
    resetSelection(); // Perform the reset action

    // Stop the rotation after the animation ends
    setTimeout(() => {
      setIsRotating(false); // Reset the state after the animation duration
    }, 500); // The same duration as the CSS transition
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
                className={`relative text-lg px-6 py-1 rounded-md font-semibold transition-all duration-300 transform 
                  ${activeTab === metric ? 'scale-105 text-white shadow-xl' : 'bg-white'} hover:scale-105 hover:shadow-lg`}
                style={{ backgroundColor: activeTab === metric ? tabColor : 'white',
                  color: activeTab === metric ? 'white' : tabColor,
                  border: activeTab === metric ? `2px solid ${tabColor}` : `2px solid ${tabColor}`,
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

          {/* Info button */}
          <div
            className="relative flex items-center justify-center mb-5 right-1 cursor-pointer text-black"
            onMouseEnter={() => setShowInfoPopup(true)}
            onMouseLeave={() => setShowInfoPopup(false)}
          >
            <span className="text-sm font-bold rounded-full bg-white w-5 h-5 flex items-center justify-center border border-black">i</span>

            {/* Popup with metric info */}
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


          {/* Reset Button positioned to the left with rotation effect */}
          <div className= "bg-gray-400 px-3 py-[2px] rounded-lg hover:bg-gray-600">
            <button
            className={`text-lg text-white transition-transform duration-500 ${isRotating ? 'rotate' : ''}`}
            onClick={handleResetClick}
          >
            ↺
          </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        {/* Dropdown menu for selecting study sites with checkboxes */}
        <div className="dropdown-container relative flex items-center">
          <details
            className="dropdown"
            ref={dropdownRef}
            open={isDropdownOpen} // Control open state
            onToggle={(e) => setIsDropdownOpen(e.currentTarget.open)} // control dropdown open state
          >
            <summary className="btn flex justify-between w-[400px] cursor-pointer select-none text-lg">
              <span>{selectedSites.length === 0 ? 'Select a study site' : 'Selected study sites'}</span>

              {/* Rotate the arrow icon */}
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

            {/* Dropdown list with checkboxes */}
            <ul className="absolute text-lg bg-white border border-gray-300 rounded-lg shadow-lg w-full mt-2 p-2 z-10">
              {studySites.map((site, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={site}
                    checked={selectedSites.includes(site)}
                    onChange={() => handleSiteSelection(site)} // handle checkbox selection
                    className={'w-5 h-5 m-2 '}
                  />
                  <label htmlFor={site} className="text-lg">{site}</label>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
};

export default MetricsNav;
