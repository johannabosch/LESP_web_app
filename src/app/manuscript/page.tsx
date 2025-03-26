"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer} from "@fortawesome/free-solid-svg-icons";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

// REMOVE THIS SECTION BELOW ONCE THE MANUSCRIPT IS PUBLISHED 
const DownloadButton = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevents download since manuscript is not published
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000); // Hides message after 3 seconds
  };

  return (
    <div className="relative flex flex-col items-center">
      <a
        href="/docs/manuscript.pdf"
        download
        onClick={handleClick}
        className="px-6 py-2 bg-[#1d5792] mx-auto text-white font-bold rounded-lg hover:bg-blue-600 transition-all mt-2"
      >
        DOWNLOAD PDF
      </a>

      {showMessage && (
        <div className="absolute top-12 bg-red-400 text-black px-4 py-1 rounded-lg shadow-lg mt-1">
          Oops, our full manuscript isn't published yet. <br/> Please come back later!
        </div>
      )}
    </div>
  );
};
// END OF SECTION

export default function Documentation() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col h-full">
      <main className="flex-grow">
        <Header currentScreen={1} />

        <div className="flex flex-col justify-center text-center mb-10">

          <h2 className="text-center font-bold mt-10">
            Read the full manuscript
          </h2>

          <p>Download the full PDF version below:</p>

          {/* REMOVE THIS SECTION BELOW ONCE THE MANUSCRIPT IS PUBLISHED */}
          <DownloadButton />
          {/* END OF SECTION */}



          {/* ONCE THE MANUSCRIPT IS PUBLISHED,
          REMOVE EVERYTHING ABOVE AS INDICATED,
          REMOVE THE INDICATED LINES SYMBOLS BELOW, KEEP EVERYTHIGN WITHIN <a>---<a/>
          ADD THE PDF DOCUMENT TO THE FOLDER IN LESP_WEB-APP/PUBLIC/DOCS, THEN IT SHOULD WORK */}


          {/* REMOVE THIS LINE

          <a href="/docs/manuscript.pdf" download
          className="px-6 py-2 bg-[#1d5792] mx-auto text-white font-bold rounded-lg hover:bg-blue-600 transition-all hover:text-white mt-2">
            DOWNLOAD PDF
          </a>

          AND REMOVE THIS LINE */}

        </div>

        <hr className="border-t-2 border-grey-700 w-[80vw] mx-auto mb-5" />

        <div className="flex flex-col justify-center items-center mx-auto text-center mb-10">

          <h2 className="text-center font-bold mb-2">
            Supporting publication:
          </h2>

          <p className="w-[80vw] max-w-[650px] font-semibold mb-1"> For a deeper understanding of the dynamics shaping our research, read this research paper by Calvert et al. (2024), which serves as a key foundation for our project.  </p>
          <p className="w-[80vw] max-w-[750px] mb-5 text-[14px]"> 
            Their study examines the survival rates of Leach’s storm-petrel across the same six colonies in Atlantic Canada, revealing that annual survival varies by colony and declines with increasing mercury burdens. These findings highlight the importance of monitoring multiple sites to monitor population declines in migratory species like the storm-petrel. </p>

          <div className="relative p-5">
                           
           <FontAwesomeIcon icon={faHandPointer}
           className="absolute top-2 right-3 mt-4 mx-1 text-2xl z-10 rotate-[-20deg] text-[#1d5792]" />

            <div className="relative border-grey-700 border rounded-lg shadow-lg p-5">

              <a href="https://www.sciencedirect.com/science/article/pii/S0048969723071772?via%3Dihub">

                <div className="relative w-[500px] group">
                  <img src="/images/Calvert2024_screenshot.png" 
                    alt="Calvert et al. (2024)" 
                    className="w-full rounded-lg transition-opacity duration-300" />

                  {/* Grey overlay on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Hover text */}
                  <span className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Read the paper
                  </span>
                </div>

              </a>
            </div>     

          </div>

        </div>

        <Footer />
      </main>
    </div>
  );
}
