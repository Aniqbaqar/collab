import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Aniq shb</h2>
          <p className="text-gray-400">
            Professional web solutions with clean and modern UI, tailored for your business.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Contact</h3>
          <ul className="text-gray-400 space-y-1">
            <li>Email: support@aniqshb.com</li>
            <li>Phone: +92 300 0000000</li>
            <li>Location: Pakistan</li>
          </ul>
        </div>

        {/* Optional Quick Info / About */}
        <div>
          <h3 className="text-xl font-semibold mb-2">About</h3>
          <p className="text-gray-400">
            We create modern websites and applications with responsive design and professional layout.
          </p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Aniq shb. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
