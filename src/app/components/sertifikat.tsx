"use client";

import React from "react";
import Link from "next/link";
import { listProyek } from "@/data";

interface Proyek {
  id: number;
  gambar: string;
  nama: string;
  desk: string;
}

const Sertifikat: React.FC = () => {
  return (
    <>
      <div className="proyek mt-20 py-10" id="sertifikat">
        <h1 className="text-center text-4xl font-bold mb-2 text-white">
          Sertifikat
        </h1>
        <p className="text-base text-center opacity-50 text-white">
          Berikut ini adalah beberapa sertifikat yang telah saya capai
        </p>

  
        <div className="proyek-box-wrapper border border-white rounded-2xl p-6 mt-14 mx-4">
          <div className="proyek-box grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {listProyek.map((proyek: Proyek) => (
              <div
                key={proyek.id}
                className="relative group rounded-lg overflow-hidden border border-zinc-700 shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_#a855f7]"
              >
                <img
                  src={proyek.gambar}
                  alt={proyek.nama}
                  loading="lazy"
                  className="w-full h-64 object-cover group-hover:brightness-50 transition duration-300"
                />

                <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center px-4">
                  <h1 className="text-xl font-bold mb-2">{proyek.nama}</h1>
                  <p className="text-sm">{proyek.desk}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tombol lihat semua */}
      <div className="mt-10 text-center">
        <Link
          href="/gallery"
          className="bg-violet-700 text-white px-6 py-3 rounded-lg border border-zinc-600 hover:bg-violet-600 transition"
        >
          Lihat Semua Sertifikat
        </Link>
      </div>
    </>
  );
};

export default Sertifikat;
