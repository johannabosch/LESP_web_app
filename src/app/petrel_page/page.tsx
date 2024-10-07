"use client";

import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function PetrelPage() {
  return (
    <div className="bg-white container mx-auto px-4 py-8 flex flex-col min-h-screen">
      <Header />
      
      {/* Main content area with flexible spacing */}
      <main className="flex-grow my-10">
        <div className="h-[500px] flex items-center justify-center">
          <p className="text-center">This is the petrel page</p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
