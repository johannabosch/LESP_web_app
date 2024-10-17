"use client";

import React, { useState } from 'react';

import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import Timeline from '@/app/components/Timeline';
import Footer from '@/app/components/Footer';

export default function Homepage() {
  return (
    <div className="mx-auto px-4 py-8 flex flex-col h-full relative">
      {/* Header section */}
      <main className="flex-grow">
        <div className="">
          <Header />
        </div>
      </main>

      {/* Hero section */}
      <main className="flex-grow">
        <div className="mb-0">
          <Hero />
        </div>
      </main>


      {/* PIPL timeline */}

      <main className="flex-grow">
      <Timeline />
      </main>


      {/* Footer */}
      <main className="flex-grow">
        <div className="w-full">
          <Footer />
        </div>
      </main>
    </div>
  );
}
