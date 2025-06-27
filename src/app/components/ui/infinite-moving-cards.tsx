"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: { quote: string }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((item) => {
      const clone = item.cloneNode(true);
      scrollerRef.current?.appendChild(clone);
    });

    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );

    const durations = { fast: "20s", normal: "40s", slow: "80s" };
    containerRef.current.style.setProperty(
      "--animation-duration",
      durations[speed] || "40s"
    );

    setStart(true);
  }, []);

  return (
    <section className="py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center py-25">
          <h2 className="text-4xl font-bold">Motivasi</h2>
          <p className="text-white/70 mt-2">
            Ini adalah sedikit motivasi yang telah dilemparkan ke saya.
          </p>
        </div>

        <div
          ref={containerRef}
          className={cn(
            "scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
            className
          )}
        >
          <ul
            ref={scrollerRef}
            className={cn(
              "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
              start && "animate-scroll",
              pauseOnHover && "hover:[animation-play-state:paused]"
            )}
          >
            {items.map((item, idx) => (
              <li
                key={idx}
                className="relative w-[320px] md:w-[400px] shrink-0 rounded-2xl border border-zinc-700 bg-zinc-800 px-6 py-5 transition-transform duration-300 hover:scale-[1.04] hover:shadow-[0_10px_30px_rgba(128,0,128,0.4)]"
              >
                <blockquote className="text-sm text-center leading-relaxed text-zinc-100">
                  {item.quote}
                </blockquote>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
