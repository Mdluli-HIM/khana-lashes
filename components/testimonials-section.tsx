"use client";
import Image from "next/image";
import { Star } from "lucide-react";
import { useEffect, useRef } from "react";
const testimonials = [
  {
    name: "Nsuku Teryne Khumalo",
    rating: 5,
    text: "Obsessed with my lashes😍 also the longevity is insane! Greatest service I've ever received from a lash tech 🥰🥰🥰🥰",
    service: "Hybrid set",
    verified: true,
    image: "/IMG_0795.jpg",
  },
  {
    name: "Nsuku Teryne Khumalo",
    rating: 5,
    text: "I love my lash's 🙌🤩love everything",
    service: "Classic set",
    verified: true,
    image: "/IMG_0795.jpg",
  },
  {
    name: "Nsuku Teryne Khumalo",
    rating: 5,
    text: "My lashes look stunning!! My vision was well understood and brought to life. They're also very comfortable",
    service: "Volume set",
    verified: true,
    image: "/IMG_0795.jpg",
  },
  {
    name: "Nsuku Teryne Khumalo",
    rating: 5,
    text: "Amazing lash tech! The service was quick, comfortable, and professional—my lashes look full and natural. I highly recommend her for anyone looking for quality lash extensions!",
    service: "Whispy set",
    verified: true,
    image: "/IMG_0795.jpg",
  },
  {
    name: "Nsuku Teryne Khumalo",
    rating: 5,
    text: "Forever yena😍😍",
    service: "Classic refill",
    verified: true,
    image: "/IMG_0795.jpg",
  },
  {
    name: "Nsuku Teryne Khumalo",
    rating: 5,
    text: "Love love love my set!! Thank you sm!",
    service: "Hybrid refill",
    verified: true,
    image: "/IMG_0795.jpg",
  },
  {
    name: "Nsuku Teryne Khumalo",
    rating: 5,
    text: "The best lash tech❤️ Nsuku's service is amazing and her work is beautiful.",
    service: "Hybrid set",
    verified: true,
    image: "/IMG_0795.jpg",
  },
  {
    name: "Nsuku Teryne Khumalo",
    rating: 5,
    text: "Relaxing music and an amazing lash tech!",
    service: "Classic set",
    verified: true,
    image: "/IMG_0795.jpg",
  },
  {
    name: "Nsuku Teryne Khumalo",
    rating: 5,
    text: "The absolute best lash tech. And the kindest and friendliest too ❤️ I am never disappointed 🥰",
    service: "Hybrid set",
    verified: true,
    image: "/IMG_0795.jpg",
  },
  {
    name: "Nsuku Teryne Khumalo",
    rating: 5,
    text: "Professional and friendly service, lovely people. Going back to try the lash service :)",
    service: "Removal elsewhere",
    verified: true,
    image: "/IMG_0795.jpg",
  },
  {
    name: "Nsuku Teryne Khumalo",
    rating: 5,
    text: "She made my first lash experience the best. And the conversation was amazing. And I can barely feel the lash extensions on my eyes 🌸🌸💜💜",
    service: "Classic set",
    verified: true,
    image: "/IMG_0795.jpg",
  },
  {
    name: "Nsuku Teryne Khumalo",
    rating: 5,
    text: "Such a lovely lady. I enjoyed my chat with her, and I got a good rest. I woke up with no burns in my eyes or redness in my eyes. She prepared my lashes so meticulously and was diligent in her craft. I highly recommend. Plus she genuinely isolates the lashes. I love my Classic set. Thank you, Terry! I love my lashes, truly 😍",
    service: "Classic set Removal elsewhere",
    verified: true,
    image: "/IMG_0795.jpg",
  },
  {
    name: "Nsuku Teryne Khumalo",
    rating: 5,
    text: "Best lash tech 🔥",
    service: "Hybrid set",
    verified: true,
    image: "/IMG_0795.jpg",
  },
  {
    name: "Nsuku Teryne Khumalo",
    rating: 5,
    text: "It was awesome thank you for making me look pretty 🥰",
    service: "Classic set",
    verified: true,
    image: "/IMG_0795.jpg",
  },
];
const scrollingTestimonials = [...testimonials, ...testimonials];
export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let animationFrame: number;
    let paused = false;
    let scrollAmount = 0;
    const speed = 0.5;
    const animate = () => {
      if (!paused) {
        scrollAmount += speed;
        if (scrollAmount >= container.scrollHeight / 2) {
          scrollAmount = 0;
        }
        container.scrollTop = scrollAmount;
      }
      animationFrame = requestAnimationFrame(animate);
    };
    const handleMouseEnter = () => {
      paused = true;
    };
    const handleMouseLeave = () => {
      paused = false;
    };
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    animate();
    return () => {
      cancelAnimationFrame(animationFrame);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <section id="reviews" className="bg-white py-20">
      {" "}
      <div className="container mx-auto px-4">
        {" "}
        <h2 className="font-playfair mb-2 text-center text-4xl text-[#222222] md:text-5xl">
          {" "}
          Client Reviews{" "}
        </h2>{" "}
        <div className="mb-4 flex items-center justify-center gap-2">
          {" "}
          <span className="font-playfair flex items-center text-2xl font-bold text-[#D8A7A7]">
            {" "}
            5.0{" "}
            <Star className="ml-1 h-5 w-5 fill-[#D8A7A7] text-[#D8A7A7]" />{" "}
          </span>{" "}
          <span className="font-poppins text-base text-[#7D7D7D]">
            {" "}
            (35 reviews){" "}
          </span>{" "}
        </div>{" "}
        <p className="font-poppins mx-auto mb-16 max-w-2xl text-center text-[#7D7D7D]">
          {" "}
          See what our clients are saying about their lash experience{" "}
        </p>{" "}
        <div
          ref={scrollRef}
          className="relative mx-auto h-[400px] max-w-2xl overflow-hidden rounded-lg bg-[#FAFAFA] shadow-md"
          style={{ scrollBehavior: "auto" }}
        >
          {" "}
          <div className="flex flex-col">
            {" "}
            {scrollingTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.service}-${index}`}
                className="flex min-h-[180px] flex-col items-center gap-6 border-b border-[#D8A7A7]/20 p-8 last:border-0 md:flex-row"
              >
                {" "}
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full md:mr-4">
                  {" "}
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />{" "}
                </div>{" "}
                <div className="flex-1 text-center md:text-left">
                  {" "}
                  <h3 className="font-playfair mb-1 text-xl text-[#222222]">
                    {" "}
                    {testimonial.name}{" "}
                    {testimonial.verified && (
                      <span className="font-poppins ml-2 rounded bg-[#D8A7A7]/20 px-2 py-0.5 align-middle text-xs text-[#D8A7A7]">
                        {" "}
                        Verified Booksy user{" "}
                      </span>
                    )}{" "}
                  </h3>{" "}
                  <div className="mb-2 flex justify-center md:justify-start">
                    {" "}
                    {Array.from({ length: testimonial.rating }).map(
                      (_, starIndex) => (
                        <Star
                          key={starIndex}
                          className="h-4 w-4 fill-[#D8A7A7] text-[#D8A7A7]"
                        />
                      ),
                    )}{" "}
                  </div>{" "}
                  <p className="font-poppins mb-1 italic text-[#7D7D7D]">
                    {" "}
                    &ldquo;{testimonial.text}&rdquo;{" "}
                  </p>{" "}
                  <div className="font-poppins text-xs text-[#7D7D7D]">
                    {" "}
                    {testimonial.service}{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
        <div className="mt-12 text-center">
          {" "}
          <a
            href="#reviews"
            className="font-poppins inline-block text-[#D8A7A7] transition-colors duration-300 hover:text-[#D8A7A7]/90"
          >
            {" "}
            Read more reviews →{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
