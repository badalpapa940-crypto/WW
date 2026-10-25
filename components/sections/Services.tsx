"use client";

import { useForm } from "@/components/form-context";
import { services, signatureService, tintMap } from "@/config/site";
import * as Icons from "lucide-react";
import { ArrowRight, Star } from "lucide-react";

export function Services() {
  const { openDrawer } = useForm();

  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal text-center max-w-2xl mx-auto">
          <span className="text-[13px] font-semibold uppercase tracking-wide text-[#1D4ED8]">
            QAP Advisory Platform
          </span>
          <h2 className="mt-3 font-display text-[32px] sm:text-[44px] font-bold leading-tight text-[#0B1F3A]">
            Connected expertise. Practical priorities.
          </h2>
        </div>

        {/* Grid */}
        <div className="mt-12 grid lg:grid-cols-2 gap-5">
          {services.map((s, i) => {
            const tint = tintMap[s.tint];
            const Icon = (Icons as any)[s.icon] as Icons.LucideIcon;
            return (
              <div
                key={s.num}
                className={`reveal reveal-delay-${(i % 4) + 1} group rounded-[18px] border border-[#E3E8F0] bg-white p-6 sm:p-7 hover:shadow-soft hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
                onClick={() => openDrawer(s.title)}
              >
                <div className="flex items-start gap-4">
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] ${tint.tile}`}>
                    <Icon className={`w-6 h-6 ${tint.icon}`} />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] font-bold text-[#94A3B8]">{s.num}</span>
                      <span className={`rounded-full ${tint.bg} px-2.5 py-0.5 text-[12px] font-semibold ${tint.fg}`}>
                        {s.tag}
                      </span>
                    </div>
                    <h3 className="mt-2 text-[20px] font-bold font-display text-[#0B1F3A]">{s.title}</h3>
                    <p className="mt-1.5 text-[15px] text-[#4A5568] leading-relaxed">{s.desc}</p>
                    <ul className="mt-3 space-y-1">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-[14px] text-[#4A5568]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#1D4ED8]" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <button className="mt-4 flex items-center gap-1 text-[15px] font-semibold text-[#1D4ED8] group-hover:gap-2 transition-all">
                      Explore <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured */}
        <div
          className="reveal mt-5 rounded-[18px] border border-[#1D4ED8]/20 bg-[#EEF4FF] p-6 sm:p-8 hover:shadow-soft transition cursor-pointer"
          onClick={() => openDrawer(signatureService.title)}
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-5">
            <div className="flex items-start gap-4 flex-1">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#1D4ED8]">
                <Star className="w-6 h-6 text-white" />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-[#1D4ED8] px-3 py-0.5 text-[12px] font-semibold text-white">
                    {signatureService.pill}
                  </span>
                </div>
                <h3 className="mt-2 text-[22px] font-bold font-display text-[#0B1F3A]">
                  {signatureService.title}
                </h3>
                <p className="mt-1.5 text-[16px] text-[#4A5568] leading-relaxed max-w-2xl">
                  {signatureService.desc}
                </p>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
                  {signatureService.points.map((p) => (
                    <span key={p} className="flex items-center gap-1.5 text-[14px] font-medium text-[#1B2A41]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#1D4ED8]" />
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <button className="flex items-center justify-center gap-1.5 rounded-xl bg-[#1D4ED8] px-5 py-3 text-[16px] font-semibold text-white hover:bg-[#1746B1] transition shadow-soft shrink-0 self-start lg:self-center">
              Explore <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}