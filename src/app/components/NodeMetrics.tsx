"use client";

import React, { useState, useEffect } from 'react';

// import nodes
const figures = [
  "Dflox.html",
  "Doffshore.html",
  "Donshore.html",
];

// the metrics displayed

const NodeMetrics: React.FC = () => {
  return (
    <div className = "flex flex-col items-center space-y-4 p-4">

      {figures.map((fig, index) => ( //loops through figures to apply iframe (using index)
        <iframe //using iframe (HTML element) for now to embed HTML, will change
        key={index}
        src={`/figures/${fig}`}
        className="w-full h-[600px] border rounded-lg shadow-md"
        title={`Figure ${index + 1}`}
        />

      ))}

    </div>
  );
}

export default NodeMetrics;


