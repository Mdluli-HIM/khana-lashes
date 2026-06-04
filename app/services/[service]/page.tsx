import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const services = {
  "classic-set": {
    title: "Classic Set",
    description: "One extension per natural lash for a natural, defined look.",
    longDescription:
      "Our Classic Set provides a natural, defined look with one extension per natural lash.",
    image: "/IMG_0795.jpg",
    duration: "1h 15min",
    prices: [
      {
        name: "Full Set",
        price: "R550",
        description: "Complete set of classic lash extensions",
      },
      {
        name: "Refill",
        price: "R420",
        description: "Classic refill (1h 15min)",
      },
    ],
    benefits: [
      "Natural, defined look",
      "Long-lasting results",
      "Customizable length and curl",
      "Perfect for everyday wear",
    ],
  },
  "hybrid-set": {
    title: "Hybrid Set",
    description:
      "A blend of classic and volume lashes for a full, textured look.",
    longDescription:
      "Hybrid Set combines classic and volume techniques for a fuller, textured look.",
    image: "/IMG_0795.jpg",
    duration: "1h 30min",
    prices: [
      {
        name: "Full Set",
        price: "R660",
        description: "Complete set of hybrid lash extensions",
      },
      {
        name: "Refill",
        price: "R490",
        description: "Hybrid refill (1h 15min)",
      },
    ],
    benefits: [
      "Fuller, more dramatic look",
      "Perfect balance of volume and natural appearance",
      "Customizable density",
      "Long-lasting results",
    ],
  },
  "volume-set": {
    title: "Volume Set",
    description: "Multiple extensions per natural lash for maximum fullness.",
    longDescription:
      "Volume Set creates maximum fullness by applying multiple lightweight extensions per natural lash.",
    image: "/IMG_0795.jpg",
    duration: "1h 45min",
    prices: [
      {
        name: "Full Set",
        price: "R770",
        description: "Complete set of volume lash extensions",
      },
      {
        name: "Refill",
        price: "R570",
        description: "Volume refill (1h 25min)",
      },
    ],
    benefits: [
      "Maximum fullness and drama",
      "Lightweight, comfortable wear",
      "Customizable volume levels",
      "Stunning, eye-catching results",
    ],
  },
  "whispy-set": {
    title: "Whispy Set",
    description: "A wispy, textured lash look for extra drama.",
    longDescription:
      "Whispy Set offers a wispy, textured lash look for extra drama.",
    image: "/IMG_0795.jpg",
    duration: "1h 45min",
    prices: [
      {
        name: "Full Set",
        price: "R825",
        description: "Complete set of whispy lash extensions",
      },
      {
        name: "Refill",
        price: "R640",
        description: "Wispy refill (1h 35min)",
      },
    ],
    benefits: [
      "Wispy, dramatic look",
      "Textured and full",
      "Customizable style",
      "Long-lasting results",
    ],
  },
  "mega-volume": {
    title: "Mega Volume",
    description: "Ultra-full, dramatic lashes.",
    longDescription:
      "Mega Volume delivers the most dramatic, full lash look possible.",
    image: "/IMG_0795.jpg",
    duration: "1h 45min",
    prices: [
      {
        name: "Full Set",
        price: "R880",
        description: "Complete set of mega volume lash extensions",
      },
      {
        name: "Refill",
        price: "R680",
        description: "Mega Volume refill (1h 10min)",
      },
    ],
    benefits: ["Maximum drama", "Ultra-full look", "Long-lasting results"],
  },
  "brow-wax": {
    title: "Brow Wax",
    description: "Professional brow shaping.",
    longDescription: "Expert brow waxing for a clean, defined look.",
    image: "/IMG_0795.jpg",
    duration: "15min",
    prices: [
      {
        name: "Brow Wax",
        price: "R165",
        description: "Brow wax (15min)",
      },
    ],
    benefits: ["Clean, defined brows", "Quick and professional"],
  },
  "brow-wax-tint": {
    title: "Brow Wax & Tint",
    description: "Brow shaping and tinting.",
    longDescription: "Brow waxing and tinting for a fuller, more defined look.",
    image: "/IMG_0795.jpg",
    duration: "25min",
    prices: [
      {
        name: "Brow Wax & Tint",
        price: "R220",
        description: "Brow wax and tint (25min)",
      },
    ],
    benefits: ["Fuller, defined brows", "Long-lasting tint"],
  },
  "brow-lamination": {
    title: "Brow Lamination",
    description: "Sleek, styled brows.",
    longDescription: "Brow lamination for a sleek, styled brow look.",
    image: "/IMG_0795.jpg",
    duration: "1h",
    prices: [
      {
        name: "Brow Lamination",
        price: "R420",
        description: "Brow lamination (1h)",
      },
    ],
    benefits: ["Sleek, styled brows", "Long-lasting results"],
  },
  removal: {
    title: "Lash Removal",
    description: "Safe removal of lash extensions.",
    longDescription: "Professional removal of lash extensions.",
    image: "/IMG_0795.jpg",
    duration: "15min",
    prices: [
      {
        name: "Removal",
        price: "R100",
        description: "Lash removal (15min)",
      },
      {
        name: "Removal Elsewhere",
        price: "R150",
        description: "Removal elsewhere (20min)",
      },
    ],
    benefits: ["Safe removal", "Gentle on natural lashes"],
  },
  "occasional-makeup": {
    title: "Occasional Makeup",
    description: "Professional makeup for special occasions.",
    longDescription: "Occasional makeup for events and special occasions.",
    image: "/IMG_0795.jpg",
    duration: "2h",
    prices: [
      {
        name: "Occasional Makeup",
        price: "R720",
        description: "Occasional makeup (2h)",
      },
    ],
    benefits: ["Professional application", "Long-lasting wear"],
  },
};

type ServiceSlug = keyof typeof services;

type ServicePageProps = {
  params: Promise<{
    service: string;
  }>;
};

export default async function ServicePage({ params }: ServicePageProps) {
  const { service: serviceSlug } = await params;
  const service = services[serviceSlug as ServiceSlug];

  if (!service) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f7f5f2] px-4">
        <div className="text-center">
          <h1 className="font-playfair text-4xl text-[#222222]">
            Service not found
          </h1>

          <Link
            href="/#services"
            className="mt-6 inline-flex items-center text-[#7D7D7D] transition-colors duration-300 hover:text-[#D8A7A7]"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col bg-[#f7f5f2]">
      <section className="relative flex h-[40vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="rounded-none object-cover grayscale"
            priority
          />

          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 mx-auto max-w-2xl px-4 text-center">
          <h1 className="font-playfair mb-2 text-5xl uppercase tracking-tight text-white drop-shadow-lg md:text-7xl">
            {service.title}
          </h1>

          <p className="font-poppins mx-auto max-w-2xl text-xl text-white/90">
            {service.description}
          </p>
        </div>
      </section>

      <section className="flex flex-1 items-center justify-center px-4 py-16">
        <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-none border border-[#e5e1dc] bg-[#f9f7f3] p-0 shadow-xl">
          <div className="relative pb-4 pt-12 text-center">
            <span className="font-playfair block text-[2.5rem] font-bold uppercase leading-none tracking-tight text-[#d8a7a7]/30 md:text-[4rem]">
              Services
            </span>

            <span className="font-playfair -mt-6 block text-[2.5rem] font-bold uppercase leading-none tracking-tight text-[#222222] md:text-[4rem]">
              Price List
            </span>
          </div>

          <div className="flex justify-center pb-8">
            <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-none border border-[#e5e1dc] bg-white/60">
              <Image
                src={service.image}
                alt={service.title}
                width={128}
                height={128}
                className="h-full w-full object-cover grayscale"
              />
            </div>
          </div>

          <div className="px-8 pb-8">
            {service.prices.map((item) => (
              <div key={item.name} className="mb-8 last:mb-0">
                <div className="flex items-center justify-between">
                  <span className="font-playfair text-lg uppercase tracking-wide text-[#222222] md:text-xl">
                    {item.name}
                  </span>

                  <span className="mx-4 flex-1 border-b border-dotted border-[#d8a7a7]" />

                  <span className="font-playfair text-lg font-semibold text-[#d8a7a7] md:text-xl">
                    {item.price}
                  </span>
                </div>

                <div className="font-poppins ml-1 mt-2 text-sm text-[#7D7D7D]">
                  {item.description}
                </div>
              </div>
            ))}
          </div>

          <div className="px-8 pb-8 pt-2 text-right">
            <span className="font-playfair text-base italic text-[#222222]/70">
              by Khana-Lash
            </span>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 pb-20">
        <Link
          href="/#services"
          className="inline-flex items-center text-[#7D7D7D] transition-colors duration-300 hover:text-[#D8A7A7]"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Services
        </Link>
      </div>
    </main>
  );
}
