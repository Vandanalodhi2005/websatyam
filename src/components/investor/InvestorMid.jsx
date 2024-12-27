import React from 'react';

function InvestorMid() {
  return (
    <div className="bg-gray-50 py-10 px-6">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
          Your Benefits of Short-Term Rentals in Dubai
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {/* Flexibility */}
          <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full mb-4">
              <span className="text-2xl">📅</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Flexibility</h2>
            <p className="text-gray-600">
              Owners have full control over their property’s availability and can adjust rental periods to suit their needs.
            </p>
          </div>

          {/* Higher Income */}
          <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center">
            <div className="w-16 h-16 bg-green-500 text-white flex items-center justify-center rounded-full mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Higher Income</h2>
            <p className="text-gray-600">
              Short-term rentals typically generate higher returns than long-term leases due to dynamic pricing that can be adjusted based on demand.
            </p>
          </div>

          {/* No tenant-related issues */}
          <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center">
            <div className="w-16 h-16 bg-red-500 text-white flex items-center justify-center rounded-full mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">No Tenant-Related Issues</h2>
            <p className="text-gray-600">
              Unlike traditional long-term leasing, short-term rentals eliminate risks such as tenant disputes or uncontrolled state of the apartment. Your property can easily be sold at any time.
            </p>
          </div>

          {/* On-time payments */}
          <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center">
            <div className="w-16 h-16 bg-yellow-500 text-white flex items-center justify-center rounded-full mb-4">
              <span className="text-2xl">⏰</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">On-Time Payments</h2>
            <p className="text-gray-600">
              We always make payments on time, transparently account for all stays.
            </p>
          </div>

          {/* Regular property maintenance */}
          <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center">
            <div className="w-16 h-16 bg-purple-500 text-white flex items-center justify-center rounded-full mb-4">
              <span className="text-2xl">🔧</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Regular Property Maintenance</h2>
            <p className="text-gray-600">
              The property is frequently cleaned and inspected, reducing the risk of damage and keeping it in excellent condition.
            </p>
          </div>

          {/* Owner stays */}
          <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center">
            <div className="w-16 h-16 bg-pink-500 text-white flex items-center justify-center rounded-full mb-4">
              <span className="text-2xl">🏠</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Owner Stays</h2>
            <p className="text-gray-600">
              Owners can reserve their property for personal stays whenever needed, without having to displace a long-term tenant.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestorMid;
