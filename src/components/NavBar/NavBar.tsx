// components/Navbar.jsx
"use client"
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Bebas_Neue } from 'next/font/google';
const bebas_neue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],  
  display: 'swap',
  
}); 

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    {
      href: "/",
      label: "Inicio",
      pathname: "/",
      special: false
    },
    {
      href: "/biografia",
      label: "Biografía",
      pathname: "/biografia",
      special: false
    },
    {
      href: "/discografia",
      label: "Discografía",
      pathname: "/discografia",
      special: false
    },
    {
      href: "/galeria",
      label: "Galeria",
      pathname: "/galeria",
      special: false
    },
      {
      href: "/noticias",
      label: "Noticias",
      pathname: "/noticias",
      special: false
    },
    {
      href: "/conciertos",
      label: "Conciertos",
      pathname: "/conciertos",
      special: "concerts"
    },
    {
      href: "/tienda",
      label: "Tienda",
      pathname: "/tienda",
      special: "store"
    },
    {
      href: "/contacto",
      label: "Contacto",
      pathname: "/contacto",
      special: false
    }
  ]

  const getLinkClasses = (link) => {
    const baseClasses = `${bebas_neue.className} shadow-lg px-3 py-2 text-2xl font-medium transition-colors`
    const isActive = pathname === link.pathname
    
    // Estilos especiales para conciertos
    if (link.special === "concerts") {
      return `${baseClasses} ${bebas_neue.className} font-semibold ${
        isActive 
          ? "text-yellow-300 border-b-2 border-yellow-400" 
          : "text-yellow-400 hover:text-yellow-300"
      }`
    }
    
    // Estilos especiales para tienda
    if (link.special === "store") {
      return `${baseClasses} ${bebas_neue.className} font-bold ${
        isActive 
          ? "text-green-300 border-b-2 border-green-400" 
          : "text-green-400 hover:text-green-300"
      }`
    }
    
    // Estilos normales para el resto
    const fontWeight = link.href === "/" ? `${bebas_neue.className} font-bold` : ""
    return `${baseClasses} ${fontWeight} ${
      isActive 
        ? "text-white border-b-2 border-white shadow-lg" 
        : "text-gray-300 hover:text-white shadow-lg"
    }`
  }

  const getMobileLinkClasses = (link) => {
    const baseClasses = `${bebas_neue.className} block px-3 py-2 text-base font-medium transition-colors`
    const isActive = pathname === link.pathname
    
    return `${baseClasses} ${
      isActive 
        ? "text-white bg-gray-900" 
        : "text-gray-300 hover:text-white hover:bg-gray-700"
    }`
  }

  return (
        <nav className=" bg-transparent ">
      <div className=" w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link 
            href="/" 
              className={`${bebas_neue.className} space-x-2 text-white shadow-lg font-bold text-3xl font-semibold hover:text-gray-300 transition-colors`}
          >
            <span className='text-green-600'>Luis</span>
            <span className='text-white'>Carlos</span>
            <span className='text-red-500'>Gago</span>
          </Link>
            
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={getLinkClasses(link)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
           
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
         
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90">
              {navLinks.map((link) => (
                <Link
                  key={`mobile-${link.href}`}
                  href={link.href}
                  className={getMobileLinkClasses(link)}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}