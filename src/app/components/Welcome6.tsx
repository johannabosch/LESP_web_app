"use client"

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { PanelLeftOpen, PanelRightOpen } from "lucide-react";

interface Welcome3Props {
  onArrowClick: () => void;
  onGetStartedClick: () => void;
}

const Welcome6: React.FC<Welcome3Props> = ({ onArrowClick, onGetStartedClick }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative">
            
      <p className="mt-5 text-center text-[13px] sm:text-[13px] md:text-[16px] lg:text-[16px] max-w-[800px] w-[80vw]">
                We set out to develop a model that, when populated with reasonable data and values, captures the overall dynamics of the Atlantic Canadian Storm-petrel population in the last 20 years. We wanted the IPM to have the capacity to readily adjust when there are uncertainties that cannot be captured with the available data. With this web app, we also make it easier to visualize the results of our model.
      </p>

      <div className="border border-grey-700 rounded-lg shadow-lg mt-10 max-w-[800px] w-[80vw] ">
        <p className="mt-5 text-center font-bold">
        Let's dig deeper into the model and results:
        </p>

        <div className="flex flex-row gap-4 p-4 justify-center">
              
          <Link href="/IPM_schematic" passHref>
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-all">
              READ MORE ABOUT THE IPM
            </button>
          </Link>

          <Link href="/IPM_schematic" passHref>
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-all">
              VISUALIZE THE RESULTS
            </button>
          </Link>

          <Link href="/IPM_schematic" passHref>
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-all">
              READ THE FULL MANUSCRIPT
            </button>
          </Link>

          </div>

        </div>

        <div className="flex flex-row mt-[30px] font-bold text-blue-600 justify-center items-center">
          <button onClick={onArrowClick} className="flex flex-row items-center">
            <PanelRightOpen className="text-blue-500 mr-2" />
            <span> START OVER </span>
          </button>
        </div>
    </div>
  );
};

export default Welcome6;
