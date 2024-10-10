"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

interface Gulf_ProductivityMetricsProps {
  selectedSite: string;
}

const Gulf_ProductivityMetrics: React.FC<Gulf_ProductivityMetricsProps> = ({ selectedSite }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLParagraphElement>(null); // Reference for site-header
  const [containerWidth, setContainerWidth] = useState<number>(window.innerWidth);
  const [containerHeight, setContainerHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    const updateContainerDimensions = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        setContainerHeight(containerRef.current.offsetHeight);
      }
    };

    window.addEventListener('resize', updateContainerDimensions);
    updateContainerDimensions(); // Call once to set initial dimensions

    return () => window.removeEventListener('resize', updateContainerDimensions);
  }, []);

  // Fixed width for the site-header
  const fixedHeaderWidth = containerWidth;
  const maxBoxWidth = Math.min(fixedHeaderWidth, fixedHeaderWidth);
  const maxBoxHeight = Math.min(600, containerHeight - 150);
  return (
    <div ref={containerRef} className="block font-bold" style={{ height: '100%', overflow: 'auto' }}>
      {/* Fixed width for the header */}
      <p ref={headerRef} className="bg-[#C5DABF] rounded text-center p-[4px] text-white text-2xl" 
         style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)', width: `${fixedHeaderWidth}px` }}>
        {selectedSite} of Nova Scotia
      </p>


      <div className="flex flex-wrap mt-4 gap-6">
        {/* Resizable container for Total Chicks Produced (C) */}
        <div className="flex-grow">
          <h3 className="text-lg font-bold mb-2">Total Chicks Produced (C)</h3>
          <ResizableBox
            width={((containerWidth)/2)-10}
            height={400} // Set initial height
            minConstraints={[300, 200]}
            maxConstraints={[maxBoxWidth, 700]} // Max width constrained by site-header width
            resizeHandles={['se']}
            className="border border-gray-300 p-2 rounded w-full"
          >
            <iframe
              src="/figures/Gulf/C.html"
              title="Total chicks produced (C)"
              width="100%"
              height="100%"
              style={{ border: 'none', display: 'block' }}
            />
          </ResizableBox>
        </div>

        {/* Resizable container for Chicks Produced Per Pair (CP) */}
        <div className="flex-grow">
          <h3 className="text-lg font-bold mb-2">Chicks Produced Per Pair (CP)</h3>
          <ResizableBox
            width={((containerWidth)/2)-10}
            height={400} // Set initial height
            minConstraints={[300, 200]}
            maxConstraints={[maxBoxWidth, 700]} // Max width constrained by site-header width
            resizeHandles={['se']}
            className="border border-gray-300 p-2 rounded w-full"
          >
            <iframe
              src="/figures/Gulf/CP.html"
              title="Chicks produced per pair (CP)"
              width="100%"
              height="100%"
              style={{ border: 'none', display: 'block' }}
            />
          </ResizableBox>
        </div>
      </div>

      <div className="my-10" style={{ height: '20px' }}></div>
    </div>
  );
};

export default Gulf_ProductivityMetrics;
