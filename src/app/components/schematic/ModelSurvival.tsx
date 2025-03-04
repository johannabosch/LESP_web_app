import React from "react";

const SurvivalModel: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      {/* Main Container */}
      <div className="w-[800px] bg-white shadow-xl border border-gray-300 rounded-lg p-6">
        <h2 className="text-3xl font-extrabold text-[#7257b0] text-center mb-4">
          Survival Model
        </h2>

        <p className="text-xl text-gray-700 mb-4">
          The survival model is made up of mark-recapture data collected from ...
          The data is based on region (r) and time (t).
        </p>

        <h3 className="text-2xl font-bold text-gray-700 mb-2">Parameters:</h3>
        <p className="text-xl text-gray-700 mb-10">
          The survival model considers the annual true survival probability for
          individuals in the first or second stage class (S<sub>str</sub>). The
          capture probability of individuals in both stage classes is considered
          and the annual apparent survival probability for individuals in both
          stage classes (φ&#770;<sub>str</sub>) is considered from the collected
          mark-recapture data (see below).
        </p>

        {/* Custom Collapse Section */}
        <div className="border border-[#7257b0] rounded-lg overflow-hidden">
          <input type="checkbox" id="collapse-toggle" className="hidden peer" />
          <label
            htmlFor="collapse-toggle"
            className="block text-2xl font-medium text-white bg-[#7257b0] cursor-pointer p-3 peer-checked:bg-[#5a4890] transition-all"
          >
            Mark-recapture data
          </label>
          <div className="hidden peer-checked:block p-4 bg-white text-black">
            <div className="flex flex-wrap">
              {/* Left Section */}
              <div className="w-[350px] h-[250px] mr-5 mt-5 p-4 bg-gray-100 rounded">
                <p className="text-xl mb-5">
                  Mark-recapture data consists of <b>placeholder text</b>.
                </p>
                <p className="text-xl font-bold">Placeholder:</p>
                <p className="text-lg">
                  Placeholder text for a sentence on the data{" "}
                  <a
                    href=""
                    className="text-blue-900 transition-all duration-200 hover:underline-offset-4 drop-shadow-xl font-semibold underline hover:underline"
                  >
                    (reference)
                  </a>
                </p>
              </div>

              {/* Right Section */}
              <div className="flex flex-col items-center border-[2px] border-[#7257b0] rounded mt-5 relative">
                <img
                  src="/images/PIPL/SidMaddock.jpg"
                  alt="Piping plover wearing identification band labelled 3N (Photo by Sid Maddock)"
                  className="w-[340px] h-auto rounded"
                />
                <p className="absolute bottom-2 right-2 text-xs text-white bg-gray-900 bg-opacity-75 px-2 py-1 rounded">
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
