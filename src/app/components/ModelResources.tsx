
"use client";

import React from 'react';
import Link from "next/link";

const ModelResources: React.FC = () => {

    return(
        <div className="flex justify-center items-center mx-[1vw] mt-10">
            
            <div className="max-w-[80vw] rounded-lg shadow-lg py-[1vw] px-[2vw]">

                <h2> Other Resources </h2>
                
                <div className="flex justify-center items-center ">
                <p className="text-center text-base text-gray-700 mb-3 max-w-[1000px]">
                Explore key resources to deepen your understanding of the model, its framework, and its real-world applications. Whether you're interested in the model's structure, the supporting manuscript, or broader research on petrels, these links provide valuable insights.
                </p>
                </div>
                <div className="flex flex-row gap-4 pb-4 justify-center text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] ">
              
              <Link href="/model-schematic" passHref>
                <button className="mt-2 px-6 py-2 bg-[#1d5792] text-white font-bold rounded-lg hover:bg-blue-600 transition-all">
                  READ MORE <br/>ABOUT THE IPM
                </button>
              </Link>
    
              <Link href="/manuscript" passHref>
                <button className="mt-2 px-6 py-2 bg-[#1d5792] text-white font-bold rounded-lg hover:bg-blue-600 transition-all">
                READ THE FULL <br/> MANUSCRIPT
                </button>
              </Link>
    
              <Link href="https://www.birdscanada.org/leachs-storm-petrel" passHref>
                <button className="mt-2 px-6 py-2 bg-[#1d5792] text-white font-bold rounded-lg hover:bg-blue-600 transition-all">
                  LEARN MORE <br/> ABOUT PETRELS
                </button>
              </Link>
    
              </div>

            </div>
        </div>
    )
}


export default ModelResources;
