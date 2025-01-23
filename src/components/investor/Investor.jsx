import React from 'react';

function Investor() {
  return (
    <div className="bg-gray-100 py-10 px-6 my-10 font-bona">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-fuchsia-900 mb-6 font-vidaloka">
            Why should you choose short-term rentals in Dubai?
          </h1>
          <p className="text-gray-600 mb-4">
            Short-term rentals in Dubai are one of the most profitable ways to invest in real estate. Thanks to the city’s rapidly growing tourism market and the increasing number of visitors for both business and leisure, property owners can achieve high rental income.
          </p>
          <p className="text-gray-600 mb-4">
            Dubai is a global hub for business and tourism, attracting millions of visitors every year. In 2023, over 14 million tourists visited the city, and this number continues to grow. Forecasts suggest that by 2025, the annual number of visitors will surpass 20 million. This constant demand makes short-term rentals a lucrative option.
          </p>
          <p className="text-gray-600">
            Moreover, industry reports show that property owners in Dubai can earn up to 50% more through short-term rentals compared to traditional long-term leasing. Tourists and professionals visiting Dubai prefer renting apartments over hotels due to the comfort, location, privacy, and flexibility they offer.
          </p>
        </div>

        {/* Image Section */}
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2016/11/19/15/03/buildings-1839726_1280.jpg"
            alt="Short-term rentals in Dubai"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Investor;
