// plover_page/page.tsx

"use client";

import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ModelBackground from '@/app/components/ModelBackground';
import NodeMetrics from '@/app/components/NodeMetrics';

export default function IPMPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
     
     <Header/>
      
      {/* Main content area */}
      <main className="">
        
        <div className = ''>
          <ModelBackground />
        </div>

        <div className = 'flex-grow mx-10 my-10 mb-10'>
          <NodeMetrics />
        </div>
       
      </main>

      <Footer />
    </div>
  );
}
