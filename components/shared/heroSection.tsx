import { FloatingDockDemo } from "./Dock"
import SlideIn from "./SlideIn"
import Image from "next/image"

function HeroSection() {
  return (
    <SlideIn direction="top">
      <div className="xl:px-36 bg-black sm:start text-white sm:px-32">
        <div className="relative isolate px-6 lg:px-8">

          <div className="mx-auto max-w-2xl py-32 sm:py-48">
            <div className="text-center">
              <Image src="/assets/images/hero.avif" alt="Profile Image" width={96} height={96} className="w-24 h-24 rounded-full mx-auto mb-4" />
              <button className="font-semibold text-sm pb-10 font-sans bg-black text-white px-4 py-2 rounded hover:bg-gray-900 focus:outline-none">
                  <span className="blinking-dot inline-block bg-pink-500 rounded-full w-2 h-2 mr-2"></span>
                  Available for new projects!
                </button>
              <h1 className="text-4xl font-extrabold tracking-tight text-pink-200 sm:text-6xl">
                Roland <span className="text-pink-200">Ibiwoye</span> <span className="text-white">Ayotomiwa</span>
              </h1>
              <p className="mt-6 text-lg  font-light leading-8 ">
                <span className="text-gray-500 ">I am a </span><span className="text-white font-bold">Full-Stack developer</span>  <span className="text-gray-500 ">based in</span> <span className="font-extrabold bg-gradient-to-r from-green-500 via-white to-green-500 bg-clip-text text-transparent">Lagos, Nigeria</span>, passionate about creating web applications that are both functional and visually appealing. <span className="font-semibold text-gray-500">"Coding is not just a job for me, it's a hobby that I deeply enjoy."</span>
              </p>
              <div className="flex items-center justify-center gap-x-6">
                <FloatingDockDemo />
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >

          </div>
        </div>

      </div>
    </SlideIn>

  )
}
export default HeroSection