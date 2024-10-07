// plover_page/page.tsx

"use client";

import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import PloverMetrics from '@/app/components/PloverMetrics';

export default function PloverPage() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col min-h-screen relative">
      <Header />
      
      {/* Main content area */}
      <main className="flex-grow my-10 mb-[1000px]">
        <PloverMetrics />
      </main>

      <Footer />
    </div>
  );
}
