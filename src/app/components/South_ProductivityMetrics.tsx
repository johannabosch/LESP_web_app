// South_ProductivityMetrics.tsx

/* This component displays productivity metrics for a selected study site */

"use client"; // enables client-side rendering in Next.js

import React from 'react';
import { ResizableBox } from 'react-resizable'; // importing a library for making elements resizable
import 'react-resizable/css/styles.css'; // importing styles for the resizable box

interface South_ProductivityMetricsProps {
  selectedSite: string; // selected study site passed as a prop
}

const South_ProductivityMetrics: React.FC<South_ProductivityMetricsProps> = ({ selectedSite }) => {
  return (
    <div className="block" style={{ height: '100%', overflow: 'auto' }}>
      <p>Viewing productivity metrics for {selectedSite}.</p>

      {selectedSite === "Southern Nova Scotia" ? ( // Check if the selected site is "Southern Nova Scotia"
        <>
          {/* Resizable container for Total Chicks Produced (C) plot */}
          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2">Total Chicks Produced (C)</h3>
            <ResizableBox
              width={600} // default width of the resizable container
              height={400} // default height of the resizable container
              minConstraints={[400, 200]} // minimum resizing constraints
              maxConstraints={[window.innerWidth - 100, window.innerHeight - 100]} // maximum resizing constraints
              resizeHandles={['se']} // resizable from the bottom right (southeast) corner
              className="border border-gray-300 p-2 rounded"
            >
              <iframe
                src="/figures/South/C.html" // C plot source file
                title="Total chicks produced (C)" // accessible title for screen readers
                width="100%" // iframe takes up the full width of the resizable container
                height="100%" // iframe takes up the full height of the resizable container
                style={{ border: 'none', display: 'block' }} // remove iframe border for a cleaner look
              />
            </ResizableBox>
          </div>

          <div className="my-10" style={{ height: '20px' }}></div> {/* spacer between plots */}

          {/* Resizable container for Chicks Produced Per Pair (CP) plot */}
          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2">Chicks Produced Per Pair (CP)</h3>
            <ResizableBox
              width={600} // default width of the resizable container
              height={400} // default height of the resizable container
              minConstraints={[400, 200]} // minimum resizing constraints
              maxConstraints={[window.innerWidth - 100, window.innerHeight - 100]} // maximum resizing constraints
              resizeHandles={['se']} // resizable from the bottom right (southeast) corner
              className="border border-gray-300 p-2 rounded"
            >
              <iframe
                src="/figures/South/CP.html" // CP plot source file
                title="Chicks produced per pair (CP)" // accessible title for screen readers
                width="100%" // iframe takes up the full width of the resizable container
                height="100%" // iframe takes up the full height of the resizable container
                style={{ border: 'none', display: 'block' }} // remove iframe border for a cleaner look
              />
            </ResizableBox>
          </div>
        </>
      ) : (
        // Fallback content if the selected site is not "Southern Nova Scotia"
        <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded" style={{ height: '100%' }}>
          <p>Productivity metrics for the Gulf study site are not yet available. Please check back later.</p>
        </div>
      )}
    </div>
  );
};

export default South_ProductivityMetrics;
