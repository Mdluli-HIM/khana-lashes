import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long do lash extensions last?",
    answer:
      "Lash extensions typically last 2-3 weeks before needing a fill. To maintain your lashes, we recommend getting fills every 2-3 weeks.",
  },
  {
    question: "How do I prepare for my appointment?",
    answer:
      "Please arrive with clean, makeup-free eyes. Remove any eye makeup, including mascara, before your appointment. Avoid using oil-based products around your eyes for 24 hours before your appointment.",
  },
  {
    question: "What's the difference between Classic and Volume lashes?",
    answer:
      "Classic lashes involve applying one extension per natural lash for a natural look. Volume lashes involve applying multiple extensions per natural lash for a fuller, more dramatic effect.",
  },
  {
    question: "How do I care for my lash extensions?",
    answer:
      "Avoid getting your lashes wet for 24 hours after application. Use oil-free makeup remover and avoid rubbing your eyes. Brush your lashes daily with a clean spoolie brush.",
  },
  {
    question: "What's your cancellation policy?",
    answer:
      "We require 24 hours notice for cancellations. Late cancellations or no-shows may be subject to a fee of 50% of the service cost.",
  },
  {
    question: "How long does the initial application take?",
    answer:
      "The initial application typically takes 2-3 hours, depending on the style you choose. Fill appointments take 1-1.5 hours.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl md:text-5xl text-center text-[#222222] mb-4">
          Frequently Asked Questions
        </h2>
        <p className="font-poppins text-[#7D7D7D] text-center max-w-2xl mx-auto mb-16">
          Find answers to common questions about our lash services
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-[#D8A7A7]/20"
              >
                <AccordionTrigger className="font-playfair text-lg text-[#222222] hover:text-[#D4AF37] transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-poppins text-[#7D7D7D]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="font-poppins text-[#7D7D7D] mb-4">
            Still have questions?
          </p>
          <a
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-poppins text-[#D4AF37] hover:text-[#C7A29E] transition-colors duration-300"
          >
            Contact us on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
} 