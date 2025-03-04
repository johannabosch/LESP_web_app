import React from "react";

const PopulationModel: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      {/* Main Container */}
      <div className="w-[800px] bg-white shadow-xl border border-gray-300 rounded-lg p-6">
        <h2 className="text-3xl font-extrabold text-[#991E3F] text-center mb-4">
          Population Size Model
        </h2>

        <p className="text-xl text-gray-700 mb-4">
          The population size model is made up of breeding census data collected
          from ... The data is based on region (r) and time (t).
        </p>

        <h3 className="text-2xl font-bold text-gray-700 mb-0">Parameters:</h3>
        <p className="text-xl text-gray-700 mb-10">
          The population size model considers the ...
        </p>

        {/* Collapsible section */}
        <div className="mt-10">
          <details className="group">
            <summary className="text-2xl text-left font-medium cursor-pointer bg-[#991E3F] text-white group-open:bg-[#991E3F]">
              Breeding census data
            </summary>
            <div className="flex border border-[#991E3F] border-[5px] text-black group-open:text-secondary-content">
              <div className="bg-white w-[350px] rounded text-black h-[250px] mr-5 mt-5">
                <p className="w-[300px] text-xl mt-10 mb-5 mx-10">
                  Breeding census data consists of <b>placeholder text</b>.
                </p>

                <p className="w-[300px] text-xl mx-10 text-left">
                  <b>Placeholder:</b>
                </p>

                <p className="w-[300px] text-lg mx-10 text-left">
                  Placeholder text for a sentence on the data{" "}
                  <a
                    href=""
                    className="text-blue-900 transition-all duration-200 hover:underline-offset-4 drop-shadow-xl font-semibold underline hover:underline"
                  >
                    (reference)
                  </a>
                </p>
              </div>
              <div className="flex flex-col items-center border-[2px] border-[#991E3F] rounded mt-5">
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
          </details>
        </div>
      </div>
    </div>
  );
};

export default PopulationModel;
