"use client";

import { useForm } from "@/components/form-context";
import { Field, formFields, type FieldConfig } from "@/components/Field";
import { site } from "@/config/site";
import { ArrowRight, ArrowLeft, Check, MessageCircle } from "lucide-react";
import { useState } from "react";

const stepTitles = ["About You", "About Your Business", "What You Need", "Engagement Details"];
const totalSteps = 4;

export function MultiStepForm({ variant }: { variant: "modal" | "inline" }) {
  const { values, validateStep, setSubmitted, submitted, openModal } = useForm();
  const [step, setStep] = useState(1);

  const stepFields = formFields.filter((f) => f.step === step);
  const progress = (step / totalSteps) * 100;

  const next = () => {
    if (validateStep(step)) {
      if (step < totalSteps) setStep(step + 1);
    }
  };
  const back = () => step > 1 && setStep(step - 1);

  const submit = () => {
    if (!validateStep(step)) return;
    console.log("Enquiry submitted:", values);
    setSubmitted(true);
  };

  if (submitted) {
    return <SuccessScreen />;
  }

  return (
    <div className={variant === "modal" ? "px-1" : ""}>
      {/* Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[13px] font-semibold uppercase tracking-wide text-[#1D4ED8]">
            Step {step} of {totalSteps} · {stepTitles[step - 1]}
          </span>
          <span className="text-[13px] font-medium text-[#94A3B8]">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-[#EEF4FF] overflow-hidden">
          <div
            className="h-full rounded-full bg-[#1D4ED8] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Fields */}
      <div className="space-y-5">
        {stepFields.map((f) => (
          <Field key={f.name} field={f} />
        ))}
      </div>

      {/* Nav */}
      <div className="mt-8 flex items-center justify-between gap-3">
        {step > 1 ? (
          <button
            type="button"
            onClick={back}
            className="flex items-center gap-1.5 rounded-xl border border-[#E3E8F0] px-5 py-3 text-[16px] font-semibold text-[#1B2A41] hover:bg-[#F7F8FA] transition"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        ) : (
          <span />
        )}
        {step < totalSteps ? (
          <button
            type="button"
            onClick={next}
            className="flex items-center gap-1.5 rounded-xl bg-[#1D4ED8] px-6 py-3 text-[16px] font-semibold text-white hover:bg-[#1746B1] transition shadow-soft"
          >
            Next <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={submit}
            className="flex items-center gap-1.5 rounded-xl bg-[#1D4ED8] px-6 py-3 text-[16px] font-semibold text-white hover:bg-[#1746B1] transition shadow-soft"
          >
            Submit Enquiry <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
      <p className="mt-4 text-[13px] text-[#94A3B8]">
        Your information is confidential and used only to respond to your enquiry.
      </p>
    </div>
  );
}

function SuccessScreen() {
  const { values } = useForm();
  const name = (values.fullName as string) || "there";
  const company = (values.company as string) || "";
  const services = Array.isArray(values.services)
    ? (values.services as string[]).join(", ")
    : (values.serviceInterest as string) || "";
  const msg = `Hello Quantum Advisory Partners, I'm ${name}${
    company ? ` from ${company}` : ""
  }${
    services ? ` interested in: ${services}` : ""
  }. I just submitted an enquiry on your website.`;
  const waLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(msg)}`;

  return (
    <div className="flex flex-col items-center text-center py-8">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#DDF5F0]">
        <Check className="w-8 h-8 text-[#16A34A]" />
      </div>
      <h3 className="mt-5 text-[24px] font-bold text-[#0B1F3A] font-display">
        Thank you. We will respond within 1 business day.
      </h3>
      <p className="mt-2 text-[17px] text-[#4A5568] max-w-md">
        We appreciate you reaching out. A member of our team will be in touch shortly.
      </p>
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex items-center gap-2 rounded-xl bg-[#16A34A] px-6 py-3 text-[16px] font-semibold text-white hover:bg-[#15803D] transition shadow-soft"
      >
        <MessageCircle className="w-5 h-5" /> Continue on WhatsApp
      </a>
    </div>
  );
}