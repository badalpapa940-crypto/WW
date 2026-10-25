"use client";

import { useForm } from "@/components/form-context";
import { MultiStepForm } from "@/components/MultiStepForm";
import { X } from "lucide-react";
import { useEffect } from "react";

export function EnquiryModal() {
  const { isModalOpen, closeModal, submitted, setSubmitted } = useForm();

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && closeModal();
    if (isModalOpen) document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [isModalOpen, closeModal]);

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#0B1F3A]/40 backdrop-blur-sm"
        onClick={closeModal}
      />
      {/* Panel */}
      <div className="relative w-full sm:max-w-[720px] max-h-[92vh] overflow-y-auto rounded-t-[20px] sm:rounded-[20px] bg-white sm:my-8 shadow-soft-lg">
        <div className="sticky top-0 z-10 flex items-center justify-between bg-white/90 backdrop-blur px-6 sm:px-8 py-4 border-b border-[#E3E8F0]">
          <h2 className="text-[20px] font-bold font-display text-[#0B1F3A]">
            Enquiry
          </h2>
          <button
            type="button"
            onClick={closeModal}
            className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-[#F7F8FA] transition"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-[#1B2A41]" />
          </button>
        </div>
        <div className="px-6 sm:px-8 py-6">
          <MultiStepForm variant="modal" />
        </div>
      </div>
    </div>
  );
}