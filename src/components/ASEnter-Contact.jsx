import React, { useState } from 'react';

// ContactPage Component: The main container for the Contact Page.
const ASEnterContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.'); // Using alert for simplicity
    setFormData({ // Clear form after submission
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-8 px-4 font-inter">
      <h1 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-300 to-gray-400 text-center mb-6 leading-tight drop-shadow-xl">
        Connect With Us
      </h1>

      <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-center items-stretch gap-8">
        {/* Left Section: Contact Info & Form */}
        <div
          className="p-8 lg:p-10 bg-gradient-to-br from-blue-100 to-gray-100 rounded-3xl shadow-xl border border-white/30 w-full lg:w-1/2 flex flex-col"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)',
          }}
        >
          <h2 className="text-4xl font-bold text-gray-500 mb-4">Get in touch</h2>
          <p className="text-gray-500 text-lg mb-8">
            We're here to help. Send us a message and we'll get back to you as soon as possible.
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-600 text-sm font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow-sm appearance-none border border-gray-200 rounded-lg w-full py-3 px-4 text-gray-600 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/60 transition-colors duration-200"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-600 text-sm font-semibold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow-sm appearance-none border border-gray-200 rounded-lg w-full py-3 px-4 text-gray-600 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/60 transition-colors duration-200"
                placeholder="you@company.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-600 text-sm font-semibold mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="shadow-sm appearance-none border border-gray-200 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/60 transition-colors duration-200 resize-y"
                required
              ></textarea>
            </div>

            <div className="flex items-center justify-center pt-4">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-3 px-7 rounded-full focus:outline-none focus:shadow-outline transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Send message
              </button>
            </div>
          </form>
        </div>

        {/* Right Section: Map */}
        <div
          className="p-4 bg-gradient-to-br from-blue-100 to-gray-100 rounded-3xl shadow-xl border border-white/30 w-full lg:w-1/2 flex items-center justify-center overflow-hidden"
        >
          {/* Placeholder for an embedded map (e.g., Google Maps iframe) */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2611.026749323136!2d144.9542095156799!3d-37.8172088797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '1.5rem' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Melbourne Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ASEnterContact;
