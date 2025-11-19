import React from "react";

const Services = () => {
  return (
    <section className="bg-gray-800 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold">Services</h2>
        <p className="text-gray-400 mt-2">What I offer</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Web Design</h3>
          <p className="text-gray-400">Modern and responsive website design tailored for your needs.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Web Development</h3>
          <p className="text-gray-400">Clean, maintainable code for websites and applications.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
          <p className="text-gray-400">User-friendly interfaces with smooth navigation.</p>
        </div>

        {/* Card 4 */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">SEO Optimization</h3>
          <p className="text-gray-400">Improve your website visibility on search engines.</p>
        </div>

        {/* Card 5 */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">E-Commerce Solutions</h3>
          <p className="text-gray-400">Build online stores with secure payment integration.</p>
        </div>

        {/* Card 6 */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Maintenance & Support</h3>
          <p className="text-gray-400">Keep your website updated and running smoothly.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
