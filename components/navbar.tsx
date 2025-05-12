"use client";

import { Button } from "@/components/ui/button";
import { Menu, Instagram } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#D8A7A7]/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Text */}
          <Link 
            href="/" 
            className="text-center hover:text-[#D8A7A7] transition-colors duration-300"
          >
            <h1 className="font-playfair text-3xl text-[#222222] leading-none">Khana-Lash</h1>
            <p className="font-poppins text-[10px] text-[#7D7D7D] tracking-wider mt-0.5">SANDON STUDIO</p>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-poppins text-[#7D7D7D] hover:text-[#D8A7A7] transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="https://www.instagram.com/khanalashstudio?igsh=aDgzY200bDNodjc3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#7D7D7D] hover:text-[#D8A7A7] transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="https://khanalashstudio.booksy.com" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#D8A7A7] hover:bg-[#C49A9A] text-white rounded-none transition-all duration-300">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#222222]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#D8A7A7]/20">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-poppins text-[#7D7D7D] hover:text-[#D8A7A7] transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                href="https://www.instagram.com/khanalashstudio?igsh=aDgzY200bDNodjc3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-[#7D7D7D] hover:text-[#D8A7A7] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <Instagram className="w-5 h-5" />
                <span>Follow us on Instagram</span>
              </Link>
              <Link href="https://khanalashstudio.booksy.com" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-[#D8A7A7] hover:bg-[#C49A9A] text-white rounded-none transition-all duration-300">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 