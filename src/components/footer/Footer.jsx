import React from "react";

function Footer() {
  return (
    <footer className="py-10 px-6 font-bona bg-gradient-to-r from-black via-yellow-700 to-yellow-900 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              📞 <span>+971 52 760 8863</span>
            </li>
            <li className="flex items-center gap-2">
              ✉️ <a href="mailto:welcome@renttiers.ae">welcome@renttiers.ae</a>
            </li>
            <li className="flex items-center gap-2">
              📍 <span>Office Suite 719, 7th Floor, Elite Business Bay, Dubai</span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            {["About Us", "Our Services", "MAVHR LLC", "Investor ROI", "FAQs", "Contact Us"].map((link, index) => (
              <li key={index}>
                <a href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}>{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Map & Social Media */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold mb-4">Our Location</h2>
          <iframe
            className="w-full h-32 md:h-40 rounded-md"
            src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Elite+Business+Bay,Dubai"
            loading="lazy"
          ></iframe>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            {["🌐", "📘", "📸"].map((icon, index) => (
              <a key={index} href="#">
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-8 text-xs">
        &copy; {new Date().getFullYear()} Renttiers. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
