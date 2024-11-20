"use client";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'; 

// Enhanced fade in animation
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 1.5, 
      ease: "easeOut" 
    } 
  }
}

const Timeline: React.FC = () => {
const [showResults, setShowResults] = useState(false);

  const toggleResults = () => {
    setShowResults(prev => !prev);
  };

  // Intersection observer hooks for each timeline item
  const { ref: item0, inView: item0View } = useInView({
    triggerOnce: true,               // trigger the observer once
    threshold: [1.0],      // trigger at 100% visibility
    rootMargin: '0px 0px -300px 0px',          // observe when the element is 50px from the viewport
  });
  
  const { ref: item0a, inView: item0aView } = useInView({
    triggerOnce: true,
    threshold: [0.1],
    rootMargin: '0px 0px -100px 0px',
  });

  const { ref: item1, inView: item1View } = useInView({
    triggerOnce: true,
    threshold: [0.5],
    rootMargin: '0px 0px -200px 0px',
  });
  
  const { ref: item2, inView: item2View } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: '200px 0px 0px 0px'
  });

  const { ref: item3, inView: item3View } = useInView({
    triggerOnce: true,
    threshold: [0, 0.5, 1],
    rootMargin: '50px 0px'

    });
  const { ref: item4, inView: item4View } = useInView({
    triggerOnce: true,
    threshold: [0, 0.5, 1],
    rootMargin: '50px 0px'

    });
  const { ref: item5, inView: item5View } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: item6, inView: item6View } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: item7, inView: item7View } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  return (
    <div className="flex flex-col px-4 text-[#1D282B]  mt-[50px]">
    
      <motion.span 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3, duration: 0.5 }}
      className="flex items-center justify-center mt-[50px]"
    >
      <p className="relative font-bold text-[#1D282B] animate-bounce top-[10px]
      left-[40px] sm:left-[40px] md:-left-[10px] lg:-left-[10px]
      text-5xl sm:text-5xl md:text-6xl lg:text-7xl ">
        🡣
      </p>
      <div className="flex flex-col">

      <motion.h1 className="relative text-center font-black 
              text-2xl sm:text-2xl md:text-3xl  lg:text-4xl xl:text-5xl
              w-full max-w-[800px] min-w-[500px]">
        <motion.span> THE </motion.span>{' '}
        <motion.span>HISTORY </motion.span>{' '}
        <motion.span>OF </motion.span>{' '}
        <motion.span className="text-[#D18D53] drop-shadow-xl">PIPING PLOVER</motion.span>
      </motion.h1>
      <h1 className="relative text-center font-black text-[#1D282B] 
              text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
              w-full max-w-[800px]">
        RESEARCH IN EASTERN CANADA
      </h1>
</div>
    </motion.span>
    <motion.span 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3, duration: 0.5 }}
      className=""
    >    </motion.span>


      {/* Overall timeline structure. */}
      <ul className="timeline timeline-snap-icon timeline-vertical mb-[150px] z-10">
        
        <li ref={item0} className={`transition-transform duration-700 ${item0View ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[80px]"}`}>
        <img
                src="/images/PIPL/ploversketch.svg"
                alt="by Vintage Graphics"
                className="absolute z-20 flex mt-[50px] top-[0px] scale-x-[-1] left-[50vw]
                w-[280px] sm:w-[280px] md:w-[400px] lg:w-[500px]"
              />
          </li>

        {/* Timeline Item 1 */}
        <li ref={item1} className={`transition-transform duration-700 ${item1View ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[80px]"}`}>
          
          <div className="timeline-middle ">
          <time className="font-mono text-white font-bold text-2xl rounded-[10px] px-[10px] bg-[#D18D53] hover:text-[#D18D53] hover:bg-black">1977</time>
          </div>

          <div className="timeline-start text-end mb-10 ">

            <div className="font-black relative mt-[40px]
            text-2xl sm:text-2xl  md:text-3xl  lg:text-4xl  
            w-[290px] sm:w-[290px] md:w-[430px] lg:w-[430px] lg:-left-[40px]" > 
              EARLY RESEARCH IN EASTERN CANADA 
            </div>

            <p className="relative text-sm sm:text-sm  md:text-lg  lg:text-xl  
              w-[250px] sm:w-[250px] md:w-[325px] lg:w-[380px]  
              left-[50px] sm:left-[50px] md:left-[100px] lg:-left-0">
              In the late 70's, Piping Plovers were known to nest on beaches scattered throughout Canada, including the provinces of Nova Scotia, New Brunswick, Prince Edward Island, Newfoundland, and the Magdalen Islands of Quebec. <a href="https://dalspace.library.dal.ca/handle/10222/82265" className="text-blue-900 transition-all duration-200 hover:underline-offset-4 drop-shadow-xl font-semibold underline hover:underline">Cairns & Wake (1977)</a> studied the breeding biology and behaviour of <i>C. melodus</i> between 1975-1976 in Southern Nova Scotia, and they estimated that the population in Nova Scotia was between 60-75 pairs.
            </p>

            <div className="relative bg-gray-100 py-[5px] rounded-[10px] mt-[30px] -mb-[250px] 
            left-[60px] sm:left-[60px] md:left-[120px] lg:left-[60px]
            w-[230px] sm:w-[230px] md:w-[300px] lg:w-[300px]"
                 style= {{fontFamily: 'Playfair Display'}}>
            <blockquote className= "italic font-semibold mt-[10px] mx-3 mb-2 text-xl sm:text-xl md:text-2xl lg:text-2xl text-left ">
              It appears unlikely that the entire Canadian population could number more than 1000 breeding pairs. 
            </blockquote>
            <p className="relative text-md sm:text-md md:text-lg lg:text-lg right-10 font-semibold text-gray-500"> — Cairns & Wake (1977)</p>
            </div>

          </div>
          <hr />
        </li>

        {/* Timeline Item 2 */}
        <li ref={item2} className={`transition-transform duration-700 ${item2View ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[200px]"}`} style={{ transitionDelay: item2View ? "0s" : "0s" }}>
          <hr/>

           <div className="timeline-end text-start mb-[100px]">

            <div className="font-black relative text-start left-[30px]
            mt-[0px] sm:mt-[0px] md:mt-[20px] lg:mt-[50px] ">

            <div className="text-xl sm:text-xl  md:text-2xl  lg:text-3xl" > INITIAL CONSERVATION</div>
            <div className="text-2xl sm:text-2xl  md:text-3xl  lg:text-4xl" >STATUS OF PLOVERS </div>
            </div>

            <p className="relative mt-[5px] left-[30px]
             w-[250px] sm:w-[250px] md:w-[440px] lg:w-[440px] 
            text-sm sm:text-sm  md:text-xl  lg:text-xl">
            Piping plovers were first designated as <b> Threatened </b> in 1973 by the National Audubon Society's Blue List for threatened species, and later listed as <b> Endangered</b> as monitoring research progressed  <a href="https://www.jstor.org/stable/4513047" className="text-blue-900 transition-all duration-200 hover:underline-offset-4 drop-shadow-xl font-semibold underline hover:underline">(Haig 1985)</a>. 
            </p>

          </div>

          <hr />
        </li>


        {/* Item 3 */}

        <li
          ref={item0a}
          className={`transition-transform duration-700 flex justify-center items-center z-10 ${
            item0aView ? "opacity-100 translate-y-20" : "opacity-0 translate-y-[150px]"
          }`}
          style={{ minHeight: '100vh' }}>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <img
              className="relative -top-[280px] left-[27px]
              w-[550px] sm:w-[550px] md:w-[600px] lg:w-[600px]"
              src="/images/timeline/census.svg"
              alt="annual census from 1994-2003"
            />
          </motion.span>
        </li>

        <li ref={item3} className={`transition-transform duration-700 relative z-0 
          bottom-[1100px] sm:bottom-[1100px] md:bottom-[1150px] lg:bottom-[1150px]
          ${item3View ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[240px]"}`}>
          <hr />
            <div className="timeline-start flex flex-col items-center 
            mr-[60px] sm:mr-[60px] md:mr-[70px] lg:mr-[90px]
            w-[240px] sm:w-[240px] md:w-[340px] lg:w-[400px] xl:w-[500px]">
              
              <div className="font-black text-2xl text-end text-center
                sm:text-2xl md:text-3xl lg:text-4xl w-full ">
                FIRST POPULATION
              </div>
              
              <div className="font-black text-lg w-full text-end text-center
                sm:text-lg md:text-2xl lg:text-3xl ">
                MONITORING PROGRAMS
              </div>

              <p className="text-end w-full
                text-sm sm:text-sm md:text-lg lg:text-xl ">
                Monitoring efforts ramped up in the 1960's, with an annual Canadian census beginning in 1994 and a systematic international census which occurred in 1991, 1996, and 2001 
                (<a href="https://publications.gc.ca/collections/collection_2018/eccc/cw69-5/CW69-5-436-eng.pdf" className="text-blue-900 transition-all duration-200 hover:underline-offset-4 drop-shadow-xl font-semibold underline hover:underline">Amirault 2005</a>,<a href="https://digitalcommons.unl.edu/cgi/viewcontent.cgi?article=1692&context=usgsstaffpub" className="text-blue-900 transition-all duration-200 hover:underline-offset-4 drop-shadow-xl font-semibold underline hover:underline">Haig 2005</a>). For each program, beaches with Piping plover nests were located at the beginning of each breeding season. Adults and juveniles were marked individually with coded metal bands, and sites were revisited during the season to monitor nesting success.
              </p>
            </div>
          <hr />
        </li>


        {/* Timeline Item 4 */}
        <li ref={item4} className={`transition-transform duration-700 -top-[950px] ${item4View ? "opacity-100 translate-y-20" : "opacity-0 translate-y-[150px]"}`}>
          <hr/>
           <div className="timeline-end text-start relative">

            <div className="relative" >
              <div className="relative font-black mx-10 left-5
              w-[220px] sm:w-[220px] md:w-[350px] lg:w-[350px]
              text-2xl sm:text-2xl md:text-4xl lg:text-4xl" > 
                PIPING PLOVERS A SPECIES AT RISK </div>

              <div className="relative w-[500px]">
                <p className="text-xl relative left-5 mx-10 mt-[10px]">
                  The Atlantic subspecies of Piping plovers (<i>C. melodus melodus</i>) was officially listed under the Species at Risk Act (SARA) in June 2003, two years after the Committee on the Status of Endangered Wildlife (COSEWIC) listed the species (<i>C. melodus</i>) as Endangered. 
                </p>
              </div>
            </div>

            <motion.span 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1, delay: 4 }}>
                <img
                  className="absolute w-[300px] h-auto left-[300px] bottom-[290px]" 
                  src="/images/PIPL/HarryCollins2.svg"
                  alt="by Harry Collins from Getty Images"
                />
            </motion.span>

          </div>

          <hr />
        </li>


        {/* Timeline Item 5 */}
        <li ref={item5} className={`transition-transform duration-700 -top-[950px] ${item5View ? "opacity-100 translate-y-20" : "opacity-0 translate-y-[180px]"}`}>
          <div className="timeline-middle relative">

          <time className="relative font-mono 
          text-white font-bold text-2xl bg-black rounded-[10px] px-[10px]">2006</time>

          </div>

          <div className="relative timeline-start mb-10 text-end">
            <div className="text-4xl font-black mx-10" > INITIAL SURVIVAL ESTIMATES </div>
            <p className="text-xl absolute text-right right-[0px] w-[450px] mx-10">
            <a href="https://www.ace-eco.org/vol1/iss3/art4/" className="text-blue-900 transition-all duration-200 hover:underline-offset-4 drop-shadow-xl font-semibold underline hover:underline">Calvert et al. (2006)</a> built a matrix projection model for two Piping plover population segments in <b>(1) the Gulf of the St. Lawrence</b> and <b>(2) southern Nova Scotia </b> based on monitoring and mark-recapture data collected from 1998 to 2005.
            </p>

            {/* Dropdown button */}
            <button
      onClick={toggleResults}
      className="btn btn-ghost bg-gray-100 w-[400px] mt-10 ml-4 text-lg font-semibold mt-[150px] mx-10"
    >
      {showResults ? 'Hide Results' : 'Show Results'} ▼
    </button>

            {/* Conditional rendering for the dropdown content */}
            {showResults && (
              <div className="relative bg-gray-100 rounded-[10px] shadow-lg py-10 mt-4">
                <img
                  className="relative w-[530px] py-5 mx-auto" 
                  src="/images/timeline/Calvert_et-al_2006.png"
                  alt="Calvert, A. M., et al. 2006. Population assessment of an endangered shorebird: the Piping Plover (Charadrius melodus melodus) in eastern Canada. Avian Conservation and Ecology - Écologie et conservation des oiseaux 1(3): 4."
                />

                <p className="text-sm relative w-[550px] text-center mx-auto">
                <b> Figure 1. </b>Location of beaches used by eastern Canada Piping Plovers breeding in the Gulf of St. Lawrence (squares) and South Nova Scotia (circles) from 1998 to 2003, with associated population abundance trends between 1991 and 2005 as indicated by the standardized annual population survey (black) and international census (gray) data (see Amirault 2005). Recovery goals for each population segment are also noted (dashed lines; Amirault 2006). Regions within the Gulf population segment are: AC (Acadian peninsula, northern New Brunswick), NBNS (southern New Brunswick and northern Nova Scotia), NF (Newfoundland), PEI (Prince Edward Island), and QC (Magdalen Islands, Quebec) [<a href="https://www.ace-eco.org/vol1/iss3/art4/" className="text-blue-900 transition-all duration-200 hover:underline-offset-4 drop-shadow-xl font-semibold underline hover:underline">Calvert et al. (2006)</a>].
                </p>
                
                <p className="text-lg relative w-[520px] mx-auto mt-10 text-center">
                Annual population censuses suggested moderate growth in abundance between 1998–2003, but vital rate estimates indicated that this temporary growth may be replaced by declines in the long term, both in <b>southern Nova Scotia </b> (λd = 1.0043, λs = 0.9263) and in the <b> Gulf of St. Lawrence </b> (λd = 0.9651, λs = 0.8214) <a href="https://www.ace-eco.org/vol1/iss3/art4/" className="text-blue-900 transition-all duration-200 hover:underline-offset-4 drop-shadow-xl font-semibold underline hover:underline">(Calvert et al. 2006)</a>.
                </p>
              </div>
            )}


          </div>
          <hr />
        </li>


        {/* Timeline Item 6 */}
        <li ref={item6} className={`transition-transform duration-700 -top-[950px] ${item6View ? "opacity-100 translate-y-20" : "opacity-0 translate-y-[280px]"}`}>
          <hr/>
          <div className="relative timeline-middle flex flex-col -top-[40px]">
          <time className="font-mono text-white font-bold text-2xl bg-black rounded-[10px] px-[10px]">2014</time>
          <div className="relative w-[5px] h-[400px] border-[3px] border-black border-dashed top-[0px] left-[25px] "></div>
          <time className="font-mono absolute text-center text-white font-semibold text-lg bg-black rounded-[10px] px-[10px] top-[120px]">2017</time>
          <time className="font-mono absolute text-center text-white font-semibold text-lg bg-black rounded-[10px] px-[10px] top-[170px]">2018</time>

          <time className="font-mono text-white font-bold text-2xl bg-black rounded-[10px] px-[10px] relative">2023</time>
          </div>

          <div className="timeline-end mb-10 text-start absolute top-[50px]">
            <div className="text-4xl relative font-black mx-10 w-[500px]" > MONITORING EFFORTS CONTINUED</div>
              <p className="text-xl relative w-[460px] mx-10 py-10">
              Going forward, considerable banding efforts were made in 2014, 2017 and 2018, complemented with intensive band-resighting-efforts until 2023. Unlike the first study, this second banding program included resights during the fall, winter and spring throughout coastal US and several sites in the Caribbean <a href="" className="text-blue-900 transition-all duration-200 hover:underline-offset-4 drop-shadow-xl font-semibold underline hover:underline">(Calvert et al. [DATE], Figure 10)</a>. Over this period, 651 individual plovers were banded, of which 88% (570) were reobserved at least once.
              </p>


            <div className="relative bottom-[350px]">

            <img
              className="relative w-[240px] right-[320px] z-20" 
              src="/images/timeline/PatLeary.svg"
              alt="Piping Plover with tag (Talbot Island, FL), by Pat Leary"
              />

              <img
              className="relative w-[280px] right-[540px] bottom-[150px] z-10" 
              src="/images/timeline/beach_plot.svg"
              alt="https://www.birdscanada.org/piping-plovers-face-a-range-of-challenges-from-hungry-predators-to-hoof-prints"
              />

              <img
              className="relative w-[280px] right-[380px] bottom-[240px]" 
              src="/images/timeline/beach_sign.svg"
              alt="https://www.birdscanada.org/piping-plovers-face-a-range-of-challenges-from-hungry-predators-to-hoof-prints"
              />
            </div>

          </div>

          <div className="timeline-end mb-10 text-end absolute top-[0px]">

            </div>
          <hr />
        </li>

        {/* Timeline Item 7 */}
        <li ref={item7} className={`transition-transform duration-700 -top-[950px] ${item7View ? "opacity-100 translate-y-20" : "opacity-0 translate-y-[200px]"}`}>
          <div className="timeline-middle">
          <time className="font-mono text-white font-bold text-2xl bg-black rounded-[10px] px-[10px] relative bottom-[20px]">2024</time>
          </div>
          <div className="timeline-end text-start">
            <div className="text-5xl font-black mx-10 w-[600px] text-blue-400" > THE CURRENT PLOVER MODEL </div>

            <a href="" className="relative left-[460px] text-blue-900 text-lg transition-all duration-200 hover:underline-offset-4 drop-shadow-xl font-semibold underline hover:underline">Calvert et al. (20__)</a>

          <div className="relative w-[550px] mt-[10px]">
            <p className="text-lg relative left-[30px] mb-[12px]">
            [Placeholder text] </p>

            <p className="text-lg relative left-[170px] mb-[12px]">
            __________________________________________
             </p>

          </div>

            <div className="flex-1">
              <Link href="/about_page" className="btn btn-ghost text-xl mx-[100px] my-[20px] border border-gray-200">
                <p>
                Model Overview
                </p>
              </Link>

              <Link href="/plover_page" className="btn btn-ghost text-xl  border border-gray-200">
                <p>
                Model Results
                </p>
              </Link>
            </div>

          </div>
          <hr />
        </li>

      </ul>

    </div>
  );
};

export default Timeline;
