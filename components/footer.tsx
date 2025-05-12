import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#222222] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Trading Hours */}
          <div>
            <h3 className="font-playfair text-xl mb-6">Trading Hours</h3>
            <div className="space-y-2">
              <div>
                <p className="text-[#D8A7A7]">Monday - Friday</p>
                <p className="text-white/70">9:00 AM - 6:00 PM</p>
              </div>
              <div>
                <p className="text-[#D8A7A7]">Saturday</p>
                <p className="text-white/70">9:00 AM - 4:00 PM</p>
              </div>
              <div>
                <p className="text-[#D8A7A7]">Sunday</p>
                <p className="text-white/70">Booking by appointment only</p>
              </div>
            </div>
          </div>

          {/* Location & Contact */}
          <div>
            <h3 className="font-playfair text-xl mb-6">Location</h3>
            <div className="space-y-2">
              <p className="text-white/70">Ruby Close</p>
              <p className="text-white/70">Fourways, 2191</p>
              <p className="text-white/70">Sandton</p>
              <div className="pt-4">
                <h4 className="text-[#D8A7A7] mb-2">Book Your Appointment</h4>
                <Link 
                  href="https://khanalashstudio.booksy.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#D8A7A7] transition-colors duration-300"
                >
                  Book via Booksy
                </Link>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-playfair text-xl mb-6">Connect With Us</h3>
            <div className="space-y-4">
              <Link 
                href="https://www.instagram.com/khanalashstudio?igsh=aDgzY200bDNodjc3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white/70 hover:text-[#D8A7A7] transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
                <span>@khanalashstudio</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50">
          <p>© {new Date().getFullYear()} Khana-Lash. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
