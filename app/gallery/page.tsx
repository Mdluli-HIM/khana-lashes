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
    href: "/gallery/classic-lashes",
  },
  {
    title: "Volume Lashes",
    description: "Dramatic, full volume for a bold statement",
    images: [
      { src: "/image copy 12.png", alt: "Volume Lashes Example 1" },
      { src: "/image copy 13.png", alt: "Volume Lashes Example 2" },
      { src: "/image copy 14.png", alt: "Volume Lashes Example 3" },
    ],
    href: "/gallery/volume-lashes",
  },
  {
    title: "Hybrid Lashes",
    description: "Perfect blend of classic and volume techniques",
    images: [
      { src: "/image copy 15.png", alt: "Hybrid Lashes Example 1" },
      { src: "/image copy 16.png", alt: "Hybrid Lashes Example 2" },
      { src: "/image copy 17.png", alt: "Hybrid Lashes Example 3" },
    ],
    href: "/gallery/hybrid-lashes",
  },
  {
    title: "Mega Volume",
    description: "Ultimate drama and luxury for special occasions",
    images: [
      { src: "/image copy 18.png", alt: "Mega Volume Example 1" },
      { src: "/image copy 19.png", alt: "Mega Volume Example 2" },
      { src: "/image copy 20.png", alt: "Mega Volume Example 3" },
    ],
    href: "/gallery/mega-volume",
  },
  {
    title: "Bridal Lashes",
    description: "Customized looks for your special day",
    images: [
      { src: "/image copy 21.png", alt: "Bridal Lashes Example 1" },
      { src: "/image copy 22.png", alt: "Bridal Lashes Example 2" },
      { src: "/image copy 23.png", alt: "Bridal Lashes Example 3" },
    ],
    href: "/gallery/bridal-lashes",
  },
];

const testimonials = [
  {
    text: "Absolutely in love with my new lashes! The attention to detail and customization was perfect.",
    client: "Sarah M.",
    service: "CLASSIC LASHES | CLIENT",
  },
  {
    text: "Best lash artist in the area! My wedding photos looked amazing thanks to these gorgeous lashes.",
    client: "Emily R.",
    service: "BRIDAL LASHES | CLIENT",
  },
  {
    text: "The volume lashes are exactly what I wanted - dramatic but still natural looking. Highly recommend!",
    client: "Jessica K.",
    service: "VOLUME LASHES | CLIENT",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="border-b border-[#e5e1dc] bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="font-playfair mb-6 text-5xl text-[#222] md:text-7xl">
            Our Latest <span className="text-[#D8A7A7]">Work</span>
          </h1>

          <p className="font-poppins mx-auto max-w-2xl text-lg text-[#7D7D7D]">
            Khana-Lash Studio specializes in creating beautiful, customized lash
            looks. Browse our portfolio to find inspiration for your next
            appointment.
          </p>
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="border-b border-[#e5e1dc] bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 flex items-center justify-center space-x-12 border-b border-[#e5e1dc] pb-12">
            <div className="text-center">
              <div className="font-playfair mb-1 text-2xl text-[#222]">
                15k+
              </div>
              <div className="font-poppins text-sm uppercase tracking-wider text-[#7D7D7D]">
                Instagram
              </div>
            </div>

            <div className="text-center">
              <div className="font-playfair mb-1 text-2xl text-[#222]">5k+</div>
              <div className="font-poppins text-sm uppercase tracking-wider text-[#7D7D7D]">
                Facebook
              </div>
            </div>

            <div className="text-center">
              <div className="font-playfair mb-1 text-2xl text-[#222]">2k+</div>
              <div className="font-poppins text-sm uppercase tracking-wider text-[#7D7D7D]">
                TikTok
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-none border border-[#e5e1dc] bg-[#FAFAFA] p-8 text-center">
              <div className="font-playfair mb-4 text-5xl text-[#D8A7A7]">
                98%
              </div>
              <p className="font-poppins text-sm uppercase tracking-wider text-[#7D7D7D]">
                Client Satisfaction Rate
              </p>
            </div>

            <div className="rounded-none border border-[#e5e1dc] bg-[#FAFAFA] p-8 text-center">
              <div className="font-playfair mb-4 text-5xl text-[#D8A7A7]">
                5+
              </div>
              <p className="font-poppins text-sm uppercase tracking-wider text-[#7D7D7D]">
                Years of Experience
              </p>
            </div>

            <div className="rounded-none border border-[#e5e1dc] bg-[#FAFAFA] p-8 text-center">
              <div className="font-playfair mb-4 text-5xl text-[#D8A7A7]">
                2k+
              </div>
              <p className="font-poppins text-sm uppercase tracking-wider text-[#7D7D7D]">
                Happy Clients Served
              </p>
            </div>
          </div>

          <div className="mt-16 rounded-none border border-[#e5e1dc] bg-[#FAFAFA] p-8 text-center">
            <h3 className="font-playfair mb-4 text-2xl text-[#222]">
              Did You Know?
            </h3>

            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <div className="font-playfair mb-4 text-4xl text-[#D8A7A7]">
                  92%
                </div>
                <p className="font-poppins text-sm text-[#7D7D7D]">
                  of our clients book repeat appointments within 3 weeks
                </p>
              </div>

              <div>
                <div className="font-playfair mb-4 text-4xl text-[#D8A7A7]">
                  85%
                </div>
                <p className="font-poppins text-sm text-[#7D7D7D]">
                  of new clients come through referrals
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-[#FAFAFA] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            {galleryCategories.map((category) => (
              <div key={category.href} className="group">
                <Link href={category.href}>
                  <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-none border border-[#222]">
                    <Image
                      src={category.images[0].src}
                      alt={category.images[0].alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <h2 className="font-playfair mb-2 text-2xl text-[#222]">
                    {category.title}
                  </h2>

                  <p className="font-poppins text-[#7D7D7D]">
                    {category.description}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="border-y border-[#e5e1dc] bg-white py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.client}
                className="rounded-none border border-[#e5e1dc] bg-[#FAFAFA] p-8 text-center"
              >
                <p className="font-playfair mb-6 text-xl text-[#222]">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="font-poppins mb-2 text-sm font-medium text-[#222]">
                  {testimonial.client}
                </div>

                <div className="font-poppins text-sm uppercase tracking-wider text-[#7D7D7D]">
                  {testimonial.service}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FAFAFA] py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="font-playfair mb-8 text-4xl text-[#222]">
            Ready to Transform Your Look?
          </h2>

          <a
            href="https://khanalashstudio.booksy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-poppins inline-block rounded-none border border-[#222] bg-[#D8A7A7] px-12 py-4 text-white transition-colors duration-300 hover:bg-[#C49A9A]"
          >
            Book Your Appointment
          </a>
        </div>
      </section>

      {/* Back Button */}
      <div className="mx-auto max-w-6xl px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-[#7D7D7D] transition-colors duration-300 hover:text-[#D8A7A7]"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </main>
  );
}
