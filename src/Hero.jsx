import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-800 text-white h-screen flex items-center px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20 w-full">

        {/* Hero Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to Aniq shb
          </h1>
          <p className="text-gray-300 mb-8 text-lg md:text-2xl">
            We create modern, responsive websites and applications with clean, professional design.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors">
            Get Started
          </button>
        </div>

        {/* Hero Card */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 shadow-2xl w-full max-w-sm">
            <h3 className="text-2xl font-semibold mb-4">Featured Project</h3>
            <p className="text-gray-400 mb-6 text-lg">
              This is a sample card inside the hero section. Showcase your project, service, or feature with style.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition-colors">
              View Details
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
