"use client"; // enables Next.js client-side rendering

import React from 'react';
import Link from 'next/link'; // enable links for internal navigation.


const Hero: React.FC = () => {
  return (
    // Hero section: large banner under header with background color and centered content.
    <div
      className="hero h-[400px]"
      style={{ backgroundColor: 'white' }}
    >
      {/* Opacity overlay */}
      <div className="hero-overlay bg-opacity-0"></div>

      {/* Centered text content*/}
      <div className="hero-content text-neutral-content text-center flex flex-col justify-center items-center">
        
        {/* Main title */}
        <h1 className="mt-0 text-4xl font-bold w-[40vw] mx-auto text-black">
          Integrated Population Modelling (IPM)
        </h1>
        
        {/* Subtitle */}
        <h1 className="mt-0 text-2xl font-bold w-[30vw] mx-auto text-black">
          of Seabird Colonies
        </h1>

        {/* Placeholder text */}
        <p className="mb-5 text-xl w-[60vw] mx-auto text-black">
          [Placeholder text]
        </p>

        {/* Buttons with placeholder links */}
        <div className="flex justify-between">

          <Link href="/about_page" passHref>
            <button className="btn btn-ghost bg-white text-black border-black mx-10">
              Learn more about the project
            </button>
          </Link>

          <Link href="/plover_page" passHref>
            <button className="btn btn-ghost bg-white text-black border-black">
              View the petrel model
            </button>
          </Link>
        </div>

      </div>

    </div>
  );
};

export default Hero;
