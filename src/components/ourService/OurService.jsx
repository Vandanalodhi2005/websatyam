import React from 'react';

function OurService() {
  return (
    <div className="bg-gray-100 py-10 px-6 my-6 font-bona">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-700  py-3 font-vidaloka">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mt-4">
            Comprehensive Property Management Solutions
          </p>
        </div>

        {/* About Section */}
        <div className="mb-12 flex flex-col md:flex-row items-center gap-6">
          <img
            src="https://digital.ihg.com/is/image/ihg/intercontinental-dubai-6995443529-2x1"
            alt="About Our Services"
            className="rounded-lg shadow-lg w-full md:w-1/2"
          />
          <div className="md:w-1/2 text-center md:text-left ">
            <h2 className="text-4xl font-bold text-yellow-700 mb-4 text-center font-vidaloka">
              WHY CHOOSE US?
            </h2>
            <p className="text-gray-800 text-xl px-5">
              At Elite Way, we specialize in maximizing property value and streamlining the rental process. From expert marketing to seamless guest experiences, we take care of it all.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Property Staging",
              description: "Professional interior design services to enhance property appeal.",
              icon: "🏠"
            },
            {
              title: "Marketing & Listings",
              description: "Optimized property listings across major platforms.",
              icon: "📈"
            },
            {
              title: "Guest Management",
              description: "Comprehensive support for a seamless guest experience.",
              icon: "🤝"
            },
            {
              title: "Maintenance & Repairs",
              description: "Ensure properties remain in excellent condition.",
              icon: "🔧"
            },
            {
              title: "Dynamic Pricing",
              description: "Maximize revenue with advanced pricing strategies.",
              icon: "💵"
            },
            {
              title: "Legal & Administrative Support",
              description: "Handle compliance, contracts, and tenant management.",
              icon: "📜"
            }
          ].map((service, index) => (
            <div key={index} className="bg-white shadow-xl p-6 rounded-lg flex flex-col items-center text-center hover:scale-105 transform transition-all">
              <div className="text-4xl mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-vidaloka font-semibold text-yellow-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        {/* <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Ready to Elevate Your Property?
          </h2>
          <p className="text-gray-700 mb-6">
            Partner with us for professional property management solutions tailored to your needs.
          </p>
          <button className="bg-transparent border-2 border-black text-black py-3 px-6 rounded-lg hover:bg-black hover:text-white transition">
            Contact Us
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default OurService;
