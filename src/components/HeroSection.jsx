import React, { Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
const Spline = React.lazy(() => import('@splinetool/react-spline'));
function HeroSection() {
  const [showSpline, setShowSpline] = useState(false);
  useEffect(() => {
    // Only show Spline after 2 seconds and not on mobile
    const isMobile = window.innerWidth < 768;
    if (!isMobile) {
      const timer = setTimeout(() => setShowSpline(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);
  return (
   <section className="hero-section h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">
    {/* Left Side */}
    <div className="z-40 xl:mb-0 mb-[20%]">
      <motion.h1
      initial={{y: 80, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{delay: 1.3, type: 'spring', stiffness: 40,
        damping: 25,
        duration: 1.5
      }}
      
      className='text-5xl md:text-7xl lg:texel-8xl font-bold z-10 mb-6'>Building Fast <br /> Reliable Results</motion.h1>

      <motion.p
      initial={{y: 80, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{delay: 1.6, type: 'spring', stiffness: 40,
        damping: 25,
        duration: 1.5
      }}
      className='text-xl md:text-1xl lg:text-2xl text-purple-200 max-w-2xl '>I am a skilled web developer with expertise in React.js, Tailwind CSS, and Framer Motion. I create dynamic and responsive web applications that deliver exceptional user experiences.</motion.p>
    </div>

    {/* Right Side */}
  {/* Spline 3D: Delayed mount and hidden on mobile */}
  {showSpline && (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.9, type: 'spring', stiffness: 40, damping: 25, duration: 1.5 }}
      className="w-full h-full absolute top-0 left-0 hidden md:block"
    >
      <Suspense fallback={<div className="w-full h-full flex items-center justify-center bg-black bg-opacity-40 z-0">Loading 3D...</div>}>
        <Spline scene="https://prod.spline.design/rZKsBeHtuYwVhB-O/scene.splinecode" />
      </Suspense>
    </motion.div>
  )}
   </section>
  )
}

export default HeroSection