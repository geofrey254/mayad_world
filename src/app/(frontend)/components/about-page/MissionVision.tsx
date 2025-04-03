'use client'
import React from 'react'
import { Page } from '@/payload-types'

export default function MissionVision({ block }: { block: Page['layout'][0] }) {
  return (
    <section className="relative py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-blue-200/25 bg-grid bg-center mix-blend-soft-light"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <div className="w-16 h-1 bg-yellow-400 mb-4 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 text-center">Our Values</h2>
          <p className="mt-4 text-lg text-blue-700/60 max-w-2xl text-center">
            Guiding principles that define our organization and shape our future
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Mission Card */}
          <div className="group">
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900">Our Mission</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-lg text-slate-700 leading-relaxed">{block.mission}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group">
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-600 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 0 0 16 0 3 3 0 010-6z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900">Our Vision</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-lg text-slate-700 leading-relaxed">{block.vision}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
