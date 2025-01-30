export const Benefits = () => {
  const benefits = [
    {
      title: "Increased User Engagement",
      description: "Native apps provide a better user experience, leading to higher engagement rates.",
      icon: "📱",
    },
    {
      title: "Wider Reach",
      description: "Get your content in front of mobile users through app stores.",
      icon: "🌍",
    },
    {
      title: "Push Notifications",
      description: "Keep users engaged with timely updates and notifications.",
      icon: "🔔",
    },
    {
      title: "Brand Presence",
      description: "Strengthen your brand with a professional mobile app presence.",
      icon: "✨",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Go Mobile?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};