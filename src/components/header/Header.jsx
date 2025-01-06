import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../image/logo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('');
  const location = useLocation();

  // Close menu when a navigation item is clicked
  const handleNavClick = (path) => {
    setActiveNav(path);
    setIsOpen(false); // Close the menu in mobile view
  };

  // Close menu when the location changes (ensuring it's closed after navigation)
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Our Services', path: '/our-services' },
    { name: 'MAVHR LLC', path: '/mavhr-llc' },
    { name: 'Investor ROI', path: '/investor-roi' },
    { name: 'FAQs', path: '/faqs' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo with Image */}
          <div>
            <Link to="/">
              <img src={logo} alt="Maditah Alzuhoor Logo" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="lg:hidden text-navy-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Navigation Links */}
          <nav
            className={`${
              isOpen ? 'block' : 'hidden'
            } absolute lg:relative lg:flex top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none z-10`}
          >
            <ul className="lg:flex lg:items-center lg:space-x-8 p-4 lg:p-0">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => handleNavClick(item.path)} // Close menu when clicking a link
                    className={`block text-fuchsia-800 font-bold rounded px-4 py-2 transition duration-300 ${
                      activeNav === item.path ? 'bg-fuchsia-800 text-white' : 'hover:bg-navy-800 hover:text-indigo-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-2 px-6 rounded shadow-lg hover:shadow-2xl transform hover:scale-110 transition duration-500 ease-in-out"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile Contact Button */}
        {isOpen && (
          <div className="block lg:hidden p-4">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)} // Close menu when clicking contact
              className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-fuchsia-800 text-center py-2 rounded shadow-lg hover:shadow-2xl transform hover:scale-110 transition duration-500 ease-in-out"
            >
              Contact Us
            </Link>
          </div>
        )}
      </header>

      {/* Spacer to prevent content from being hidden under fixed header */}
      <div className="md:h-0 h-10"></div>
    </>
  );
}

export default Header;
