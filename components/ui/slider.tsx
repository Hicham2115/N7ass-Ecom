"use client";

import { Slider as SliderPrimitive } from "radix-ui";
import type * as React from "react";

import { cn } from "@/lib/utils";

function Slider({ className, ...props }: React.ComponentProps<typeof SliderPrimitive.Root>) {
  return (
    <SliderPrimitive.Root
      className={cn("relative flex w-full touch-none select-none items-center", className)}
      data-slot="slider"
      {...props}
    >
      <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-[#eadfd5]" data-slot="slider-track">
        <SliderPrimitive.Range className="absolute h-full bg-[#a9653e]" data-slot="slider-range" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        aria-label="Prix minimum"
        className="block size-4 rounded-full border-2 border-[#fcfaf6] bg-[#a9653e] shadow-[0_0_0_1px_#a9653e] outline-none transition-transform hover:scale-110 focus-visible:ring-2 focus-visible:ring-[#b87343]/35"
        data-slot="slider-thumb"
      />
      <SliderPrimitive.Thumb
        aria-label="Prix maximum"
        className="block size-4 rounded-full border-2 border-[#fcfaf6] bg-[#a9653e] shadow-[0_0_0_1px_#a9653e] outline-none transition-transform hover:scale-110 focus-visible:ring-2 focus-visible:ring-[#b87343]/35"
        data-slot="slider-thumb"
      />
    </SliderPrimitive.Root>
  );
}

export { Slider };
