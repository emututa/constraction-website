"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import log from "@/public/logo.png"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="bg-[#3256A1]/80  text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-36">
           <Link href="/#" className="  mt-9"> 
              <Image src={log} alt="logo" width={150} height={150}/>
            </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-[#FFBC01] transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:8702837563"
              className="flex items-center space-x-2 text-white hover:text-[#FFBC01] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">(870) 283 7563</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-[#FFBC01] transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#0E3998] border-t border-white/10">
          <div className="px-4 pt-2 pb-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-white hover:text-[#FFBC01] transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:8702837563"
              className="flex items-center space-x-2 text-white hover:text-[#FFBC01] transition-colors py-2"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">(870) 283 7563</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
