import React from "react";

const ProcessModel: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      {/* Main Container */}
      <div className="w-[800px] bg-white shadow-xl border border-gray-300 rounded-lg p-6">
        <h2 className="text-3xl font-extrabold text-[#60941a] text-center mb-4">
          Population Process Model
        </h2>

        <p className="text-xl text-gray-700 mb-4">
          This paragraph will introduce the population process model for
          plovers, focusing on how the population dynamics are modeled over time.
          It will provide insights into breeding, survival, and migration
          processes.
        </p>

        <h3 className="text-2xl font-bold text-gray-700 mb-2">The Model:</h3>
        <p className="text-xl text-gray-700 mb-10">
          This section contains detailed information about the model parameters
          used in the population process model. Parameters such as reproduction
          rates, survival probabilities, and other ecological factors will be
          outlined here.
        </p>
      </div>
    </div>
  );
};

export default ProcessModel;
