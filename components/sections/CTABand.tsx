"use client";

import { useForm } from "@/components/form-context";
import { ArrowRight } from "lucide-react";

export function CTABand() {
  const { openModal } = useForm();

  return (
    <section className="py-16 sm:py-20 bg-[#1D4ED8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
        <h2 className="font-display text-[32px] sm:text-[44px] font-bold leading-tight text-white text-balance">
          Start with one conversation.
        </h2>
        <p className="mt-3 text-[17px] text-white/80">
          Begin with the business issue that matters most.
        </p>
        <button
          onClick={() => openModal()}
          className="mt-7 inline-flex items-center gap-1.5 rounded-xl bg-white px-6 py-3.5 text-[16px] font-semibold text-[#1D4ED8] hover:bg-[#EEF4FF] transition shadow-soft"
        >
          Discuss Your Business <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}