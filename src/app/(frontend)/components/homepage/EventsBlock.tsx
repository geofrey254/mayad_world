import React from 'react'
import { Calendar, MapPin, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { fetchEvents } from '@/app/lib/fetchPosts'

export default async function EventsBlockPage() {
  const event = await fetchEvents()

  if (!event) {
    return <div>Page not found</div>
  }

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
      {/* Main content container */}
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-3 px-3 py-1 rounded-full bg-blue-800/50 border border-blue-700">
            <Calendar className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-blue-200 font-medium text-sm">Upcoming Events</span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-white">
            Model UN Events
          </h2>

          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-blue-100/90 leading-relaxed">
              Join us for these upcoming Model UN conferences, workshops, and training sessions.
              Connect with fellow delegates and enhance your diplomatic skills.
            </p>
          </div>
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {event.map((event) => (
            <div
              key={event.id}
              className="bg-blue-900/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-800/50 hover:border-blue-700/50 transition-all duration-300 group"
            >
              {/* Event image */}
              <div className="h-48 overflow-hidden relative">
                <div
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  style={{
                    backgroundImage: `url('${
                      typeof event.event_thumbnail === 'object' && event.event_thumbnail !== null
                        ? process.env.NEXT_PUBLIC_API_BASE_URL +
                          (event.event_thumbnail.url ?? '/kicc.jpg')
                        : '/fallback-image.jpg' // Fallback image in case of errors
                    }')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-80" />

                <div className="absolute bottom-0 left-0 p-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/90 text-blue-950 text-xs font-semibold">
                    MUN
                  </span>
                </div>
              </div>

              {/* Event content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>

                <div className="space-y-3 mb-5">
                  <div className="flex items-center text-blue-200">
                    <Calendar className="w-4 h-4 mr-2 text-yellow-400" />
                    <span className="text-sm">{event.event_date}</span>
                  </div>

                  <div className="flex items-center text-blue-200">
                    <MapPin className="w-4 h-4 mr-2 text-yellow-400" />
                    <span className="text-sm">location</span>
                  </div>
                </div>

                <p className="text-blue-100/80 text-sm mb-6 line-clamp-2">{event.description}</p>

                <Link
                  href={`/events/${event.id}`}
                  className="inline-flex items-center text-yellow-400 text-sm font-medium group-hover:text-yellow-300 transition-colors"
                >
                  View Details
                  <ChevronRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="mt-16 text-center">
          <Link
            href="/events"
            className="inline-flex items-center bg-blue-700 hover:bg-blue-600 text-white px-8 py-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-blue-500/20"
          >
            View All Events
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="h-full w-full border-l border-r border-blue-800/20 mx-auto max-w-7xl"></div>
        <div className="absolute inset-0 grid grid-cols-6 max-w-7xl mx-auto h-full">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="border-l border-blue-800/20 h-full"></div>
          ))}
        </div>
      </div>
    </section>
  )
}
