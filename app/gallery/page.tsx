"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const galleryCategories = [
  {
    title: "Classic Lashes",
    description: "Natural, defined enhancement for everyday elegance",
    images: [
      { src: "/image copy 9.png", alt: "Classic Lashes Example 1" },
      { src: "/image copy 10.png", alt: "Classic Lashes Example 2" },
      { src: "/image copy 11.png", alt: "Classic Lashes Example 3" },
    ],
    href: "/gallery/classic-lashes"
  },
  {
    title: "Volume Lashes",
    description: "Dramatic, full volume for a bold statement",
    images: [
      { src: "/image copy 12.png", alt: "Volume Lashes Example 1" },
      { src: "/image copy 13.png", alt: "Volume Lashes Example 2" },
      { src: "/image copy 14.png", alt: "Volume Lashes Example 3" },
    ],
    href: "/gallery/volume-lashes"
  },
  {
    title: "Hybrid Lashes",
    description: "Perfect blend of classic and volume techniques",
    images: [
      { src: "/image copy 15.png", alt: "Hybrid Lashes Example 1" },
      { src: "/image copy 16.png", alt: "Hybrid Lashes Example 2" },
      { src: "/image copy 17.png", alt: "Hybrid Lashes Example 3" },
    ],
    href: "/gallery/hybrid-lashes"
  },
  {
    title: "Mega Volume",
    description: "Ultimate drama and luxury for special occasions",
    images: [
      { src: "/image copy 18.png", alt: "Mega Volume Example 1" },
      { src: "/image copy 19.png", alt: "Mega Volume Example 2" },
      { src: "/image copy 20.png", alt: "Mega Volume Example 3" },
    ],
    href: "/gallery/mega-volume"
  },
  {
    title: "Bridal Lashes",
    description: "Customized looks for your special day",
    images: [
      { src: "/image copy 21.png", alt: "Bridal Lashes Example 1" },
      { src: "/image copy 22.png", alt: "Bridal Lashes Example 2" },
      { src: "/image copy 23.png", alt: "Bridal Lashes Example 3" },
    ],
    href: "/gallery/bridal-lashes"
  }
];

const testimonials = [
  {
    text: "Absolutely in love with my new lashes! The attention to detail and customization was perfect.",
    client: "Sarah M.",
    service: "CLASSIC LASHES | CLIENT"
  },
  {
    text: "Best lash artist in the area! My wedding photos looked amazing thanks to these gorgeous lashes.",
    client: "Emily R.",
    service: "BRIDAL LASHES | CLIENT"
  },
  {
    text: "The volume lashes are exactly what I wanted - dramatic but still natural looking. Highly recommend!",
    client: "Jessica K.",
    service: "VOLUME LASHES | CLIENT"
  }
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="py-24 bg-white border-b border-[#e5e1dc]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl md:text-7xl text-[#222] mb-6">
            Our Latest <span className="text-[#D8A7A7]">Work</span>
          </h1>
          <p className="font-poppins text-lg text-[#7D7D7D] max-w-2xl mx-auto">
            Khana-Lash Studio specializes in creating beautiful, customized lash looks. 
            Browse our portfolio to find inspiration for your next appointment.
          </p>
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="py-16 bg-white border-b border-[#e5e1dc]">
        <div className="max-w-6xl mx-auto px-4">
          {/* Social Media Stats */}
          <div className="flex justify-center items-center space-x-12 mb-16 border-b border-[#e5e1dc] pb-12">
            <div className="text-center">
              <div className="font-playfair text-2xl text-[#222] mb-1">15k+</div>
              <div className="font-poppins text-sm text-[#7D7D7D] uppercase tracking-wider">Instagram</div>
            </div>
            <div className="text-center">
              <div className="font-playfair text-2xl text-[#222] mb-1">5k+</div>
              <div className="font-poppins text-sm text-[#7D7D7D] uppercase tracking-wider">Facebook</div>
            </div>
            <div className="text-center">
              <div className="font-playfair text-2xl text-[#222] mb-1">2k+</div>
              <div className="font-poppins text-sm text-[#7D7D7D] uppercase tracking-wider">TikTok</div>
            </div>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-[#FAFAFA] border border-[#e5e1dc] rounded-none">
              <div className="font-playfair text-5xl text-[#D8A7A7] mb-4">98%</div>
              <p className="font-poppins text-sm text-[#7D7D7D] uppercase tracking-wider">
                Client Satisfaction Rate
              </p>
            </div>
            <div className="text-center p-8 bg-[#FAFAFA] border border-[#e5e1dc] rounded-none">
              <div className="font-playfair text-5xl text-[#D8A7A7] mb-4">5+</div>
              <p className="font-poppins text-sm text-[#7D7D7D] uppercase tracking-wider">
                Years of Experience
              </p>
            </div>
            <div className="text-center p-8 bg-[#FAFAFA] border border-[#e5e1dc] rounded-none">
              <div className="font-playfair text-5xl text-[#D8A7A7] mb-4">2k+</div>
              <p className="font-poppins text-sm text-[#7D7D7D] uppercase tracking-wider">
                Happy Clients Served
              </p>
            </div>
          </div>

          {/* Did You Know Section */}
          <div className="mt-16 p-8 bg-[#FAFAFA] border border-[#e5e1dc] rounded-none text-center">
            <h3 className="font-playfair text-2xl text-[#222] mb-4">Did You Know?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <div className="font-playfair text-4xl text-[#D8A7A7] mb-4">92%</div>
                <p className="font-poppins text-sm text-[#7D7D7D]">
                  of our clients book repeat appointments within 3 weeks
                </p>
              </div>
              <div>
                <div className="font-playfair text-4xl text-[#D8A7A7] mb-4">85%</div>
                <p className="font-poppins text-sm text-[#7D7D7D]">
                  of new clients come through referrals
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {galleryCategories.map((category, idx) => (
              <div key={idx} className="group">
                <Link href={category.href}>
                  <div className="relative aspect-[4/3] overflow-hidden border border-[#222] rounded-none mb-6">
                    <Image
                      src={category.images[0].src}
                      alt={category.images[0].alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h2 className="font-playfair text-2xl text-[#222] mb-2">{category.title}</h2>
                  <p className="font-poppins text-[#7D7D7D]">{category.description}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white border-y border-[#e5e1dc]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="text-center p-8 bg-[#FAFAFA] border border-[#e5e1dc] rounded-none">
                <p className="font-playfair text-xl text-[#222] mb-6">"{testimonial.text}"</p>
                <div className="font-poppins text-sm text-[#7D7D7D] uppercase tracking-wider">
                  {testimonial.service}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl text-[#222] mb-8">
            Ready to Transform Your Look?
          </h2>
          <Link 
            href="https://khanalashstudio.booksy.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-[#D8A7A7] text-white font-poppins rounded-none border border-[#222] hover:bg-[#C49A9A] transition-colors duration-300"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>

      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link 
          href="/"
          className="inline-flex items-center text-[#7D7D7D] hover:text-[#D8A7A7] transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>
    </main>
  );
} 