import React from "react";

const ReproductiveModel: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      {/* Main Container */}
      <div className="w-[800px] bg-white shadow-xl border border-gray-300 rounded-lg p-6">
        <h2 className="text-3xl font-extrabold text-[#004aad] text-center mb-4">
          Reproductive Model
        </h2>

        <p className="text-xl text-gray-700 mb-4">
          The reproductive model is made up of productivity data collected from
          ... The data is based on region (r) and time (t).
        </p>

        <h3 className="text-2xl font-bold text-gray-700 mb-2">Parameters:</h3>
        <p className="text-xl text-gray-700 mb-10">
          The reproductive model estimates the total number of fledglings
          produced in a region at a specific time (C<sub>tr</sub>). From the
          collected productivity data (see below), we estimate the number of
          fledglings from observed nests ( y<sub>tr</sub>) and unobserved nests
          (U&#770;<sub>tr</sub>).
        </p>

        {/* Custom Collapse Section */}
        <div className="border border-[#004aad] rounded-lg overflow-hidden">
          <input type="checkbox" id="collapse-toggle" className="hidden peer" />
          <label
            htmlFor="collapse-toggle"
            className="block text-2xl font-medium text-white bg-[#004aad] cursor-pointer p-3 peer-checked:bg-[#003080] transition-all"
          >
            Productivity data
          </label>
          <div className="hidden peer-checked:block p-4 bg-white text-black">
            <div className="flex flex-wrap">
              {/* Left Section */}
              <div className="w-[350px] h-[250px] mr-5 mt-5 p-4 bg-gray-100 rounded">
                <p className="text-xl mb-5">
                  Piping Plover productivity is measured as the{" "}
                  <b>number of fledgling chicks produced per breeding pair in a given year</b>. Data is collected via site visits to known nesting areas where chick productivity can be recorded throughout an entire breeding season.
                </p>
                <p className="text-xl font-bold">Recovery Strategy:</p>
                <p className="text-lg">
                  Short-term objective is to achieve and maintain an annual
                  productivity greater than 1.65 chicks fledged per territorial
                  pair{" "}
                  <a
                    href="https://dalspace.library.dal.ca/handle/10222/82265"
                    className="text-blue-900 transition-all duration-200 hover:underline-offset-4 drop-shadow-xl font-semibold underline hover:underline"
                  >
                    (ECCC 2022)
                  </a>
                </p>
              </div>

              {/* Right Section */}
              <div className="flex flex-col items-center border-[2px] border-[#004aad] rounded mt-5 relative">
                <img
                  src="/images/PIPL/HarryCollins.png"
                  alt="Piping plover and chick (Photo by Harry Collins from Getty Images)"
                  className="w-auto h-[250px] rounded"
                />
                <p className="absolute bottom-2 right-2 text-xs text-white bg-gray-900 bg-opacity-75 px-2 py-1 rounded">
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
