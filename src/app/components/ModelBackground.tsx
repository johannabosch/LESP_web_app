"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Import icons

const ModelBackground: React.FC = () => {
  // State to control section visibility
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    S1: false,
  });

  // Function to toggle sections open or close
  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="flex flex-col justify-center items-center px-10">
      <div className="bg-white shadow-lg rounded-lg border border-gray-300 p-[1vw] mx-[1vw] w-[50vw]">
        <h1> Explore Our Integrated Population Model </h1>

        <hr className="w-full border-t-2 border-gray-300 my-6" />

        <p className="text-center mx-[3vw]">
          Use the navigation tabs below to explore the results of our integrated population model. Each tab presents figures summarizing key findings from the six main colonies analyzed, focusing on model parameters for{" "}
          <span className="font-bold">1.</span> population size,{" "}
          <span className="font-bold">2.</span> vital rates, and{" "}
          <span className="font-bold">3.</span> mortality of Storm-petrels in Atlantic Canada, based on both estimated and observed data. We ran three different models: a baseline model, a model where we increased offshore mortalities, and a model where we increased all mortality factors to assess the impact of various environmental pressures on the population. For more information on the model's approach, or the final results, refer to the <a href="/IPM_page" className="text-blue-500 hover:underline"> full manuscript</a>.
        </p>
        

        {/* Plotly Tutorial Section */}
        <div className="bg-[#cce9f7] border-l-4 border-[#0fa0e8] mt-6 mb-1 mx-5 rounded-lg shadow-md">
          <div
            className="flex justify-between items-center bg-[#addaf0] rounded-lg cursor-pointer p-2"
            onClick={() => toggleSection("S1")}>
                <p className="text-[18px] font-semibold"> QUICK REVIEW: How to use Plotly figures </p>
                {openSections.S1 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>

            {/* Expandable Content with Fixed Width */}
            <div
                className={`transition-all duration-300 ease-in-out grid ${
                openSections.S1 ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
            >
                <div className="text-gray-700 mx-[4vw] mt-3 overflow-hidden">
                    
                    <p className="text-[10px] sm:text-[10px] md:text-[15px] lg:text-[15px] text-gray-600 mb-5">
                        The interactive Plotly figures on this page allow you to visualize and explore data from different models. Here's a guide to help you get the most out of the figures:                    </p>
                        <ul className="list-disc pl-6 mt-4">
                            <li><strong>Hover:</strong> Hover over any data point to view detailed information like coordinates and other values.</li>
                            <li><strong>Zoom:</strong> Click and drag to zoom into specific regions of the plot. Use the scroll wheel to zoom in or out.</li>
                            <li><strong>Pan:</strong> Hold the mouse button and drag to move around the plot area.</li>
                            <li><strong>Legend:</strong> Click on legend items to toggle the visibility of different data series in the plot.</li>
                            <li><strong>Axes:</strong> Click on the axis labels to adjust the scale or switch between linear and logarithmic axes.</li>
                            <li><strong>Buttons:</strong> Use the buttons on the top-right corner to download the plot as an image, reset zoom, or toggle full-screen mode for better visualization.</li>
                            <li><strong>Slider:</strong> Use the slider below the figure to slide between different models. This will update the scatterplot data to reflect results from different models, letting you compare how the data changes across different settings.</li>
                        </ul> <br></br>

                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelBackground;
