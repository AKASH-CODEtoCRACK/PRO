'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

import { images } from '@/lib/images';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const minimumDelay = 3600;

    const startTime = Date.now();

    const handleLoad = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(minimumDelay - elapsed, 0);

      setTimeout(() => {
        setLoading(false);
      }, remaining);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 z-[999999] flex items-center justify-center overflow-hidden bg-white"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.12, 0.2, 0.12],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-1/2 left-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#004B96]/20 blur-3xl"
            />

            <motion.div
              animate={{
                scale: [1.1, 1, 1.1],
                opacity: [0.08, 0.18, 0.08],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C4006A]/20 blur-3xl"
            />
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center text-center px-6">

            {/* Logo Animation */}
            <motion.div
              initial={{
                scale: 2.5,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative w-28 h-28 md:w-36 md:h-36"
            >
              <Image
                src={images.logo}
                alt="HRPR Logo"
                fill
                priority
                className="object-contain"
              />
            </motion.div>

            {/* Brand Name */}
            {/* <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-3xl md:text-5xl font-black tracking-tight"
            >
              <span className="text-[#C4006A]">HR</span>
              <span className="text-[#004B96]">PR</span>
            </motion.h1> */}

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-4 text-lg md:text-xl font-medium text-gray-700"
            >
              Loading UAE’s Trusted PRO Services
            </motion.p>

            {/* Animated Dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-2 mt-5"
            >
              {[0, 1, 2].map((dot) => (
                <motion.div
                  key={dot}
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 0.9,
                    repeat: Infinity,
                    delay: dot * 0.15,
                  }}
                  className={`w-2.5 h-2.5 rounded-full ${
                    dot === 1
                      ? 'bg-[#C4006A]'
                      : 'bg-[#004B96]'
                  }`}
                />
              ))}
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-5"
            >
              {/* <p className="text-sm md:text-base uppercase tracking-[0.35em] text-gray-500">
                Premier Government Relations
              </p> */}

              <h3 className="mt-2 text-2xl md:text-4xl font-bold">
                <span className="text-[#C4006A]">Best PRO</span>{' '}
                <span className="text-[#004B96]">Services in UAE</span>
              </h3>
            </motion.div>

            {/* Animated Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '240px' }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="mx-auto mt-6 h-[2px] rounded-full bg-gradient-to-r from-[#C4006A] via-[#004B96] to-[#C4006A]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}