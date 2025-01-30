import { Check } from "lucide-react";

export const Checklist = () => {
  const items = [
    { title: "App name", description: "Choose a memorable name for your app" },
    { title: "App Icon", description: "Create an eye-catching icon" },
    { title: "Splash Screen", description: "Design an engaging loading screen" },
    { title: "Your Website URL", description: "Provide your website address" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Just prepare these and let's build your app!</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold">{item.title}</h3>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};