'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Page } from '@/payload-types'
import Image from 'next/image'

export default function StoryBlock({ block }: { block: Page['layout'][0] }) {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section className="relative min-h-screen overflow-hidden ">
      <motion.div
        className="relative overflow-hidden bg-blue-900 text-white py-20"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6">
          <div className="relative z-10 max-w-2xl">
            <motion.h1
              className="text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              About Us
            </motion.h1>
            <motion.p
              className="text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Transforming ideas into reality through innovation and excellence.
            </motion.p>
          </div>
        </div>

        {/* Yellow accent shape */}
        <div className="absolute right-0 bottom-0">
          <svg width="350" height="350" viewBox="0 0 350 350" fill="none">
            <circle cx="175" cy="175" r="175" fill="#EAB308" />
          </svg>
        </div>
      </motion.div>

      <motion.section
        className="py-20 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div className="md:w-1/2" variants={fadeIn} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">{block.clause}</p>
            </motion.div>
            <motion.div
              className="md:w-1/2 relative"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-blue-900 p-1 rounded-lg rotate-3 shadow-xl">
                <div className="bg-white p-6 rounded-lg -rotate-3">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg">
                    <div className="flex items-center justify-center h-full text-gray-500">
                      <Image src="/background/bg.jpg" width={500} height={500} alt="bout Image" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 h-12 w-12 bg-yellow-500 rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </section>
  )
}
