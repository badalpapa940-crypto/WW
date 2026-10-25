"use client";

import { testimonials } from "@/config/site";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} rounded-[18px] border border-[#E3E8F0] bg-white p-6 shadow-soft`}
            >
              <div className="flex gap-0.5">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-[#FFF1D6] text-[#B45309]" />
                ))}
              </div>
              <p className="mt-4 text-[16px] leading-relaxed text-[#1B2A41]">
                "{t.quote}"
              </p>
              <div className="mt-5 pt-4 border-t border-[#E3E8F0]">
                <p className="text-[15px] font-semibold text-[#0B1F3A]">{t.name}</p>
                <p className="text-[13px] text-[#94A3B8]">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}