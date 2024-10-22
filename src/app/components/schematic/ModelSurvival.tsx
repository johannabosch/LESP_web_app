import React from 'react';

const SurvivalModel: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="card w-[800px] text-left bg-base-100 shadow-xl border border-gray-300">
        <div className="card-body">
          <h2 className="card-title text-3xl text-[#7257b0]">Survival Model</h2>
          
          <p className="text-xl text-gray-700 mb-4">
          The survival model is made up of mark-recapture data collected from ... The data is based on region (r) and time (t).
          </p>

          <h3 className="text-2xl font-bold text-gray-700 mb-0">
            Parameters:
          </h3>
          <p className="text-xl text-gray-700 mb-0">
            The survival model considers the annual true survival probability for individuals in the first or second stage class (S<sub>str</sub>). The capture probability of individuals in both stage classes is considered and the annual apparent survival probability for individuals in both stage classes (φ&#770;<sub>str</sub>) is considered from the collected mark-recapture data (see below).</p>

          {/* Collapse section for Breeding Census Data */}
          <div className="collapse collapse-arrow mt-10">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-2xl text-left font-medium bg-[#7257b0] text-white peer-checked:bg-[#7257b0] peer-checked:text-secondary-content">
              Mark-recapture data
            </div>
            <div className="collapse-content flex border border-[#7257b0] border-[5px] text-black peer-checked:text-secondary-content">
            <div className="bg-white w-[350px] rounded text-black h-[250px] mr-5 mt-5">
                  <p className= "w-[300px] text-xl mt-10 mb-5 mx-10" >
                  Mark-recapture data consists of  <b>placeholder text</b>.</p>

                  <p className= "w-[300px] text-xl mx-10 text-left" >
                  <b>Placeholder:</b> </p>

                  <p className= "w-[300px] text-lg mx-10 text-left" >
                  Placeholder text for a sentence on the data <a href="" className="text-blue-900 transition-all duration-200 hover:underline-offset-4 drop-shadow-xl font-semibold underline hover:underline">(reference)</a></p>
                </div>
                <div className="flex flex-col items-center border-[2px] border-[#7257b0] rounded mt-5">
                      <img
                        src="/images/PIPL/SidMaddock.jpg"
                        alt="Piping plover wearing identification band labelled 3N (Photo by Sid Maddock)"
                        className="w-[340px] h-auto"
                      />
                      
                      <p className="absolute bottom-6 right-10 text-xs text-white px-2 py-1">
                        Photo by Sid Maddock
                      </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
  );
};


export default SurvivalModel;
