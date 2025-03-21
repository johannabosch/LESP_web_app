"use client"

import React from "react";
import { motion } from "framer-motion";
import { PanelLeftOpen, PanelRightOpen } from "lucide-react";

interface Welcome3Props {
  onArrowClick: () => void;
  onGetStartedClick: () => void;
}

const Welcome3: React.FC<Welcome3Props> = ({ onArrowClick, onGetStartedClick }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative mt-[-80px]">
      <p className="text-4xl font-bold text-blue-500">Project Background</p>
      
            <p className="mt-3 text-center max-w-[1000px] w-[80vw] leading-relaxed">
            </p>
      
      <p className="text-[13px] sm:text-[13px] md:text-[16px] lg:text-[16px] mt-5 text-center max-w-[1000px] w-[80vw]">
       We developed an <span className="relative inline-block mx-1 font-bold">
        <motion.span 
            className="absolute inset-0 bg-yellow-300 opacity-50 rounded-md z-[-1]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
        /> integrated population model (IPM) </span> to provide insights into the dynamics of Leach's Storm-petrels in Atlantic Canada and offer a framework for understanding the impacts of various mortality sources. We gathered all of the demographic information on the species available in the region and combined it with reports and estimates of mortality from known sources, including strandings at offshore/onshore installations and predation by gulls and foxes within the nesting habitats. For this modeling work, the demographic information available over the last 20 years was collated from six colonies, ranging from eastern Newfoundland the to Bay of Fundy. These data sources were brought together to inform our IPM for Storm-petrels.</p>
        
        <p className="text-[14px] sm:text-[14px] md:text-[17px] lg:text-[17px] mt-5 text-center max-w-[1000px] w-[60vw]"> <span className="font-bold text-blue-500">What's an IPM?</span> Briefly, an IPM is a sophisticated modeling process that considers all the relationships among variables and propagates uncertainties in a transparent way. More on that later! </p>

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

export default Welcome3;
