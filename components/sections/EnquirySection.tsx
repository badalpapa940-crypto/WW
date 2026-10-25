"use client";

import { useForm } from "@/components/form-context";
import { MultiStepForm } from "@/components/MultiStepForm";
import { site } from "@/config/site";
import { Mail, MessageCircle, ShieldCheck } from "lucide-react";

export function EnquirySection() {
  const { submitted } = useForm();

  return (
    <section id="enquiry" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left - contact */}
          <div className="reveal">
            <h2 className="font-display text-[32px] sm:text-[44px] font-bold leading-tight text-[#0B1F3A] text-balance">
              One conversation. A clearer view of what comes next.
            </h2>
            <p className="mt-4 text-[17px] leading-[1.7] text-[#4A5568] prose-measure">
              Whether you are evaluating a financing requirement, improving
              financial visibility, addressing performance challenges or
              preparing for the next stage of growth, begin with the business
              issue that matters most.
            </p>

            <div className="mt-7 space-y-3">
              <div className="flex items-center gap-3 rounded-[14px] border border-[#E3E8F0] bg-white p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E0EAFF]">
                  <span className="text-[14px] font-bold text-[#1D4ED8]">AV</span>
                </span>
                <div>
                  <p className="text-[13px] text-[#94A3B8]">Founder and Principal</p>
                  <p className="text-[16px] font-semibold text-[#0B1F3A]">{site.founderName}</p>
                </div>
              </div>

              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 rounded-[14px] border border-[#E3E8F0] bg-white p-4 hover:shadow-soft transition"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DDF5F0]">
                  <Mail className="w-5 h-5 text-[#0F766E]" />
                </span>
                <div>
                  <p className="text-[13px] text-[#94A3B8]">Email</p>
                  <p className="text-[16px] font-semibold text-[#0B1F3A]">{site.email}</p>
                </div>
              </a>

              <a
                href={site.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-[14px] border border-[#E3E8F0] bg-white p-4 hover:shadow-soft transition"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DDF5F0]">
                  <MessageCircle className="w-5 h-5 text-[#16A34A]" />
                </span>
                <div>
                  <p className="text-[13px] text-[#94A3B8]">WhatsApp</p>
                  <p className="text-[16px] font-semibold text-[#0B1F3A]">{site.whatsappDisplay}</p>
                </div>
              </a>
            </div>

            <div className="mt-6 rounded-[16px] bg-[#EEF4FF] p-5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#1D4ED8]" />
                <p className="text-[15px] font-semibold text-[#0B1F3A]">Engagement principle</p>
              </div>
              <p className="mt-2 text-[15px] leading-relaxed text-[#4A5568]">
                Start with the business challenge, establish the facts, and agree
                on a practical scope before proceeding.
              </p>
            </div>
          </div>

          {/* Right - form */}
          <div className="reveal reveal-delay-2">
            {!submitted && (
              <div className="rounded-[20px] border border-[#E3E8F0] bg-white p-6 sm:p-8 shadow-soft">
                <h3 className="text-[22px] font-bold font-display text-[#0B1F3A] mb-2">
                  Full Enquiry
                </h3>
                <MultiStepForm variant="inline" />
              </div>
            )}
            {submitted && (
              <div className="rounded-[20px] border border-[#E3E8F0] bg-white p-8 shadow-soft">
                <MultiStepForm variant="inline" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}