// components/Navbar.jsx
"use client"
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

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
      href: "/images",
      label: "Fotos",
      pathname: "/images",
      special: false
    },
    {
      href: "/videos",
      label: "Videos",
      pathname: "/videos",
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
    const baseClasses = "px-3 py-2 text-sm font-medium transition-colors"
    const isActive = pathname === link.pathname
    
    // Estilos especiales para conciertos
    if (link.special === "concerts") {
      return `${baseClasses} font-semibold ${
        isActive 
          ? "text-yellow-300 border-b-2 border-yellow-400" 
          : "text-yellow-400 hover:text-yellow-300"
      }`
    }
    
    // Estilos especiales para tienda
    if (link.special === "store") {
      return `${baseClasses} font-bold ${
        isActive 
          ? "text-green-300 border-b-2 border-green-400" 
          : "text-green-400 hover:text-green-300"
      }`
    }
    
    // Estilos normales para el resto
    const fontWeight = link.href === "/" ? "font-bold" : ""
    return `${baseClasses} ${fontWeight} ${
      isActive 
        ? "text-white border-b-2 border-white" 
        : "text-gray-300 hover:text-white"
    }`
  }

  const getMobileLinkClasses = (link) => {
    const baseClasses = "block px-3 py-2 text-base font-medium transition-colors"
    const isActive = pathname === link.pathname
    
    return `${baseClasses} ${
      isActive 
        ? "text-white bg-gray-900" 
        : "text-gray-300 hover:text-white hover:bg-gray-700"
    }`
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link 
            href="/" 
            className="text-blue-500 font-bold text-xl hover:text-gray-300 transition-colors"
          >
            Luis Carlos Gago
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