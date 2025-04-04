"use client"

import React from "react";
import { motion } from "framer-motion";
import { PanelLeftOpen, PanelRightOpen } from "lucide-react";

interface Welcome3Props {
  onArrowClick: () => void;
  onGetStartedClick: () => void;
}

const Welcome5: React.FC<Welcome3Props> = ({ onArrowClick, onGetStartedClick }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative">

      <p className="text-4xl font-bold text-blue-500 mt-[-50px]">Our Approach</p>
      
      <div className="mt-4 text-gray-700 px-[3vw] py-[1vw]">

            <p className="text-[13px] sm:text-[13px] md:text-[16px] lg:text-[16px] mb-4 font-bold text-center">
                To guide our modeling approach, we focused on three main goals:</p>

            <p className="mx-auto text-[12px] sm:text-[12px] md:text-[15px] lg:text-[15px] max-w-[780px] w-[80vw]">
                <span className="font-bold text-2xl text-blue-500"> 1) </span> Examine the relative contributions of reported mortality sources to observed demography of the study colonies.<br/>
                <span className="font-bold text-2xl text-blue-500"> 2) </span> Openly acknowledge sources of uncertainty and include uncertainty at all points in the model.<br/>
                <span className="font-bold text-2xl text-blue-500"> 3) </span> In cases of limited or no data, constrain values to plausible values based on other information sources (known life history of species, similar species, or expert opinion).
            </p>

        </div>

        <div className="flex flex-row mt-[30px] justify-center items-center space-x-6">
          {/* Previous Button */}
          <button onClick={onArrowClick} className="hover:scale-110 transition-transform duration-300 flex items-center">
            <PanelRightOpen className="text-[#1d5792] hover:text-blue-600 mr-2" />
            <span className="text-[#1d5792] font-semibold">Previous</span>
          </button>

          {/* Next Button */}
          <button onClick={onGetStartedClick} className="hover:scale-110 transition-transform duration-300 flex items-center">
            <span className="text-[#1d5792] font-semibold">Next</span>
            <PanelLeftOpen className="text-[#1d5792] hover:text-blue-700 ml-2" />
          </button>
        </div>


    </div>
  );
};

export default Welcome5;
