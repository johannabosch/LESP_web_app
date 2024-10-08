import React from 'react';

const MortalityModel: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="card w-[800px] text-left bg-base-100 shadow-xl border border-gray-300">
        <div className="card-body">
          <h2 className="card-title text-3xl text-[#004aad]">Mortality Model</h2>
          
          <p className="text-xl text-gray-700 mb-4">
          This paragraph will introduce the model for plovers, including some information about current popualtion sizes for plovers and their vulnerability. This paragraph will introduce the model for plovers, including some information about current popualtion sizes for plovers and their vulnerability.
          </p>

          <h3 className="text-2xl font-bold text-gray-700 mb-0">
            The Model:
          </h3>
          <p className="text-xl text-gray-700 mb-0">
          This paragraph will contain some more information about the model and it's parameters. It will outline the parameters like Nstr and Str, maybe include some formulas.This paragraph will contain some more information about the model and it's parameters. It will outline the parameters like Nstr and Str, maybe include some formulas.
          </p>

          <div className="text-2xl text-center font-semibold text-[#004aad]">
            y<sub>i</sub> = α + β x<sub>i</sub>
          </div>

          <h3 className="text-2xl font-bold text-gray-700 mb-0">
            The Data:
          </h3>
          <p className="text-xl text-gray-700 mb-6">
          This is a sentence about the data available for this model. Learn more about the data below:
          </p>

          {/* Collapse section for Offshore Stranding */}
          <div className="collapse collapse-arrow bg-base-">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-2xl text-left font-medium bg-[#004aad] text-white peer-checked:bg-[#004aad] peer-checked:text-secondary-content">
              Offshore Lighted Structure Stranding Data
            </div>
            <div className="collapse-content bg-[#004aad] text-black peer-checked:text-secondary-content">
              <p className="w-[300px] text-xl mt-10 mb-5 mx-10">
                This dataset includes stranding data collected from offshore lighted structures, which has been identified as a significant mortality factor for plovers.
              </p>
            </div>
          </div>

          {/* Collapse section for Onshore Stranding */}
          <div className="collapse collapse-arrow bg-base-">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-2xl text-left font-medium bg-[#004aad] text-white peer-checked:bg-[#004aad] peer-checked:text-secondary-content">
              Onshore Lighted Structure Stranding Data
            </div>
            <div className="collapse-content bg-[#004aad] text-black peer-checked:text-secondary-content">
              <p className="w-[300px] text-xl mt-10 mb-5 mx-10">
                This dataset includes stranding data collected from onshore lighted structures.
              </p>
            </div>
          </div>

          {/* Collapse section for Gull Predation */}
          <div className="collapse collapse-arrow bg-base-">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-2xl text-left font-medium bg-[#004aad] text-white peer-checked:bg-[#004aad] peer-checked:text-secondary-content">
              Gull Predation
            </div>
            <div className="collapse-content bg-[#004aad] text-black peer-checked:text-secondary-content">
              <p className="w-[300px] text-xl mt-10 mb-5 mx-10">
                This dataset focuses on predation events attributed to gulls.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortalityModel;
