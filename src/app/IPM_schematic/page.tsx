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
      {/* Single main wrapper */}
      <main className="flex-grow">
        {/* Header */}
        <div className="w-full">
          <Header />
        </div>

        {/* Project Info section */}
        <h1 className="text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text- text-center font-bold mb-4 mt-[100px]">
          About the Integrated Population Model
        </h1>

        <div className="relative w-full flex justify-center items-center mb-6">
          <hr className="border-t-2 border-black w-[80vw] mx-auto" />
          <span className="absolute bg-white px-4 py-0 font-semibold text-md sm:text-md md:text-xl lg:text-xl xl:text-xl">
            for Leach's Storm Petrels (<i>Hydrobates leucorhous</i>)
          </span>
        </div>

        {/* Model Explanation Section */}
        <section className="flex flex-wrap justify-between items-start mx-10">
          <div className="flex-initial w-full mt-5 pr-5 pl-5 text-md sm:text-md md:text-md lg:text-md">
            <p >
              Here we illustrate the overall structure of the Leach’s Storm-petrel integrated population model (IPM) 
              and the relationships between the different model components and the population parameters. It outlines 
              each of the model parameters (<span className="font-bold text-[#01215D]">reproductive</span>,  
              <span className="font-bold text-[#D57636]"> observed deaths</span>, 
              <span className="font-bold text-[#9D0035]"> population size</span>, and 
              <span className="font-bold text-[#7030A1]"> survival</span>) and their dimensions.
              The model structure and individual parameters are further outlined in the 
              <a href="/"> full manuscript</a>.
            </p>
          </div>
        </section>

        {/* IPM Schematic Section */}
        <section className="mt-5 relative w-full text-center py-8">
          <div className="relative w-full flex justify-center items-center mb-6">
            <hr className="border-t-2 border-black w-[80vw] mx-auto" />
            <span className="absolute bg-white px-4 font-semibold text-sm sm:text-sm md:text-base lg:text-base">
              Click on the model parameters below and scroll down to view the data information boxes
            </span>
          </div>

          {/* Legend Button - Positioned Below and to the Right */}
          <div className="w-full flex justify-end mt-2 pr-[10vw]">
            <button
              onClick={toggleLegend}
              className="btn btn-ghost font-bold border-black"
            >
              {showLegend ? "Hide Legend" : "Show Legend"} ▼
            </button>
          </div>

          {/* Legend Overlay */}
          {showLegend && (
            <div className="absolute top-[150px] right-[10vw] bg-white p-2 shadow-md z-50">
              <img
                src="/images/model/legend.png"
                alt="PIPL Legend"
                className="w-[450px] h-auto"
              />
            </div>
          )}

          {/* Render IPMGraphic */}
          <div className="mb-[100px]">
            <IPMGraphic />
          </div>
        </section>

        {/* Footer */}
        <div className="w-full">
          <Footer />
        </div>
      </main>
    </div>
  );
}
