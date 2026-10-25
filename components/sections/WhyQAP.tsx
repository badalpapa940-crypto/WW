"use client";

import { tintMap } from "@/config/site";
import { Eye, Target, LineChart } from "lucide-react";

const features = [
  {
    title: "See the full picture",
    desc: "Connect financial results with the operational drivers behind them.",
    icon: Eye,
    tint: "blue" as const,
  },
  {
    title: "Focus on what matters",
    desc: "Prioritise opportunities based on impact.",
    icon: Target,
    tint: "teal" as const,
  },
  {
    title: "Measure progress",
    desc: "Track agreed KPIs and outcomes.",
    icon: LineChart,
    tint: "amber" as const,
  },
];

export function WhyQAP() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left */}
          <div className="reveal">
            <span className="text-[13px] font-semibold uppercase tracking-wide text-[#1D4ED8]">
              Why Quantum Advisory Partners
            </span>
            <h2 className="mt-3 font-display text-[32px] sm:text-[44px] font-bold leading-[1.15] text-[#0B1F3A] text-balance">
              Better decisions start with better financial visibility.
            </h2>
            <div className="mt-6 space-y-4 text-[17px] leading-[1.7] text-[#4A5568] prose-measure">
              <p>
                Growth can expose gaps in cash planning, profitability,
                financing, management information and operational control.
                These issues often overlap. Addressing them in isolation can
                leave value unrealised.
              </p>
              <p>
                QAP brings together strategic finance, performance improvement,
                capital decisions and governance to help management understand
                where value may be created, what matters most and how progress
                can be measured.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="reveal reveal-delay-2 space-y-4">
            {features.map((f) => {
              const tint = tintMap[f.tint];
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="flex items-start gap-4 rounded-[18px] border border-[#E3E8F0] bg-white p-5 sm:p-6 hover:shadow-soft transition"
                >
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] ${tint.tile}`}>
                    <Icon className={`w-6 h-6 ${tint.icon}`} />
                  </span>
                  <div>
                    <h3 className="text-[18px] font-bold font-display text-[#0B1F3A]">{f.title}</h3>
                    <p className="mt-1 text-[16px] text-[#4A5568] leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}