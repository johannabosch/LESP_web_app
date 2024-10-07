// Gulf_SurvivalMetrics.tsx

/* This component displays survival metrics for a selected study site */

"use client"; // enables client-side rendering in Next.js

import React from 'react';
import { ResizableBox } from 'react-resizable'; // importing a library for making elements resizable
import 'react-resizable/css/styles.css'; // importing styles for the resizable box

interface Gulf_SurvivalMetricsProps {
  selectedSite: string; // selected study site passed as a prop
}

const Gulf_SurvivalMetrics: React.FC<Gulf_SurvivalMetricsProps> = ({ selectedSite }) => {
  return (
    <div className="block" style={{ height: '100%', overflow: 'auto' }}>
      <p>Viewing survival metrics for {selectedSite}.</p>
      
      {selectedSite === "Gulf" ? ( // Check if the selected site is "Gulf"
        <>
          {/* Resizable container for First Year Survival (S0) plot */}
          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2">First Year Survival (S0)</h3>
            <ResizableBox
              width={600} // default width of the resizable container
              height={400} // default height of the resizable container
              minConstraints={[400, 200]} // minimum resizing constraints
              maxConstraints={[window.innerWidth - 100, window.innerHeight - 100]} // maximum resizing constraints
              resizeHandles={['se']} // resizable from the bottom right (southeast) corner
              className="border border-gray-300 p-2 rounded"
            >
              <iframe
                src="/figures/Gulf/S0.html" // S0 plot source file
                title="First year survival (S0)" // accessible title for screen readers
                width="100%" // iframe takes up the full width of the resizable container
                height="100%" // iframe takes up the full height of the resizable container
                style={{ border: 'none', display: 'block' }} // remove iframe border for a cleaner look
              />
            </ResizableBox>
          </div>

          <div className="my-10" style={{ height: '20px' }}></div> {/* spacer between plots */}

          {/* Resizable container for Adult Survival (S1) plot */}
          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2">Adult Survival (S1)</h3>
            <ResizableBox
              width={600} // default width of the resizable container
              height={400} // default height of the resizable container
              minConstraints={[400, 200]} // minimum resizing constraints
              maxConstraints={[window.innerWidth - 100, window.innerHeight - 100]} // maximum resizing constraints
              resizeHandles={['se']} // resizable from the bottom right (southeast) corner
              className="border border-gray-300 p-2 rounded"
            >
              <iframe
                src="/figures/Gulf/S1.html" // S1 plot source file
                title="Adult survival (S1)" // accessible title for screen readers
                width="100%" // iframe takes up the full width of the resizable container
                height="100%" // iframe takes up the full height of the resizable container
                style={{ border: 'none', display: 'block' }} // remove iframe border for a cleaner look
              />
            </ResizableBox>
          </div>
        </>
      ) : (
        // Fallback content if the selected site is not "Gulf"
        <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded" style={{ height: '100%' }}>
          <p>Survival metrics for the Gulf study site are not yet available. Please check back later.</p>
        </div>
      )}
    </div>
  );
};

export default Gulf_SurvivalMetrics;
