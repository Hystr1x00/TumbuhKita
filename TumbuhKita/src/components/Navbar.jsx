import React, { useState, useEffect } from "react"
import { HiMenu, HiX } from "react-icons/hi"
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('#fitur')
    const [inverse, setInverse] = useState(true) // true: font putih, false: font hitam
    const navigate = useNavigate();

    const navLinks=[
        {href:"#fitur", label:"Fitur"},
        {href:"#carakerja", label:"Cara Kerja"},
        {href:"#dukungan", label:"Dukungan"},
        {href:"#faq", label:"FAQ"},
    ]

    useEffect(() => {
      const handleScroll = () => {
        const fitur = document.getElementById('fitur')
        const kerja = document.getElementById('carakerja')
        const dukungan = document.getElementById('dukungan')
        const faq = document.getElementById('faq')
        const scrollY = window.scrollY + 120 // offset navbar

        if (faq && scrollY >= faq.offsetTop) {
          setActiveLink('#faq')
          setInverse(false)
        } else if (dukungan && scrollY >= dukungan.offsetTop) {
          setActiveLink('#dukungan')
          setInverse(false)
        } else if (kerja && scrollY >= kerja.offsetTop) {
          setActiveLink('#carakerja')
          setInverse(false)
        } else if (fitur && scrollY >= fitur.offsetTop) {
          setActiveLink('#fitur')
          setInverse(true)
        } else {
          setActiveLink('')
          setInverse(false) // font hitam di Hero
        }
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className='fixed top-5 left-12 right-12 backdrop-blur-sm z-50'>
            <div className="w-full flex items-center justify-between px-0 sm:px-4 lg:px-8 md:h-20 h-16 pl-0">
                {/*logo*/}
                <div className="flex items-center gap-1 cursor-pointer">
                    <img src="./Logo.svg" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                    <div className="pl-2 font-semibold text-secondary-50 text-base sm:text-lg md:text-xl lg:text-2xl">TumbuhKita.</div>
                </div>

                {/*Nav Items*/}
                <div className="hidden md:flex items-center 
                gap-6 
                lg:gap-14 
                lg:ml-12
                sm:ml-4 
                sm:gap-4
                md:ml-8
                md:gap-6"> 
                    {
                        navLinks.map((link, index) => (
                            <a key={index} 
                            href={link.href} 
                            onClick={() => setActiveLink(link.href)}
                            className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary-50 after:transition-all after:duration-300 ${activeLink === link.href ? "text-primary-50 after:w-full" : inverse ? "text-white hover:text-primary-50" : "text-black hover:text-primary-50"}`}>
                                {link.label}
                            </a>
                        ))
                    }
                </div>

                {/*Button*/}
                <div className="hidden md:flex items-center gap-4 lg:gap-6 ml-4 sm:ml-4 lg:ml-12">
                    <button onClick={() => navigate('/login')} className="bg-white border-1 rounded-xl border-black px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-base lg:px-5 lg:py-2.5 lg:text-s text-center hover:bg-primary-90 hover:text-white hover:border-primary-90 hover:shadow-lg hover:shadow-primary-50 transition-all duration-600">Masuk</button>
                    <button onClick={() => navigate('/register')} className="whitespace-nowrap text-white bg-primary-50 rounded-xl px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-base lg:px-5 lg:py-2.5 lg:text-s text-center hover:bg-primary-90 hover:shadow-lg hover:shadow-primary-50 transition-all duration-600">Daftar Sekarang</button>
                </div>

            {/*Mobile Menu*/}
            <button onClick={ () => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
                {
                    isMenuOpen ? <HiX className="size-8"/> : <HiMenu className="size-8" />
                }
            </button>
            
            </div>

            {/* mobile menu items */}
            {
                isMenuOpen && (
                    <div className={`md:hidden ${inverse ? 'bg-secondary-50' : 'bg-white'} border-t border-gray-100 py-4`}>
                        <div className='container mx-auto px-4 space-y-4'>
                            {navLinks.map((link, index) => (
                                <a
                                onClick={() => {
                                setActiveLink(link.href); 
                                setIsMenuOpen(false);
                                }}
                                className={`block text-sm font-medium py-2 ${activeLink === link.href ? "text-primary-50" : inverse ? "text-white hover:text-primary-50" : "text-black hover:text-primary-50" }`} href={link.href}>{link.label}</a>
                            ))}

                            <div className="flex flex-col gap-4 pt-6 border-t">
                                <button onClick={() => { setIsMenuOpen(false); navigate('/login'); }} className="bg-white border-1 rounded-xl border-black px-3 py-1.5 text-lg text-center hover:bg-primary-90 hover:text-white hover:border-primary-90 hover:shadow-lg hover:shadow-primary-50 transition-all duration-600">Masuk</button>
                                <button onClick={() => { setIsMenuOpen(false); navigate('/register'); }} className="whitespace-nowrap text-white bg-primary-50 rounded-xl px-3 py-1.5 text-lg text-center hover:bg-primary-90 hover:shadow-lg hover:shadow-primary-50 transition-all duration-600">Daftar Sekarang</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </nav>
    )
}

export default Navbar