export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      platform: "Fiverr",
      content: "Amazing service! Got my app up and running in no time. Highly recommended!",
      avatar: "👩",
    },
    {
      name: "Michael Chen",
      platform: "Facebook",
      content: "The process was smooth and the support team was very helpful. Great value for money!",
      avatar: "👨",
    },
    {
      name: "Maria Garcia",
      platform: "Raket.ph",
      content: "Transformed my website into a beautiful app. My users love it!",
      avatar: "👩",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{testimonial.avatar}</div>
              <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold">{testimonial.name}</span>
                <span className="text-primary">{testimonial.platform}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};