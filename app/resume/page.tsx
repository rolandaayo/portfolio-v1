import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/shared/Navbar'
import GetInTouch from '@/components/shared/GetInTouch';

export default function page() {
        return (
          <div className="flex bg-black pt-32 flex-col min-h-screen">
            <Navbar />
            <div className="flex-1 w-full px-4 py-6 md:px-8">
              <object
                data="/assets/images/resume.pdf"
                type="application/pdf"
                width="100%"
                height="100%"
                className="w-full h-[calc(100vh-80px)] md:h-[calc(100vh-100px)] rounded-lg shadow-lg"
              >
                <div className="text-center py-4">
                  <p>Unable to display PDF file. <a href="/assets/resume.pdf" className="text-blue-600 hover:underline">Download</a> instead.</p>
                </div>
              </object>
            </div>
            <GetInTouch />
          </div>
        )
}