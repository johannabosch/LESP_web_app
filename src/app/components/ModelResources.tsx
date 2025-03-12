
"use client";

import React from 'react';

const ModelResources: React.FC = () => {

    return(
        <div className="flex justify-center items-center mx-[1vw] my-[3vw]">
            
            <div className="max-w-[80vw] rounded-lg shadow-lg py-[1vw] px-[2vw]">

                <h2> Other Resources </h2>
                
                <div className="flex justify-center items-center ">
                <p className="text-center text-gray-700 mt-1 mb-6 max-w-[700px]">
                Explore key resources to deepen your understanding of the model, its framework, and its real-world applications. Whether you're interested in the model's structure, the supporting manuscript, or broader research on petrels, these links provide valuable insights.
                </p>
                </div>

                <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center gap-6">

                    {/* model screenshot */}
                    <a href="/IPM_about_page"
                    className="resource-button"
                    >

                    <div className="resource-text">
                    ▹ Model schematic ◃
                    </div>

                    <img
                        src="/images/IPM_screenshot.png"
                        alt="IPM Schematic"
                        className="h-full w-auto rounded-lg"
                    />
                    </a>

                    {/* manuscript screenshot */}
                    <a href="/IPM_about_page"
                    className="resource-button"
                    >
                    <div className="resource-text">
                    ▹ Full manuscript ◃
                    </div>
                    <img
                        src="/images/manu_screenshot.png"
                        alt="IPM Schematic"
                        className="h-full w-auto rounded-lg"
                    />
                    </a>

                    {/* research screenshot */}
                    <a href="https://www.birdscanada.org/leachs-storm-petrel"
                    className="resource-button"
                    >
                    <div className="resource-text">
                    ▹ More petrel research ◃
                    </div>
                    <img
                        src="/images/research_screenshot.png"
                        alt="IPM Schematic"
                        className="h-full w-auto rounded-lg"
                    />
                    </a>
                </div>

            </div>
        </div>
    )
}


export default ModelResources;
