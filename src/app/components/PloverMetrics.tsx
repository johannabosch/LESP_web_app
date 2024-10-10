// PloverMetrics.tsx

// This component handles the display of the metrics for Plover sites.
// It uses `activeTab` to track which metric (tab) is currently selected,
// and `selectedSites` to know which study sites the user is looking at.

"use client";

import React, { useState } from 'react';
import MetricsNav from './MetricsNav';

// import South NS components
import South_PopulationMetrics from '@/app/components/south/South_PopulationMetrics';
import South_ProductivityMetrics from '@/app/components/south/South_ProductivityMetrics';
import South_SurvivalMetrics from '@/app/components/south/South_SurvivalMetrics';
import South_TransitionMetrics from '@/app/components/south/South_TransitionMetrics';

// import Gulf of NS components
import Gulf_PopulationMetrics from '@/app/components/gulf/Gulf_PopulationMetrics';
import Gulf_ProductivityMetrics from '@/app/components/gulf/Gulf_ProductivityMetrics';
import Gulf_SurvivalMetrics from '@/app/components/gulf/Gulf_SurvivalMetrics';
import Gulf_TransitionMetrics from '@/app/components/gulf/Gulf_TransitionMetrics';
// PloverMetrics.tsx

const PloverMetrics: React.FC = () => {
  // State for which metric (tab) is currently selected
  const [activeTab, setActiveTab] = useState<string | null>(null); // Initially no metric selected

  // State for which study sites are selected
  const [selectedSites, setSelectedSites] = useState<string[]>([]); // Initially no sites selected
  
  // Function to reset the selection
  const resetSelection = () => {
    setSelectedSites([]); // Reset selected study sites
    setActiveTab(null);   // Reset the active tab
  };

  return (
    <div className="plover-metrics-container p-4">
      {/* Metrics Navigation Component */}
      <MetricsNav
        selectedSites={selectedSites}
        setSelectedSites={setSelectedSites}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        resetSelection={resetSelection} // Pass the resetSelection function here
      />

      {/* Content based on activeTab and selectedSites */}
      <div className="plover-metrics-content mt-[50px] p-4 bg-white rounded-box text-lg text-center" style={{ height: '100%', overflow: 'auto' }}>
        {!selectedSites.length && !activeTab && (
          <p>Begin by selecting study sites, and then choose a metric you want to visualize.</p>
        )}

        {selectedSites.length > 0 && !activeTab && (
          <p>Now select a metric above to view for your selected study sites.</p>
        )}

        {activeTab && selectedSites.length === 0 &&  (
          <p>Now select a study site(s) to view the models.</p>
        )}

        {/* Render content based on the active tab and selected sites */}
        {activeTab === 'Population Size' && (
          <div className="grid grid-cols-2 gap-4">
            {selectedSites.includes("Southern Nova Scotia") && <South_PopulationMetrics selectedSite="Southern Nova Scotia" />}
            {selectedSites.includes("Gulf") && <Gulf_PopulationMetrics selectedSite="Gulf" />}
          </div>
        )}

        {activeTab === 'Productivity' && (
          <div className="grid grid-cols-2 gap-4">
            {selectedSites.includes("Southern Nova Scotia") && <South_ProductivityMetrics selectedSite="Southern Nova Scotia" />}
            {selectedSites.includes("Gulf") && <Gulf_ProductivityMetrics selectedSite="Gulf" />}
          </div>
        )}

        {activeTab === 'Survival' && (
          <div className="grid grid-cols-2 gap-4">
            {selectedSites.includes("Southern Nova Scotia") && <South_SurvivalMetrics selectedSite="Southern Nova Scotia" />}
            {selectedSites.includes("Gulf") && <Gulf_SurvivalMetrics selectedSite="Gulf" />}
          </div>
        )}

        {activeTab === 'Transition' && (
          <div className="grid grid-cols-2 gap-4">
            {selectedSites.includes("Southern Nova Scotia") && <South_TransitionMetrics selectedSite="Southern Nova Scotia" />}
            {selectedSites.includes("Gulf") && <Gulf_TransitionMetrics selectedSite="Gulf" />}
          </div>
        )}
      </div>
    </div>
  );
};

export default PloverMetrics;
