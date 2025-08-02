import React from 'react'
import EllipseBackground from './EllipseBackground'
import balita from '../assets/balita.svg'
import reviewImage from '../assets/review.svg'
import DiamondStar from './DiamondStar'

export const Hero = () => {
  return (
    <section className='w-full mx-auto flex flex-col md:flex-row justify-between items-center px-0 sm:px-0 pt-16 md:pt-0 lg:px-0 min-h-screen overflow-hidden'>
        {/* lef col */}
        <div className='w-full md:w-2/5 space-y-6 z-10 pl-20'>
            {/* big title */}
            <div className='space-y-3'>
                <div className='text-5xl md:text-6xl font-bold text-center md:text-left bg-gradient-to-r from-gradient-A to-gradient-B text-transparent bg-clip-text'>Biar Tumbuh Optimal,</div>
                <div className='text-5xl md:text-6xl font-bold text-center md:text-left leading-snug text-secondary-50'>Yuk Pantau Tumbuh Kembang Anak dari Mana Aja!</div>
            </div>
            {/* Small caption */}
            <div className='text-center md:text-left text-neutral-70'>
                <p>
                    Akses dari HP atau komputer. Kolaborasi orang tua, posyandu, tenaga kesehatan, dan desa dalam satu aplikasi terpadu.
                </p>
            </div>
            {/* Button */}
            <div className="hidden md:flex items-center lg:gap-4 pt-2">
                <a href="#registrasi" className="whitespace-nowrap text-white bg-primary-50 rounded-xl px-3 py-2 text-xl font-semibold sm:px-4 sm:py-2 sm:text-base lg:px-8 lg:py-4 lg:text-lg hover:bg-primary-90 hover:shadow-lg hover:shadow-primary-50 transition-all duration-600">Unduh Aplikasinya Sekarang! </a>
            </div>
        </div>

        {/* right col */}
        <div className='w-full md:w-1/2 h-full relative pr-70'>
            {/* shape bg */}
            <div className="relative w-full h-full">
                <EllipseBackground />
            </div>
            {/* jumbo image & review overlay */}
            <div className='relative -mt-150 z-10 transform translate-x-70'>
                {/* Overlay Stars */}
                <div >
                    <DiamondStar size={48} color="#FFD694" style={{ position: 'absolute', left: '10%', top: '10%', zIndex: 40}} />
                    <DiamondStar size={32} color="#FFD233" style={{ position: 'absolute', left: '20%', top: '10%', zIndex: 40}} />
                    <DiamondStar size={26} color="#FFD233" style={{ position: 'absolute', left: '17.5%', top: '17.5%', zIndex: 40}} />
                </div>

                <div >
                    <DiamondStar size={48} color="#FFD694" style={{ position: 'absolute', left: '70%', top: '80%', zIndex: 40}} />
                    <DiamondStar size={32} color="#FFD233" style={{ position: 'absolute', left: '80%', top: '80%', zIndex: 40}} />
                    <DiamondStar size={26} color="#FFD233" style={{ position: 'absolute', left: '77.5%', top: '87.5%', zIndex: 40}} />
                </div>

                {/* Rectangle Gradient Blur Overlay */}
                <div className="absolute inset-0 z-20 pointer-events-none flex items-end">
                  <div
                    className="w-1000 h-60 -ml-25"
                    style={{
                      background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 100%)',
                      filter: 'blur(0px)',
                    }}
                  />
                </div>
                <div className='absolute inset-0 z-20 pointer-events-none flex items-end'>
                    <div 
                    className='w-1000 h-60 -ml-25 -mb-50'
                    style={{
                        background: 'white',
                        filter: 'blur(32px)',
                    }}
                    />
                </div>
                <img src={balita} alt="balita" className='w-full h-auto max-w-[120%]' />
                {/* Review image overlay */}
                <img src={reviewImage} alt="review" className='absolute left-0 top-3/4 w-[40%] max-w-[300px] -translate-x-1/2 -translate-y-1/2 z-30' />
            </div>
        </div>
    </section>
  )
}
