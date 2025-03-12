// about_page/page.tsx

"use client";

import React, { useState } from 'react';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import IPMGraphic from '@/app/components/schematic/IPMGraphic';

export default function IPM_About() {

  // State for legend dropdown visibility
  const [showLegend, setShowLegend] = useState(false);

  // Toggle the legend dropdown
  const toggleLegend = () => {
    setShowLegend(!showLegend);
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col h-full">
      
      <main className="flex-grow">
        <div className="w-full">
          <Header />
        </div>
      </main>

      {/* Project Info section */}
        
        <h1 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-
         text-center font-bold mb-4 mt-[100px]">
          About the Integrated Population Model
          </h1>


        <div className="relative w-full flex justify-center items-center mb-6">
          <hr className="border-t-2 border-black w-[80vw] mx-auto" />

          <span className="absolute bg-white px-4 py-0 font-semibold
          text-md sm:text-md md:text-xl lg:text-xl xl:text-xl">
            for Leach's Storm Petrels (<i>Hydrobates leucorhous</i>)
          </span>
        </div>

      <main className="flex-grow">

        {/* Flex container for lifecycle and text */}
        <div className="flex flex-wrap justify-between items-start mx-10">

          {/* Text paragraph */}
          <div className="flex-initial w-full  mt-10 pr-5 pl-5
          text-md sm:text-md md:text-lg lg:text-lg">
            <p style={{textIndent: '30px'}}> 
            Here we illustrate the overall structure of the Leach’s Storm-petrel integrated population model (IPM) and the relationships between the different model components and the population parameters. It outlines each of the model parameters (<span className = "font-bold text-[#01215D]">reproductive</span>, <span className = "font-bold text-[#D57636]">observed deaths</span>, <span className = "font-bold text-[#9D0035]">population size</span>, and <span className = "font-bold text-[#7030A1]">survival</span>) and their dimensions. The figure below is a directed acyclic graph (DAG), the filled rectangles represent data sets, open rectangles are model components, ovals represent parameters to estimate, and arrows represent dependence between nodes. Age classes 0-3 represent post-fledge juveniles, immatures, pre-breeders, and breeders, respectively. Parameters are subscripted by variation across life stages <span className="font-bold">(s)</span>, time <span className="font-bold">(t)</span> and colony <span className="font-bold">(c)</span>, and also by mortality source for deaths <span className="font-bold">(D)</span> and mortality from observable sources <span className="font-bold">(H)</span>. The model structure and individual parameters are further outlined in the <a href="/"> full manuscript</a>.</p>
            
          </div>

        </div>

      </main>

      {/* IPM Schematic */}
      <main className="flex-grow mt-5 relative">

        <div className="w-full text-center py-8">

        <div className="relative w-full flex justify-center items-center mb-6">
          {/* Shorter centered divider line */}
          <hr className="border-t-2 border-black w-[60vw] mx-auto" />

          {/* Centered text above the line */}
          <span className="absolute bg-white px-4 font-semibold
          text-md sm:text-md md:text-lg lg:text-lg xl:text-lg">
            Click on the model boxes below to learn more
          </span>
        </div>


          {/* Buttons aligned to the right with higher z-index */}
          <div className="fixed right-0 gap-4 p-4 z-20">

            {/* Legend Button */}
            <button
              onClick={toggleLegend}
              className="btn btn-ghost font-bold border-black"
            >
              {showLegend ? 'Hide Legend' : 'Show Legend '} ▼
            </button>
          </div>

          {/* Legend Overlay */}
          {showLegend && (
            <div className="absolute top-[150px] right-[210px] bg-white p-2 shadow-md z-50">
              <img
                src="/images/PIPL/PIPL_model_legend.svg"
                alt="PIPL Legend"
                className="w-[500px] h-auto"
              />
            </div>
          )}

          {/* Render IPMGraphic */}
          <div className="mb-[100px]">
            <IPMGraphic />
          </div>
        </div>
      </main>

       <main className="flex-grow">
        <div className="w-full">
          <Footer />
        </div>
      </main>
    </div>
  );
}
