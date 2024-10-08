import React from 'react';

const SurvivalModel: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="card w-[800px] text-left bg-base-100 shadow-xl border border-gray-300">
        <div className="card-body">
          <h2 className="card-title text-3xl text-[#7257b0]">Survival Model</h2>
          
          <p className="text-xl text-gray-700 mb-4">
            This section introduces the survival rates of breeding plovers, focusing on the factors that impact their survival over time. It includes insights into survival probabilities and long-term health.
          </p>

          <h3 className="text-2xl font-bold text-gray-700 mb-0">
            The Model:
          </h3>
          <p className="text-xl text-gray-700 mb-0">
            Here we explore the survival model, including important parameters such as survival rates across different age classes. It will outline key model components such as α and β values.
          </p>

          <div className="text-2xl text-center font-semibold text-[#004aad]">
            y<sub>i</sub> = α + β x<sub>i</sub>
          </div>

          <h3 className="text-2xl font-bold text-gray-700 mb-0">
            The Data:
          </h3>
          <p className="text-xl text-gray-700 mb-6">
            The model relies on Mark-recapture data, which is detailed below.
          </p>

          {/* Collapse section for Breeding Census Data */}
          <div className="collapse collapse-arrow bg-base-">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-2xl text-left font-medium bg-[#7257b0] text-white peer-checked:bg-[#7257b0] peer-checked:text-secondary-content">
              Mark-recapture data
            </div>
                <div className="collapse-content flex bg-[#7257b0] text-black peer-checked:text-secondary-content">
                <div className="bg-white w-[350px] rounded text-black h-[250px] mr-5 mt-5">
                  <p className= "w-[300px] text-xl font-semibold mt-10 mb-5 mx-10" >
                    Here is a little intro for the data
                  </p>

                  <p className= "w-[300px] text-lg mx-10" >
                  Placeholder text goes here for the data info that we want to display, including images and more. Placeholder text goes here for the model that we want to display. Placeholder text goes here for the model that we want to display, including images and photos and more. .
                  </p>
                </div>
                <div className="flex flex-col items-center border-[5px] rounded mt-5">
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
