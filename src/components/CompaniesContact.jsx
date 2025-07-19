import React from 'react';

// CompanyContactCard Component: Displays contact info and a map for a single company.
const CompanyContactCard = ({ companyName, address, phone, email, mapEmbedUrl }) => {
  return (
    <div
      className="w-full max-w-6xl bg-gradient-to-br from-blue-100 to-gray-100 flex flex-col lg:flex-row justify-center items-stretch gap-4 p-6 rounded-3xl shadow-xl border border-white/30 mb-6"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Glass theme background
        backdropFilter: 'blur(15px)',
        WebkitBackdropFilter: 'blur(15px)',
      }}
    >
      {/* Left Section: Contact Details */}
      <div className="w-full lg:w-1/2 p-4 flex flex-col justify-between">
        <h3 className="text-3xl font-bold text-gray-500 mb-6">{companyName}</h3>
        <div className="space-y-4 text-gray-600 text-lg">
          <p className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {address}
          </p>
          <p className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {phone}
          </p>
          <p className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {email}
          </p>
        </div>
      </div>

      {/* Right Section: Map */}
      <div className="w-full lg:w-1/2 h-80 lg:h-auto rounded-2xl shadow-md overflow-hidden border border-white/30">
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: '1.5rem' }} /* Added borderRadius to iframe */
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${companyName} Map`}
        ></iframe>
      </div>
    </div>
  );
};

// App Component: The main container for the Multi-Company Contact Page.
const App = () => {
  const companies = [
    {
      id: 1,
      name: "EmpressPC.in",
      address: "123 Global Tech Park, Innovation City, CA 90210",
      phone: "+1 (800) 111-2222",
      email: "info@globalhq.com",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.719662125199!2d-118.24368498468246!3d34.05223418060244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c63210d7c58f%3A0x1d211f1c2b3e4f7!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin"
    },
    {
      id: 2,
      name: "SpinfluenceMedia.com",
      address: "456 Business Lane, London, SW1A 0AA, UK",
      phone: "+44 (0)20 7123 4567",
      email: "eu-info@globalhq.com",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.909999999999!2d-0.1277583!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760519e99d2141%3A0x6b8714691e6b3b!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin"
    },
    {
      id: 3,
      name: "Asia-Pacific Hub - Sydney",
      address: "789 Harbour View, Sydney, NSW 2000, Australia",
      phone: "+61 (02) 8765 4321",
      email: "apac-info@globalhq.com",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.38883626245!2d151.20929551567894!3d-33.86881978065094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a85e0!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4 font-inter">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-500 text-center mb-6 leading-tight drop-shadow-xl">
        Our Global Presence
      </h1>

      {companies.map((company) => (
        <CompanyContactCard
          key={company.id}
          companyName={company.name}
          address={company.address}
          phone={company.phone}
          email={company.email}
          mapEmbedUrl={company.map}
        />
      ))}
    </div>
  );
};

export default App;
