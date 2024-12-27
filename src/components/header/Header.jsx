import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [contactClicked, setContactClicked] = useState(false);

  const handleContactClick = () => {
    setContactClicked(true);
    setTimeout(() => setContactClicked(false), 500); // Reset after animation
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-navy-800">
          <Link
            to="/"
            className="hover:text-navy-600 transition duration-200"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Maditah Alzuhoor Vacation Home Rental LLC
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute lg:relative lg:flex top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none z-10`}
        >
          <ul className="lg:flex lg:items-center lg:space-x-8 p-4 lg:p-0">
            {['Home', 'About Us', 'Our Services', 'MAVHR LLC', 'Investor ROI', 'FAQs'].map(
              (item, index) => (
                <li
                  key={item}
                  className={`opacity-0 animate-fade-in animation-delay-${index * 100}`}
                >
                  <Link
                    to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block text-fuchsia-800 hover:text-green-500 font-bold hover:bg-navy-800 rounded px-4 py-2 transition duration-300"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            onClick={handleContactClick}
            className={`bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-2 px-6 rounded shadow-lg hover:shadow-2xl transform hover:scale-110 transition duration-500 ease-in-out ${
              contactClicked ? 'px-8 py-4' : ''
            }`}
          >
            Contact Us change
          </Link>
        </div>
      </div>

      {/* Mobile Contact Button */}
      {isOpen && (
        <div className="block lg:hidden p-4">
          <Link
            to="/contact"
            onClick={handleContactClick}
            className={`block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-fuchsia-800 text-center py-2 rounded shadow-lg hover:shadow-2xl transform hover:scale-110 transition duration-500 ease-in-out ${
              contactClicked ? 'px-8 py-4' : ''
            }`}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
