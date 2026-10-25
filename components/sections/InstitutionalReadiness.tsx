"use client";

import { useForm } from "@/components/form-context";
import { ipoChecklist } from "@/config/site";
import { Check, ArrowRight } from "lucide-react";

export function InstitutionalReadiness() {
  const { openModal } = useForm();

  return (
    <section className="py-20 sm:py-28 bg-[#0B1F3A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left */}
          <div className="reveal">
            <span className="text-[13px] font-semibold uppercase tracking-wide text-[#DDF5F0]">
              Institutional Readiness
            </span>
            <h2 className="mt-3 font-display text-[32px] sm:text-[44px] font-bold leading-tight text-white text-balance">
              Don't wait for the IPO. Build the company before it.
            </h2>
            <p className="mt-5 text-[17px] leading-[1.7] text-white/70 prose-measure">
              Preparing for demanding stakeholders — investors, lenders, auditors,
              regulators — builds the discipline that supports better decisions
              long before any transaction. Whether the next milestone is a
              fundraising round, a strategic partnership or a public listing,
              institutional readiness is the foundation.
            </p>
            <p className="mt-4 text-[14px] text-white/50 italic">
              IPO readiness is one possible objective, not a guarantee of
              listing eligibility, approval, fundraising or transaction success.
            </p>
          </div>

          {/* Right - card */}
          <div className="reveal reveal-delay-2">
            <div className="rounded-[20px] bg-white p-6 sm:p-8 shadow-soft-lg">
              <p className="text-[13px] font-semibold uppercase tracking-wide text-[#1D4ED8]">
                QAP Focus: Be IPO Ready
              </p>
              <h3 className="mt-2 text-[22px] font-bold font-display text-[#0B1F3A]">
                Readiness Checklist
              </h3>
              <div className="mt-5 space-y-3">
                {ipoChecklist.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#DDF5F0]">
                      <Check className="w-4 h-4 text-[#16A34A]" />
                    </span>
                    <span className="text-[16px] text-[#1B2A41] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => openModal({ serviceInterest: "Signature Advisory Suite" })}
                className="mt-7 flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#1D4ED8] px-6 py-3.5 text-[16px] font-semibold text-white hover:bg-[#1746B1] transition shadow-soft"
              >
                Explore the Signature Suite <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}