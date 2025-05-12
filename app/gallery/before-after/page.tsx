import BeforeAfterSlider from "@/components/before-after-slider";

export default function BeforeAfterPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] py-20">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="font-playfair text-4xl md:text-5xl text-[#222] mb-8 text-center">Before & After</h1>
        <p className="font-poppins text-[#7D7D7D] text-center mb-8">
          Drag the line to see the transformation.
        </p>
        <BeforeAfterSlider
          before="/before lashes .png"
          after="/after lashes.png"
          alt="Before and After Lashes"
        />
      </div>
    </main>
  );
} 