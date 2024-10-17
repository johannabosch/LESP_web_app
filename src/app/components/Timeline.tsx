"use client";

import React from 'react';

const Timeline: React.FC = () => {
  return (
    <div className="flex px-4 mt-[10px]">
      <div className=" absolute border bg-[] p-[20px] w-[400px] mx-[100px] right-0 shadow-lg ">
        <p className="text-xl w-[315px] font-bold"> Learn more about the history of Atlantic Piping plover research in eastern Canada.</p>
        <p className="absolute right-10 animate-bounce text-5xl mt-4 top-5">🡣</p>
      </div>
      

      {/* Overall timeline structure. */}
      <ul className="timeline timeline-snap-icon flex relative mx-auto h-auto timeline-vertical mt-[100px] mb-[150px]">

        {/* Timeline Item 1 */}
        <li>
          <div className="timeline-middle">
          <time className="font-mono text-white font-bold text-2xl bg-black rounded-[10px] px-[10px]">1977</time>
          </div>
          <div className="timeline-start mb-10 text-end">
            <div className="text-3xl font-black mx-10" > EARLY RESEARCH IN EASTERN CANADA </div>
            <p className="text-lg relative left-0 w-[395px] mx-10">
            <a href="https://dalspace.library.dal.ca/handle/10222/82265" className="text-blue-900 transition-all duration-200 hover:underline-offset-4 drop-shadow-xl font-semibold underline hover:underline">Cairns & Wake (1977)</a> studied the breeding biology and behaviour of <i>C. melodus</i> between 1975-1976 in Southern Nova Scotia, and found that individuals usually arrive in late April, and depart for their breeding grounds in July and August. They estimated that the population in Nova Scotia was between 60 - 75 pairs. 
            </p>

            <div className="relative bg-gray-100 py-[5px] rounded-[10px] w-[300px] mt-[30px] left-[100px] -mb-[250px]"
                 style= {{fontFamily: 'Playfair Display'}}>
            <blockquote className= "italic font-semibold text-2xl text-left mt-[10px] mx-5 mb-2">
              It appears unlikely that the entire Canadian population could number more than 1000 breeding pairs. 
            </blockquote>
            <p className="relative text-xl right-10 font-semibold text-gray-500"> — Cairns & Wake (1977)</p>
            </div>

          </div>
          <hr />
        </li>

        {/* Timeline Item 2 */}
        <li>
          <hr/>
          <div className="timeline-middle">
          <time className="font-mono text-white font-bold text-2xl bg-black rounded-[10px] px-[10px]">1978</time>
          </div>

           <div className="timeline-end mb-10 text-start mb-[200px]">
            <div className="text-2xl font-black mx-10" > STATUS OF PIPING PLOVERS ACROSS CANADA</div>
            <p className="text-lg relative left-0 w-[440px] mx-10">
            Piping plovers were first designated as <b> threatened </b> in 1973 by the National Audubon Society's Blue List for threatened species, and later listed as <b> endangered</b> as monitoring research progressed  <a href="https://www.jstor.org/stable/4513047" className="text-blue-900 transition-all duration-200 hover:underline-offset-4 drop-shadow-xl font-semibold underline hover:underline">(Haig 1985)</a>. 
            </p>

          </div>

          <hr />
        </li>


        {/* Timeline Item 3 */}
        <li>
          <hr/>
          <div className="relative timeline-middle flex flex-col">
          <time className="font-mono text-white font-bold text-2xl bg-black rounded-[10px] px-[10px]">1991</time>
          <div className="relative w-[5px] h-[500px] border-[3px] border-black border-dashed top-[0px] left-[25px] "></div>
          <time className="font-mono absolute text-center text-white font-semibold text-lg bg-black rounded-[10px] px-[10px] top-[160px]">1994</time>
          <time className="font-mono absolute text-center text-white font-semibold text-lg bg-black rounded-[10px] px-[10px] top-[225px]">1996</time>
          <time className="font-mono absolute text-center text-white font-semibold text-lg bg-black rounded-[10px] px-[10px] top-[455px]">2001</time>
          <time className="font-mono text-white font-bold text-2xl bg-black rounded-[10px] px-[10px] relative">2005</time>
          </div>

          <div className="timeline-start mb-10 text-end absolute top-[0px]">
            <div className="text-4xl relative font-black  mx-10 mb-[10px]" > EARLY MONITORING PROGRAMS </div>
              <p className="text-lg relative w-[460px] mx-10">
                Monitoring efforts ramped up in the 1960's, with an annual Canadian census beginning in 1994 and a systematic international census which occurred in 1991, 1996 and 2001 <a href="https://digitalcommons.unl.edu/cgi/viewcontent.cgi?article=1692&context=usgsstaffpub" className="text-blue-900 transition-all duration-200 hover:underline-offset-4 drop-shadow-xl font-semibold underline hover:underline">(Haig 2005)</a>. For each program, beaches with Piping plover nests were located at the beginning of each breeding season. Adults and juveniles were marked individually with coded metal bands, and sites were revisited during the season to follow the success of nesting birds. 
              </p>

              <img
              className="relative w-[320px] h-auto left-[192px] mt-[3px]" 
              src="/images/timeline/annual_census.svg"
              alt="annual census from 1994-2003"
              />
              
          </div>

          <div className="timeline-end mb-10 text-end absolute top-[0px]">

              <img
              className="relative w-[360px] h-auto right-[10px] mt-[10px]" 
              src="/images/timeline/int_census.svg"
              alt="annual census from 1994-2003"
              />
            </div>
          <hr />
        </li>

        
        {/* Timeline Item 4 */}
        <li>
          <hr/>
           <div className="timeline-end text-start relative">
           <img
              className="absolute w-[300px] h-auto left-[300px] bottom-[80px]" 
              src="/images/PIPL/HarryCollins2.svg"
              alt="by Harry Collins from Getty Images"
              />
            <div className="relative bottom-[35px]" >
            <div className=" relative text-4xl font-black mx-10 w-[250px] left-10" > PLOVERS A SPECIES AT RISK </div>
            <p className="text-xl relative left-10 w-[500px] mx-10 mt-[10px]">
            The Atlantic subspecies of Piping </p>
            <p className="text-xl relative left-10 w-[500px] mx-10 mt-[5px]">
            plovers (<i>C. melodus melodus</i>) was </p>
            <p className="text-xl relative left-10 w-[500px] mx-10 mt-[5px]">
            officially listed under the Species at Risk Act (SARA) in June 2003, two years after the Committee on the Status of Endangered Wildlife (COSEWIC) listed the species (<i>C. melodus</i>) as <b> Endangered </b>. 
            </p>
          </div>
          </div>

          <hr />
        </li>


        {/* Timeline Item 5 */}
        <li>
          <div className="timeline-middle relative ">
          <time className="relative bottom-[170px] font-mono text-white font-bold text-2xl bg-black rounded-[10px] px-[10px]">2006</time>
          </div>
          <div className="timeline-start mb-10 text-end absolute bottom-[50px]">
            <div className="text-2xl font-black mx-10" > INITIAL POPULATION SURVIVAL ESTIMATES </div>
            <p className="text-lg relative left-0 w-[400px] mx-10">
            <a href="https://www.ace-eco.org/vol1/iss3/art4/" className="text-blue-900 transition-all duration-200 hover:underline-offset-4 drop-shadow-xl font-semibold underline hover:underline">Calvert et al. (2006)</a> built a matric projection model for two Piping plover population segments in <b>(1) the Gulf of the St. Lawrence</b> and <b>(2) Southern Nova Scotia </b> based on monitoring and mark-recapture data collected from 1998 to 2005.
            </p>

          </div>
          <hr />
        </li>




        {/* Timeline Item 6 */}
        <li>
          <hr/>
          <div className="relative timeline-middle flex flex-col -top-[35px]">
          <time className="font-mono text-white font-bold text-2xl bg-black rounded-[10px] px-[10px]">2014</time>
          <div className="relative w-[5px] h-[400px] border-[3px] border-black border-dashed top-[0px] left-[25px] "></div>
          <time className="font-mono absolute text-center text-white font-semibold text-lg bg-black rounded-[10px] px-[10px] top-[120px]">2017</time>
          <time className="font-mono absolute text-center text-white font-semibold text-lg bg-black rounded-[10px] px-[10px] top-[170px]">2018</time>

          <time className="font-mono text-white font-bold text-2xl bg-black rounded-[10px] px-[10px] relative">2023</time>
          </div>

          <div className="timeline-end mb-10 text-start absolute top-[0px]">
            <div className="text-4xl relative font-black mx-10 mb-[10px] w-[500px]" > MONITORING EFFORTS CONTINUED</div>
              <p className="text-lg relative w-[500px] mx-10">
              There was considerable banding effort in 2014, 2017 and 2018 and complemented with intensive band-resighting-efforts until 2023. Unlike the first study, this second banding program included not only resights in Canada during the summer breeding season, but also during fall, winter and spring on migration and over-wintering sites throughout coastal US and several sites in the Caribbean <a href="https://digitalcommons.unl.edu/cgi/viewcontent.cgi?article=1692&context=usgsstaffpub" className="text-blue-900 transition-all duration-200 hover:underline-offset-4 drop-shadow-xl font-semibold underline hover:underline">(Calvert et al. 2006, Figure 10)</a>. Over this period there were 651 individual plovers banded, of which 570 (88%) were reobserved in at least once.
              </p>
              
          </div>

          <div className="timeline-end mb-10 text-end absolute top-[0px]">

            </div>
          <hr />
        </li>

        {/* Timeline Item 7 */}
        <li>
          <div className="timeline-middle">
          <time className="font-mono text-white font-bold text-2xl bg-black rounded-[10px] px-[10px] relative bottom-[10px]">2024</time>
          </div>
          <div className="timeline-start mb-10 text-end">
            <div className="text-5xl font-black mx-10" > THE CURRENT PLOVER MODEL </div>

            <p className="text-lg relative left-10 w-[500px] mx-10">
            <a href="https://dalspace.library.dal.ca/handle/10222/82265" className="text-blue-900 transition-all duration-200 hover:underline-offset-4 drop-shadow-xl font-semibold underline hover:underline">Cairns & Wake (1977)</a> </p>

            <p className="text-lg relative left-10 w-[500px] mx-10 text-left mb-2">
            <b>(i)</b> update models of annual productivity and its links to population change, </p>

            <p className="text-lg relative left-10 w-[500px] mx-10 text-left mb-2">
            <b>(ii)</b> estimate seasonal and annual survival probabilities for young and adult birds based on a recent banding program (2014-2022) and compare these to previous (1998-2002) estimates published in Calvert et al. 2006, </p>

            <p className="text-lg relative left-10 w-[500px] mx-10 text-left mb-2">
            <b>(iii)</b> build and develop an Integrated Population Model that incorporates all sources of information (abundance, productivity and survival) into a comprehensive picture of population dynamics. </p>


          </div>
          <hr />
        </li>

      </ul>
    </div>
  );
};

export default Timeline;
