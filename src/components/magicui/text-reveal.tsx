"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { FC, useRef, ReactNode, ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.7", "end 0.3"], // efek dimulai lebih awal dan berakhir lebih lambat
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  return (
    <div
      ref={containerRef}
      className={cn("relative min-h-[2vh]", className)} // 👈 tambahkan tinggi minimum agar efek sempat terjadi
    >
      <p className="flex flex-wrap text-base sm:text-lg md:text-xl font-medium leading-relaxed text-white/30 dark:text-white/30">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.5, 1]);
  const color = useTransform(progress, range, ["#888888", "#ffffff"]);

  return (
    <motion.span style={{ opacity, color }} className="mx-1 transition-colors">
      {children}
    </motion.span>
  );
};
