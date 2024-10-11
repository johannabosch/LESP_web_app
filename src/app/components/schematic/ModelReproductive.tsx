import React from 'react';

const ReproductiveModel: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="card w-[800px] text-left bg-base-100 shadow-xl border border-gray-300">
        <div className="card-body">
          <h2 className="card-title text-3xl text-[#004aad]">Reproductive Model</h2>
          
          <p className="text-xl text-gray-700 mb-4">
          This paragraph will introduce the model for petrels, including some information about current popualtion sizes for petrels and their vulnerability. This paragraph will introduce the model for petrels, including some information about current popualtion sizes for petrels and their vulnerability.
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

          {/* Collapse section for Breeding Census Data */}
          <div className="collapse collapse-arrow bg-base-">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-2xl text-left font-medium bg-[#004aad] text-white peer-checked:bg-[#004aad] peer-checked:text-secondary-content">
              Productivity data
            </div>
                <div className="collapse-content flex bg-[#004aad] text-black peer-checked:text-secondary-content">
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
                        src="/images/PIPL/HarryCollins.png"
                        alt="Piping petrel wearing identification band labelled 3N (Photo by Sid Maddock)"
                        className="w-[340px] h-auto"
                      />
                      
                      <p className="absolute bottom-6 right-10 text-xs text-white px-2 py-1">
                        Photo by Harry Collins
                      </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ReproductiveModel;