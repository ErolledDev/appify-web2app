import { Hero } from "@/components/Hero";
import { Branding } from "@/components/Branding";
import { Verification } from "@/components/Verification";
import { Checklist } from "@/components/Checklist";
import { Pricing } from "@/components/Pricing";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Branding />
      <Verification />
      <Checklist />
      <Pricing />
      <Benefits />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;