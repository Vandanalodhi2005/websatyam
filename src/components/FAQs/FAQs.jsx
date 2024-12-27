import React, { useState } from 'react';

function FAQs() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "Is it worth renting properties on short-term basis in Dubai?",
      answer: "Yes, short-term rentals in Dubai are becoming increasingly popular and profitable. The city is a global hub for tourism, business, and international events, attracting millions of visitors each year. With Dubai's growing expat community and a steady stream of tourists, short-term rentals offer flexibility and the potential for higher returns compared to long-term leasing. Additionally, Dubai's real estate market is a dynamic growing market, making short-term rentals a smart investment for property owners looking to maximize their income."
    },
    {
      question: "What is required to start a partnership with us?",
      answer: "To start a partnership, you'll need to provide property details, necessary documentation, and agree to our terms. We handle the rest, including property listing and management."
    },
    {
      question: "How much does it cost to start working with us?",
      answer: "There are no initial costs to start working with us. We operate on a transparent commission basis, ensuring mutual benefits."
    },
    {
      question: "Will my property be rented all year round?",
      answer: "While occupancy depends on demand and seasonality, our advanced pricing and marketing strategies aim to maximize bookings throughout the year."
    },
    {
      question: "On which booking platforms will you list my property?",
      answer: "We list your property on major platforms such as Airbnb, Booking.com, and others to ensure maximum visibility."
    },
    {
      question: "What type of properties are currently in demand for short-term rentals?",
      answer: "Properties in prime locations with modern amenities, good accessibility, and appealing interiors are highly sought after for short-term rentals."
    },
    {
      question: "After signing the contract and handing over the keys to us, will I need to manage anything further?",
      answer: "No, we take care of everything from guest communication to property maintenance, allowing you to enjoy a hands-free experience."
    },
    {
      question: "As a Non-Resident of Dubai, can I use my property when I visit?",
      answer: "Yes, you can reserve your property for personal use by notifying us in advance. We ensure it’s ready for your stay."
    }
  ];
  // bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-10 px-6
  return (
    <div className="bg-white py-10 px-6 my-7">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-gray-100 py-3 bg-fuchsia-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-violet-100 shadow-md rounded-lg overflow-hidden"
            >
              <button
                className="w-full text-left p-4 text-gray-800 font-semibold focus:outline-none flex justify-between items-center"
                onClick={() => toggleQuestion(index)}
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    openQuestion === index ? 'rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openQuestion === index && (
                <div className="p-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQs;
