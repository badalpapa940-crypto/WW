"use client";

import { FormProvider } from "@/components/form-context";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { FactsStrip } from "@/components/sections/FactsStrip";
import { QuickEnquiry } from "@/components/sections/QuickEnquiry";
import { WhyQAP } from "@/components/sections/WhyQAP";
import { ValueFramework } from "@/components/sections/ValueFramework";
import { Services } from "@/components/sections/Services";
import { Approach } from "@/components/sections/Approach";
import { Industries } from "@/components/sections/Industries";
import { InstitutionalReadiness } from "@/components/sections/InstitutionalReadiness";
import { Founder } from "@/components/sections/Founder";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABand } from "@/components/sections/CTABand";
import { FAQ } from "@/components/sections/FAQ";
import { EnquirySection } from "@/components/sections/EnquirySection";
import { Footer } from "@/components/sections/Footer";
import { EnquiryModal } from "@/components/EnquiryModal";
import { ServiceDrawer } from "@/components/ServiceDrawer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export default function Home() {
  return (
    <FormProvider>
      <Header />
      <main>
        <Hero />
        <FactsStrip />
        <QuickEnquiry />
        <WhyQAP />
        <ValueFramework />
        <Services />
        <Approach />
        <Industries />
        <InstitutionalReadiness />
        <Founder />
        <Testimonials />
        <CTABand />
        <FAQ />
        <EnquirySection />
      </main>
      <Footer />

      <EnquiryModal />
      <ServiceDrawer />
      <FloatingWhatsApp />
      <RevealOnScroll />
      <div className="h-16 lg:hidden" />
    </FormProvider>
  );
}