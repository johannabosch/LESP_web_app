// about_page/page.tsx

"use client";

import React, { useState } from 'react';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import IPM_lifecycle from '@/app/components/schematic/IPM_lifecycle';
import IPM_matrix from '@/app/components/schematic/IPM_matrix';
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
              Placeholder text for the info on the integrated population model lifecycle, matrix, schematic. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit. </p>

            <p style={{textIndent: '30px'}} className="mt-5"> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.  </p>
            
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
