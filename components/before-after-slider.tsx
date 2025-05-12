"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  alt?: string;
}

export default function BeforeAfterSlider({ before, after, alt }: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50); // percent
  const [dragging, setDragging] = useState(false);

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    setDragging(true);
    moveSlider(e);
  };

  const moveSlider = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    let clientX = 0;
    if ("touches" in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }
    const rect = containerRef.current.getBoundingClientRect();
    let newPosition = ((clientX - rect.left) / rect.width) * 100;
    newPosition = Math.max(0, Math.min(100, newPosition));
    setPosition(newPosition);
  };

  React.useEffect(() => {
    if (!dragging) return;
    const handleMove = (e: MouseEvent | TouchEvent) => {
      moveSlider(e as any);
    };
    const handleUp = () => setDragging(false);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchend", handleUp);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchend", handleUp);
    };
  }, [dragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-md aspect-[3/4] mx-auto select-none cursor-ew-resize bg-white/80 rounded-xl shadow-lg border border-[#e5e1dc] p-2 flex items-center justify-center"
      onMouseDown={startDrag}
      onTouchStart={startDrag}
      style={{ userSelect: "none", minHeight: 320 }}
    >
      {/* After Image (full) */}
      <Image
        src={after}
        alt={alt || "After"}
        fill
        className="object-cover object-center rounded-lg transition-all duration-300"
        draggable={false}
        style={{ pointerEvents: "none" }}
      />
      {/* Before Image (clipped) */}
      <div
        className="absolute top-0 left-0 h-full overflow-hidden transition-all duration-300 rounded-lg"
        style={{ width: `${position}%` }}
      >
        <Image
          src={before}
          alt={alt || "Before"}
          fill
          className="object-cover object-center rounded-lg transition-all duration-300"
          draggable={false}
          style={{ pointerEvents: "none" }}
        />
      </div>
      {/* Draggable Line */}
      <div
        className="absolute top-0 h-full w-1 bg-[#D8A7A7] z-10 transition-all duration-300 flex items-center"
        style={{ left: `calc(${position}% - 8px)` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-5 h-5 bg-[#D8A7A7] rounded-full border-2 border-white shadow cursor-pointer flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
      </div>
    </div>
  );
} 