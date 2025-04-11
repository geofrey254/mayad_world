'use client'
import React from 'react'
import { Target, Eye, ArrowRight, Globe, Users } from 'lucide-react'

interface GoalsBlockProps {
  block: {
    mission: string
    vision: string
  }
}

export default function GoalsSection({ block }: GoalsBlockProps) {
  // Default values in case none are provided
  const mission = block.mission
  const vision = block.vision

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-16 max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-neutral-800">Our Purpose</h2>
          <div className="h-1 w-12 bg-blue-900 mx-auto"></div>
        </div>

        {/* Content Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Mission */}
          <div className="group">
            <div className="mb-6 flex items-center">
              <span className="flex items-center justify-center w-10 h-10 rounded-full mr-3 bg-blue-50 text-cyan-600 transition-all group-hover:scale-110">
                <Target size={20} />
              </span>
              <h3 className="text-2xl font-medium text-neutral-800">Our Mission</h3>
            </div>

            <p className="text-neutral-600 leading-relaxed">{mission}</p>
          </div>

          {/* Vision */}
          <div className="group">
            <div className="mb-6 flex items-center">
              <span className="flex items-center justify-center w-10 h-10 rounded-full mr-3 bg-green-50 text-green-600 transition-all group-hover:scale-110">
                <Eye size={20} />
              </span>
              <h3 className="text-2xl font-medium text-neutral-800">Our Vision</h3>
            </div>

            <p className="text-neutral-600 leading-relaxed">{vision}</p>
          </div>
        </div>

        {/* Bottom CTA - Minimalist Style */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-yellow-500/50 rounded-lg overflow-hidden shadow-md">
          <div className="p-8 md:p-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-medium text-white mb-2">
                Ready to participate in our Model UN program?
              </h3>
              <p className="text-blue-100">
                Join delegates from around the world in simulating international diplomacy.
              </p>
            </div>
            <button className="inline-flex items-center bg-white text-blue-600 hover:bg-blue-50 transition-colors font-medium px-6 py-3 rounded-lg shadow-sm">
              Register Now
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
