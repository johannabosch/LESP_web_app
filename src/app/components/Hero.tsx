"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

// Hero component props
interface HeroProps {
  onScrollDown: () => void;
}

// Enhanced fade in animation
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 1.5, 
      ease: "easeOut" 
    } 
  }
}

const Hero: React.FC<HeroProps> = ({ onScrollDown }) => {
  const [showContent, setShowContent] = useState(false)
  const [objectPosition, setObjectPosition] = useState('100% center');

  useEffect(() => {
    setShowContent(true)
  }, [])

  useEffect(() => {

    // Function to update the hero bg image position based on window width
    const updateObjectPosition = () => {
      if (window.innerWidth < 1354) {
        setObjectPosition('88% center');
      } else {
        setObjectPosition('100% center');
      }
    };

    updateObjectPosition();
    window.addEventListener('resize', updateObjectPosition);

    return () => window.removeEventListener('resize', updateObjectPosition);
  }, []);

  return (
    <section className="relative overflow-hidden
     h-[600px] lg:h-[600px] md:h-[580px] sm:h-[580px]">

        <Image
          src="/images/PIPL/Wildpix645.svg"
          alt="Photo from Getty Images"
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: objectPosition}}
          priority
          quality={100}
        />

      <motion.div 
        className="absolute inset-0 bg-blue-950/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
      />


      <div className="relative z-10 h-full flex flex-col pl-4 md:pl-8 lg:pl-1 max-w-5xl">
        <motion.div 
          className="max-w-5xl text-white ml-0 md:ml-8 lg:ml-16"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >

          <motion.h1 
            className="mt-[0px] lg:mt-[100px] md:mt-[100px] sm:mt-[0px] drop-shadow-2xl
            text-[#E0DEDA] text-shadow-xl font-bold py-8 leading-tight
            text-2xl md:text-3xl lg:text-4xl xl:text-5xl sm:text-2xl"
          >
            <motion.span>Demographic modeling for</motion.span>{' '} <br />
            <motion.span className="text-[#D18D53] drop-shadow-xl">Piping Plover</motion.span>{' '}
            <motion.span>in Eastern Canada</motion.span>
          </motion.h1>


          <AnimatePresence>
            {showContent && (
              <motion.div
                className="bg-gradient-to-r from-[#1D282B] via-[#1D282B] to-transparent bg-opacity-10 p-6 rounded-lg backdrop-blur-sm 
                mt-[120px] lg:mt-[0px] md:mt-[0px] sm:mt-[120px] 
                w-[80vw] lg:w-[80vw] md:w-[80vw] sm:w-[80vw] max-w-[1000px]"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <motion.p 
                  className="mb-4 pr-10 text-sm md:text-base lg:text-lg md:text-md sm:text-sm"
                >
                  The Piping Plover is an Endangered species of shorebird whose population has been well-studied in eastern Canada. We combined all of the available demographic data for the Atlantic Piping Plover collected between 1991-2022 to build an Integrated Population Model (IPM) that provides new insights into changes in their population structure over time (<Link href="/" className="text-blue-300 hover:underline">Calvert et al. 2024</Link>). Scroll down to learn more about the history of plover research in Canada.
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-4"
                >
                  <Link 
                    href="/about_page" 
                    className="px-4 py-2 bg-[#E0DEDA] text-black rounded-md hover:bg-[#D18D53] hover:text-white transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-sm"
                    
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1, duration: 0.5 }}
                    >
                      Review the model's structure
                    </motion.span>
                  </Link>
                  <Link 
                    href="/plover_page" 
                    className="px-4 py-2 bg-[#E0DEDA] text-black rounded-md hover:bg-[#D18D53] hover:text-white transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-sm"
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2, duration: 0.5 }}
                    >
                      Visualise the plover population model
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>

      </div>
    </section>
  )
}

export default Hero