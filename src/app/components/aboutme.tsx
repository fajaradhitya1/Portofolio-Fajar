"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { TextReveal } from "@/components/magicui/text-reveal";

const stats = [
  { label: "Experience", value: 10 },
  { label: "Competition", value: 20 },
];

const AboutMe = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Teks besar FAJAR dst
  const { ref: nameRef, inView: nameInView } = useInView({ threshold: 0.2 });

  // Untuk teks deskripsi dan counter
  const { ref, inView } = useInView({ threshold: 0.2 });
  const nameControls = useAnimation();

  useEffect(() => {
    nameControls.start({
      rotate: 0,
      opacity: 0.1,
      transition: { duration: 1 },
    });
  }, [inView, nameControls]);

  return (
    <section id="about" className="min-h-screen bg-black-900 text-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6 py-24 space-y-20">
        <div
          ref={nameRef}
          className="relative flex items-center justify-center h-screen overflow-hidden rounded-2xl"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 font-extrabold text-[10vw] leading-[1.1] tracking-tight uppercase text-center pointer-events-none whitespace-nowrap text-white">
            <motion.div
              animate={{ rotate: nameInView ? 0 : -25 }}
              transition={{ duration: 0.5 }}
              className="opacity-100"
            >
              FAJAR
            </motion.div>
            <motion.div
              animate={{ rotate: nameInView ? 0 : 25 }}
              transition={{ duration: 0.5 }}
              className="opacity-100"
            >
              ADHITYA
            </motion.div>
            <motion.div
              animate={{ rotate: nameInView ? 0 : -15 }}
              transition={{ duration: 0.5 }}
              className="opacity-100"
            >
              MANTHEY
            </motion.div>
          </div>

          <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 w-48 h-48 sm:w-50 sm:h-50 rounded-xl overflow-hidden shadow-2xl group"
          >
            {/* FOTO UTAMA */}
            <Image
              src="/images/experience/profilasli.jpeg"
              alt="Profile"
              fill
              className="object-cover transition-opacity duration-500 group-hover:opacity-0"
            />

            {/* FOTO HOVER */}
            <Image
              src="/images/experience/profilsaya.jpeg"
              alt="Profile Hover"
              fill
              className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 absolute inset-0"
            />
          </motion.div>
        </div>

        <div className="flex flex-col items-center md:flex-row md:items-start justify-center gap-10">
          <div className="md:max-w-xl space-y-6 text-left">
            <h2 className="text-5xl font-extrabold text-center">About Me</h2>
            <p className="text-3xl font-bold leading-snug">
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-sky-300 via-white to-blue-300 bg-clip-text text-transparent">
                Fajar Adhitya
              </span>
            </p>
            <p className="text-blue-400 font-medium text-lg">
              Athlete based in <span className="underline">Indonesia</span>
            </p>

            <TextReveal className="text-base leading-relaxed mt-5 mb-10">
              Hi, perkenalkan saya Fajar Adhitya. Saya adalah seorang atlet bela
              diri Jujitsu yang telah menekuni dan berlatih secara serius selama
              lebih dari 10 tahun. Berbekal dedikasi, disiplin, dan semangat
              pantang menyerah, saya telah meraih berbagai prestasi di tingkat
              daerah, nasional, hingga internasional. Sepanjang perjalanan
              karier saya di dunia Jujitsu, saya telah berpartisipasi dalam
              berbagai kejuaraan bergengsi dan berhasil menorehkan banyak gelar
              juara yang membanggakan.
            </TextReveal>

            {/* COUNTER */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {stats.map((item, index) => {
                const { ref: statRef, inView: isStatVisible } = useInView({
                  threshold: 0.5,
                });

                const [showCount, setShowCount] = useState(false);

                useEffect(() => {
                  setShowCount(isStatVisible);
                }, [isStatVisible]);

                return (
                  <div
                    key={index}
                    ref={statRef}
                    className="relative group overflow-visible"
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-xl scale-105 opacity-0 group-hover:opacity-60 transition duration-300 bg-blue-500 blur-2xl z-0"></div>

                    {/* Counter box */}
                    <div className="relative z-10 rounded-xl bg-white border border-blue-100 p-6 shadow-md text-center transition duration-300 hover:scale-105 hover:shadow-xl">
                      <h3 className="text-3xl font-bold text-blue-600">
                        {showCount ? (
                          <CountUp end={item.value} duration={1.5} />
                        ) : (
                          0
                        )}
                        {item.value > 1 ? "+" : ""}
                      </h3>
                      <p className="text-sm text-gray-600">{item.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
