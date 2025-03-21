"use client";
import React, { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

// REMOVE THIS SECTION BELOW ONCE THE MANUSCRIPT IS PUBLISHED 
const DownloadButton = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevents download since manuscript is not published
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000); // Hide message after 3 seconds
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

        <div className="flex flex-col justify-center text-center  mb-[100px]">
          {/* Project Info section */}
          <h3 className="text-center font-bold mt-10">
            Want to read the full manuscript?
          </h3>

          <p>Download the full PDF version below:</p>

          {/* REMOVE THIS SECTION BELOW ONCE THE MANUSCRIPT IS PUBLISHED */}
          <DownloadButton />
          {/* END OF SECTION */}

          {/* ONCE THE MANUSCRIPT IS PUBLISHED,
          REMOVE EVERYTHING ABOVE THAT I SAID SHOULD BE REMOVED,
          REMOVE THE COMMENT SYMBOLS BELOW (THE SQUIGGLY BRACKET, FORWARD SLASH, AND ASTERISKS),
          ADD THE PDF DOCUMENT TO THE FOLDER IN PUBLIC/DOCS, THEN IT SHOULD WORK */}

          {/* 
          <a href="/docs/manuscript.pdf" download
          className="px-6 py-2 bg-[#1d5792] mx-auto text-white font-bold rounded-lg hover:bg-blue-600 transition-all hover:text-white mt-2">
            DOWNLOAD PDF
          </a>
          */}

        </div>

        <Footer />
      </main>
    </div>
  );
}
