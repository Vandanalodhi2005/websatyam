import React from 'react';

function Contact() {
  const backgroundImage = ""; // Replace with any URL

  return (
    <div className="bg-gray-100 py-10 px-6 my-6">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white bg-purple-800 py-5">
            CONTACT US
          </h1>
          <p className="text-lg md:text-xl text-violet-900 mt-4">
            Airbnb/Booking.com Full Property Management - <br />
             Get in Touch Today!
          </p>
        </div>

        {/* Contact Form */}
        <div className="p-8 shadow-md rounded-md w-full mb-10 bg-white">
          <h2 className="text-2xl font-bold mb-6 text-center text-black">
            Manage My Property
          </h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="propertyType"
                  className="block font-medium text-black mb-2"
                >
                  Type of Property
                </label>
                <input
                  type="text"
                  id="propertyType"
                  placeholder="Enter property type"
                  className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="bedrooms"
                  className="block font-medium text-black mb-2"
                >
                  Number of Bedrooms
                </label>
                <input
                  type="number"
                  id="bedrooms"
                  placeholder="Enter number of bedrooms"
                  className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block font-medium text-black mb-2"
                >
                  Select City
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="Enter city"
                  className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="location"
                  className="block font-medium text-black mb-2"
                >
                  Location of Property
                </label>
                <input
                  type="text"
                  id="location"
                  placeholder="Enter location"
                  className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block font-medium text-black mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-medium text-black mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block font-medium text-black mb-2"
                >
                  Phone
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-4 bg-gray-200 text-black border border-gray-300 rounded-l-md">
                    +971
                  </span>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="flex-1 p-3 bg-gray-100 border border-gray-300 rounded-r-md"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="details"
                  className="block font-medium text-black mb-2"
                >
                  Tell us more about your property (optional)
                </label>
                <textarea
                  id="details"
                  rows="3"
                  placeholder="Add additional details here"
                  className="w-full p-3 bg-gray-100 border border-gray-300 rounded-md"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 text-white py-3 rounded-md mt-6 hover:opacity-90 transition"
            >
              START EARNING NOW
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="h-64 mb-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.4607489651994!2d55.19273397564312!3d25.080844283986333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f68c67a1f6c77%3A0xaf1234567890abcdef!2sOffice%20%23206%2C%20DIP%201%2C%20Dubai%2C%20UAE!5e0!3m2!1sen!2s!4v1692384753849!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Map"
          ></iframe>
        </div>

        {/* Contact Details with Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-blue-600 text-4xl mb-2">✉️</div>
            <h3 className="text-lg font-bold text-gray-800">Email</h3>
            <p className="text-gray-600">welcome@renttiers.ae</p>
          </div>
          <div className="text-center">
            <div className="text-green-600 text-4xl mb-2">📲</div>
            <h3 className="text-lg font-bold text-gray-800">WhatsApp</h3>
            <p className="text-gray-600">+971 52 760 8863</p>
          </div>
          <div className="text-center">
            <div className="text-red-600 text-4xl mb-2">📍</div>
            <h3 className="text-lg font-bold text-gray-800">Address</h3>
            <p className="text-gray-600">Office suite no.719, 7th floor , elite business bay, marasi drive, dubai</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
