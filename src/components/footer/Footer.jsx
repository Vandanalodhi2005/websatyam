import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold mb-4 text-pink-400">Contact Us</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              📞 <span>+971 52 760 8863</span>
            </li>
            <li className="flex items-center gap-2">
              ✉️ <span> <a href="mailto:welcome@renttiers.ae" className="hover:text-pink-400 transition">welcome@renttiers.ae</a></span>
            </li>
            <li className="flex items-center gap-2">
              📍 <span>Office Suite 719, 7th Floor, Elite Business Bay, Marasi Drive, Dubai</span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold mb-4 text-pink-400">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/about-us" className="hover:text-pink-400 transition">About Us</a></li>
            <li><a href="/our-services" className="hover:text-pink-400 transition">Our Services</a></li>
            <li><a href="/mavhr-llc" className="hover:text-pink-400 transition">MAVHR LLC</a></li>
            <li><a href="/investor-roi" className="hover:text-pink-400 transition">Investor ROI</a></li>
            <li><a href="/faqs" className="hover:text-pink-400 transition">FAQs</a></li>
            <li><a href="/contact" className="hover:text-pink-400 transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Map & Social Media */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold mb-4 text-pink-400">Our Location</h2>
          <iframe
            className="w-full h-32 md:h-40 rounded-md"
            src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Elite+Business+Bay,Dubai"
            loading="lazy"
          ></iframe>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-pink-400 transition text-xl">🌐</a>
            <a href="#" className="text-gray-400 hover:text-pink-400 transition text-xl">📘</a>
            <a href="#" className="text-gray-400 hover:text-pink-400 transition text-xl">📸</a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-8 text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Renttiers. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
