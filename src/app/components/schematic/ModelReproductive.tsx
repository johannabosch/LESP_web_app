import React from 'react';

const ReproductiveModel: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="card w-[800px] text-left bg-base-100 shadow-xl border border-gray-300">
        <div className="card-body">
          <h2 className="card-title text-3xl text-[#004aad]">Reproductive Model</h2>
          
          <p className="text-xl text-gray-700 mb-4">
          The reproductive model is made up of productivity data collected from ... The data is based on region (r) and time (t).
          </p>

          <h3 className="text-2xl font-bold text-gray-700 mb-0">
            Parameters:
          </h3>
          <p className="text-xl text-gray-700 mb-10">
          The reproductive model estimates the total number of fledglings produced in a region at a specific time (C<sub>tr</sub>). From the collected productivity data (see below), we estimate the number of fledglings from observed nests ( y<sub>tr</sub>) and unobserved nests (U&#770;<sub>tr</sub>). 
          </p>

          {/* Collapse section for Breeding Census Data */}
          <div className="collapse collapse-arrow bg-base-">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-2xl text-left font-medium bg-[#004aad] text-white peer-checked:bg-[#004aad]  peer-checked:text-secondary-content">
              Productivity data
            </div>
                <div className="collapse-content flex border border-[#004aad] border-[5px] text-black peer-checked:text-secondary-content">
                <div className="bg-white w-[350px] rounded text-black h-[250px] mr-5 mt-5">
                  <p className= "w-[330px] text-xl mt-10 mb-5 mx-10" >
                  Piping Plover productivity is measured as the <b>number of fledgling chicks produced per breeding pair in a given year</b>. Data is collected via site visits to known nesting areas where chick productivity can be recorded throughout an entiire breeding season</p>

                  <p className= "w-[300px] text-xl mx-10 text-left" >
                  <b>Recovery Strategy:</b> </p>

                  <p className= "w-[300px] text-lg mx-10 text-left" >
                  Short-term objective is to achieve and maintain an annual productivity greater than 1.65 chicks fledged per territorial pair <a href="https://dalspace.library.dal.ca/handle/10222/82265" className="text-blue-900 transition-all duration-200 hover:underline-offset-4 drop-shadow-xl font-semibold underline hover:underline">(ECCC 2022)</a></p>
                </div>
                <div className="flex flex-col items-center border-[2px] border-[#004aad] rounded mt-5">
                      <img
                        src="/images/PIPL/HarryCollins.png"
                        alt="Piping plover and chick (Photo by Harry Collins from Getty Images)"
                        className="w-auto h-[250px]"
                      />
                      
                      <p className="absolute bottom-6 right-10 text-xs text-white py-1">
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