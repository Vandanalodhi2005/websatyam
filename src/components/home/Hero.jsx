import React, { useState } from 'react';

function Hero() {
  const [isFormVisible, setIsFormVisible] = useState(true);

  return (
    <div
      className="relative bg-cover bg-center h-screen my-6 bg-fixed" 
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHViYWl8ZW58MHx8MHx8fDA%3D')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center h-full text-white px-6">
        {/* Left Section: Hero Text */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center py-8 pl-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Maditah Alzuhoor Vacation Home Rental LLC
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Airbnb Management in Dubai
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Simplify property management and maximize your rental income. Let
            us handle your Airbnb property in Dubai.
          </p>
        </div>

        {/* Right Section: Contact Form */}
        {isFormVisible && (
          <div 
            className="fixed top-20 right-10 w-full md:w-1/3 bg-slate-800 bg-opacity-45 text-gray-100 p-8 rounded-lg shadow-lg overflow-y-auto max-h-[70vh]"
            style={{ zIndex: 50 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-50 hover:text-red-500 text-xl font-bold"
              onClick={() => setIsFormVisible(false)}
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center">
              Manage My Property
            </h2>
            <form>
              {/* Type of Property */}
              <div className="mb-4">
                <label htmlFor="propertyType" className="block text-sm font-medium text-gray-100">
                  Type of Property
                </label>
                <input
                  type="text"
                  id="propertyType"
                  placeholder="Enter property type"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              {/* Number of Bedrooms */}
              <div className="mb-4">
                <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-100">
                  Number of Bedrooms
                </label>
                <input
                  type="number"
                  id="bedrooms"
                  placeholder="Enter number of bedrooms"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              {/* Select City */}
              <div className="mb-4">
                <label htmlFor="city" className="block text-sm font-medium text-gray-100">
                  Select City
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="Enter city"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              {/* Location of Property */}
              <div className="mb-4">
                <label htmlFor="location" className="block text-sm font-medium  text-gray-100">
                  Location of Property
                </label>
                <input
                  type="text"
                  id="location"
                  placeholder="Enter property location"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              {/* Name */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium  text-gray-100">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium  text-gray-100">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              {/* Phone */}
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium  text-gray-100">
                  Phone Number
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm  text-gray-100 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                    +971
                  </span>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="flex-1 block w-full p-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>

              {/* Tell us more */}
              <div className="mb-4">
                <label htmlFor="details" className="block text-sm font-medium text-gray-100">
                  Tell us more about your property (optional)
                </label>
                <textarea
                  id="details"
                  rows="4"
                  placeholder="Add additional details here"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-pink-900 text-white p-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                LIST YOUR PROPERTY NOW
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;
