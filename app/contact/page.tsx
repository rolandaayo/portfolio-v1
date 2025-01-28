import React from 'react'
import Navbar from '@/components/shared/Navbar'



export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen md:pt-32 bg-[#121212] py-20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-4 p-4 px-4 sm:px-8 md:px-16">
          <div className="bg-[#1C1C1C] rounded-2xl p-6 md:p-8 space-y-6 shadow-xl border border-gray-800">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-white font-bold text-2xl md:text-3xl mb-2">
                  Get in Touch
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                  I'd love to hear from you. Let's create something amazing together.
                </p>
              </div>
              <span className="text-gray-400 text-xl hover:text-pink-500 transition-colors">↗</span>
            </div>
            
            <div className="relative">
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-300" />
              <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-300" />
              <div className="py-6 md:py-8 my-4">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="text-gray-300 text-sm mb-2 block">Your Name</label>
                    <input 
                      id="name"
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-[#2A2A2A] rounded-lg p-4 text-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all border border-gray-700"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-gray-300 text-sm mb-2 block">Your Email</label>
                    <input 
                      id="email"
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-[#2A2A2A] rounded-lg p-4 text-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all border border-gray-700"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-gray-300 text-sm mb-2 block">Your Message</label>
                    <textarea 
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="w-full bg-[#2A2A2A] rounded-lg p-4 text-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all border border-gray-700"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-300 rounded-lg text-white text-sm font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </>
  )
}