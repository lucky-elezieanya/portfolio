

import React from "react";
import { Download } from "lucide-react";

export default function AnimatedButton({children}:{children: React.ReactNode}) {
  return (
    <button
      className="
        relative group overflow-hidden
        rounded-full
        border border-border
        bg-transparent
        px-8 py-4
        font-medium
        outline-none
        transition-all duration-500
        hover:border-primary/50
        hover:bg-[color-mix(in_srgb,#26c4b8_15%,transparent)]
        hover:backdrop-blur-2xl
        hover:shadow-[0_0_20px_color-mix(in_srgb,#26c4b8_20%,transparent)]
        focus-visible:ring-2
        focus-visible:ring-primary
        focus-visible:ring-offset-2
        disabled:opacity-50
        disabled:cursor-not-allowed
      "
    >
      {/* Animated SVG Border */}
      <svg
        className="absolute inset-0 h-full w-full pointer-events-none"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        fill="none"
      >
        <rect
          x="2"
          y="2"
          width="198"
          height="58"
          rx="29"
          ry="29"
          pathLength="100"
          className="
            animated-border-path
            stroke-[#26c4b8]
            stroke-[5]
            opacity-0
            transition-opacity duration-300
            group-hover:opacity-100
          "
        />
      </svg>

      {/* Button Content */}
      <a
        href="/#"
        download="CV.pdf"
        className="
          relative z-10
          inline-flex items-center gap-2
        "
      >
       {children}
      </a>
    </button>
  );
}
