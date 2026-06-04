import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center bg-[#F7F5F2] py-8 md:py-16">
      <div className="mx-auto w-full max-w-7xl overflow-visible border border-[#222] bg-white shadow-lg">
        <div className="border-b border-[#222] pb-3 pt-6 text-center">
          <span className="font-playfair block text-2xl tracking-widest text-[#222] md:text-3xl">
            KHANA-LASH STUDIO
          </span>
        </div>

        <div className="grid grid-cols-1 grid-rows-[auto_1fr] border-b border-[#222] md:grid-cols-[100px_1fr_360px]">
          <div className="row-span-2 hidden flex-col items-center justify-center border-r border-[#222] bg-[#F7F5F2] md:flex">
            <span className="font-playfair rotate-[-90deg] select-none whitespace-nowrap text-2xl font-bold tracking-tight text-[#222]">
              LASH ARTISTRY
            </span>
          </div>

          <div className="relative row-span-2 flex items-center justify-center border-r border-[#222] bg-white">
            <div className="relative m-6 h-72 w-56 overflow-hidden border border-[#222] md:m-8 md:h-[420px] md:w-80">
              <Image
                src="/image copy.png"
                alt="Khana-Lash Model"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="row-span-2 flex flex-col items-center justify-center border-l border-[#222] bg-white p-6 md:p-8">
            <div className="flex w-full flex-col items-center">
              <h1 className="font-playfair mb-6 text-center text-3xl font-bold leading-tight text-[#222] md:text-4xl">
                Welcome to Luxury
                <br />
                Lash Extensions
              </h1>

              <p className="font-poppins mb-8 max-w-sm text-center text-base text-[#7D7D7D] md:text-lg">
                Discover the art of beautiful lashes at Khana-Lash Studio.
                Experience bespoke beauty and confidence with every visit.
              </p>

              <a
                href="https://khanalashstudio.booksy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-poppins rounded-none border border-[#222] bg-[#D8A7A7] px-10 py-4 text-base font-semibold text-white shadow transition-all duration-300 hover:bg-[#C49A9A]"
              >
                Book Now
              </a>

              <div className="font-poppins mt-8 text-xs tracking-widest text-[#222]">
                FIRMA DE CONTRATO
              </div>
            </div>
          </div>
        </div>

        <div className="font-poppins grid grid-cols-2 divide-x divide-[#222] border-t border-[#222] text-xs text-[#222] md:grid-cols-4">
          <a
            href="https://www.instagram.com/khanalashstudio?igsh=aDgzY200bDNodjc3"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 text-center transition-all duration-300 hover:bg-[#D8A7A7] hover:text-white"
          >
            Instagram
          </a>

          <Link
            href="/"
            className="px-4 py-3 text-center transition-all duration-300 hover:bg-[#D8A7A7] hover:text-white"
          >
            2024 &copy; Khana-Lash Studio
          </Link>

          <a
            href="https://khanalashstudio.booksy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 text-center transition-all duration-300 hover:bg-[#D8A7A7] hover:text-white"
          >
            Reserve Your Spot
          </a>

          <a
            href="https://www.instagram.com/khanalashstudio?igsh=aDgzY200bDNodjc3"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 text-center transition-all duration-300 hover:bg-[#D8A7A7] hover:text-white"
          >
            @khanalashstudio
          </a>
        </div>
      </div>
    </section>
  );
}
