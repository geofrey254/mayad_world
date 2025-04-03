'use client'
import React from 'react'
import { ChevronRight, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Link from 'next/link'

interface HeroBlockProps {
  block: {
    heading: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    subheading: any
    cta_button: {
      label: string
      url: string
    }
  }
}

export default function HeroBlock({ block }: HeroBlockProps) {
  return (
    <section className="relative h-[79vh] md:h-screen overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 2,
        }}
      />

      {/* Main content grid */}
      <div className="xl:container mx-auto h-full grid grid-cols-1 lg:grid-cols-2 gap-8 pl-16 xl:px-0">
        {/* Left content side */}
        <div className="flex flex-col justify-center px-6 lg:px-10 py-10 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              className="flex items-center mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Globe className="w-6 h-6 text-yellow-400 mr-2" />
              <span className="text-blue-200 font-medium tracking-wide uppercase text-sm">
                Global Diplomacy
              </span>
            </motion.div>

            <motion.h1
              className="font-serif text-5xl md:text-6xl xl:text-7xl font-bold mb-3 md:mb-6 text-white leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {block.heading}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <RichText
                className="text-lg md:text-xl mb-8 text-blue-100/90 max-w-2xl leading-relaxed"
                data={block.subheading}
              />
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-8 items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div whileHover={{ y: -4 }} whileTap={{ y: 0 }}>
                <Link
                  href={block.cta_button.url}
                  className="bg-yellow-500 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg shadow-lg flex items-center group"
                >
                  {block.cta_button.label}
                  <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -4 }} whileTap={{ y: 0 }}>
                <Link
                  href=""
                  className="border-2 border-yellow-500/80 text-blue-100 hover:bg-blue-800/30 hover:border-blue-400 px-8 py-4 text-lg rounded-lg"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right image side with SVG overlay */}
        <div className="relative hidden lg:block">
          {/* Image with clip path */}
          <motion.div
            className="absolute inset-0 z-10"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: "url('/background/bg.jpg')",
                clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)',
              }}
            />
          </motion.div>

          {/* SVG Overlay */}
          <motion.div
            className="absolute inset-0 z-20 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
              {/* Decorative patterns */}
              <motion.path
                d="M20,0 C40,20 60,20 80,0 L100,0 L100,100 L0,100 Z"
                fill="none"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.8 }}
              />
              <motion.path
                d="M0,80 C20,60 40,90 60,70 C80,50 90,60 100,40"
                fill="none"
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1 }}
              />

              {/* Dots pattern */}
              {[...Array(12)].map((_, i) => (
                <motion.circle
                  key={i}
                  cx={10 + (i % 4) * 25}
                  cy={20 + Math.floor(i / 4) * 25}
                  r="0.5"
                  fill="rgba(255, 255, 255, 0.5)"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 1.2 + i * 0.1,
                  }}
                />
              ))}

              {/* World map outline suggestion */}
              <motion.path
                d="M30,30 C35,25 40,35 45,30 C50,25 55,35 60,30 C65,25 70,35 75,30"
                fill="none"
                stroke="rgba(255, 255, 255, 0.6)"
                strokeWidth="0.3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 3, delay: 1.5 }}
              />
            </svg>
          </motion.div>

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent opacity-70 z-30" />
        </div>
      </div>
    </section>
  )
}
