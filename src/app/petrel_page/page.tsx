// plover_page/page.tsx

"use client";

import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import PloverMetrics from '@/app/components/PetrelMetrics';
import PetrelMetrics from '@/app/components/PetrelMetrics';

export default function PloverPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
     <Header />
      
      {/* Main content area */}
      <main className="flex-grow my-10 mb-[1000px]">
        <PetrelMetrics />
      </main>

      <Footer />
    </div>
  );
}
