"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

interface Gulf_SurvivalMetricsProps {
  selectedSite: string;
}

// Create the table component for displaying the JSON data using the DaisyUI template
const SurvivalTable: React.FC<{ data: any[] }> = ({ data }) => {
  // Define the order of rows explicitly
  const rowOrder = ['meanS0', 'sigmaS0', 'meanS1', 'sigmaS1'];

  // Reorder the data based on the rowOrder array and filter out any undefined values
  const orderedData = rowOrder
    .map((rowName) => data.find((row) => row?._row === rowName))
    .filter(Boolean); // Filter out undefined rows

  return (
    <div className="overflow-x-auto mt-[10px]">
      <table className="table w-full text-xl ">
        {/* Table header */}
        <thead className="text-xl text-black">
          <tr>
            <th></th>
            <th>Mean</th>
            <th>SD</th>
            <th>2.5%</th>
            <th>25%</th>
            <th>50%</th>
            <th>75%</th>
            <th>97.5%</th>
            <th>Rhat</th>
            <th>n.eff</th>
          </tr>
        </thead>

        {/* Table body */}
        <tbody>
          {orderedData.map((row, idx) => (
            <tr className="hover:bg-gray-100" key={idx}>
              <th>
                {/* Rename the row based on the _row value */}
                {row._row === 'meanS0' && <>S<sub>0</sub> (mean)</>}
                {row._row === 'sigmaS0' && <>S<sub>0</sub> (sigma)</>}
                {row._row === 'meanS1' && <><span style={{ textDecoration: 'overline', fontWeight: 'bold' }}>S<sub>1</sub></span> (mean)</>}
                {row._row === 'sigmaS1' && <>S<sub>1</sub> (sigma)</>}
              </th>
              <td>{row.mean}</td>
              <td>{row.sd}</td>
              <td>{row["2.5%"]}</td>
              <td>{row["25%"]}</td>
              <td>{row["50%"]}</td>
              <td>{row["75%"]}</td>
              <td>{row["97.5%"]}</td>
              <td>{row.Rhat}</td>
              <td>{row["n.eff"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



// Gulf Survival Metrics component
const Gulf_SurvivalMetrics: React.FC<Gulf_SurvivalMetricsProps> = ({ selectedSite }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLParagraphElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(window.innerWidth);
  const [containerHeight, setContainerHeight] = useState<number>(window.innerHeight);
  const [gulfData, setGulfData] = useState<any[]>([]); // State to store the JSON data

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

  // Fetch the Gulf survival table data from the JSON file
  useEffect(() => {
    fetch("/figures/Gulf/survival_table_Gulf.json")
      .then((response) => response.json())
      .then((data) => setGulfData(data))
      .catch((error) => console.error("Error fetching Gulf survival data:", error));
  }, []);

  // Fixed width for the site-header
  const fixedHeaderWidth = containerWidth;
  const maxBoxWidth = Math.min(fixedHeaderWidth, fixedHeaderWidth);
  const maxBoxHeight = Math.min(600, containerHeight - 150);

  return (
    <div ref={containerRef} className="block" style={{ height: '100%', overflow: 'auto' }}>
      {/* Fixed width for the header */}
      <p ref={headerRef} className="bg-[#C5DABF] rounded font-bold text-center p-[4px] text-white text-2xl"
         style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)', width: `${fixedHeaderWidth}px` }}>
        {selectedSite} of Nova Scotia
      </p>

      <div className="flex flex-wrap mt-4 gap-6">
        <div className="flex-grow">
          <h3 className="text-lg font-bold mb-2">First Year Survival (S<sub>0</sub>)</h3>
          <ResizableBox
            width={((containerWidth) / 2) - 10}
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
            width={((containerWidth) / 2) - 10}
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


      {/* Accordion for the table */}
      <div className="collapse bg-base-200 mt-10">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-[#C5DABF] font-bold">
          Estimates of mean survival and its temporal variance for chicks in their first year 
          (<span style={{ textDecoration: "overline", fontWeight: "bold" }}>S</span>,<sub>0</sub> σ<sub>0</sub>) 
          and adults (<span style={{ textDecoration: "overline", fontWeight: "bold" }}>S</span><sub>1</sub>, σ<sub>1</sub>)
          
          {/* Rotating arrow */}
          <span className="transition-transform transform duration-300 peer-checked:rotate-180 relative left-[100px]">▼</span>
        
        </div>
        <div className="collapse-content bg-white text-black">

          <SurvivalTable data={gulfData} />
        </div>
      </div>

      <div className="my-10" style={{ height: '20px' }}></div>
    </div>
  );
};

export default Gulf_SurvivalMetrics;
