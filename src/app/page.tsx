"use client";

import React, { useState } from "react";
import Head from "next/head";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Welcome from "@/app/components/Welcome";
import Welcome2 from "@/app/components/Welcome2";
import Welcome3 from "@/app/components/Welcome3";
import Welcome4 from "@/app/components/Welcome4";
import Welcome5 from "@/app/components/Welcome5";
import Welcome6 from "@/app/components/Welcome6";

export default function Homepage() {
  const [currentScreen, setCurrentScreen] = useState(0); // 0 = welcome, 1 = welcome2, ..., 6 = welcome7

  const goToNextScreen = () => {
    setCurrentScreen((prev) => Math.min(prev + 1, 6)); // Prevent going past Welcome7
  };

  const goToPreviousScreen = () => {
    setCurrentScreen((prev) => Math.max(prev - 1, 0)); // Prevent going before Welcome
  };

  return (
    <div className="flex flex-col bg-white min-h-screen">

      <Header currentScreen={currentScreen} />

      <main className="relative flex justify-center items-center overflow-hidden min-h-[80vh] w-full">
        {/* Sliding Container */}
        <div
          className="flex transition-transform duration-1000 ease-out w-full"
          style={{ transform: `translateX(-${currentScreen * 100}%)` }}
        >
          {/* Each Welcome Component Takes Full Width */}
          <div className="w-full flex justify-center items-center flex-shrink-0">
            <Welcome onGetStartedClick={goToNextScreen} />
          </div>
          <div className="w-full flex justify-center items-center flex-shrink-0">
            <Welcome2 onArrowClick={goToPreviousScreen} onGetStartedClick={goToNextScreen} />
          </div>
          <div className="w-full flex justify-center items-center flex-shrink-0">
            <Welcome3 onArrowClick={goToPreviousScreen} onGetStartedClick={goToNextScreen} />
          </div>
          <div className="w-full flex justify-center items-center flex-shrink-0">
            <Welcome4 onArrowClick={goToPreviousScreen} onGetStartedClick={goToNextScreen} />
          </div>
          <div className="w-full flex justify-center items-center flex-shrink-0">
            <Welcome5 onArrowClick={goToPreviousScreen} onGetStartedClick={goToNextScreen} />
          </div>
          <div className="w-full flex justify-center items-center flex-shrink-0">
            <Welcome6 onArrowClick={goToPreviousScreen} onGetStartedClick={goToNextScreen} />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
