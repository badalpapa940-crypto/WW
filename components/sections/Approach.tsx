"use client";

import { useForm } from "@/components/form-context";
import { approachSteps } from "@/config/site";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";

export function Approach() {
  const { openModal } = useForm();

  return (
    <section id="approach" className="py-20 sm:py-28 bg-[#F7F8FA]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="reveal text-center max-w-2xl mx-auto">
          <h2 className="font-display text-[32px] sm:text-[44px] font-bold leading-tight text-[#0B1F3A]">
            From numbers to decisions. From decisions to action.
          </h2>
          <p className="mt-4 text-[17px] text-[#4A5568] leading-relaxed">
            A structured approach helps management move from an initial question
            to an actionable plan with clear priorities, ownership and measures.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-14 grid lg:grid-cols-6 gap-5 lg:gap-3 relative">
          {/* connecting line desktop */}
          <div className="hidden lg:block absolute top-7 left-[8.33%] right-[8.33%] h-0.5 bg-[#E3E8F0]" />
          {approachSteps.map((step, i) => {
            const Icon = (Icons as any)[step.icon] as Icons.LucideIcon;
            return (
              <div
                key={step.num}
                className={`reveal reveal-delay-${(i % 4) + 1} relative flex flex-col items-center text-center lg:px-2`}
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white border-2 border-[#1D4ED8] shadow-soft">
                  <Icon className="w-6 h-6 text-[#1D4ED8]" />
                </div>
                <span className="mt-3 text-[13px] font-bold text-[#1D4ED8]">{step.num}</span>
                <h3 className="mt-1 text-[18px] font-bold font-display text-[#0B1F3A]">{step.title}</h3>
                <p className="mt-1.5 text-[14px] text-[#4A5568] leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => openModal()}
            className="inline-flex items-center gap-1.5 rounded-xl bg-[#1D4ED8] px-6 py-3.5 text-[16px] font-semibold text-white hover:bg-[#1746B1] transition shadow-soft"
          >
            Start with a business conversation <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}