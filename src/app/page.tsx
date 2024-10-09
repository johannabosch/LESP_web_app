"use client";

import React, { useState } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import IPMGraphic from '@/app/components/schematic/IPMGraphic';
import Hero from '@/app/components/Hero';

export default function Homepage() {
  // State for legend dropdown visibility
  const [showLegend, setShowLegend] = useState(false);

  // Toggle the legend dropdown
  const toggleLegend = () => {
    setShowLegend(!showLegend);
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col h-full relative">
      {/* Header section */}
      <main className="flex-grow">
        <div className="w-full">
          <Header />
        </div>
      </main>

      {/* Hero section */}
      <main className="flex-grow">
        <div className="w-full mb-0">
          <Hero />
        </div>
      </main>

      {/* IPM Schematic */}
      <main className="flex-grow mt-0 relative">
        <div className="w-full text-center py-8">
          <h1 className="text-4xl font-bold mb-4 mt-0">Schematic of the IPM</h1>

          <div className="relative w-full flex justify-center items-center mb-6">
            <hr className="border-t-2 border-black w-3/4 mx-auto" />
            <span className="absolute bg-white px-4 text-xl">
              Click on the model boxes below to learn more.
            </span>
          </div>

          {/* Buttons aligned to the right with higher z-index */}
          <div className="absolute top-[100px] right-[200px] flex gap-4 p-4 z-50">

            {/* Legend Button */}
            <button
              onClick={toggleLegend}
              className="btn btn-ghost font-bold border-black"
            >
              {showLegend ? 'Hide Legend' : 'Show Legend'} ▼
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

      {/* Footer */}
      <main className="flex-grow">
        <div className="w-full">
          <Footer />
        </div>
      </main>
    </div>
  );
}
