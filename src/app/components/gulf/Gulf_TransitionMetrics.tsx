"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

interface Gulf_TransitionMetricsProps {
  selectedSite: string;
}

const Gulf_TransitionMetrics: React.FC<Gulf_TransitionMetricsProps> = ({ selectedSite }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(window.innerWidth);
  const [containerHeight, setContainerHeight] = useState<number>(window.innerHeight);

  // Update container dimensions based on its parent element's size
  useEffect(() => {
    const updateContainerDimensions = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        setContainerHeight(containerRef.current.offsetHeight);
      }
    };

    window.addEventListener('resize', updateContainerDimensions);
    updateContainerDimensions(); // Call it once to set initial dimensions

    return () => window.removeEventListener('resize', updateContainerDimensions);
  }, []);

  // Calculate maximum size for ResizableBox
  const maxBoxWidth = Math.min(800, containerWidth - 50); // Max width is container minus some padding
  const maxBoxHeight = Math.min(600, containerHeight - 150); // Max height is container minus some padding

  return (
    <div ref={containerRef} className="block font-bold" style={{ height: '100%', overflow: 'auto' }}>
      <p className="bg-[#C5DABF] rounded px-10 p-[4px] text-white text-2xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' }}>
        {selectedSite} of Nova Scotia
      </p>

      {selectedSite === "Gulf" ? (
        <>
          <div className="flex flex-wrap mt-4 gap-6">
            <div className="flex-grow">
              <h3 className="text-lg font-bold mb-2">Chick to Breeder Transition (Ψ<sub>0</sub>)</h3>
              <ResizableBox
                width={500}
                height={400}
                minConstraints={[300, 200]}
                maxConstraints={[maxBoxWidth, maxBoxHeight]} // Limit based on parent container size
                resizeHandles={['se']}
                className="border border-gray-300 p-2 rounded w-full"
              >
                <iframe
                  src="/figures/Gulf/Psi0.html"
                  title="Chick to breeder transition (Psi0)"
                  width="100%"
                  height="100%"
                  style={{ border: 'none', display: 'block' }}
                />
              </ResizableBox>
            </div>

            <div className="flex-grow">
              <h3 className="text-lg font-bold mb-2">Non-Breeder to Breeder Transition (Ψ<sub>1</sub>)</h3>
              <ResizableBox
                width={500}
                height={400}
                minConstraints={[300, 200]}
                maxConstraints={[maxBoxWidth+50, maxBoxHeight+100]} // Limit based on parent container size
                resizeHandles={['se']}
                className="border border-gray-300 p-2 rounded w-full"
              >
                <iframe
                  src="/figures/Gulf/Psi1.html"
                  title="Non-breeder to breeder transition (Psi1)"
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
          <p>Transition metrics for the Gulf study site are not yet available. Please check back later.</p>
        </div>
      )}
    </div>
  );
};

export default Gulf_TransitionMetrics;
