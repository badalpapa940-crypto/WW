"use client";

import { founder } from "@/config/site";
import { Quote, Check } from "lucide-react";

export function Founder() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F7F8FA]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - image placeholder */}
          <div className="reveal relative">
            <div className="absolute inset-0 -z-10 rounded-[24px] bg-gradient-to-br from-[#E0EAFF] to-[#DDF5F0] translate-x-4 translate-y-4" />
            <div className="aspect-[4/5] rounded-[24px] border border-[#E3E8F0] bg-white flex items-center justify-center overflow-hidden">
              <div className="flex flex-col items-center gap-4 text-[#94A3B8]">
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#EEF4FF]">
                  <span className="font-display text-[40px] font-bold text-[#1D4ED8]">
                    {founder.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <p className="text-[14px] font-semibold uppercase tracking-wide">
                  Photo placeholder
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="reveal reveal-delay-2">
            <h2 className="font-display text-[28px] sm:text-[36px] font-bold leading-tight text-[#0B1F3A]">
              {founder.name}
            </h2>
            <p className="mt-1 text-[17px] font-medium text-[#1D4ED8]">
              {founder.role}
            </p>
            <p className="mt-4 text-[17px] leading-[1.7] text-[#4A5568] prose-measure">
              {founder.bio}
            </p>

            <div className="mt-5 space-y-2">
              {founder.credentials.map((c) => (
                <div key={c} className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#DDF5F0]">
                    <Check className="w-3.5 h-3.5 text-[#16A34A]" />
                  </span>
                  <span className="text-[15px] text-[#1B2A41]">{c}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[18px] border-l-4 border-[#1D4ED8] bg-white p-5 shadow-soft">
              <Quote className="w-6 h-6 text-[#1D4ED8]" />
              <p className="mt-2 text-[17px] italic leading-relaxed text-[#1B2A41]">
                {founder.quote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}