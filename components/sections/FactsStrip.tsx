"use client";

import { stats } from "@/config/site";

export function FactsStrip() {
  return (
    <div className="relative z-10 -mt-20 sm:-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E3E8F0] rounded-[20px] overflow-hidden shadow-soft-lg">
          {stats.map((s) => (
            <div key={s.label} className="bg-white p-5 sm:p-7">
              <p className="text-[22px] sm:text-[28px] font-bold font-display text-[#1D4ED8] leading-tight">
                {s.value}
              </p>
              <p className="mt-1 text-[14px] sm:text-[15px] font-medium text-[#4A5568] leading-snug">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}