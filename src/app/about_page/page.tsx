// about_page/page.tsx

"use client";

import React from 'react';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import IPMGraphic from '@/app/components/IPMGraphic'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col h-full">
      
      <main className="flex-grow">
        <div className="w-full">
          <Header />
        </div>
      </main>

      <main className="flex-grow">
        <div className="w-full">
          <p> coming soon </p>
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
