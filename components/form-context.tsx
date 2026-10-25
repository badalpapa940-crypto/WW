"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";

export type FormValues = Record<string, string | string[]>;

export type FormMode = "quick" | "modal" | "inline";

type FormContextType = {
  values: FormValues;
  setField: (name: string, value: string | string[]) => void;
  toggleArrayValue: (name: string, value: string) => void;
  mode: FormMode;
  setMode: (m: FormMode) => void;
  isModalOpen: boolean;
  openModal: (preset?: Partial<FormValues>) => void;
  closeModal: () => void;
  isDrawerOpen: boolean;
  drawerService: string | null;
  openDrawer: (serviceTitle: string) => void;
  closeDrawer: () => void;
  submitted: boolean;
  setSubmitted: (v: boolean) => void;
  errors: Record<string, string>;
  setError: (name: string, msg: string) => void;
  clearError: (name: string) => void;
  validateStep: (step: number) => boolean;
  validateQuick: () => boolean;
  presetValues: Partial<FormValues>;
};

const FormContext = createContext<FormContextType | null>(null);

export function useForm() {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error("useForm must be used within FormProvider");
  return ctx;
}

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [values, setValues] = useState<FormValues>({});
  const [mode, setMode] = useState<FormMode>("inline");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerService, setDrawerService] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [presetValues, setPresetValues] = useState<Partial<FormValues>>({});

  const setField = useCallback((name: string, value: string | string[]) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const toggleArrayValue = useCallback((name: string, value: string) => {
    setValues((prev) => {
      const arr = Array.isArray(prev[name]) ? (prev[name] as string[]) : [];
      return {
        ...prev,
        [name]: arr.includes(value)
          ? arr.filter((v) => v !== value)
          : [...arr, value],
      };
    });
  }, []);

  const openModal = useCallback((preset?: Partial<FormValues>) => {
    setMode("modal");
    if (preset) {
      setPresetValues(preset);
      setValues((prev) => ({ ...prev, ...preset } as FormValues));
    }
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => setIsModalOpen(false), []);
  const openDrawer = useCallback((serviceTitle: string) => {
    setDrawerService(serviceTitle);
    setIsDrawerOpen(true);
  }, []);
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

  const setError = useCallback((name: string, msg: string) => {
    setErrors((prev) => ({ ...prev, [name]: msg }));
  }, []);
  const clearError = useCallback((name: string) => {
    setErrors((prev) => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }, []);

  const required = (name: string, label: string): string | null => {
    const v = values[name];
    if (!v || (Array.isArray(v) && v.length === 0))
      return `${label} is required`;
    return null;
  };

  const emailValid = (name: string): string | null => {
    const v = values[name] as string;
    if (!v) return null;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? null : "Enter a valid email";
  };

  const validateQuick = useCallback((): boolean => {
    const e: Record<string, string> = {};
    if (required("fullName", "Full name")) e.fullName = required("fullName", "Full name")!;
    if (required("workEmail", "Work email")) e.workEmail = required("workEmail", "Work email")!;
    else if (emailValid("workEmail")) e.workEmail = emailValid("workEmail")!;
    if (required("phone", "Phone/WhatsApp")) e.phone = required("phone", "Phone/WhatsApp")!;
    if (required("company", "Company name")) e.company = required("company", "Company name")!;
    if (required("revenueRange", "Annual revenue range")) e.revenueRange = required("revenueRange", "Annual revenue range")!;
    if (required("serviceInterest", "Service interested in")) e.serviceInterest = required("serviceInterest", "Service interested in")!;
    if (required("challenge", "Biggest challenge")) e.challenge = required("challenge", "Biggest challenge")!;
    if (required("consent", "Consent")) e.consent = required("consent", "Consent")!;
    setErrors(e);
    return Object.keys(e).length === 0;
  }, [values]);

  const validateStep = useCallback(
    (step: number): boolean => {
      const e: Record<string, string> = {};
      if (step === 1) {
        if (required("fullName", "Full name")) e.fullName = required("fullName", "Full name")!;
        if (required("designation", "Designation/Role")) e.designation = required("designation", "Designation/Role")!;
        if (required("workEmail", "Work email")) e.workEmail = required("workEmail", "Work email")!;
        else if (emailValid("workEmail")) e.workEmail = emailValid("workEmail")!;
        if (required("phone", "Phone/WhatsApp")) e.phone = required("phone", "Phone/WhatsApp")!;
      } else if (step === 2) {
        if (required("company", "Company name")) e.company = required("company", "Company name")!;
        if (required("industry", "Industry")) e.industry = required("industry", "Industry")!;
        if (required("revenueRange", "Annual revenue range")) e.revenueRange = required("revenueRange", "Annual revenue range")!;
      } else if (step === 3) {
        if (required("services", "Services interested in")) e.services = required("services", "Services interested in")!;
        if (required("challenge", "Biggest challenge")) e.challenge = required("challenge", "Biggest challenge")!;
      } else if (step === 4) {
        if (required("urgency", "Urgency/timeline")) e.urgency = required("urgency", "Urgency/timeline")!;
        if (required("consent", "Consent")) e.consent = required("consent", "Consent")!;
      }
      setErrors((prev) => ({ ...prev, ...e }));
      return Object.keys(e).length === 0;
    },
    [values]
  );

  const value = useMemo(
    () => ({
      values,
      setField,
      toggleArrayValue,
      mode,
      setMode,
      isModalOpen,
      openModal,
      closeModal,
      isDrawerOpen,
      drawerService,
      openDrawer,
      closeDrawer,
      submitted,
      setSubmitted,
      errors,
      setError,
      clearError,
      validateStep,
      validateQuick,
      presetValues,
    }),
    [
      values,
      setField,
      toggleArrayValue,
      mode,
      isModalOpen,
      openModal,
      closeModal,
      isDrawerOpen,
      drawerService,
      openDrawer,
      closeDrawer,
      submitted,
      setSubmitted,
      errors,
      setError,
      clearError,
      validateStep,
      validateQuick,
      presetValues,
    ]
  );

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}