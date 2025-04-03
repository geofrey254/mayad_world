// components/Navbar.js
'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

interface NavItems {
  label: string
  link: string
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [navItems, setNavItems] = useState<NavItems[]>([])
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const fetchNavItems = async () => {
      try {
        const res = await fetch('/api/header')
        const data = await res.json()

        setNavItems(data.nav)
      } catch (error) {
        console.error('Failed to fetch navigation data', error)
      }
    }

    fetchNavItems()
  }, [])

  return (
    <nav className="bg-white fixed shadow-md w-full z-50 border-b-2 border-yellow-500">
      <div className="max-w-screen-xl px-8 mx-auto 2xl:px-0">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <span className="font-serif text-2xl font-bold text-blue-900 logo-name">
              Mayad World Connections
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((nav, index) => (
              <Link
                key={index}
                href={nav.link}
                className="text-blue-900 hover:text-blue-700 font-medium"
              >
                {nav.label}
              </Link>
            ))}

            <Button className="bg-blue-800 hover:bg-blue-900 text-white ml-4">Register</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-blue-900">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navItems.map((nav, index) => (
              <Link
                key={index}
                href={nav.link}
                className="text-blue-900 hover:text-blue-700 font-medium"
              >
                {nav.label}
              </Link>
            ))}
            <Button className="bg-blue-800 hover:bg-blue-900 text-white w-full">Register</Button>
          </div>
        </div>
      )}
    </nav>
  )
}
