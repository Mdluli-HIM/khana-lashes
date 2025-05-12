import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    title: "Hybrid Set",
    description: "A blend of classic and volume lashes for a full, textured look.",
    price: "R660",
    duration: "1h 30min",
    href: "/services/hybrid-set"
  },
  {
    title: "Classic Set",
    description: "One extension per natural lash for a natural, defined look.",
    price: "R550",
    duration: "1h 15min",
    href: "/services/classic-set"
  },
  {
    title: "Volume Set",
    description: "Multiple extensions per natural lash for maximum fullness.",
    price: "R770",
    duration: "1h 45min",
    href: "/services/volume-set"
  },
  {
    title: "Whispy Set",
    description: "A wispy, textured lash look for extra drama.",
    price: "R825",
    duration: "1h 45min",
    href: "/services/whispy-set"
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl md:text-5xl text-center text-[#222222] mb-4">
          Our Services
        </h2>
        <p className="font-poppins text-[#7D7D7D] text-center max-w-2xl mx-auto mb-16">
          Experience the perfect blend of artistry and expertise with our premium lash services
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Link 
              key={index}
              href={service.href}
              className="bg-[#FAFAFA] p-8 rounded-lg hover:shadow-lg transition-all duration-300 flex flex-col h-full group"
            >
              <h3 className="font-playfair text-2xl text-[#222222] mb-4 group-hover:text-[#D8A7A7] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="font-poppins text-[#7D7D7D] mb-4 flex-grow">
                {service.description}
              </p>
              <div className="flex justify-between items-center mb-6">
                <span className="font-poppins text-[#D8A7A7] font-semibold">
                  {service.price}
                </span>
                <span className="font-poppins text-[#7D7D7D]">
                  {service.duration}
                </span>
              </div>
              <Button
                className="inline-block bg-[#D8A7A7] hover:bg-[#C49A9A] text-white rounded-none border border-[#222] transition-all duration-300 text-xs px-4 py-2"
              >
                View Details
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 