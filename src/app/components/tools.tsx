"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaFigma, FaGithub, FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiVercel,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

const Tools = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Tools data langsung di sini
  const listTools = [
    {
      icon: <FaReact size={28} color="#61DBFB" />,
      nama: "React",
      ket: "UI Framework",
    },
    { icon: <SiNextdotjs size={28} />, nama: "Next.js", ket: "SSR Framework" },
    {
      icon: <SiTailwindcss size={28} color="#38BDF8" />,
      nama: "Tailwind",
      ket: "Utility CSS",
    },
    { icon: <FaGithub size={28} />, nama: "GitHub", ket: "Repo Hosting" },
    {
      icon: <FaGitAlt size={28} color="#F1502F" />,
      nama: "Git",
      ket: "Version Control",
    },
    {
      icon: <FaFigma size={28} color="#A259FF" />,
      nama: "Figma",
      ket: "UI Design",
    },
    {
      icon: <FaNodeJs size={28} color="#68A063" />,
      nama: "Node.js",
      ket: "Backend Runtime",
    },
    { icon: <SiVercel size={28} />, nama: "Vercel", ket: "Hosting" },
  ];

  // Auto-scroll
  useEffect(() => {
    const scroll = () => {
      if (!isDragging && containerRef.current) {
        containerRef.current.scrollLeft += 1;
        if (
          containerRef.current.scrollLeft >=
          containerRef.current.scrollWidth - containerRef.current.clientWidth
        ) {
          containerRef.current.scrollLeft = 0;
        }
      }
    };
    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, [isDragging]);

  // Drag logic
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <section className="py-20 px-6 text-white overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Tools I Use</h2>
          <p className="text-white/60 mt-2">
            Berikut ini tools yang saya gunakan
          </p>
        </div>

        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="relative overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing select-none"
        >
          <ul className="flex gap-6 w-max items-center py-4 px-2">
            {[...listTools, ...listTools].map((tool, idx) => (
              <li
                key={idx}
                className="w-[160px] h-[180px] shrink-0 rounded-2xl border border-zinc-700 bg-zinc-800 flex flex-col items-center justify-center p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-violet-400/40"
              >
                <div className="mb-3">{tool.icon}</div>
                <p className="text-sm font-semibold text-white">{tool.nama}</p>
                <p className="text-xs text-zinc-400">{tool.ket}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Tools;
