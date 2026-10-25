"use client";

import { useForm } from "@/components/form-context";
import { Field, formFields } from "@/components/Field";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function QuickEnquiryCard() {
  const { validateQuick, setSubmitted, submitted, openModal, values } = useForm();
  const quickFields = formFields.filter((f) => f.quick);

  const submit = () => {
    if (!validateQuick()) return;
    console.log("Quick enquiry submitted:", values);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-[20px] border border-[#E3E8F0] bg-white p-8 shadow-soft text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#DDF5F0]">
          <ShieldCheck className="w-7 h-7 text-[#16A34A]" />
        </div>
        <h3 className="mt-4 text-[22px] font-bold text-[#0B1F3A] font-display">
          Thank you. We will respond within 1 business day.
        </h3>
      </div>
    );
  }

  return (
    <div className="rounded-[20px] border border-[#E3E8F0] bg-white p-6 sm:p-8 shadow-soft">
      <h3 className="text-[22px] font-bold font-display text-[#0B1F3A]">
        Discuss your business
      </h3>
      <p className="mt-1 text-[15px] text-[#4A5568]">
        Share a few details and we'll take it from there.
      </p>

      <div className="mt-5 space-y-4">
        {quickFields.map((f) => (
          <Field key={f.name} field={f} />
        ))}
      </div>

      <button
        type="button"
        onClick={submit}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#1D4ED8] px-6 py-3.5 text-[16px] font-semibold text-white hover:bg-[#1746B1] transition shadow-soft"
      >
        Submit Enquiry <ArrowRight className="w-4 h-4" />
      </button>

      <p className="mt-3 text-center text-[13px] text-[#94A3B8]">
        Your information is confidential.
      </p>

      <div className="mt-4 border-t border-[#E3E8F0] pt-4">
        <button
          type="button"
          onClick={() => openModal(values)}
          className="text-[15px] font-semibold text-[#1D4ED8] hover:underline"
        >
          Prefer to share more details? Open the full enquiry form →
        </button>
      </div>
    </div>
  );
}