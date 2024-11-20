"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  // refs for elements to animate
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // create a timeline for the initial animations
    const timeline = gsap.timeline({
      defaults: { duration: 1, ease: "power3.out" },
    });

    // add animations to the timeline
    timeline
      .from(containerRef.current, { opacity: 0 })
      .from(titleRef.current, { y: -50, opacity: 0 }, "<0.3")
      .from(contentRef.current, { y: 50, opacity: 0 }, "<0.2")
      // Ensure elements stay visible by explicitly animating to full opacity
      .to(containerRef.current, { opacity: 1 })
      .to(titleRef.current, { opacity: 1, y: 0 })
      .to(contentRef.current, { opacity: 1, y: 0 });

    // clean up on unmount (optional)
    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden p-5 flex items-center justify-center min-h-screen">
      
      <div className="text-center">
        <h1 ref={titleRef} className="text-4xl">
          Welcome to the petrel app
        </h1>

        <div ref={contentRef} className="mt-5 text-lg">
          <p>This web-app acts as a tool for visualizing the distribution and population size</p>
          <p>of Leach's storm petrels (<i>Oceanodroma leucorhous</i>) in Atlantic Canada</p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
