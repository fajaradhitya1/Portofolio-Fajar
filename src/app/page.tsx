"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AboutMe from "./components/aboutme";
import Lanyard from "./components/Lanyard/Lanyard";
import { AnimatedBeamDemo } from "./components/skills";
import Contact from "./components/contact";
// import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Timeline } from "./components/ui/timeline";
import Header from "./components/header";
import Sertifikat from "./components/sertifikat";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";
import Tools from "./components/tools";


export default function Home() {

  const testimonials = [
    {
      quote: "Gaada orang yang mati karena LATIHAN.",
    },
    {
      quote: "Menyerah? Bukan Pilihan.",
    },
    {
      quote: "Belajar bisa dari berbagai sumber.",
    },
    {
      quote: "Eror adalah bagian dari proses belajar.",
    },
    {
      quote:
        "Dunia adalah sirkuit terus berputar dan berkompetitif. Jangan biarkan dirimu tertinggal di garis belakang.",
    },
  ];
  
  const data = [
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-white md:text-sm text-white">
            Di Tahun 2023 saya lulus dari SMK Negeri 10 jurusan MultiMedia
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[
              "/assets/logo.jpg",
              "/assets/logousu.png",
              "/assets/happy.jpg",
              "/assets/sibayak.jpg",
            ].map((src, idx) => (
              <motion.div
                key={idx}
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                  boxShadow: "0 10px 30px rgba(128,0,128,0.5)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-lg overflow-hidden"
              >
                <img
                  src={src}
                  alt={`startup template ${idx + 1}`}
                  width={500}
                  height={500}
                  className="h-90 w-full object-cover scale-[0.95] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-white md:text-sm text-white">
            Di 2024 saya memutuskan untuk melanjutkan pendidikan saya
          </p>
          <p className="mb-8 text-xs font-normal text-white md:text-sm text-white">
            Masuk ke Universitas Satya Terra Bhinneka dan mengambil Prodi Informatika
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              "/assets/logostb.jpeg",
              "/assets/infor.jpg",
              "/assets/web.jpg",
              "/assets/program.jpeg",
            ].map((src, idx) => (
              <motion.div
                key={idx}
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                  boxShadow: "0 10px 30px rgba(128,0,128,0.5)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-lg overflow-hidden"
              >
                <img
                  src={src}
                  alt={`2024 template ${idx + 1}`}
                  width={500}
                  height={500}
                  className="h-20 w-full object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Now",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-white md:text-sm text-white">
            Di Tahun ini tepatnya di awal Semester 2
          </p>
          <div className="mb-8">
            <p className="mb-4 text-xs font-normal text-white md:text-sm text-white">
              Saya ingin belajar dari berbagai sumber dan masuk kesalahsatu startup yang bernama NOOK STUDIO
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              "/assets/nook.png",
              "/assets/program.jpeg",
              "https://assets.aceternity.com/pro/bento-grids.png",
              "https://assets.aceternity.com/cards.png",
            ].map((src, idx) => (
              <motion.div
                key={idx}
                whileHover={{
                  scale: 0.85,
                  rotate: 1,
                  boxShadow: "0 10px 30px rgba(128,0,128,0.5)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-lg overflow-hidden"
              >
                <img
                  src={src}
                  alt={`now template ${idx + 1}`}
                  width={500}
                  height={500}
                  className="h-20 w-full object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  const products = [
    {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/cursor.png",
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    },

    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/editorially.png",
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/editrix.png",
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
    },

    {
      title: "Algochurn",
      link: "https://algochurn.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
    },
    {
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
    },

    {
      title: "Creme Digital",
      link: "https://cremedigital.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
    },
    {
      title: "Golden Bells Academy",
      link: "https://goldenbellsacademy.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
    },
    {
      title: "Invoker Labs",
      link: "https://invoker.lol",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/invoker.png",
    },
    {
      title: "E Free Invoice",
      link: "https://efreeinvoice.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
    },
  ];

  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <>
      <BackgroundBeamsWithCollision>
        <AboutMe />
      </BackgroundBeamsWithCollision>
      <div className="bg-gradient-to-b from-black via-zinc-900 to-slate-950  min-h-screen overflow-x-hidden">
        <Header />

        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
          <Sertifikat />

          <div className="relative w-full overflow-clip">
            <Timeline data={data} />
          </div>

          <section id="skill">
            <AnimatedBeamDemo />
          </section>

          <Tools />

          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </main>
      </div>
      <div className="bg-white-900 min-h-screen overflow-x-hidden">
        <section
          id="contact"
          className="grid grid-cols-1 bg-black md:grid-cols-2 gap-8 items-center"
        >
          <div className="w-full h-[300px] md:h-screen ">
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
          </div>

          <div className="w-full flex items-center justify-center p-4 md:p-12">
            <Contact />
          </div>
        </section>
      </div>
    </>
  );
}
