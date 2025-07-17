import React from 'react';

const products = [
  {
    icon: (
      <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
      </svg>
    ),
    title: "Small Business",
    description: "Sales, service, and email outreach tools in a single app.",
  },
  {
    icon: (
      <svg className="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
      </svg>
    ),
    title: "Sales Cloud",
    description: "Close more deals and speed up growth with the #1 CRM.",
  },
  {
    icon: (
      <svg className="w-16 h-16 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 22.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
      </svg>
    ),
    title: "Service Cloud",
    description: "Make customers happy faster and build loyalty with Service Cloud.",
  },
  {
    icon: (
      <svg className="w-16 h-16 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
    ),
    title: "Marketing Cloud",
    description: "Build customer relationships for life with data-first digital marketing.",
  },
];

export default function Services() {
  return (
    <section className="py-12 bg-gradient-to-b from-blue-50 to-white font-inter antialiased">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-4 drop-shadow-md bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-blue-500 to-green-400">
          Learn about the Services.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
            >
              {/* Icon with background circle */}
              <div className="relative w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center mb-6 overflow-hidden">
                {/* Background "cloud" shapes - simplified for aesthetic */}
                <div className="absolute w-20 h-20 bg-blue-100 rounded-full -top-4 -left-4 opacity-70"></div>
                <div className="absolute w-16 h-16 bg-blue-200 rounded-full -bottom-4 -right-4 opacity-70"></div>
                {product.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-3">{product.title}</h3>
              <p className="text-base text-gray-600 mb-4 flex-grow">{product.description}</p>
              <a
                href="#"
                className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200 flex items-center"
              >
                Learn more
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
