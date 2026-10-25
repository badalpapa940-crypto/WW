"use client";

import { QuickEnquiryCard } from "@/components/QuickEnquiryCard";
import { trustPoints, site } from "@/config/site";
import { Check, MessageCircle } from "lucide-react";

export function QuickEnquiry() {
  return (
    <section className="bg-[#EEF4FF] py-20 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left */}
          <div className="reveal">
            <span className="text-[13px] font-semibold uppercase tracking-wide text-[#1D4ED8]">
              Start a conversation
            </span>
            <h2 className="mt-3 font-display text-[32px] sm:text-[40px] font-bold leading-tight text-[#0B1F3A]">
              Tell us what you're working on.
            </h2>
            <p className="mt-3 text-[17px] text-[#4A5568]">
              We respond within 1 business day.
            </p>

            <div className="mt-6 space-y-3">
              {trustPoints.map((t) => (
                <div key={t} className="flex items-center gap-2.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#DDF5F0]">
                    <Check className="w-4 h-4 text-[#16A34A]" />
                  </span>
                  <span className="text-[16px] font-medium text-[#1B2A41]">{t}</span>
                </div>
              ))}
            </div>

            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#16A34A] px-6 py-3.5 text-[16px] font-semibold text-white hover:bg-[#15803D] transition shadow-soft"
            >
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
          </div>

          {/* Right */}
          <div className="reveal reveal-delay-2">
            <QuickEnquiryCard />
          </div>
        </div>
      </div>
    </section>
  );
}