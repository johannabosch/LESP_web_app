"use client"; // enables Next.js client-side rendering

import React from 'react';

const Hero: React.FC = () => {
  return (
    <div
      className="relative h-[300px] bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url('/images/PIPL/Wildpix645.svg')`,
      }}
    >
      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-neutral-content text-center z-10">
        {/* Main title */}
        <h1 className="mt-0 mb-[30px] text-4xl font-bold w-[30vw] mx-auto text-black">
          Demographic modeling for Atlantic Piping Plover <i>(Charadrius melodus melodus)</i> in Eastern Canada
        </h1>

        {/* Placeholder text */}
        <div className="flex justify-center text-center font-semibold mb-5 text-xl w-[35vw] mx-auto text-black bg-white bg-opacity-60 rounded-[10px] py-[10px] px-[20px]">
          This web-app offers a glimpse into our Integrated Population Model (IPM) of the Atlantic Piping Plover, which incorporates all sources of monitoring data (abundance, productivity, and survival) into a comprehensive picture of population dynamics for the Piping Plover in regions of Eastern Canada.
        </div>
      </div>
    </div>
  );
};

export default Hero;
