"use client";

import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  alt?: string;
}

export default function BeforeAfterSlider({
  before,
  after,
  alt,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updateSliderPosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    let newPosition = ((clientX - rect.left) / rect.width) * 100;
    newPosition = Math.max(0, Math.min(100, newPosition));

    setPosition(newPosition);
  }, []);

  const startDrag = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
  ) => {
    setDragging(true);

    if ("touches" in event) {
      const touch = event.touches[0];

      if (touch) {
        updateSliderPosition(touch.clientX);
      }

      return;
    }

    updateSliderPosition(event.clientX);
  };

  React.useEffect(() => {
    if (!dragging) return;

    const handleMouseMove = (event: MouseEvent) => {
      updateSliderPosition(event.clientX);
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];

      if (touch) {
        updateSliderPosition(touch.clientX);
      }
    };

    const handleUp = () => {
      setDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchend", handleUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchend", handleUp);
    };
  }, [dragging, updateSliderPosition]);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto flex aspect-[3/4] w-full max-w-md cursor-ew-resize select-none items-center justify-center rounded-xl border border-[#e5e1dc] bg-white/80 p-2 shadow-lg"
      onMouseDown={startDrag}
      onTouchStart={startDrag}
      style={{ userSelect: "none", minHeight: 320 }}
    >
      <Image
        src={after}
        alt={alt || "After"}
        fill
        className="rounded-lg object-cover object-center transition-all duration-300"
        draggable={false}
        style={{ pointerEvents: "none" }}
      />

      <div
        className="absolute left-0 top-0 h-full overflow-hidden rounded-lg transition-all duration-300"
        style={{ width: `${position}%` }}
      >
        <Image
          src={before}
          alt={alt || "Before"}
          fill
          className="rounded-lg object-cover object-center transition-all duration-300"
          draggable={false}
          style={{ pointerEvents: "none" }}
        />
      </div>

      <div
        className="absolute top-0 z-10 flex h-full w-1 items-center bg-[#D8A7A7] transition-all duration-300"
        style={{ left: `calc(${position}% - 8px)` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-[#D8A7A7] shadow">
          <div className="h-2 w-2 rounded-full bg-white" />
        </div>
      </div>
    </div>
  );
}
