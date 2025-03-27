"use client"

import React from "react";
import { motion } from "framer-motion";
import { PanelLeftOpen, PanelRightOpen } from "lucide-react";

interface Welcome2Props {
  onArrowClick: () => void;
  onGetStartedClick: () => void;
}

const Welcome4: React.FC<Welcome2Props> = ({ onArrowClick, onGetStartedClick }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative">
      
      <p className="text-[13px] sm:text-[13px] md:text-[16px] lg:text-[16px] mt-2 text-center max-w-[600px] w-[80vw] mt-[-80px]"> 
        Each of these<span className="relative inline-block mx-1 font-bold">
        <motion.span 
            className="absolute inset-0 bg-yellow-300 opacity-50 rounded-md z-[-1]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
        /> six focal colonies </span>faces different pressures and has different levels of overlap with offshore oil and gas production in eastern Canada.  </p>

      <img
        src="images/welcome/colonies-map.png"
        alt="6 petrel nesting colonies Atlantic CA"
        className="w-[300px] sm:w-[300px] md:w-[500px] lg:w-[500px] h-auto mt-3"
      />
      
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

export default Welcome4;
