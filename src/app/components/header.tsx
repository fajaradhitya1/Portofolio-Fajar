"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const active = useActiveSection(["about", "sertifikat", "skill", "contact"]);
  const pathname = usePathname();

  const navLinkClass = (id: string) => {
    const isGallery = id === "gallery";
    const isActive = isGallery ? pathname === "/gallery" : active === id;

    return `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
      isActive
        ? "bg-cyan-300 text-black shadow-lg scale-105"
        : "text-white bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 hover:from-cyan-500 hover:to-blue-400 hover:scale-105"
    }`;
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-zinc-900 backdrop-blur-md shadow-md">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Left Nav */}
        <nav className="hidden md:flex items-center space-x-4">
          <Link href="/#about" className={navLinkClass("about")}>
            About
          </Link>
          <Link href="/#sertifikat" className={navLinkClass("sertifikat")}>
            Sertifikat
          </Link>
        </nav>

        {/* Logo (center) */}
        <Link href="/" className="flex-shrink-0">
          <img
            src="/images/experience/logo.png"
            alt="Logo"
            className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Right Nav */}
        <nav className="hidden md:flex items-center space-x-4">
          <Link href="/#skill" className={navLinkClass("skill")}>
            Skills
          </Link>
          <Link href="/gallery" className={navLinkClass("gallery")}>
            Gallery
          </Link>
          <Link href="/#contact" className={navLinkClass("contact")}>
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-800/95 backdrop-blur p-4 space-y-2">
          {[
            ["About", "about"],
            ["Sertifikat", "sertifikat"],
            ["Skills", "skill"],
            ["Gallery", "gallery"],
            ["Contact", "contact"],
          ].map(([label, id], idx) => (
            <Link
              key={idx}
              href={id === "gallery" ? "/gallery" : `/#${id}`}
              onClick={() => setIsOpen(false)}
              className={`block w-full ${navLinkClass(id)}`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
