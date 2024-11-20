"use client"

import React, { Suspense, useRef } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Head from 'next/head'

import Header from '@/app/components/Header'
import Timeline from '@/app/components/Timeline'
import Footer from '@/app/components/Footer'

const LoadingFallback = () => <div className="text-center py-10">Page loading...</div>
const ErrorFallback = ({ error }: { error: Error }) => (
  <div role="alert" className="text-center py-10">
    <p>Something went wrong:</p>
    <pre className="text-red-500">{error.message}</pre>
  </div>
)

export default function Homepage() {
  
  return (
    <>
      <Head>
        <title>Petrel website</title>
        <meta name="description" content="Explore the Integrated Population Model for Piping Plovers in Eastern Canada" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/" />
      </Head>

      <div className="flex flex-col min-h-screen bg-white">

        <Header />

        <main className="flex-grow">
          <Timeline />          
        </main>
        
        <Footer />

      </div>
    </>
  )
}