"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

interface Gulf_ProductivityMetricsProps {
  selectedSite: string;
}

const Gulf_ProductivityMetrics: React.FC<Gulf_ProductivityMetricsProps> = ({ selectedSite }) => {
  const containerRef = useRef<HTMLDivElement>(null);
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
    updateContainerDimensions();

    return () => window.removeEventListener('resize', updateContainerDimensions);
  }, []);

  const maxBoxWidth = Math.min(800, containerWidth - 50);
  const maxBoxHeight = Math.min(600, containerHeight - 150);

  return (
    <div ref={containerRef} className="block font-bold" style={{ height: '100%', overflow: 'auto' }}>
      <p className="bg-[#C5DABF] rounded px-10 p-[4px] text-white text-2xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' }}>
        {selectedSite} of Nova Scotia
      </p>

      {selectedSite === "Gulf" ? (
        <>
          <div className="flex flex-wrap mt-4 gap-6">
            <div className="flex-grow">
              <h3 className="text-lg font-bold mb-2">Total Chicks Produced (C)</h3>
              <ResizableBox
                width={500}
                height={400}
                minConstraints={[300, 200]}
                maxConstraints={[maxBoxWidth, maxBoxHeight]}
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

            <div className="flex-grow">
              <h3 className="text-lg font-bold mb-2">Chicks Produced Per Pair (CP)</h3>
              <ResizableBox
                width={500}
                height={400}
                minConstraints={[300, 200]}
                maxConstraints={[maxBoxWidth, maxBoxHeight]}
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
        </>
      ) : (
        <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded" style={{ height: '100%' }}>
          <p>Productivity metrics for the Gulf study site are not yet available. Please check back later.</p>
        </div>
      )}
    </div>
  );
};

export default Gulf_ProductivityMetrics;
