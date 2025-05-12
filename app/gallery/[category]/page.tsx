"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const categoryData = {
  "classic-lashes": {
    title: "Classic Lashes",
    description: "Natural, defined enhancement for everyday elegance",
    longDescription: "Our classic lash extensions provide a natural enhancement to your existing lashes. Each extension is carefully applied to individual natural lashes for a beautiful, defined look that's perfect for everyday wear.",
    images: [
      { src: "/image copy 9.png", alt: "Classic Lashes Example" },
      { src: "/image copy 10.png", alt: "Classic Lashes Example" },
      { src: "/image copy 11.png", alt: "Classic Lashes Example" },
      { src: "/image copy 12.png", alt: "Classic Lashes Example" },
      { src: "/image copy 13.png", alt: "Classic Lashes Example" },
      { src: "/image copy 14.png", alt: "Classic Lashes Example" },
      { src: "/image copy 15.png", alt: "Classic Lashes Example" },
      { src: "/image copy 16.png", alt: "Classic Lashes Example" },
      { src: "/image copy 17.png", alt: "Classic Lashes Example" },
    ],
    price: "Starting at R150",
    duration: "2 hours"
  },
  "volume-lashes": {
    title: "Volume Lashes",
    description: "Dramatic, full volume for a bold statement",
    longDescription: "Volume lash extensions create a fuller, more dramatic look by applying multiple lightweight extensions to each natural lash. Perfect for those wanting more impact and glamour.",
    images: [
      { src: "/image copy 12.png", alt: "Volume Lashes Example" },
      { src: "/image copy 13.png", alt: "Volume Lashes Example" },
      { src: "/image copy 14.png", alt: "Volume Lashes Example" },
      { src: "/image copy 15.png", alt: "Volume Lashes Example" },
      { src: "/image copy 16.png", alt: "Volume Lashes Example" },
      { src: "/image copy 17.png", alt: "Volume Lashes Example" },
      { src: "/image copy 18.png", alt: "Volume Lashes Example" },
      { src: "/image copy 19.png", alt: "Volume Lashes Example" },
      { src: "/image copy 20.png", alt: "Volume Lashes Example" },
    ],
    price: "Starting at R180",
    duration: "2.5 hours"
  },
  "hybrid-lashes": {
    title: "Hybrid Lashes",
    description: "Perfect blend of classic and volume techniques",
    longDescription: "Hybrid lashes combine both classic and volume techniques to create a customized look that offers the best of both worlds. Ideal for those wanting something between natural and dramatic.",
    images: [
      { src: "/image copy 15.png", alt: "Hybrid Lashes Example" },
      { src: "/image copy 16.png", alt: "Hybrid Lashes Example" },
      { src: "/image copy 17.png", alt: "Hybrid Lashes Example" },
      { src: "/image copy 18.png", alt: "Hybrid Lashes Example" },
      { src: "/image copy 19.png", alt: "Hybrid Lashes Example" },
      { src: "/image copy 20.png", alt: "Hybrid Lashes Example" },
      { src: "/image copy 21.png", alt: "Hybrid Lashes Example" },
      { src: "/image copy 22.png", alt: "Hybrid Lashes Example" },
      { src: "/image copy 23.png", alt: "Hybrid Lashes Example" },
    ],
    price: "Starting at R165",
    duration: "2.25 hours"
  },
  "mega-volume": {
    title: "Mega Volume",
    description: "Ultimate drama and luxury for special occasions",
    longDescription: "Our mega volume lashes deliver maximum impact and drama. Using advanced techniques to create ultra-fine, lightweight fans for a luxurious, full look.",
    images: [
      { src: "/image copy 18.png", alt: "Mega Volume Example" },
      { src: "/image copy 19.png", alt: "Mega Volume Example" },
      { src: "/image copy 20.png", alt: "Mega Volume Example" },
      { src: "/image copy 21.png", alt: "Mega Volume Example" },
      { src: "/image copy 22.png", alt: "Mega Volume Example" },
      { src: "/image copy 23.png", alt: "Mega Volume Example" },
      { src: "/image copy.png", alt: "Mega Volume Example" },
      { src: "/image copy 2.png", alt: "Mega Volume Example" },
      { src: "/image copy 3.png", alt: "Mega Volume Example" },
    ],
    price: "Starting at R200",
    duration: "3 hours"
  },
  "bridal-lashes": {
    title: "Bridal Lashes",
    description: "Customized looks for your special day",
    longDescription: "Make your special day even more beautiful with our bridal lash extensions. We work with you to create the perfect look that will last through tears of joy and endless photos.",
    images: [
      { src: "/image copy 21.png", alt: "Bridal Lashes Example" },
      { src: "/image copy 22.png", alt: "Bridal Lashes Example" },
      { src: "/image copy 23.png", alt: "Bridal Lashes Example" },
      { src: "/image copy.png", alt: "Bridal Lashes Example" },
      { src: "/image copy 2.png", alt: "Bridal Lashes Example" },
      { src: "/image copy 3.png", alt: "Bridal Lashes Example" },
      { src: "/image copy 4.png", alt: "Bridal Lashes Example" },
      { src: "/image copy 5.png", alt: "Bridal Lashes Example" },
      { src: "/image copy 6.png", alt: "Bridal Lashes Example" },
    ],
    price: "Starting at R180",
    duration: "2.5 hours"
  }
};

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = React.use(params);
  const categoryObj = categoryData[category as keyof typeof categoryData];

  if (!categoryObj) {
    return <div>Category not found</div>;
  }

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="py-24 bg-white border-b border-[#e5e1dc]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="font-playfair text-4xl md:text-6xl text-[#222] mb-6">
                {categoryObj.title}
              </h1>
              <p className="font-poppins text-lg text-[#7D7D7D] mb-8">
                {categoryObj.longDescription}
              </p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="font-poppins text-sm text-[#7D7D7D] uppercase tracking-wider mb-2">
                    Duration
                  </div>
                  <div className="font-playfair text-xl text-[#222]">
                    {categoryObj.duration}
                  </div>
                </div>
                <div>
                  <div className="font-poppins text-sm text-[#7D7D7D] uppercase tracking-wider mb-2">
                    Investment
                  </div>
                  <div className="font-playfair text-xl text-[#222]">
                    {categoryObj.price}
                  </div>
                </div>
              </div>
              <Link 
                href="https://khanalashstudio.booksy.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-12 py-4 bg-[#D8A7A7] text-white font-poppins rounded-none border border-[#222] hover:bg-[#C49A9A] transition-colors duration-300"
              >
                Book Now
              </Link>
            </div>
            <div className="relative aspect-[4/3] border border-[#222] rounded-none overflow-hidden">
              <Image
                src={categoryObj.images[0].src}
                alt={categoryObj.images[0].alt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-playfair text-3xl text-[#222] mb-12 text-center">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categoryObj.images.map((image, idx) => (
              <div key={idx} className="group">
                <div className="relative aspect-square overflow-hidden border border-[#222] rounded-none">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link 
          href="/gallery"
          className="inline-flex items-center text-[#7D7D7D] hover:text-[#D8A7A7] transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Gallery
        </Link>
      </div>
    </main>
  );
} 