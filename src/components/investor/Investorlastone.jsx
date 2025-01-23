import React from 'react';

function Investorlastone() {
  return (
    <div className="bg-gray-100 py-10 px-6 font-bona">
      <div className="container mx-auto text-center">
        {/* Header Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 shadow-slate-400 py-3 mb-6 font-vidaloka">
          Dubai's Short-Term Rental Market Statistics
        </h2>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-center">
          <img
            src="https://www.gonext.com/wp-content/uploads/2020/02/Dubai.jpg"
            alt="Dubai Market Stats"
            className="rounded-lg shadow-lg w-full"
          />
          <div>
            <ul className="text-lg text-gray-700 space-y-4">
              <li>
                <strong>14 Million Tourists in 2023:</strong> Dubai welcomed over 14 million tourists, with this number expected to rise to 20 million by 2025.
              </li>
              <li>
                <strong>Higher Returns:</strong> Property owners can earn up to 50% more from short-term rentals compared to long-term leases.
              </li>
              <li>
                <strong>Peak Season Occupancy:</strong> Occupancy rates for short-term rentals in popular Dubai districts can reach 85-95% during peak tourist seasons.
              </li>
              <li>
                <strong>Airbnb Growth:</strong> Year-over-year, the number of properties in Dubai listed on Airbnb has increased by 38%, driven by the city's growing popularity for tourism and business. Accommodation prices have been steadily rising in line with the market.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Investorlastone;
