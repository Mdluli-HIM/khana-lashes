"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] bg-[#F7F5F2] flex items-center justify-center py-8 md:py-16">
      <div className="w-full max-w-7xl mx-auto bg-white border border-[#222] shadow-lg overflow-visible">
        {/* Top Heading */}
        <div className="pt-6 pb-3 text-center border-b border-[#222]">
          <span className="block font-playfair text-2xl md:text-3xl tracking-widest text-[#222]">KHANA-LASH STUDIO</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[100px_1fr_360px] grid-rows-[auto_1fr] border-b border-[#222]">
          {/* Vertical Brand/Tagline */}
          <div className="hidden md:flex flex-col items-center justify-center border-r border-[#222] row-span-2 bg-[#F7F5F2]">
            <span className="font-playfair text-2xl font-bold text-[#222] tracking-tight rotate-[-90deg] whitespace-nowrap select-none">LASH ARTISTRY</span>
          </div>
          {/* Main Image */}
          <div className="relative flex items-center justify-center border-r border-[#222] row-span-2 bg-white">
            <div className="relative w-56 h-72 md:w-80 md:h-[420px] overflow-hidden m-6 md:m-8 border border-[#222]">
              <Image
                src="/image copy.png"
                alt="Khana-Lash Model"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          {/* Right: Text Box */}
          <div className="flex flex-col items-center justify-center p-6 md:p-8 border-l border-[#222] bg-white row-span-2">
            <div className="w-full flex flex-col items-center">
              <h1 className="font-playfair text-3xl md:text-4xl font-bold text-[#222] mb-6 text-center leading-tight">
                Welcome to Luxury<br />Lash Extensions
              </h1>
              <p className="font-poppins text-[#7D7D7D] text-base md:text-lg text-center mb-8 max-w-sm">
                Discover the art of beautiful lashes at Khana-Lash Studio. Experience bespoke beauty and confidence with every visit.
              </p>
              <Link href="https://khanalashstudio.booksy.com" target="_blank" rel="noopener noreferrer">
                <button className="px-10 py-4 bg-[#D8A7A7] text-white font-poppins rounded-none shadow hover:bg-[#C49A9A] transition-all duration-300 text-base font-semibold border border-[#222]">
                  Book Now
                </button>
              </Link>
              <div className="mt-8 text-xs text-[#222] font-poppins tracking-widest">FIRMA DE CONTRATO</div>
            </div>
          </div>
        </div>
        {/* Bottom Row: Social/Info - always show all four items, evenly spaced */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-[#222] text-xs text-[#222] font-poppins divide-x divide-[#222]">
          <a 
            href="https://www.instagram.com/khanalashstudio?igsh=aDgzY200bDNodjc3" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-3 text-center hover:bg-[#D8A7A7] hover:text-white transition-all duration-300"
          >
            Instagram
          </a>
          <a 
            href="/" 
            className="px-4 py-3 text-center hover:bg-[#D8A7A7] hover:text-white transition-all duration-300"
          >
            2024 &copy; Khana-Lash Studio
          </a>
          <a 
            href="https://khanalashstudio.booksy.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-3 text-center hover:bg-[#D8A7A7] hover:text-white transition-all duration-300"
          >
            Reserve Your Spot
          </a>
          <a 
            href="https://www.instagram.com/khanalashstudio?igsh=aDgzY200bDNodjc3" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-3 text-center hover:bg-[#D8A7A7] hover:text-white transition-all duration-300"
          >
            @khanalashstudio
          </a>
        </div>
      </div>
    </section>
  );
}
