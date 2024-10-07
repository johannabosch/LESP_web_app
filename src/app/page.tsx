"use client";

import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import IPMGraphic from '@/app/components/IPMGraphic';
import Hero from '@/app/components/Hero';

export default function Homepage() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col h-full">
      
      <main className="flex-grow">
        <div className="w-full">
          <Header />
        </div>
      </main>

      <main className="flex-grow">
        <div className="w-full mb-0">
          <Hero />
        </div>
      </main>
      
      <main className="flex-grow mt-0">
        <div className="w-full text-center py-8">
          <h1 className="text-4xl font-bold mb-4 mt-0"> Schematic of the IPM </h1>
          <p className="text-xl mb-6">
            Click on the model boxes below to learn more.
          </p>
          <div className="mb-[100px]">
          < IPMGraphic />
          </div>
        </div>
      </main>

       <main className="flex-grow">
        <div className="w-full">
          <Footer />
        </div>
      </main>
    </div>
  );
}
