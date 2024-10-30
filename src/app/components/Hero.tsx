"use client"; // enables Next.js client-side rendering

import React from 'react';

const Hero: React.FC = () => {
  return (
    <div
    className="relative h-[500px] bg-no-repeat bg-cover bg-right w-full mb-0"
    style={{
        backgroundImage: `url('/images/PIPL/Wildpix645.svg')`,
      }}
    >
      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col z-10 p-8 mt-[80px] left-[10px]">
        {/* Main title */}
        <h1 className="text-5xl font-bold text-black drop-shadow-xl">
          Demographic modeling for 
        </h1>
        <h1 className="mb-[30px] text-5xl font-bold text-black drop-shadow-xl">
        Piping Plover in Eastern Canada
        </h1>

        {/* Placeholder text */}
        <div className="absolute top-[110px] transform w-[45vw] flex flex-col mb-5 text-white text-center bg-black bg-opacity-70 rounded-[10px] py-[20px] px-[10px]">
        <p className="text-lg"> The Piping Plover is an Endangered species of shorebird whose population has been well-studied in eastern Canada as a result of conservation monitoring efforts. We combined all of the available demographic data for the Atlantic Piping Plover collected between 1991-2022 to build an Integrated Population Model (IPM) that provides new insights into changes in their population structure over time (<a href="/" className="text-blue-200 transition-all duration-200 hover:underline-offset-4 drop-shadow-xl font-semibold underline hover:underline">Calvert et al. 2024</a>). Scroll down to learn more about the history of plover research in Canada. </p>
        <p className="mt-[10px] text-xl"> Want to learn more about our model?  <a href="/about-page" className="text-blue-200 transition-all duration-200 hover:underline-offset-4 drop-shadow-xl font-semibold underline hover:underline"> Review the model's structure</a>. </p>
        
        <p className="mt-[10px] text-xl"> Ready to see the results? <a href="/plover_page" className="text-blue-200 transition-all duration-200 hover:underline-offset-4 drop-shadow-xl font-semibold underline hover:underline">Visualise the plover population model</a>. </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;