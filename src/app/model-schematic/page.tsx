"use client";

import React from 'react';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import IPMGraphic from '@/app/components/schematic/IPMGraphic';

export default function IPM_Schematic() {

  return (
    <div className= "flex flex-col min-h-screen bg-white">

      <Header currentScreen={1} /> 

      <main className="flex-grow">


        {/* Project Info section */}
        <h1 className="text-center font-bold mb-4 mt-[100px]">
          About the Integrated Population Model
        </h1>

        <div className="relative w-full flex justify-center items-center mb-6">
          <hr className="border-t-2 border-black w-[80vw] mx-auto" />
          <span className="absolute bg-white px-4 py-0 font-semibold text-[13px] sm:text-[13px] md:text-[18px] lg:text-[18px] ">
            for Leach's Storm Petrels (<i>Hydrobates leucorhous</i>)
          </span>
        </div>

        {/* Model Explanation Section */}
        <section className="flex flex-wrap justify-center items-center mx-10">
          <div className="flex-initial mt-5 pr-5 pl-5 max-w-[880px] w-[80vw]">
            <p>
              Here we illustrate the overall structure of the Leach’s Storm-petrel integrated population model (IPM) 
              and the relationships between the different model components and the population parameters. It outlines 
              each of the model parameters (<span className="font-bold text-[#01215D]">reproductive</span>,  
              <span className="font-bold text-[#D57636]"> observed deaths</span>, 
              <span className="font-bold text-[#9D0035]"> population size</span>, and 
              <span className="font-bold text-[#7030A1]"> survival</span>) and their dimensions.
              The model structure and individual parameters are further outlined in the <a href="/manuscript">full manuscript</a>.
            </p>
          </div>
        </section>

        {/* IPM Schematic Section */}
        <section className="mt-5 relative w-full text-center">
          
          <div className=" w-full flex flex-col justify-center items-center relative mb-10">
            <span className="text-center px-10 text-black py-5 bg-[#F6F6F6] rounded-lg shadow-xl w-[80vw] max-w-[480px] 
            text-[13px] sm:text-[13px] md:text-[16px] lg:text-[16px]">
              Click on the model parameters below, scroll down to read more about the parameters in the info-boxes
            </span>
          </div>

          <div className="flex flex-col mx-auto w-[80vw] max-w-[650px] mt-4 relative">
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
