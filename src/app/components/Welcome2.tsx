"use client";

import React from "react";
import { motion } from "framer-motion";
import { PanelLeftOpen, PanelRightOpen } from "lucide-react";

interface Welcome2Props {
  onArrowClick: () => void;
  onGetStartedClick: () => void;
}

const Welcome2: React.FC<Welcome2Props> = ({ onArrowClick, onGetStartedClick }) => {
  return (
    <div className="flex flex-col items-center justify-center relative mt-[-90px]">


      <p className="mt-5 text-center text-[13px] sm:text-[13px] md:text-[16px] lg:text-[16px] max-w-[1000px] w-[80vw]">
        The conservation of Leach’s Storm-petrel, a threatened seabird species in Atlantic Canada, is critical, particularly in the context of emerging threats like offshore oil and gas operations. Due to a <span className="relative text-[15px] sm:text-[15px] md:text-[17px] lg:text-[17px] inline-block mx-1 font-bold">
        <motion.span 
            className="absolute inset-0 bg-yellow-300 opacity-50 rounded-md z-[-1]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
        /> population decline of more than 30% over the past three generations</span>, <a href="https://cosewic.ca/index.php/en/">COSEWIC</a> designated the Atlantic population in eastern Canada as          
        <span className="relative text-[15px] sm:text-[15px] md:text-[18px] lg:text-[18px] font-bold text-[#6E0F2D]"> THREATENED </span> in November 2020
        (<a href="https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/leachs-storm-petrel-2020.html" className="text-blue-600 underline">COSEWIC 2020</a>). Given the deteriorating status of Leach’s Storm-petrel in Atlantic Canada, concerns were raised about the possible effects of offshore oil and gas operations on this species and how the industry could contribute to its recovery.

      </p>

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

export default Welcome2;
