"use client";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex flex-col items-center">
        {/* Elegant Spinner */}
        <span className="block w-16 h-16 border-4 border-[#D8A7A7] border-t-transparent rounded-full animate-spin mb-4" />
        <span className="font-playfair text-2xl text-[#D8A7A7] tracking-widest">Khana-Lash</span>
      </div>
    </div>
  );
} 