"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

interface IconProps {
  className?: string;
}

const TikTokIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function AboutSection() {
  const images = [
    "/image copy.png",
    "/image copy 2.png",
    "/image copy 3.png",
    "/image copy 4.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-[#F7F5F2] border-t border-[#e5e1dc]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_300px] gap-0 bg-white rounded-xl overflow-hidden shadow-lg border border-[#e5e1dc]">
          {/* Vertical ABOUT label */}
          <div className="hidden md:flex flex-col justify-center items-center bg-[#F7F5F2] px-4 border-r border-[#e5e1dc]">
            <span className="font-playfair text-5xl font-bold text-[#222222] tracking-tight rotate-[-90deg] whitespace-nowrap select-none">ABOUT</span>
          </div>
          {/* Main Content */}
          <div className="flex flex-col justify-center p-8 md:p-12 col-span-1">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#222222] mb-4 leading-tight">Our Mission</h2>
            <p className="font-poppins text-[#7D7D7D] text-base md:text-lg mb-6">
              Khana-Lash is dedicated to elevating the beauty experience in Sandon and beyond. Our mission is to provide luxurious, safe, and innovative lash services in a welcoming environment. We believe every client deserves to feel confident and beautiful, and we strive to deliver artistry, comfort, and care with every appointment.
            </p>
            <p className="font-poppins text-[#7D7D7D] text-sm md:text-base leading-relaxed mb-8">
              Our studio is built on a foundation of professionalism, ongoing education, and a passion for the lash industry. We use only the highest quality products and the latest techniques to ensure stunning, long-lasting results. At Khana-Lash, we are more than a beauty destination—we are a community that celebrates self-expression and empowerment.
            </p>
            <Link href="https://khanalashstudio.booksy.com" target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-3 bg-[#D8A7A7] text-white font-poppins rounded-none shadow hover:bg-[#C49A9A] transition-all duration-300 text-base font-semibold">
                Book an Appointment
              </button>
            </Link>
          </div>
          {/* Company Image with Carousel Effect */}
          <div className="hidden md:block relative min-h-[320px] bg-[#F7F5F2] overflow-hidden">
            {images.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt={`Khana-Lash Studio ${index + 1}`}
                fill
                className={`object-cover object-center rounded-none transition-opacity duration-1000 ${
                  currentImageIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
                priority={index === 0}
              />
            ))}
          </div>
        </div>
        {/* Social Row */}
        <div className="flex flex-col md:flex-row items-center gap-6 mt-8 bg-white rounded-none shadow-lg border border-[#e5e1dc] p-10">
          {/* Instagram Stats */}
          <div className="flex items-center gap-6 flex-1 justify-center">
            <div className="text-center">
              <div className="font-playfair text-3xl text-[#222] mb-2">15k+</div>
              <div className="font-poppins text-sm text-[#7D7D7D] uppercase tracking-wider">Followers</div>
            </div>
            <a
              href="https://www.instagram.com/khanalashstudio?igsh=aDgzY200bDNodjc3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-[#222222] hover:bg-[#D8A7A7] hover:text-white font-poppins text-lg transition-all duration-300 rounded-none border border-[#222] hover:border-[#D8A7A7]"
            >
              <Instagram className="w-6 h-6" />
              @khanalashstudio
            </a>
          </div>
          
          {/* TikTok Stats */}
          <div className="flex items-center gap-6 flex-1 justify-center border-t md:border-t-0 md:border-l border-[#e5e1dc] md:pl-6 pt-6 md:pt-0">
            <div className="text-center">
              <div className="font-playfair text-3xl text-[#222] mb-2">2k+</div>
              <div className="font-poppins text-sm text-[#7D7D7D] uppercase tracking-wider">Views</div>
            </div>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-[#222222] hover:bg-[#D8A7A7] hover:text-white font-poppins text-lg transition-all duration-300 rounded-none border border-[#222] hover:border-[#D8A7A7]"
            >
              <TikTokIcon className="w-6 h-6" />
              @khanalash
            </a>
          </div>
        </div>
        {/* Lash Tech Professionals Section */}
        <div className="mt-16 bg-white rounded-xl shadow border border-[#e5e1dc] p-8">
          <h3 className="font-playfair text-3xl text-[#222222] mb-6">Lash Tech Professionals</h3>
          <p className="font-poppins text-[#7D7D7D] text-base md:text-lg mb-4">
            Our team of certified lash professionals is committed to excellence in every service. Each technician at Khana-Lash undergoes rigorous training and continuous education to stay at the forefront of lash artistry and safety. We take pride in our attention to detail, client care, and passion for helping you achieve your dream look.
          </p>
          <ul className="list-disc pl-6 text-[#7D7D7D] font-poppins text-sm md:text-base space-y-2">
            <li>Certified and experienced lash artists</li>
            <li>Ongoing professional development</li>
            <li>Focus on safety, hygiene, and client comfort</li>
            <li>Personalized consultations and aftercare</li>
          </ul>
        </div>
      </div>
    </section>
  );
} 