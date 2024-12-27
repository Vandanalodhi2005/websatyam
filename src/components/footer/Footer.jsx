import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <ul className="space-y-2">
            <li>Phone: +971 52 760 8863</li>
            <li>Email: welcome@renttiers.ae</li>
            <li>Address: Office suite no.719, 7th floor, Elite Business Bay, Marasi Drive, Dubai</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/about-us" className="hover:text-gray-400 transition">About Us</a>
            </li>
            <li>
              <a href="/our-services" className="hover:text-gray-400 transition">our-services</a>
            </li>
            
            <li>
              <a href="/mavhr-llc" className="hover:text-gray-400 transition">mavhr-llc</a>
            </li>

            <li>
              <a href="/investor-roi" className="hover:text-gray-400 transition">Investor-Roi</a>
            </li>
            <li>
              <a href="/faqs" className="hover:text-gray-400 transition">FAQs</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-400 transition">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Map / Additional Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Our Location</h2>
          <p>Visit us at our office in Elite Business Bay, Dubai for any assistance.</p>
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Renttiers. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
