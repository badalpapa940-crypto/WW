"use client";

import { industries, tintMap } from "@/config/site";
import * as Icons from "lucide-react";

export function Industries() {
  return (
    <section id="industries" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal text-center max-w-2xl mx-auto">
          <h2 className="font-display text-[32px] sm:text-[44px] font-bold leading-tight text-[#0B1F3A]">
            Different industries. Connected financial questions.
          </h2>
          <p className="mt-4 text-[17px] text-[#4A5568] leading-relaxed">
            Advisory priorities vary by business model, maturity, capital
            intensity and market conditions. Our work starts with the company's
            specific context rather than a one-size-fits-all playbook.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((ind, i) => {
            const tint = tintMap[ind.tint];
            const Icon = (Icons as any)[ind.icon] as Icons.LucideIcon;
            return (
              <div
                key={ind.name}
                className={`reveal reveal-delay-${(i % 4) + 1} rounded-[16px] border border-[#E3E8F0] bg-white p-5 hover:shadow-soft hover:-translate-y-1 transition-all duration-300`}
              >
                <span className={`flex h-12 w-12 items-center justify-center rounded-[14px] ${tint.tile}`}>
                  <Icon className={`w-6 h-6 ${tint.icon}`} />
                </span>
                <h3 className="mt-4 text-[17px] font-bold font-display text-[#0B1F3A]">{ind.name}</h3>
                <p className="mt-1 text-[14px] text-[#4A5568] leading-relaxed">{ind.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}