"use client"

import React from "react";
import Link from "next/link";
import { PanelRightOpen } from "lucide-react";

interface Welcome3Props {
  onArrowClick: () => void;
  onGetStartedClick: () => void;
}

const Welcome6: React.FC<Welcome3Props> = ({ onArrowClick, onGetStartedClick }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative mt-[-80px]">
            
      <p className="mt-5 text-center text-[13px] sm:text-[13px] md:text-[16px] lg:text-[16px] max-w-[800px] w-[80vw]">
                We set out to develop a model that, when populated with reasonable data and values, captures the overall dynamics of the Atlantic Canadian Storm-petrel population in the last 20 years.
                
                 We wanted the IPM to have the capacity to readily adjust when there are uncertainties that cannot be captured with the available data. With this web app, we also make it easier to visualize the results of our model.
      </p>

      <div className="border border-grey-700 rounded-lg shadow-lg mt-10 max-w-[800px] w-[80vw] ">
        <p className="mt-5 text-center font-bold">
        Let's dig deeper into the model and results:
        </p>

        <div className="flex flex-row gap-4 pb-4 justify-center text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] ">
              
          <Link href="/model-schematic" passHref>
            <button className="mt-2 px-6 py-2 bg-[#1d5792] text-white font-bold rounded-lg hover:bg-blue-600 transition-all">
              READ MORE <br/>ABOUT THE IPM
            </button>
          </Link>

          <Link href="/visualize-data" passHref>
            <button className="mt-2 px-6 py-2 bg-[#1d5792] text-white font-bold rounded-lg hover:bg-blue-600 transition-all">
              VISUALIZE <br/>THE RESULTS
            </button>
          </Link>

          <Link href="/manuscript" passHref>
            <button className="mt-2 px-6 py-2 bg-[#1d5792] text-white font-bold rounded-lg hover:bg-blue-600 transition-all">
              READ THE FULL <br/> MANUSCRIPT
            </button>
          </Link>

          </div>

        </div>

        <div className="flex flex-row mt-[30px] font-bold text-[#1d5792] justify-center items-center">
          <button onClick={() => (window.location.href = "/")} className="flex flex-row items-center">
            <PanelRightOpen className="text-[#1d5792] mr-2" />
            <span> START OVER </span>
          </button>
        </div>

    </div>
  );
};

export default Welcome6;
