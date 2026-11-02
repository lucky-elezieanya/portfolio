
import React from "react";

interface AnimatedButtonProps {
  children: React.ReactNode;
  href?: string;
  download?: boolean;
  fileName?: string;
  className?: string;
}

export default function AnimatedButton({
  children,
  href = "#",
  download = false,
  fileName = "file.pdf",
  className = "",
}: AnimatedButtonProps) {
  return (
    <a
      href={href}
      download={download ? fileName : undefined}
      className={`
        relative group inline-flex items-center justify-center
        overflow-hidden
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
        ${className}
      `}
    >
      {/* Animated SVG Border */}
      <svg
        className="absolute inset-0 h-full w-full pointer-events-none"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="2.5"
          y="2.5"
          width="195"
          height="55"
          rx="27.5"
          ry="27.5"
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
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </a>
  );
}
