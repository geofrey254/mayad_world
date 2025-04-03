// components/Footer.js
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white border-t-2 border-yellow-500">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Mayad MUN</h3>
            <p className="mb-4">
              Diplomatic solutions for a better tomorrow. Join us in shaping the future of
              international relations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/conference" className="hover:text-blue-300">
                  Conference
                </Link>
              </li>
              <li>
                <Link href="/registration" className="hover:text-blue-300">
                  Registration
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/committees" className="hover:text-blue-300">
                  Committees
                </Link>
              </li>
              <li>
                <Link href="/country-matrix" className="hover:text-blue-300">
                  Country Matrix
                </Link>
              </li>
              <li>
                <Link href="/preparation" className="hover:text-blue-300">
                  Delegate Preparation
                </Link>
              </li>
              <li>
                <Link href="/rules" className="hover:text-blue-300">
                  Rules of Procedure
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-blue-300">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <p className="mb-2">Kikuyu, Kenya</p>
            <p className="mb-2">info@mayadmun.org</p>
            <p className="mb-4">+254 715 337850</p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md focus:outline-none text-blue-900 w-full"
              />
              <button className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-r-md">
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Mayad Model United Nations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
