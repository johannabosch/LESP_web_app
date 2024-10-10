"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

interface Gulf_SurvivalMetricsProps {
  selectedSite: string;
}

const Gulf_SurvivalMetrics: React.FC<Gulf_SurvivalMetricsProps> = ({ selectedSite }) => {
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
        <div className="flex-grow">
          <h3 className="text-lg font-bold mb-2">First Year Survival (S<sub>0</sub>)</h3>
          <ResizableBox
            width={((containerWidth)/2)-10}
            height={400}
            minConstraints={[300, 200]}
            maxConstraints={[maxBoxWidth, 700]}
            resizeHandles={['se']}
            className="border border-gray-300 p-2 rounded w-full"
          >
            <iframe
              src="/figures/Gulf/S0.html"
              title="First year survival (S0)"
              width="100%"
              height="100%"
              style={{ border: 'none', display: 'block' }}
            />
          </ResizableBox>
        </div>

        <div className="flex-grow">
          <h3 className="text-lg font-bold mb-2">Adult Survival (S<sub>1</sub>)</h3>
          <ResizableBox
            width={((containerWidth)/2)-10}
            height={400}
            minConstraints={[300, 200]}
            maxConstraints={[maxBoxWidth, 700]}
            resizeHandles={['se']}
            className="border border-gray-300 p-2 rounded w-full"
          >
            <iframe
              src="/figures/Gulf/S1.html"
              title="Adult survival (S1)"
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

export default Gulf_SurvivalMetrics;
