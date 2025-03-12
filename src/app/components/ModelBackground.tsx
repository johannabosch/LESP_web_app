"use client";

import React, {useState} from 'react';
import { ChevronDown, ChevronUp, FileSymlink} from "lucide-react"; // arrow icons

const ModelBackground: React.FC = () => {

    //state to control section visibility
    const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
        S1: false, 
        S2: false,
    });

    //function to toggle sections open or close
    const toggleSection = (section: string) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    return(

        <div className = "px-10">

            <div className = "bg-white shadow-lg rounded-lg border border-gray-300 p-[1vw] mx-[1vw]">

                <h1> Explore Our Integrated Population Model </h1>

                <hr className="w-full border-t-2 border-gray-300 my-6" />

                <div className = "flex flex-col justify-center items-center">

                    <h3 className = "max-w-[50vw] justify-center ">
                        The conservation of Leach’s Storm-petrel, a threatened seabird species in Atlantic Canada, is critical, particularly in the context of emerging threats like offshore oil and gas operations.
                    </h3>

               

                <p className="px-[5vw]"> Our Integrated Population Model (IPM) provides insights into the dynamics of this species and offers a framework for understanding the impacts of various mortality sources, including light pollution. This model combines demographic data from multiple colonies, along with mortality estimates from various sources, to help assess the population status and inform conservation strategies.
                </p>
                
                </div>

                {/* SECTION 1 */}
                <div className="bg-[#cce9f7] border-l-4 border-[#0fa0e8] mt-6 mb-1 mx-5 transition-all duration-300 rounded-lg shadow-md">

                <div className="flex justify-between items-center bg-[#addaf0] rounded-lg cursor-pointer "
                onClick={() => toggleSection("S1")} >
                    
                    <h3 className="text-lg font-semibold p-[1vw]"> Background </h3>

                    <div className="p-[1vw]">
                        {openSections.S1 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </div>
                </div>

                {openSections.S1 && (
                    <div className="mt-4 text-gray-700 px-[3vw] py-[1vw]">
                    <p>Given the deteriorating status of Leach’s Storm-petrel in Atlantic Canada, concerns were raised about the possible effects of offshore oil and gas operations on this species and how the industry could contribute to the recovery of the species. One means to address the question of the potential impacts of the industry was to collate all the demographic information on the species available in the region and combine that information with reports and estimates of mortality from known sources, including strandings at offshore installations. For this modeling work, the demographic information available over the last 20 years was collated from six colonies, ranging from eastern Newfoundland the to Bay of Fundy. Each of these colonies faces different pressures and has different levels of overlap with offshore oil and gas production in eastern Canada. These data sources were brought together to inform an Integrated Population Model (IPM), a sophisticated modeling process that considers all the relationships among variables and propagates uncertainties in a transparent way. </p>

                    <div className = "flex justify-end"> 
                        <FileSymlink />
                    <p className = " ml-[-28px]"> To read more about the project, refer to the <a href="/IPM_page" className="text-blue-500 hover:underline"> full manuscript </a> </p></div>

                    </div>
                )}
                </div>

                {/* SECTION 2 */}
                <div className="bg-[#cce9f7] border-l-4 border-[#0fa0e8] mt-2 mb-1 mx-5 transition-all duration-300 rounded-lg shadow-md">

                <div className="flex justify-between items-center bg-[#addaf0] rounded-lg cursor-pointer" onClick={() => toggleSection("S2")}>

                    <h3 className="text-lg font-semibold p-[1vw]"> Our Approach </h3>
                    <div className="p-[1vw]">
                    {openSections.S2 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                </div>

                {openSections.S2 && (
                    <div className="mt-4 text-gray-700 px-[3vw] py-[1vw]">

                    <p className="mb-4 font-bold ">
                        To guide our modeling approach, we focused on the main goals of the model, which were to:
                    </p>

                    <ul className="list-disc pl-[5vw] text-[14px]">
                        <li>Examine the relative contributions of reported mortality sources to observed demography of the study colonies.</li>
                        <li>Openly acknowledge sources of uncertainty and include uncertainty at all points in the model.</li>
                        <li>In cases of limited or no data, constrain values to plausible values based on other information sources (known life history of species, similar species, or expert opinion).</li>
                    </ul>

                    <p className="mt-4 mb-4 font-bold">
                        To achieve these goals, we set out to develop a model that:
                    </p>

                    <ul className="list-disc pl-[5vw] text-[14px]">
                        <li>Is biologically-based and structured in a way that directly relates to population processes.</li>
                        <li>Effectively captures the overall dynamics of the Atlantic Canadian Leach’s storm-petrel population in the last 20 years when populated with reasonable data and values.</li>
                        <li>Has the capacity to readily adjust constraints and bounds when there are uncertainties that cannot be captured with distributional information.</li>
                        <li>Is amenable to output that is easily visualized and understandable.</li>
                    </ul>

                    </div>
                )}
                </div>

            </div>
        </div>
    )
}


export default ModelBackground;

