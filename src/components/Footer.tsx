export const Footer = () => {
  const socialLinks = [
    { name: "Facebook Marketplace", url: "#" },
    { name: "TikTok", url: "#" },
    { name: "Fiverr", url: "#" },
    { name: "Instagram", url: "#" },
    { name: "Raket.ph", url: "#" },
    { name: "YouTube", url: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">Phone: +639169888275</p>
            <p>Email: appify-web2app@gmail.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Find Us On</h3>
            <ul className="grid grid-cols-2 gap-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-gray-800">
          <p>Copyright Appify © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};