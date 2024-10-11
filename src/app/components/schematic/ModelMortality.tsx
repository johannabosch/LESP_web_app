import React from 'react';

const MortalityModel: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="card w-[800px] text-left bg-base-100 shadow-xl border border-gray-300">
        <div className="card-body">
          <h2 className="card-title text-3xl text-[#EC7D33]">Mortality Model</h2>
          
          <p className="text-xl text-gray-700 mb-4">
          This paragraph will introduce the model for petrels, including some information about current population sizes for petrels and their vulnerability.
          </p>

          <h3 className="text-2xl font-bold text-gray-700 mb-0">
            The Model:
          </h3>
          <p className="text-xl text-gray-700 mb-0">
          This paragraph will contain more information about the model and its parameters. It will outline the parameters like Nstr and Str, maybe include some formulas.
          </p>

          <div className="text-2xl text-center font-semibold text-[#EC7D33]">
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
            <div className="collapse-title text-2xl text-left font-medium bg-[#EC7D33] text-white peer-checked:bg-[#EC7D33] peer-checked:text-secondary-content">
              Offshore Lighted Structure Stranding Data
            </div>
            <div className="collapse-content flex bg-[#EC7D33] text-black peer-checked:text-secondary-content">
              <div className="bg-white w-[350px] rounded text-black h-[250px] mr-5 mt-5">
                <p className="w-[300px] text-xl font-semibold mt-10 mb-5 mx-10">
                  This dataset includes stranding data collected from offshore lighted structures.
                </p>
              </div>
              <div className="flex flex-col items-center border-[5px] rounded mt-5">
                <img
                  src="/images/LESP/drillmax.jpg"
                  alt="Offshore lighted structure (drilling vessel at night)"
                  className="w-[340px] h-auto"
                />
                <p className="absolute bottom-6 right-10 text-xs text-white px-2 py-1">
                  Photo by Johanna Bosch
                </p>
              </div>
            </div>
          </div>

          {/* Collapse section for Onshore Stranding */}
          <div className="collapse collapse-arrow bg-base-">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-2xl text-left font-medium bg-[#EC7D33] text-white peer-checked:bg-[#EC7D33] peer-checked:text-secondary-content">
              Onshore Lighted Structure Stranding Data
            </div>
            <div className="collapse-content flex bg-[#EC7D33] text-black peer-checked:text-secondary-content">
              <div className="bg-white w-[350px] rounded text-black h-[250px] mr-5 mt-5">
                <p className="w-[300px] text-xl font-semibold mt-10 mb-5 mx-10">
                  This dataset includes stranding data collected from onshore lighted structures.
                </p>
              </div>
              <div className="flex flex-col items-center border-[5px] rounded mt-5">
                <img
                  src="/images/LESP/fishplant.jpg"
                  alt="Onshore lighted structure (fish plant at night)"
                  className="w-[340px] h-auto"
                />
                <p className="absolute bottom-6 right-10 text-xs text-white px-2 py-1">
                  Photo by 
                </p>
              </div>
            </div>
          </div>

          {/* Collapse section for Gull Predation */}
          <div className="collapse collapse-arrow bg-base-">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-2xl text-left font-medium bg-[#EC7D33] text-white peer-checked:bg-[#EC7D33] peer-checked:text-secondary-content">
              Gull Predation
            </div>
            <div className="collapse-content flex bg-[#EC7D33] text-black peer-checked:text-secondary-content">
              <div className="bg-white w-[350px] rounded text-black h-[250px] mr-5 mt-5">
                <p className="w-[300px] text-xl font-semibold mt-10 mb-5 mx-10">
                  This dataset focuses on predation events attributed to gulls.
                </p>
              </div>
              <div className="flex flex-col items-center border-[5px] rounded mt-5">
                <img
                  src="/images/LESP/gull.jpg"
                  alt="Gull predation event"
                  className="w-[340px] h-auto"
                />
                <p className="absolute bottom-6 right-10 text-xs text-white px-2 py-1">
                  Photo by Johanna Bosch
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MortalityModel;
