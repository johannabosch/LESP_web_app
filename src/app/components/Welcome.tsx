"use client";

import React, { useEffect, useState } from "react";

interface WelcomeProps {
  onGetStartedClick: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onGetStartedClick }) => {
  const [animateWobble, setAnimateWobble] = useState(false);

  useEffect(() => {
    // Start wobble animation after 2 seconds
    const wobbleInterval = setInterval(() => {
      setAnimateWobble(true);
      setTimeout(() => setAnimateWobble(false), 800); // Stop after one cycle
    }, 3000); // Repeat every 3 seconds

    return () => clearInterval(wobbleInterval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center pt-[80px]">
      <h1 className="text-5xl font-bold text-blue-500">Welcome!</h1>

      <h4 className="max-w-[700px] w-[80vw]">
        This web-tool lets you visualize data for an integrated population model developed to estimate the population size, vital rates, and deaths of Leach's storm petrels (<span className="italic">Oceanodroma leucorhoa</span>) across Atlantic Canada.
      </h4>

      <button
        onClick={onGetStartedClick}
        className={`mt-10 px-7 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-all duration-500 ease-out
          ${animateWobble ? "animate-wobble" : ""}`}
      >
        GET STARTED
      </button>
    </div>
  );
};

export default Welcome;
