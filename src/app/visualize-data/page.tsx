"use client";

import React from 'react';
import Header from '@/app/components/Header';
import ModelBackground from '@/app/components/ModelBackground';

import ModelNav from '@/app/components/ModelNav';

import ModelResources from '@/app/components/ModelResources';
import Footer from '@/app/components/Footer';


export default function IPMPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
     
      <Header currentScreen={1} /> 
      
      {/* Main content area */}
      <main className="">
        
        <div className = ''>
          <ModelBackground />
        </div>

        <div className = 'flex-grow mx-10 my-10 mb-10'>
          <ModelNav />
        </div>
       
        <div className = 'flex-grow mx-10 my-10 mb-10'>
          <ModelResources />
        </div>
      </main>

      <Footer />
    </div>
  );
}
