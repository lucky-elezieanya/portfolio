// import React from 'react';
// import { Download } from 'lucide-react';

// export default function DownloadButton() {
//   return (
//     <button className="relative bg-transparent outline-none border border-border-text-foreground hover:border-primary/50 transition-all duration-1000 focus:outline-none focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group px-6 py-4 font-medium rounded-full overflow-visible animated-border">
      
//       {/* SVG Border Animation Path */}
//    <svg
//         className="absolute inset-0 w-full h-full pointer-events-none rounded-full overflow-visible"
//         viewBox="0 0 160 50"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           className="animated-border-path"
//           d="M 25 2 A 23 23 0 0 0 2 25 A 23 23 0 0 0 25 48 L 135 48 A 23 23 0 0 0 158 25 A 23 23 0 0 0 135 2 Z"
//           stroke="url(#teal-glow)"
//           strokeWidth="5"
//           fill="none"
//           strokeLinecap="round"
//         />
       
//       </svg>

//       {/* Button Body */}
//       <a
//         href="/#" 
//         download="CV.pdf"
//         className="relative h-full w-full inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-transparent z-10"
//       >
//         <Download className="w-4 h-4" />
//         <span>Download CV</span>
//       </a>
//     </button>
//   );
// }


import React from "react";
import { Download } from "lucide-react";

export default function DownloadButton() {
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
        <Download className="h-4 w-4" />
        <span>Download CV</span>
      </a>
    </button>
  );
}
