"use client";

import { site, footerLinks, disclaimer } from "@/config/site";
import { Infinity as InfinityIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo + blurb */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1D4ED8]">
                <InfinityIcon className="w-5 h-5 text-white" strokeWidth={2.5} />
              </span>
              <span className="font-display text-[18px] font-bold leading-tight">
                QUANTUM
                <span className="block text-[12px] font-semibold text-white/60 tracking-wide">
                  Advisory Partners
                </span>
              </span>
            </div>
            <p className="mt-4 text-[14px] leading-relaxed text-white/60 max-w-xs">
              Strategic finance, performance improvement, capital decisions and
              institutional readiness for growing Indian businesses.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="text-[13px] font-semibold uppercase tracking-wide text-white/40">
                {title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[15px] text-white/70 hover:text-white transition"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-[13px] font-semibold uppercase tracking-wide text-white/40 mb-2">
            Important Information
          </p>
          <p className="text-[13px] leading-relaxed text-white/50 max-w-4xl">
            {disclaimer}
          </p>
        </div>

        {/* Legal */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
          <p className="text-[13px] text-white/40">
            © {new Date().getFullYear()} Quantum Advisory Partners. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[13px] text-white/60 hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="text-[13px] text-white/60 hover:text-white transition">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}