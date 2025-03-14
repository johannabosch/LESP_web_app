"use client";

import React, { useEffect, useRef } from 'react';

const Welcome: React.FC = () => {

  return (
    <div className="overflow-hidden p-5 flex items-center justify-center min-h-screen">
      
      <div className="text-center">
        <h1 className="text-4xl">
          Welcome to the petrel app
        </h1>

        <div className="mt-5 text-lg">
          <p>This web-app acts as a tool for visualizing data from an integrated population model <br>
          </br>for Leach's storm petrels (<i>Oceanodroma leucorhous</i>) in Atlantic Canada</p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;