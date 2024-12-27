import React from 'react';

function Rettier() {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 my-6">
          <h1 className="text-4xl font-bold text-white bg-slate-900 py-3 mb-4">WHY RENTTIERS</h1>
          <p className="text-xxl text-gray-700 px-20 py-100 ">
            Partner with us for an unparalleled property management service in Dubai and experience the peace of mind that comes with knowing your investment is in capable hands. Contact us today to learn more about how we can help you unlock the full potential of your property.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Zero Initial Costs",
              description:
                "We offer extended cooperation without any initial fees and maintain straightforward operating principles, making it easy for property owners to partner with us.",
              icon: "\uD83D\uDCB8",
            },
            {
              title: "Prestigious Program Tiers",
              description:
                "We offer tailor made packages to suit your specific needs. From simple listing assistance to comprehensive real estate management. Contact us today to see if your property qualifies for our Exclusive Tiers or Diamond Tiers programs.",
              icon: "\uD83C\uDF1F",
            },
            {
              title: "Our Experience",
              description:
                "With over 10 years of experience and huge success in Europe’s short-term rental market we have managed thousands of properties which provided a 5 star experience for over 300,000 guests.",
              icon: "\uD83D\uDC68\u200D\uD83D\uDCBC",
            },
            {
              title: "Award-winning Holiday Home Operator",
              description:
                "We have been awarded many prestigious awards as the leading holiday home operator company in Europe.",
              icon: "\uD83C\uDFC6",
            },
            {
              title: "Dynamic Price Management",
              description:
                "Our unique technology and experienced team is there to maximize your profits from your property at any given time. We make sure that your property gets maximum exposure.",
              icon: "\uD83D\uDCDA",
            },
            {
              title: "Flexible Contracts",
              description:
                "Contracts with Renttiers are easy and flexible, offering clients full transparency and convenience at the same time.",
              icon: "\uD83D\uDCC4",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-xl hover:shadow-2xl p-6 rounded-lg text-center transform transition-all duration-700 ease-in-out animate-fade-in"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <div className="text-4xl mb-4 text-purple-600">{card.icon}</div>
              <h3 className="text-xl font-semibold text-purple-800 mb-2">{card.title}</h3>
              <p className="text-gray-700">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rettier;
