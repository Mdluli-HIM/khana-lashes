"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";

const galleryImages = [
  {
    number: "01",
    src: "/image copy.png",
    alt: "Before and After Lash Extensions",
    title: "Before & After",
    subtitle: "See the transformation",
    description: "Browse our before and after gallery to see the stunning results our clients achieve.",
    href: "/gallery/before-after",
  },
  {
    number: "02",
    src: "/image copy 2.png",
    alt: "Volume Lash Extensions",
    title: "Volume Lashes",
    subtitle: "Full, dramatic look",
    description: "Our volume lashes create a bold, dramatic look for those who want maximum impact.",
    href: "/gallery/volume-lashes",
  },
  {
    number: "03",
    src: "/image copy 3.png",
    alt: "Classic Lash Extensions",
    title: "Classic Lashes",
    subtitle: "Natural, defined look",
    description: "Classic lashes offer a natural, defined enhancement to your eyes.",
    href: "/gallery/classic-lashes",
  },
  {
    number: "04",
    src: "/image copy 4.png",
    alt: "Hybrid Lash Extensions",
    title: "Hybrid Lashes",
    subtitle: "Best of both worlds",
    description: "Hybrid lashes combine classic and volume techniques for a custom look.",
    href: "/gallery/hybrid-lashes",
  },
  {
    number: "05",
    src: "/image copy 5.png",
    alt: "Mega Volume Lashes",
    title: "Mega Volume",
    subtitle: "Ultimate drama",
    description: "Experience the most dramatic and luxurious lash look with our mega volume technique.",
    href: "/gallery/mega-volume",
  },
  {
    number: "06",
    src: "/image copy 6.png",
    alt: "Natural Lash Enhancement",
    title: "Natural Look",
    subtitle: "Subtle enhancement",
    description: "Perfect for those seeking a naturally enhanced lash line with minimal maintenance.",
    href: "/gallery/natural-look",
  },
  {
    number: "07",
    src: "/image copy 7.png",
    alt: "Colored Lash Extensions",
    title: "Colored Lashes",
    subtitle: "Creative expression",
    description: "Add a pop of color to your look with our custom colored lash extensions.",
    href: "/gallery/colored-lashes",
  },
  {
    number: "08",
    src: "/image copy 8.png",
    alt: "Bridal Lash Extensions",
    title: "Bridal Lashes",
    subtitle: "Special occasion",
    description: "Make your special day even more beautiful with our bridal lash extensions.",
    href: "/gallery/bridal-lashes",
  }
];

// Double the gallery images for continuous scrolling
const doubledGalleryImages = [...galleryImages, ...galleryImages];

export default function GallerySection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let animationFrame: number;
    let paused = false;
    let scrollAmount = 0;
    const speed = 1; // px per frame

    function animate() {
      if (!container) return;
      if (!paused) {
        scrollAmount += speed;
        // Reset when reaching half of the content (since we doubled it)
        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0;
        }
        container.scrollLeft = scrollAmount;
      }
      animationFrame = requestAnimationFrame(animate);
    }
    animate();

    const handleMouseEnter = () => { paused = true; };
    const handleMouseLeave = () => { paused = false; };
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="bg-[#FAFAFA] py-24">
      <div className="max-w-[90vw] mx-auto px-4">
        <h2 className="font-playfair text-5xl text-center text-[#222] mb-16 tracking-tight">Our Work</h2>
        <div className="relative h-[500px] overflow-hidden mx-auto rounded-none shadow-md bg-[#FAFAFA]">
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-hidden"
            style={{ scrollBehavior: "auto" }}
          >
            {doubledGalleryImages.map((img, idx) => (
              <div key={idx} className="flex-none w-[280px]">
                <div className="flex flex-col items-center group">
                  <div className="font-poppins text-xs text-[#7D7D7D] mb-2 tracking-widest">{img.number}</div>
                  <Link href={img.href} className="w-full" aria-label={img.title}>
                    <div
                      className="w-full aspect-[1/1.1] bg-[#f5f5f5] border border-[#222] mb-4 flex items-center justify-center overflow-hidden group-hover:shadow-lg transition-all duration-300 rounded-none relative"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover object-center"
                        sizes="280px"
                        priority={idx === 0}
                      />
                    </div>
                  </Link>
                  <div className="w-full text-center">
                    <div className="font-poppins text-xs text-[#222] tracking-widest mb-1 flex items-center justify-center gap-1">
                      <span className="inline-block w-2 h-2 rounded-none border border-[#222] mr-2 align-middle" />
                      <span className="font-semibold">{img.title}</span>
                    </div>
                    <div className="font-poppins text-[13px] text-[#222] font-semibold mb-1">{img.subtitle}</div>
                    <div className="font-poppins text-xs text-[#7D7D7D] leading-relaxed mb-2">{img.description}</div>
                    <Link href={img.href} className="inline-block px-4 py-2 bg-[#D8A7A7] text-white font-poppins text-xs rounded-none hover:bg-[#C49A9A] transition-colors duration-300">
                      View Gallery
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 