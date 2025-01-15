'use client'
import React, { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex justify-center py-6 bg-black text-white items-center w-full fixed top-0 z-50">
      <nav className="w-full max-w-6xl px-4">
        <div className="md:hidden flex justify-end">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <ul className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 fixed md:relative top-0 right-0 h-screen md:h-auto w-64 md:w-auto bg-black md:bg-transparent flex flex-col md:flex-row items-center justify-start pt-20 md:pt-0 md:justify-center space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0 transition-transform duration-300 ease-in-out`}>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white md:hidden focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <Link href="/projects"><li className="hover:text-gray-600 cursor-pointer">Projects</li></Link>
          <Link href="/about"><li className="hover:text-gray-600 cursor-pointer">About</li></Link>
          <Link href="/resume"><li className="hover:text-gray-600 cursor-pointer">Resume</li></Link>
          <Link href="/contact"><li className="hover:text-gray-600 cursor-pointer">Contact</li></Link>
          <li>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link href="mailto:somkeneoj@gmail.com">
                <button className="font-semibold text-sm font-sans bg-black text-white px-4 py-2 rounded hover:bg-gray-900 focus:outline-none">
                  <span className="blinking-dot inline-block bg-green-500 rounded-full w-2 h-2 mr-2"></span>
                  Let's Work!
                </button>
              </Link>
            </div>
          </li>
        </ul>

      </nav>
    </div>
  )
}