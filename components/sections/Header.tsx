"use client";

import { useForm } from "@/components/form-context";
import { site } from "@/config/site";
import { Menu, X, Infinity as InfinityIcon, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const { openModal } = useForm();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-soft"
            : "bg-white/70 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3.5">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1D4ED8]">
              <InfinityIcon className="w-5 h-5 text-white" strokeWidth={2.5} />
            </span>
            <span className="font-display text-[18px] font-bold text-[#0B1F3A] leading-tight">
              QUANTUM
              <span className="block text-[12px] font-semibold text-[#4A5568] tracking-wide">
                Advisory Partners
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {site.nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="text-[15px] font-medium text-[#1B2A41] hover:text-[#1D4ED8] transition"
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <button
            onClick={() => openModal()}
            className="hidden lg:flex items-center gap-1.5 rounded-xl bg-[#1D4ED8] px-5 py-2.5 text-[16px] font-semibold text-white hover:bg-[#1746B1] transition shadow-soft"
          >
            Discuss Your Business <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl hover:bg-[#F7F8FA] transition"
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-[#E3E8F0] bg-white px-4 py-4">
            <nav className="flex flex-col gap-1">
              {site.nav.map((n) => (
                <a
                  key={n.label}
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-[17px] font-medium text-[#1B2A41] hover:bg-[#EEF4FF] transition"
                >
                  {n.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMenuOpen(false);
                  openModal();
                }}
                className="mt-2 flex items-center justify-center gap-1.5 rounded-xl bg-[#1D4ED8] px-5 py-3 text-[16px] font-semibold text-white"
              >
                Discuss Your Business <ArrowRight className="w-4 h-4" />
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Mobile bottom bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex border-t border-[#E3E8F0] bg-white px-4 py-2.5 gap-2 shadow-soft-lg">
        <a
          href={site.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#16A34A] px-4 py-3 text-[16px] font-semibold text-white"
        >
          WhatsApp
        </a>
        <button
          onClick={() => openModal()}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#1D4ED8] px-4 py-3 text-[16px] font-semibold text-white"
        >
          Enquire
        </button>
      </div>
    </>
  );
}