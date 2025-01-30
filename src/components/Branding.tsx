export const Branding = () => {
  const platforms = [
    { name: "Facebook", logo: "/facebook-logo.svg" },
    { name: "TikTok", logo: "/tiktok-logo.svg" },
    { name: "Fiverr", logo: "/fiverr-logo.svg" },
    { name: "Instagram", logo: "/instagram-logo.svg" },
    { name: "Raket.ph", logo: "/raket-logo.svg" },
    { name: "YouTube", logo: "/youtube-logo.svg" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Find Us On</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                <img 
                  src={platform.logo} 
                  alt={`${platform.name} logo`} 
                  className="h-12 w-auto mb-2 object-contain"
                />
                <span className="font-medium">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};