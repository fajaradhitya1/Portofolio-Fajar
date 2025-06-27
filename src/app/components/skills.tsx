"use client";

import React, { forwardRef, useRef } from "react";
import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiVercel,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiFigma,
} from "react-icons/si";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "./magicui/animated-beam";

// Reusable icon container (tanpa border/background, hanya glow di icon)
const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex w-20 h-20 sm:w-24 sm:h-24 items-center justify-center transition-all duration-300",
        className
      )}
    >
      {/* Glow hanya di icon */}
      <div className="transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
        {children}
      </div>
    </div>
  );
});
Circle.displayName = "Circle";

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);

  const iconRefs = Array.from({ length: 10 }, () =>
    useRef<HTMLDivElement>(null)
  );
  const centerRef = useRef<HTMLDivElement>(null);

  const leftIcons = [
    <FaReact size={28} color="#61DBFB" />,
    <SiNextdotjs size={28} />,
    <SiTailwindcss size={28} color="#38BDF8" />,
    <SiHtml5 size={28} color="#E34F26" />,
    <SiCss3 size={28} color="#1572B6" />,
  ];
  const rightIcons = [
    <SiJavascript size={28} color="#F7DF1E" />,
    <SiTypescript size={28} color="#3178C6" />,
    <SiGit size={28} color="#F1502F" />,
    <SiFigma size={28} color="#A259FF" />,
    <SiVercel size={28} color="#fff" />,
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-7xl mx-auto px-4 py-20 overflow-hidden"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Skills</h2>
        <p className="mt-2 text-zinc-300 text-base sm:text-lg">
          Ini sedikit skill saya
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-12">
        {/* LEFT ICONS (mobile: top) */}
        <div className="flex flex-wrap justify-center sm:flex-col items-center gap-6 order-1 sm:order-none">
          {leftIcons.map((icon, idx) => (
            <Circle key={idx} ref={iconRefs[idx]}>
              {icon}
            </Circle>
          ))}
        </div>

        {/* CENTER SKILLS BOX */}
        <div
          ref={centerRef}
          className="relative z-20 w-32 h-16 sm:w-36 sm:h-20 flex items-center justify-center rounded-lg border border-white/10 bg-white/10 text-white text-sm sm:text-base font-semibold backdrop-blur-md shadow-md transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] order-2 sm:order-none"
        >
          Skills
        </div>

        {/* RIGHT ICONS (mobile: bottom) */}
        <div className="flex flex-wrap justify-center sm:flex-col items-center gap-6 order-3 sm:order-none">
          {rightIcons.map((icon, idx) => (
            <Circle key={idx + 5} ref={iconRefs[idx + 5]}>
              {icon}
            </Circle>
          ))}
        </div>
      </div>

      {/* Animated Beams */}
      {iconRefs.map((ref, i) => (
        <AnimatedBeam
          key={i}
          containerRef={containerRef}
          fromRef={ref}
          toRef={centerRef}
          curvature={i < 5 ? -20 : 20}
          endYOffset={i < 5 ? -10 : 10}
          reverse={i >= 5}
        />
      ))}
    </div>
  );
}
