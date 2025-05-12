"use client";
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

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let animationFrame: number;
    let paused = false;
    let scrollAmount = 0;
    const speed = 0.5; // px per frame

    function animate() {
      if (!container) return;
      if (!paused) {
        scrollAmount += speed;
        if (scrollAmount >= container.scrollHeight / 2) {
          scrollAmount = 0;
        }
        container.scrollTop = scrollAmount;
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl md:text-5xl text-center text-[#222222] mb-2">
          Client Reviews
        </h2>
        <div className="flex justify-center items-center gap-2 mb-4">
          <span className="flex items-center text-[#D8A7A7] font-playfair text-2xl font-bold">
            5.0
            <Star className="w-5 h-5 fill-[#D8A7A7] text-[#D8A7A7] ml-1" />
          </span>
          <span className="text-[#7D7D7D] font-poppins text-base">(35 reviews)</span>
        </div>
        <p className="font-poppins text-[#7D7D7D] text-center max-w-2xl mx-auto mb-16">
          See what our clients are saying about their lash experience
        </p>

        {/* Vertical Auto-Scrolling Carousel */}
        <div
          ref={scrollRef}
          className="relative h-[400px] overflow-hidden mx-auto max-w-2xl rounded-lg shadow-md bg-[#FAFAFA]"
          style={{ scrollBehavior: "auto" }}
        >
          <div className="flex flex-col">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center gap-6 p-8 border-b border-[#D8A7A7]/20 last:border-0 min-h-[180px]"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden mr-0 md:mr-4 flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-playfair text-xl text-[#222222] mb-1">
                    {testimonial.name}
                    {testimonial.verified && (
                      <span className="ml-2 px-2 py-0.5 text-xs bg-[#D8A7A7]/20 text-[#D8A7A7] rounded font-poppins align-middle">Verified Booksy user</span>
                    )}
                  </h3>
                  <div className="flex justify-center md:justify-start mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#D8A7A7] text-[#D8A7A7]"
                      />
                    ))}
                  </div>
                  <p className="font-poppins text-[#7D7D7D] italic mb-1">
                    "{testimonial.text}"
                  </p>
                  <div className="font-poppins text-xs text-[#7D7D7D]">{testimonial.service}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#reviews"
            className="inline-block font-poppins text-[#D8A7A7] hover:text-[#D8A7A7]/90 transition-colors duration-300"
          >
            Read more reviews →
          </a>
        </div>
      </div>
    </section>
  );
} 