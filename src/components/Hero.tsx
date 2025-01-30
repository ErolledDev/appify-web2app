import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Appify – Website to Android & iOS App
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
            Transform Your Website into a Mobile App Instantly!
          </p>
          <div className="space-y-6 mb-12">
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <FeatureCard icon="🚀" title="Fast Delivery" description="Your app will be ready as soon as we receive your order!" />
              <FeatureCard icon="💻" title="Simple Process" description="No coding required; just verify your website ownership." />
              <FeatureCard icon="📱" title="Seamless Experience" description="Reach more users with a mobile-optimized app." />
            </div>
          </div>
          <Button asChild className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg rounded-full">
            <a href="https://form.google.com" target="_blank" rel="noopener noreferrer">
              Get started
            </a>
          </Button>
          <p className="mt-6 text-lg text-gray-600">
            Get started today and give your website the power of a mobile app! 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full md:w-72">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);