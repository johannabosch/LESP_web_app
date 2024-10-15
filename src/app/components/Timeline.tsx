"use client";

import React from 'react';

const Timeline: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Project Background</h1>

      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {/* Timeline Item 1 */}
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">1984</time>
            <div className="text-lg font-black">Beginning of Seabird Research</div>
            <p>
              Early research efforts started with studying seabird populations along the Atlantic coast to understand the breeding behaviors and migration routes.
            </p>
          </div>
          <hr />
        </li>

        {/* Timeline Item 2 */}
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">1998</time>
            <div className="text-lg font-black">Population Monitoring Intensified</div>
            <p>
              With the rising concerns over declining seabird populations, monitoring efforts were intensified across Atlantic Canada.
            </p>
          </div>
          <hr />
        </li>

        {/* More timeline items can be added similarly */}
      </ul>
    </div>
  );
};

export default Timeline;
