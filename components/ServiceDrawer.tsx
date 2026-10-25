"use client";

import { useForm } from "@/components/form-context";
import { services, signatureService } from "@/config/site";
import { X, ArrowRight, Check } from "lucide-react";
import { useEffect } from "react";

export function ServiceDrawer() {
  const { isDrawerOpen, drawerService, closeDrawer, openModal } = useForm();

  useEffect(() => {
    if (isDrawerOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  if (!isDrawerOpen || !drawerService) return null;

  const all = [...services, signatureService];
  const svc = all.find((s) => s.title === drawerService);
  if (!svc) return null;

  return (
    <div className="fixed inset-0 z-[90] flex sm:items-end sm:justify-center">
      <div
        className="absolute inset-0 bg-[#0B1F3A]/40 backdrop-blur-sm"
        onClick={closeDrawer}
      />
      <div className="relative w-full sm:max-w-[640px] max-h-[88vh] overflow-y-auto rounded-t-[24px] sm:rounded-[24px] bg-white shadow-soft-lg sm:mb-8">
        <div className="sticky top-0 flex justify-end bg-white/90 backdrop-blur px-6 pt-4 pb-2">
          <button
            onClick={closeDrawer}
            className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-[#F7F8FA] transition"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-[#1B2A41]" />
          </button>
        </div>
        <div className="px-6 sm:px-8 pb-8">
          <span className="inline-block rounded-full bg-[#E0EAFF] px-3 py-1 text-[13px] font-semibold uppercase tracking-wide text-[#1D4ED8]">
            {svc.tag}
          </span>
          <h3 className="mt-4 text-[28px] font-bold font-display text-[#0B1F3A] leading-tight">
            {svc.title}
          </h3>
          <p className="mt-3 text-[17px] text-[#4A5568] leading-relaxed">
            {svc.desc}
          </p>

          <div className="mt-6 space-y-3">
            {svc.drawer.map((d, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#DDF5F0]">
                  <Check className="w-4 h-4 text-[#16A34A]" />
                </span>
                <p className="text-[16px] text-[#1B2A41] leading-relaxed">{d}</p>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => {
              closeDrawer();
              openModal({ serviceInterest: svc.title });
            }}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[#1D4ED8] px-6 py-3.5 text-[16px] font-semibold text-white hover:bg-[#1746B1] transition shadow-soft sm:w-auto"
          >
            Enquire about this service <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}