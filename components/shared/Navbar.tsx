'use client'
import React, { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <style jsx>{`
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
        .blinking-dot {
          animation: blink 1s infinite;
        }
      `}</style>

      <div className="flex justify-center w-full py-4 md:py-6 fixed top-0 z-50 bg-black/80 backdrop-blur-md px-2 md:px-4">
        <div className="border border-neutral-800 rounded-full px-10 md:px-6 py-2 md:py-3 bg-black/50 w-full max-w-xl md:max-w-2xl">
          <nav className="flex items-center justify-between md:justify-center gap-2 md:gap-8">
            <Link href="/" className="text-xs md:text-sm text-neutral-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/resume" className="text-xs md:text-sm text-neutral-400 hover:text-white transition-colors">
              Resume
            </Link>
            <Link href="/contact" className="text-xs md:text-sm text-neutral-400 hover:text-white transition-colors">
              Contact
            </Link>
            <Link 
              href="https://wa.me/2348122447364?text=Hello%20there!%20I%27m%20interested%20in%20your%20services." target="_blank#lets-work" 
              className="text-xs md:text-sm bg-white text-black px-2 md:px-4 py-1 md:py-1.5 rounded-full hover:bg-neutral-200 transition-colors flex items-center gap-1 md:gap-2"
            >
              <span className="relative flex h-1.5 md:h-2 w-1.5 md:w-2">
                <span className="blinking-dot absolute inline-flex h-full w-full rounded-full bg-green-500"></span>
                <span className="relative inline-flex rounded-full h-full w-full bg-green-500/30"></span>
              </span>
              <span className="whitespace-nowrap">Let's Work</span>
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}