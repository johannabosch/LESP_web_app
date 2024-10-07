// SaveButton.tsx

"use client";

import React from 'react';
import { SaveAsHtml } from '@/app/utils/SaveAsHTML'; // Import the utility function

const SaveButton: React.FC = () => {
  return (
    <button
      onClick={SaveAsHtml} // Use the utility function directly
      className="fixed top-20 right-20 p-2 bg-blue-500 text-white rounded transition hover:bg-blue-700 shadow-md z-50"
    >
      Save as HTML
    </button>
  );
};

export default SaveButton;
