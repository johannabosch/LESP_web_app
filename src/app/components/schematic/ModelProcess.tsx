import React from "react";

const ProcessModel: React.FC = () => {
  return (

      <div className="bg-white shadow-lg rounded-lg border border-gray-300 p-[1vw] mx-[1vw]">

        <h1 className="text-[#8CB771]">Population Process Model</h1>

        <hr className="w-full border-t-2 border-gray-300 my-6" />

        <div className="bg-gray-100 rounded-lg p-4 m-[1vw]">
          <div className="flex flex-col justify-center items-start sm:flex-row">
              <p className="text-base w-[50vw]">
              All of the data sources you see here were brought together to inform an Integrated Population Model (IPM), a sophisticated modeling process that considers all the relationships among variables and propagates uncertainties in a transparent way. Leach’s storm-petrel dynamics were modeled using a three-stage pre-breeding population projection model. This approach groups individuals into three categories: immatures (up to three years old, <strong>S<sub>0</sub></strong>), pre-breeders (four years and older but not yet breeding, <strong>S<sub>1</sub></strong>), and breeders (<strong>S<sub>2</sub></strong>). Age-specific data are unavailable due to limited knowledge of the species' early life history, making a full age-based model impractical. Transition probabilities between stages are estimated based on available research, including breeding age estimates. This stage-based model aligns with population surveys conducted early in the breeding season and allows for adjustments to account for specific mortality events after breeding. In the process model, <strong>M</strong> represents other or natural mortality, while <strong>N</strong> refers to stage-specific abundance, both of which are incorporated alongside true survival (<strong>S<sub>stage</sub></strong>), productivity (<strong>F</strong>), and stage transitions (<strong>ψ<sub>stage</sub></strong>) to describe population changes over time. <br></br><br></br>
              
              To learn more about this population process model, read our <a href="/manuscript">full manuscript</a>, or refer to <a href="https://www.sciencedirect.com/science/article/pii/S0048969723071772">Calvert et al. 2024</a>.
              
              </p> 
          </div>
        </div>
        
      </div>
  );
};

export default ProcessModel;
