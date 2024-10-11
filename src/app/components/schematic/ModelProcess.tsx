import React from 'react';

const ProcessModel: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="card w-[800px] text-left bg-base-100 shadow-xl border border-gray-300">
        <div className="card-body">
          <h2 className="card-title text-3xl text-[#60941a]">Population Process Model</h2>
          
          <p className="text-xl text-gray-700 mb-4">
            This paragraph will introduce the population process model for petrels, focusing on how the population dynamics are modeled over time. It will provide insights into breeding, survival, and migration processes.
          </p>

          <h3 className="text-2xl font-bold text-gray-700 mb-0">
            The Model:
          </h3>
          <p className="text-xl text-gray-700 mb-0">
            This section contains detailed information about the model parameters used in the population process model. Parameters such as reproduction rates, survival probabilities, and other ecological factors will be outlined here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessModel;
