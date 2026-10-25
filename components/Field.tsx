"use client";

import { useForm } from "@/components/form-context";
import { serviceOptions, revenueRanges } from "@/config/site";
import type { LucideIcon } from "lucide-react";
import { Check, ChevronDown, AlertCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export type FieldType = "text" | "email" | "tel" | "textarea" | "select" | "radio" | "chips" | "checkbox" | "date";

export type FieldConfig = {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: string[];
  placeholder?: string;
  quick?: boolean;
  step?: number;
  hint?: string;
  rows?: number;
};

export const formFields: FieldConfig[] = [
  // Quick fields
  { name: "fullName", label: "Full name", type: "text", required: true, quick: true, placeholder: "Your full name" },
  { name: "workEmail", label: "Work email", type: "email", required: true, quick: true, placeholder: "you@company.in" },
  { name: "phone", label: "Phone/WhatsApp", type: "tel", required: true, quick: true, placeholder: "+91 99999 00000" },
  { name: "company", label: "Company name", type: "text", required: true, quick: true, placeholder: "Company name" },
  { name: "revenueRange", label: "Annual revenue range", type: "select", required: true, quick: true, options: revenueRanges },
  { name: "serviceInterest", label: "Service interested in", type: "select", required: true, quick: true, options: serviceOptions },
  { name: "challenge", label: "Biggest challenge", type: "textarea", required: true, quick: true, rows: 3, placeholder: "Tell us what you're working on..." },
  { name: "consent", label: "I agree to be contacted. My information will be kept confidential.", type: "checkbox", required: true, quick: true },

  // Step 1 extra
  { name: "designation", label: "Designation/Role", type: "text", required: true, step: 1, placeholder: "CFO, Director, Founder..." },
  { name: "contactMethod", label: "Preferred contact method", type: "radio", step: 1, options: ["Email", "Phone", "WhatsApp"] },
  { name: "bestTime", label: "Best time to connect", type: "radio", step: 1, options: ["Morning", "Afternoon", "Evening"] },

  // Step 2
  { name: "website", label: "Website (optional)", type: "text", step: 2, placeholder: "https://..." },
  { name: "cityState", label: "City/State", type: "text", step: 2, placeholder: "Mumbai, Maharashtra" },
  { name: "industry", label: "Industry", type: "select", required: true, step: 2, options: [
    "Manufacturing", "Energy & Infrastructure", "Real Estate", "Healthcare", "Technology & SaaS", "Retail & Consumer", "Logistics", "Financial Services", "Other"
  ] },
  { name: "businessType", label: "Business type", type: "radio", step: 2, options: ["Pvt Ltd", "LLP", "Public Ltd", "Partnership", "Proprietorship", "Other"] },
  { name: "yearsOp", label: "Years in operation", type: "text", step: 2, placeholder: "e.g. 12" },
  { name: "ebitdaRange", label: "Approx EBITDA margin range (optional)", type: "text", step: 2, placeholder: "e.g. 8–12%" },
  { name: "employees", label: "Number of employees", type: "text", step: 2, placeholder: "e.g. 150" },

  // Step 3
  { name: "services", label: "Services interested in", type: "chips", required: true, step: 3, options: serviceOptions },
  { name: "objectives", label: "Primary objectives", type: "chips", step: 3, options: [
    "Raise funding", "Reduce debt cost", "Improve cash flow", "Improve margins", "Better MIS/reporting", "Governance and compliance", "Prepare for IPO/investors", "Expansion", "Cost reduction", "Other"
  ] },
  { name: "fundingAmount", label: "Funding requirement amount (if any)", type: "text", step: 3, placeholder: "e.g. ₹25Cr" },
  { name: "debtLevel", label: "Existing debt level", type: "radio", step: 3, options: ["None", "Low", "Moderate", "High"] },
  { name: "auditedFinancials", label: "Audited financials for last 3 years?", type: "radio", step: 3, options: ["Yes", "No", "Partially"] },
  { name: "financeTeam", label: "Finance team/CFO today?", type: "radio", step: 3, options: ["Yes", "No", "Part-time"] },
  { name: "erp", label: "Accounting/ERP software", type: "radio", step: 3, options: ["Tally", "SAP", "Zoho", "Other", "None"] },

  // Step 4
  { name: "urgency", label: "Urgency/timeline", type: "radio", required: true, step: 4, options: ["Immediate", "1–3 months", "3–6 months", "Just exploring"] },
  { name: "budget", label: "Indicative budget range (optional)", type: "select", step: 4, options: ["Not sure yet", "<₹2L", "₹2–5L", "₹5–15L", "₹15–50L", "₹50L+"] },
  { name: "referral", label: "How did you hear about us?", type: "radio", step: 4, options: ["Google", "LinkedIn", "Referral", "WhatsApp", "Event", "Other"] },
  { name: "meetingMode", label: "Preferred first meeting mode", type: "radio", step: 4, options: ["Phone call", "Video call", "In-person"] },
  { name: "preferredDate", label: "Preferred date", type: "date", step: 4 },
  { name: "timeSlot", label: "Preferred time slot", type: "radio", step: 4, options: ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"] },
  { name: "notes", label: "Additional notes", type: "textarea", step: 4, rows: 3, placeholder: "Anything else we should know..." },
];

const inputClass =
  "w-full rounded-xl border border-[#E3E8F0] bg-white px-4 py-3 text-[17px] text-[#1B2A41] placeholder:text-[#94A3B8] focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15 outline-none transition";

export function Field({ field }: { field: FieldConfig }) {
  const { values, setField, toggleArrayValue, errors, clearError } = useForm();
  const val = values[field.name];
  const err = errors[field.name];

  return (
    <div className="w-full">
      <label className="block text-[15px] font-semibold text-[#1B2A41] mb-2">
        {field.label}
        {field.required && <span className="text-[#1D4ED8]"> *</span>}
      </label>

      {field.type === "text" || field.type === "email" || field.type === "tel" || field.type === "date" ? (
        <input
          type={field.type}
          value={(val as string) || ""}
          placeholder={field.placeholder}
          onChange={(e) => {
            setField(field.name, e.target.value);
            if (err) clearError(field.name);
          }}
          className={inputClass}
        />
      ) : field.type === "textarea" ? (
        <textarea
          value={(val as string) || ""}
          rows={field.rows || 3}
          placeholder={field.placeholder}
          onChange={(e) => {
            setField(field.name, e.target.value);
            if (err) clearError(field.name);
          }}
          className={`${inputClass} resize-none`}
        />
      ) : field.type === "select" ? (
        <SelectInput
          field={field}
          value={(val as string) || ""}
          onChange={(v) => {
            setField(field.name, v);
            if (err) clearError(field.name);
          }}
        />
      ) : field.type === "radio" ? (
        <div className="flex flex-wrap gap-2">
          {field.options?.map((opt) => {
            const active = val === opt;
            return (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  setField(field.name, opt);
                  if (err) clearError(field.name);
                }}
                className={`rounded-xl border px-4 py-2.5 text-[15px] font-medium transition ${
                  active
                    ? "border-[#1D4ED8] bg-[#E0EAFF] text-[#1D4ED8]"
                    : "border-[#E3E8F0] bg-white text-[#4A5568] hover:border-[#1D4ED8]/40"
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>
      ) : field.type === "chips" ? (
        <div className="flex flex-wrap gap-2">
          {field.options?.map((opt) => {
            const arr = Array.isArray(val) ? (val as string[]) : [];
            const active = arr.includes(opt);
            return (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  toggleArrayValue(field.name, opt);
                  if (err) clearError(field.name);
                }}
                className={`rounded-xl border px-4 py-2.5 text-[15px] font-medium transition flex items-center gap-1.5 ${
                  active
                    ? "border-[#1D4ED8] bg-[#E0EAFF] text-[#1D4ED8]"
                    : "border-[#E3E8F0] bg-white text-[#4A5568] hover:border-[#1D4ED8]/40"
                }`}
              >
                {active && <Check className="w-4 h-4" />}
                {opt}
              </button>
            );
          })}
        </div>
      ) : field.type === "checkbox" ? (
        <button
          type="button"
          onClick={() => {
            setField(field.name, val === "true" ? "" : "true");
            if (err) clearError(field.name);
          }}
          className="flex items-start gap-3 text-left"
        >
          <span
            className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border transition ${
              val === "true"
                ? "border-[#1D4ED8] bg-[#1D4ED8] text-white"
                : "border-[#E3E8F0] bg-white"
            }`}
          >
            {val === "true" && <Check className="w-4 h-4" />}
          </span>
          <span className="text-[15px] text-[#4A5568] leading-relaxed">
            {field.label}
            {field.required && <span className="text-[#1D4ED8]"> *</span>}
          </span>
        </button>
      ) : null}

      {err && (
        <p className="mt-1.5 flex items-center gap-1 text-[13px] text-red-600">
          <AlertCircle className="w-3.5 h-3.5" />
          {err}
        </p>
      )}
      {field.hint && !err && (
        <p className="mt-1 text-[13px] text-[#94A3B8]">{field.hint}</p>
      )}
    </div>
  );
}

function SelectInput({
  field,
  value,
  onChange,
}: {
  field: FieldConfig;
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`${inputClass} flex items-center justify-between text-left ${
          !value && "text-[#94A3B8]"
        }`}
      >
        <span>{value || field.placeholder || "Select..."}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#94A3B8] transition ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="absolute z-50 mt-1 w-full rounded-xl border border-[#E3E8F0] bg-white py-1 shadow-soft-lg max-h-60 overflow-auto">
          {field.options?.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className={`w-full px-4 py-2.5 text-left text-[15px] hover:bg-[#EEF4FF] transition ${
                value === opt ? "text-[#1D4ED8] font-semibold" : "text-[#1B2A41]"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

