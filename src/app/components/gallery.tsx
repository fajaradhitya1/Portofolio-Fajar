"use client";

import React from "react";
import Link from "next/link";
import CircularGallery from "@/app/components/CircularGallery/CircularGallery";

const Gallery = () => {
  return (
    <section className="py-20 px-6 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Gallery</h2>
          <p className="text-base text-white/80">
            Inilah hasil yang sudah saya raih selama berkarir di jujitsu
          </p>
        </div>

        <div style={{ height: "600px", position: "relative" }}>
          <CircularGallery bend={-10} textColor="#ffffff" borderRadius={0.05} />
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-4 grid-rows-2 gap-4 max-w-6xl mx-auto">
            <div className="border border-white col-span-1 row-span-1 overflow-hidden rounded-2xl shadow-lg ring-1 ring-white/10 transition-all duration-300 ease-in-out hover:scale-[1.05] hover:rotate-[2deg] hover:shadow-[0_10px_30px_rgba(128,0,128,0.5)] rounded-xl">
              <img
                src="/assets/4foto.jpg"
                alt=""
                className="w-full object-cover "
              />
            </div>

            <div className="col-span-3 row-span-1 overflow-hidden rounded-2xl shadow-lg ring-1 ring-white/10 border border-white">
              <video
                src="/assets/vidio2.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            <div className="col-span-3 row-span-1 overflow-hidden rounded-2xl shadow-lg ring-1 ring-white/10 border border-white">
              <video
                src="/assets/vidio6.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="col-span-1 row-span-1 overflow-hidden rounded-2xl shadow-lg ring-1 ring-white/10 transition-all duration-300 ease-in-out hover:scale-[1.05] hover:rotate-[-2deg] hover:shadow-[0_10px_50px_rgba(128,0,128,0.9)]
 rounded-xl border border-white "
            >
              <img
                src="/assets/3foto.jpg"
                alt=""
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-white text-zinc-900 font-semibold rounded-full hover:bg-zinc-200 transition"
          >
            ← Kembali ke Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
