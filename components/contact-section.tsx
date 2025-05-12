import { Button } from "@/components/ui/button";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl md:text-5xl text-center text-[#222222] mb-4">
          Get in Touch
        </h2>
        <p className="font-poppins text-[#7D7D7D] text-center max-w-2xl mx-auto mb-16">
          Book your appointment or reach out with any questions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-[#D4AF37] mt-1" />
              <div>
                <h3 className="font-playfair text-xl text-[#222222] mb-2">
                  Phone
                </h3>
                <p className="font-poppins text-[#7D7D7D]">
                  <a
                    href="tel:+1234567890"
                    className="hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    +1 (234) 567-890
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-[#D4AF37] mt-1" />
              <div>
                <h3 className="font-playfair text-xl text-[#222222] mb-2">
                  Email
                </h3>
                <p className="font-poppins text-[#7D7D7D]">
                  <a
                    href="mailto:info@yourlashstudio.com"
                    className="hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    info@yourlashstudio.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-[#D4AF37] mt-1" />
              <div>
                <h3 className="font-playfair text-xl text-[#222222] mb-2">
                  Location
                </h3>
                <p className="font-poppins text-[#7D7D7D]">
                  123 Beauty Street
                  <br />
                  Suite 456
                  <br />
                  City, State 12345
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Instagram className="w-6 h-6 text-[#D4AF37] mt-1" />
              <div>
                <h3 className="font-playfair text-xl text-[#222222] mb-2">
                  Instagram
                </h3>
                <p className="font-poppins text-[#7D7D7D]">
                  <a
                    href="https://instagram.com/your-handle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    @yourlashstudio
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#FAFAFA] p-8 rounded-lg">
            <h3 className="font-playfair text-2xl text-[#222222] mb-6">
              Send us a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-poppins text-[#7D7D7D] mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-[#D8A7A7]/20 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-poppins text-[#7D7D7D] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-[#D8A7A7]/20 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block font-poppins text-[#7D7D7D] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-[#D8A7A7]/20 focus:outline-none focus:border-[#D4AF37]"
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full bg-[#D4AF37] hover:bg-[#C7A29E] text-white rounded-full"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 