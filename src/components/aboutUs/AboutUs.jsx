import React from 'react';
import jaskaran from "../image/jaskaran.jpeg";
import team2 from "../image/team2.jpg"
import team5 from "../image/team5.jpg"
import team4 from "../image/team4.jpg"

function AboutUs() {
  return (
    <section className="py-16 px-6 bg-slate-100 my-6">
      <div className="max-w-7xl mx-auto">
        {/* Owner Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Left Section: About Details */}
          <div className="md:w-2/3 text-center md:text-left mx-10 py-10">
            <h1 className="text-5xl font-extrabold mb-6 text-yellow-700 font-vidaloka">
              Jaskaran Singh
            </h1>
            <p className="text-xl mb-6 text-gray-700 leading-relaxed font-bona">
              Renttiers is a premier holiday home management company based in
              Dubai, specializing in maximizing property returns for investors. 
              We provide comprehensive services including pricing optimization, 
              guest communication, and property maintenance, ensuring higher returns 
              with minimal effort.
            </p>
            <p className="text-xl text-gray-600 font-bona leading-relaxed ">
              With over a decade of experience, we prioritize trust, transparency, 
              and exceptional results for both property owners and tenants.
            </p>
          </div>

          {/* Right Section: Owner Image */}
          <div className="md:w-1/3 flex justify-center">
            <img
              src={jaskaran}
              alt="Owner"
              className="rounded-lg shadow-lg w-full max-w-md object-cover border-4 border-white"
            />
          </div>
        </div>

        {/* Our Team Section */}
        <div className="mt-20 text-center">
          <h2 className="text-5xl font-extrabold  text-yellow-700 font-vidaloka mb-6">
            MEET OUR TEAM
          </h2>
          <p className="max-w-3xl mx-auto mb-12 text-gray-600 font-bona">
            Our team of experienced professionals is dedicated to delivering 
            exceptional results for property owners and tenants alike.
          </p>

          {/* Team Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Team Member 1 */}
            <div className="bg-white text-black rounded-lg shadow-lg transition-transform hover:scale-105 transform p-6">
              <img
                src={team2}
                alt="Marta Zalewska"
                className="w-40 h-40 mx-auto rounded-full mb-4 object-cover shadow-md"
              />
              <h3 className="text-xl font-semibold text-yellow-700 font-bona ">
                Marta Zalewska
              </h3>
              <p className="text-gray-500  font-vidaloka">Managing Partner</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white font-bona  text-black rounded-lg shadow-lg transition-transform hover:scale-105 transform p-6">
              <img
                src={team5}
                alt="Stefan Wieckowski"
                className="w-40 h-40 mx-auto rounded-full mb-4 object-cover shadow-md"
              />
              <h3 className="text-xl font-semibold text-yellow-700">
                Stefan Wieckowski
              </h3>
              <p className="text-gray-500 font-vidaloka">Business Development Director</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white text-black rounded-lg shadow-lg transition-transform hover:scale-105 transform p-6">
              <img
                src={team4}
                alt="Matthew Bondu"
                className="w-40 h-40 mx-auto rounded-full mb-4 object-cover shadow-md"
              />
              <h3 className="text-xl font-semibold text-yellow-700 font-bona">Matthew Bondu</h3>
              <p className="text-gray-500 font-vidaloka">Marketing Manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
