import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const Hero = () => {
  const features = [
    {
      title: "Fast Delivery",
      description: "Your app will be ready as soon as we receive your order!",
    },
    {
      title: "Simple Process",
      description: "No coding required; just verify your website ownership.",
    },
    {
      title: "Seamless Experience",
      description: "Reach more users with a mobile-optimized app.",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Website into a Mobile App Instantly!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We help you turn your website into a real Android or iOS app, making it more accessible and user-friendly.
            </p>
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button asChild className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg rounded-full">
              <a href="https://form.google.com" target="_blank" rel="noopener noreferrer">
                Get started
              </a>
            </Button>
          </div>
          <div className="flex-1 relative">
            <img
              src="https://raw.githubusercontent.com/ErolledDev/appify-6c6703a6/main/mobile.png"
              alt="Mobile app preview"
              className="w-full max-w-[400px] mx-auto lg:max-w-none h-auto object-contain rounded-3xl shadow-xl animate-fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};