'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface LandingAboutProps {
  block: {
    heading: string
    description: string
    about_button: {
      label: string
      url: string
    }
  }
}

export default function LandingAboutBlock({ block }: LandingAboutProps) {
  return (
    <section className="py-20 bg-blue-50 border-t-2 border-yellow-500">
      <div className="xl:container mx-auto px-18 xl:px-0">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="font-serif text-4xl font-bold text-blue-900 mb-6">{block.heading}</h2>
            <p className="text-blue-800 mb-8">{block.description}</p>

            <Link
              href={block.about_button.url}
              className="bg-blue-800 border-2 border-yellow-500 hover:bg-blue-900 text-white px-6 py-4 rounded-3xl"
            >
              Our History
            </Link>
          </div>
          <div className="md:w-1/2 rounded-lg overflow-hidden shadow-xl">
            <div className="aspect-video bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/background/bg.jpg"
                  alt="MUN Conference"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
