"use client"

import React from 'react'
import Head from 'next/head'

import Header from '@/app/components/Header'
import Welcome from '@/app/components/Welcome'
import Footer from '@/app/components/Footer'

export default function Homepage() {
  return (
    <>
      <Head>
        <title>Petrel Website</title>
        <meta name="description" content="Welcome to the Petrel website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow">
          <Welcome />
        </main>
        <Footer />
      </div>
    </>
  )
}
