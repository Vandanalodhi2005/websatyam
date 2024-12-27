import React, { useState } from "react";

function HeaderR() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    propertyType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center pt-20 px-4">
      {/* Form Container */}
      <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-lg p-8 w-full max-w-xl">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-6">
          Contact Us
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Partner with us for an unparalleled property management service in
          Dubai and experience the peace of mind that comes with knowing your
          investment is in capable hands. Contact us today to learn more about
          how we can help you unlock the full potential of your property.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-purple-300 focus:outline-none"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-purple-300 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Select Field */}
          <div>
            <label
              htmlFor="propertyType"
              className="block text-gray-700 font-medium"
            >
              Property Type
            </label>
            <select
              id="propertyType"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-purple-300 focus:outline-none"
              required
            >
              <option value="">Select your property type</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="townhouse">Townhouse</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-purple-300 focus:outline-none"
              placeholder="Enter your message"
              rows="5"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default HeaderR;
