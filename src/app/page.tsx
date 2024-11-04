"use client"

import React, { Suspense, useRef } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Head from 'next/head'

import Header from '@/app/components/Header'
import Hero from '@/app/components/Hero'
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
        <title>Piping Plover IPM | Homepage</title>
        <meta name="description" content="Explore the Integrated Population Model for Piping Plovers in Eastern Canada" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/" />
      </Head>

      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow">
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<LoadingFallback />}>
              <Hero onScrollDown={() => {}} />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<LoadingFallback />}>
              <Timeline />
            </Suspense>
          </ErrorBoundary>
          
        </main>
        
        <Footer />
      </div>
    </>
  )
}