"use client";

import React from "react";
import { Info } from "lucide-react";

const ModelBackground: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center px-10">
      
      <div className="bg-white shadow-lg rounded-lg border border-gray-300 p-[1vw] mx-[1vw] w-[50vw] w-[80vw] max-w-[1300px]">
        <h1> Explore the IPM Results </h1>

        <hr className="w-full border-t-2 border-gray-300 my-6" />

        <p className="text-center mx-[3vw]">
          Use the navigation tabs below to explore the results of our integrated population model. Each tab presents figures summarizing key findings from the six main colonies analyzed, focusing on model parameters for {" "}
          <span className="font-bold">1.</span> population size,{" "}
          <span className="font-bold">2.</span> vital rates, and{" "}
          <span className="font-bold">3.</span> mortality of Leach's storm-petrels in Atlantic Canada, based on both estimated and observed data. We ran three different models: a baseline model, a model where we increased offshore mortalities, and a model where we increased all mortality factors to assess the impact of various environmental pressures on the population. <strong> Use the slider at the bottom of each plotly figure to view results for each of these scenarios (baseline, offshore, wide).</strong> For more information on the model's approach, or the final results, refer to the <a href="/manuscript"> full manuscript</a>.
        </p>


        {/* Plotly Tutorial Section */}
        <div className="mt-6 mb-1 mx-5 rounded-lg bg-gray-100 border-l-4 border-blue-500 shadow-md p-4 flex items-center">
          <Info className="text-blue-500 mr-3" size={24} />
          <div>
            <p className="text-lg font-semibold">Need help using Plotly figures?</p>
            <a
              href="https://plotly.com/chart-studio-help/getting-to-know-the-plotly-modebar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >
              Learn More
            </a>
          </div>
        </div>


      </div>
    </div>
  );
};

export default ModelBackground;
