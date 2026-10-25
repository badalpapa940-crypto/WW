"use client";

import { valueFramework, frameworkFlow, tintMap } from "@/config/site";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";

export function ValueFramework() {
  return (
    <section className="py-20 sm:py-28 bg-[#F7F8FA]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto reveal">
          <h2 className="font-display text-[32px] sm:text-[44px] font-bold leading-tight text-[#0B1F3A]">
            Turn insight into action.
          </h2>
        </div>

        {/* 4 cards */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {valueFramework.map((card, i) => {
            const tint = tintMap[card.tint];
            const Icon = (Icons as any)[card.icon] as Icons.LucideIcon;
            return (
              <div
                key={card.id}
                className={`reveal reveal-delay-${i + 1} rounded-[18px] border border-[#E3E8F0] bg-white p-6 hover:shadow-soft hover:-translate-y-1 transition-all duration-300`}
              >
                <span className={`flex h-12 w-12 items-center justify-center rounded-[14px] ${tint.tile}`}>
                  <Icon className={`w-6 h-6 ${tint.icon}`} />
                </span>
                <h3 className="mt-4 text-[20px] font-bold font-display text-[#0B1F3A]">{card.title}</h3>
                <p className="mt-1.5 text-[15px] text-[#4A5568] leading-relaxed">{card.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Flow */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
          {frameworkFlow.map((step, i) => (
            <div key={step} className="flex items-center gap-3 sm:gap-5">
              <div className="flex items-center gap-2.5 rounded-full bg-white border border-[#E3E8F0] px-5 py-2.5 shadow-soft">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1D4ED8] text-white text-[13px] font-bold">
                  {i + 1}
                </span>
                <span className="text-[16px] font-semibold text-[#0B1F3A]">{step}</span>
              </div>
              {i < frameworkFlow.length - 1 && (
                <ArrowRight className="w-5 h-5 text-[#94A3B8] hidden sm:block" />
              )}
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-[14px] text-[#94A3B8] max-w-2xl mx-auto">
          A framework for structuring advisory work. Priorities and outcomes
          depend on each business's circumstances and implementation.
        </p>
      </div>
    </section>
  );
}