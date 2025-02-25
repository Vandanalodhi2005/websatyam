import React from 'react';
import { Link } from 'react-router-dom';

function AboutContact() {
  return (
    <div className="bg-gradient-to-b from-black via-yellow-600 to-yellow-700
 py-10 px-6 text-white font-bona">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold font-vidaloka">
            Want To Chat? Feel Free To Contact Our Team
          </h1>
          <p className="text-lg mt-4">
            If you have anything in mind, feel free to contact us anytime.
          </p>
        </div>
        <div>
          <Link
            to="/contact"
            className="text-white border-4 border-white py-4 px-8 text-xl rounded-lg shadow-lg hover:bg-white hover:text-black transition"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutContact;
