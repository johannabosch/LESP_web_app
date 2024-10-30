"use client"; // enables Next.js client-side rendering

import React from 'react';

const Hero: React.FC = () => {
  return (
    <div
    className="relative h-[550px] bg-no-repeat bg-cover bg-right w-full mb-0"
    style={{
        backgroundImage: `url('/images/PIPL/Wildpix645.svg')`,
      }}
    >
      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center right-[600px] z-10 p-8 mt-[80px]">
        {/* Main title */}
        <h1 className="text-4xl font-bold text-black drop-shadow-xl">
          Demographic modeling for Atlantic
        </h1>
        <h1 className="mb-[30px] text-4xl font-bold text-black drop-shadow-xl">
        Piping Plover in Eastern Canada
        </h1>

        {/* Placeholder text */}
        <div className="absolute top-[110px] transform w-[40vw] flex mb-5 text-lg text-black bg-white bg-opacity-60 rounded-[10px] py-[20px] px-[20px]">
        <p> This web app offers an in-depth review of the Integrated Population Model (IPM) developed for the Atlantic Piping Plover <i>(Charadrius melodus melodus)</i> in Eastern Canada. We designed this model to _. Learn more about the history of Canada's Endangered Piping Plover population below, or jump right in and <a href="/plover_page" className="text-blue-900 transition-all duration-200 hover:underline-offset-4 drop-shadow-xl font-semibold underline hover:underline">visualise the results of our model</a>. </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;