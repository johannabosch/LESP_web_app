// Gulf_PopulationMetrics.tsx

/* This component displays population metrics for a selected study site */

"use client"; // enables client-side rendering in Next.js

import React from 'react';
import { ResizableBox } from 'react-resizable'; // importing a library for making elements resizable
import 'react-resizable/css/styles.css'; // importing styles for the resizable box

interface Gulf_PopulationMetricsProps {
  selectedSite: string; // selected study site passed as a prop
}

const Gulf_PopulationMetrics: React.FC<Gulf_PopulationMetricsProps> = ({ selectedSite }) => {
  return (
    <div className="block" style={{ height: '100%', overflow: 'auto' }}>
      <p>Viewing population metrics for {selectedSite}.</p>
      
      {selectedSite === "Gulf" ? ( // Check if the selected site is "Gulf"
        <>
          {/* Resizable container for First Stage Population Size (N1) plot */}
          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2">First Stage Population Size (N1)</h3>
            <ResizableBox
              width={600} // default width of the resizable container
              height={400} // default height of the resizable container
              minConstraints={[400, 200]} // minimum resizing constraints
              maxConstraints={[window.innerWidth - 100, window.innerHeight - 100]} // maximum resizing constraints
              resizeHandles={['se']} // resizable from the bottom right (southeast) corner
              className="border border-gray-300 p-2 rounded"
            >
              <iframe
                src="/figures/Gulf/N1.html" // N1 plot source file
                title="First stage population size (N1)" // accessible title for screen readers
                width="100%" // iframe takes up the full width of the resizable container
                height="100%" // iframe takes up the full height of the resizable container
                style={{ border: 'none', display: 'block' }} // remove iframe border for a cleaner look
              />
            </ResizableBox>
          </div>

          <div className="my-10" style={{ height: '20px' }}></div> {/* spacer between plots */}

          {/* Resizable container for Breeding Population Size (N2) plot */}
          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2">Breeding Population Size (N2)</h3>
            <ResizableBox
              width={600} // default width of the resizable container
              height={400} // default height of the resizable container
              minConstraints={[400, 200]} // minimum resizing constraints
              maxConstraints={[window.innerWidth - 100, window.innerHeight - 100]} // maximum resizing constraints
              resizeHandles={['se']} // resizable from the bottom right (southeast) corner
              className="border border-gray-300 p-2 rounded"
            >
              <iframe
                src="/figures/Gulf/N2.html" // N2 plot source file
                title="Breeding population size (N2)" // accessible title for screen readers
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
          <p>Population metrics for the Gulf study site are not yet available. Please check back later.</p>
        </div>
      )}
    </div>
  );
};

export default Gulf_PopulationMetrics;
