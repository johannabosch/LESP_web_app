"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

interface South_PopulationMetricsProps {
  selectedSite: string;
}

const South_PopulationMetrics: React.FC<South_PopulationMetricsProps> = ({ selectedSite }) => {
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
      <p ref={headerRef} className="bg-[#B4D6F7] rounded text-center p-[4px] text-white text-2xl" 
         style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)', width: `${fixedHeaderWidth}px` }}>
        {selectedSite}
      </p>

      {selectedSite === "Southern Nova Scotia" ? (
        <>
          <div className="flex flex-wrap mt-4 gap-6">
            {/* Resizable container for First Stage Population Size (N1) plot */}
            <div className="flex-grow">
              <h3 className="text-lg font-bold mb-2">First Stage Population Size (N<sub>1</sub>)</h3>
              <ResizableBox
                width={((containerWidth)/2)-10}
                height={400}
                minConstraints={[300, 200]}
                maxConstraints={[maxBoxWidth, 700]}
                resizeHandles={['se']}
                className="border border-gray-300 p-2 rounded w-full"
              >
                <iframe
                  src="/figures/SouthNS/N1.html"
                  title="First stage population size (N1)"
                  width="100%"
                  height="100%"
                  style={{ border: 'none', display: 'block' }}
                />
              </ResizableBox>
            </div>

            {/* Resizable container for Breeding Population Size (N2) plot */}
            <div className="flex-grow">
              <h3 className="text-lg font-bold mb-2">Breeding Population Size (N<sub>2</sub>)</h3>
              <ResizableBox
                width={((containerWidth)/2)-10}
                height={400}
                minConstraints={[300, 200]}
                maxConstraints={[maxBoxWidth, 700]}
                resizeHandles={['se']}
                className="border border-gray-300 p-2 rounded w-full"
              >
                <iframe
                  src="/figures/SouthNS/N2.html"
                  title="Breeding population size (N2)"
                  width="100%"
                  height="100%"
                  style={{ border: 'none', display: 'block' }}
                />
              </ResizableBox>
            </div>
          </div>

          <div className="my-10" style={{ height: '20px' }}></div>
        </>
      ) : (
        <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded" style={{ height: '100%' }}>
          <p>Population metrics for the Southern Nova Scotia study site are not yet available. Please check back later.</p>
        </div>
      )}
    </div>
  );
};

export default South_PopulationMetrics;
