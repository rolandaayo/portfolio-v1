import React from 'react'

export default function Skillz() {
  return (
    <div>
      <div className='opacity: 1; transform: none;'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-5 sm:px-8 md:px-16 lg:px-40 pt-10 md:pt-20 pb-6 md:pb-9 font-medium text-transparent bg-clip-text bg-gradient-to-br from-pink-300 to-yellow-300'>My Tech Stack 👨🏽‍💻</h1>
      </div>

      <div className='flex flex-col md:pt-10 pb-16 md:pb-28 lg:flex-row items-center justify-center gap-8
      16 md:gap-8'>
        <div className='flex bg-[#171717] p-10 sm:p-8 md:p-12 lg:p-10 rounded-xl  md:flex-row justify-center items-center gap-4 md:gap-8'>
            <div>
                <div className='flex items-center gap-3 md:gap-4 hover:transform hover:scale-105 transition-all duration-300'>
                    <img src="/assets/images/assets/javascript-original.svg" alt="Skills" className="w-8 h-8 md:w-12 md:h-12 rounded-lg shadow-lg" />
                    <h3 className='text-white text-base md:text-md font-medium'>Javascript</h3>
                </div>
                <div className='flex items-center gap-3 md:gap-4 mt-4 md:mt-6 hover:transform hover:scale-105 transition-all duration-300'>
                    <img src="/assets/images/assets/tailwindcss-original.svg" alt="Skills" className="w-8 h-8 md:w-12 md:h-12 rounded-lg shadow-lg" />
                    <h3 className='text-white text-base md:text-md font-medium'>TailwindCSS</h3>
                </div>
                <div className='flex items-center gap-3 md:gap-4 mt-4 md:mt-6 hover:transform hover:scale-105 transition-all duration-300'>
                    <img src="/assets/images/assets/nextjs-original.svg" alt="Skills" className="w-8 h-8 md:w-12 md:h-12 rounded-lg shadow-lg" />
                    <h3 className='text-white text-base md:text-md font-medium'>Next Js</h3>
                </div>
                <div className='flex items-center gap-3 md:gap-4 mt-4 md:mt-6 hover:transform hover:scale-105 transition-all duration-300'>
                    <img src="/assets/images/assets/express-original.svg" alt="Skills" className="w-8 h-8 md:w-12 md:h-12 rounded-lg shadow-lg" />
                    <h3 className='text-white text-base md:text-md font-medium'>Express</h3>
                </div>
                <div className='flex items-center gap-3 md:gap-4 mt-4 md:mt-6 hover:transform hover:scale-105 transition-all duration-300'>
                    <img src="/assets/images/assets/mongodb-original.svg" alt="Skills" className="w-8 h-8 md:w-12 md:h-12 rounded-lg shadow-lg" />
                    <h3 className='text-white text-base md:text-md font-medium'>MongoDB</h3>
                </div>
            </div>
            <div>
                <div className='flex items-center gap-3 md:gap-4 hover:transform hover:scale-105 transition-all duration-300'>
                    <img src="/assets/images/assets/typescript-original.svg" alt="Skills" className="w-8 h-8 md:w-12 md:h-12 rounded-lg shadow-lg" />
                    <h3 className='text-white text-base md:text-md font-medium'>Typescript</h3>
                </div>
                <div className='flex items-center gap-3 md:gap-4 mt-4 md:mt-6 hover:transform hover:scale-105 transition-all duration-300'>
                    <img src="/assets/images/assets/react-original.svg" alt="Skills" className="w-8 h-8 md:w-12 md:h-12 rounded-lg shadow-lg" />
                    <h3 className='text-white text-base md:text-md font-medium'>React</h3>
                </div>
                <div className='flex items-center gap-3 md:gap-4 mt-4 md:mt-6 hover:transform hover:scale-105 transition-all duration-300'>
                    <img src="/assets/images/assets/nodejs-original.svg" alt="Skills" className="w-8 h-8 md:w-12 md:h-12 rounded-lg shadow-lg" />
                    <h3 className='text-white text-base md:text-md font-medium'>Node Js</h3>
                </div>
                <div className='flex items-center gap-3 md:gap-4 mt-4 md:mt-6 hover:transform hover:scale-105 transition-all duration-300'>
                    <img src="/assets/images/assets/postman-original.svg" alt="Skills" className="w-8 h-8 md:w-12 md:h-12 rounded-lg shadow-lg" />
                    <h3 className='text-white text-base md:text-md font-medium'>Postman</h3>
                </div>
                <div className='flex items-center gap-3 md:gap-4 mt-4 md:mt-6 hover:transform hover:scale-105 transition-all duration-300'>
                    <img src="/assets/images/assets/postgresql-original.svg" alt="Skills" className="w-8 h-8 md:w-12 md:h-12 rounded-lg shadow-lg" />
                    <h3 className='text-white text-base md:text-md font-medium'>PostgreSQL</h3>
                </div>
            </div>
        </div>
        <div className='max-w-2xl space-y-4 md:space-y-6 text-gray-300 text-1xl md:text-md leading-relaxed p-4 sm:p-6 bg-[#171717] rounded-xl backdrop-blur-sm mx-4 sm:mx-8 md:mx-0'>
            <p>My journey into software engineering began with a passion for artistic creation, honed through drawing and making music. This creative background naturally guided me toward the world of technology, where I could merge artistry with problem-solving through software development.</p>
            <p>I specialize in both frontend and backend development, with extensive experience across the full stack. I thrive on the continuous learning and creativity that coding offers, enjoying the challenge of transforming ideas into impactful digital solutions. "For me, coding is not just a profession, it's a space to innovate and unleash my creativity"</p>
            <p>Beyond coding, I enjoy video creation, video editing and watching anime, both of which inspire my approach to UI/UX design by shaping how I think about visual storytelling and aesthetics ✨</p>
        </div>
      </div>
    </div>
  )
}
