"use client";

import { useForm } from "@/components/form-context";
import { heroTicks } from "@/config/site";
import { ArrowRight, Check, TrendingUp, TrendingDown } from "lucide-react";

export function Hero() {
  const { openModal } = useForm();

  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-white to-[#EEF4FF]/60 pt-12 pb-32 sm:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left */}
          <div className="reveal">
            <span className="inline-block rounded-full border border-[#E3E8F0] bg-white px-4 py-1.5 text-[13px] font-semibold uppercase tracking-wide text-[#1D4ED8]">
              Strategic Finance · Performance · Value Creation
            </span>
            <h1 className="mt-5 font-display text-[44px] sm:text-[64px] font-extrabold leading-[1.1] text-[#0B1F3A] text-balance">
              Build a better business. Build a{" "}
              <span className="relative inline-block text-[#1D4ED8]">
                more valuable
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8C40 3 80 3 120 6C150 8 180 5 198 4"
                    stroke="#1D4ED8"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              business.
            </h1>
            <p className="mt-6 text-[17px] sm:text-[18px] leading-[1.7] text-[#4A5568] prose-measure">
              Quantum Advisory Partners helps businesses identify opportunities,
              improve financial performance, strengthen capital decisions and
              build the operating discipline needed for sustainable growth.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => openModal()}
                className="flex items-center justify-center gap-1.5 rounded-xl bg-[#1D4ED8] px-6 py-3.5 text-[16px] font-semibold text-white hover:bg-[#1746B1] transition shadow-soft"
              >
                Discuss Your Business <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#services"
                className="flex items-center justify-center gap-1.5 rounded-xl border border-[#0B1F3A] px-6 py-3.5 text-[16px] font-semibold text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white transition"
              >
                Explore Our Services
              </a>
            </div>

            {/* Ticks */}
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2">
              {heroTicks.map((t) => (
                <div key={t} className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#16A34A]" />
                  <span className="text-[15px] font-medium text-[#1B2A41]">{t}</span>
                </div>
              ))}
            </div>

            {/* Trusted by */}
            <div className="mt-10">
              <p className="text-[13px] font-semibold uppercase tracking-wide text-[#94A3B8]">
                Trusted by growing Indian businesses
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex h-12 w-28 items-center justify-center rounded-xl border border-[#E3E8F0] bg-white text-[12px] font-semibold text-[#94A3B8]"
                  >
                    LOGO {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Dashboard card */}
          <div className="reveal reveal-delay-2 relative">
            {/* soft shape */}
            <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-[#EEF4FF] to-[#DDF5F0] -z-10" />
            <div className="rounded-[20px] border border-[#E3E8F0] bg-white p-6 shadow-soft-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-[13px] font-semibold uppercase tracking-wide text-[#94A3B8]">
                    Business Dashboard
                  </p>
                  <p className="text-[18px] font-bold font-display text-[#0B1F3A]">
                    Performance Overview
                  </p>
                </div>
                <span className="rounded-full bg-[#FFF1D6] px-3 py-1 text-[12px] font-semibold text-[#B45309]">
                  Illustrative
                </span>
              </div>

              {/* EBITDA line chart */}
              <div className="rounded-xl border border-[#E3E8F0] p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[14px] font-semibold text-[#1B2A41]">EBITDA Trend</span>
                  <span className="text-[13px] font-semibold text-[#16A34A]">+18% YoY</span>
                </div>
                <svg viewBox="0 0 320 90" className="w-full h-20" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,70 L40,60 L80,55 L120,40 L160,38 L200,28 L240,22 L280,15 L320,10 L320,90 L0,90 Z" fill="url(#lineGrad)" />
                  <path d="M0,70 L40,60 L80,55 L120,40 L160,38 L200,28 L240,22 L280,15 L320,10" fill="none" stroke="#1D4ED8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Cash bar chart + Capital ratio */}
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-[#E3E8F0] p-4">
                  <span className="text-[13px] font-semibold text-[#1B2A41]">Cash (₹Cr)</span>
                  <div className="mt-3 flex items-end gap-1.5 h-16">
                    {[40, 55, 35, 70, 60, 85].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t bg-[#1D4ED8]/80" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-[#E3E8F0] p-4">
                  <span className="text-[13px] font-semibold text-[#1B2A41]">Capital Ratio</span>
                  <div className="mt-3 flex items-center justify-center h-16">
                    <div className="relative h-16 w-16">
                      <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                        <circle cx="18" cy="18" r="14" fill="none" stroke="#EEF4FF" strokeWidth="3" />
                        <circle cx="18" cy="18" r="14" fill="none" stroke="#0F766E" strokeWidth="3" strokeDasharray="62 88" strokeLinecap="round" />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-[14px] font-bold text-[#0B1F3A]">
                        2.4x
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enterprise Value tile */}
              <div className="mt-3 rounded-xl bg-[#0B1F3A] p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[13px] font-semibold text-white/70">Enterprise Value</p>
                    <p className="text-[22px] font-bold font-display text-white">₹420Cr</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[12px] text-white/60">vs target</p>
                    <p className="text-[14px] font-semibold text-[#DDF5F0]">+12%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating chips */}
            <div className="absolute -top-3 -right-2 sm:-right-4 flex items-center gap-1.5 rounded-full bg-white border border-[#E3E8F0] px-3 py-2 shadow-soft">
              <TrendingUp className="w-4 h-4 text-[#16A34A]" />
              <span className="text-[13px] font-semibold text-[#1B2A41]">EBITDA margin ↑</span>
            </div>
            <div className="absolute -bottom-3 -left-2 sm:-left-4 flex items-center gap-1.5 rounded-full bg-white border border-[#E3E8F0] px-3 py-2 shadow-soft">
              <TrendingDown className="w-4 h-4 text-[#1D4ED8]" />
              <span className="text-[13px] font-semibold text-[#1B2A41]">Working capital cycle ↓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}