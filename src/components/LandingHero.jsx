import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Laptop, TrendingUp, Globe, Lightbulb, Zap, Shield, Cloud } from 'lucide-react'; // Added Cloud icon and other relevant icons

function LandingHero() {
  const images = [
    'https://placehold.co/500x600/A7F3D0/10B981?text=Innovation', // Greenish
    'https://placehold.co/500x600/93C5FD/2563EB?text=Creativity', // Bluish
    'https://placehold.co/500x600/FDBA74/EA580C?text=Excellence', // Orangish
    'https://placehold.co/500x600/FECDD3/E11D48?text=Future',     // Reddish
  ];

  const industries = [
    { name: "Custom PC Builds", icon: <Laptop className="text-blue-600" size={24} /> },
    { name: "Digital Marketing", icon: <TrendingUp className="text-green-600" size={24} /> },
    { name: "Web Development", icon: <Globe className="text-purple-600" size={24} /> },
    { name: "IT Consulting", icon: <Lightbulb className="text-yellow-600" size={24} /> },
    { name: "AI Solutions", icon: <Zap className="text-red-600" size={24} /> },
    { name: "Cloud Services", icon: <Cloud className="text-indigo-600" size={24} /> },
    { name: "Cyber Security", icon: <Shield className="text-gray-600" size={24} /> },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Auto-advance carousel every 4 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval); // Clean up on component unmount
  }, [images.length]);

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="relative w-full min-h-[92vh] flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden font-inter pb-4"> {/* Added pb-24 to make space for industries bar */}
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main Content Container with Glass Effect */}
      <div className="relative z-10 container mx-auto p-8 flex flex-col lg:flex-row items-center justify-center
                  bg-white/30 backdrop-blur-md rounded-3xl border border-white border-opacity-60"> {/* Added glass theme classes */}
        {/* Left Section: Text Statements */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-8 drop-shadow-lg">
            <span className="block text-blue-700 animate-fade-in-up">Innovate.</span>
            <span className="block text-indigo-700 animate-fade-in-up" style={{ animationDelay: '200ms' }}>Create.</span>
            <span className="block text-purple-700 animate-fade-in-up" style={{ animationDelay: '400ms' }}>Elevate.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-6 font-semibold animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            We transform complex challenges into elegant solutions.
          </p>
          <p className="text-lg text-gray-600 mb-4 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            Experience unparalleled quality and dedicated support tailored to your needs.
          </p>
          <p className="text-lg text-gray-600 mb-10 animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
            Let's build something extraordinary together, starting today.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 animate-fade-in-up" style={{ animationDelay: '1200ms' }}>
            Get Started
          </button>
        </div>

        {/* Right Section: Image Carousel */}
        <div className="w-full lg:w-1/2 relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-3 scale-95 lg:scale-100 lg:rotate-0 transition-transform duration-500 ease-out animate-fade-in-right">
          <img
            src={images[currentImageIndex]}
            alt={`Carousel Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
          />
          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-1 rounded-full hover:bg-white/40 transition-all duration-300 z-10 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/60"
            aria-label="Previous image"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-1 rounded-full hover:bg-white/40 transition-all duration-300 z-10 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/60"
            aria-label="Next image"
          >
            <ChevronRight size={16} />
          </button>
          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  currentImageIndex === index ? 'bg-white scale-125' : 'bg-gray-400'
                } hover:bg-white transition-all duration-300`}
                aria-label={`Go to image ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* Industries Section - Single line horizontal, overlapping hero */}
      <div className="absolute bottom-5 left-0 right-0 z-30"> {/* Removed transform translate-y-1/2 */}
        <div className="bg-white/0 backdrop-blur-md px-4 py-4 md:px-10 rounded-3xl mx-auto border-b border-white border-opacity-60 max-w-6xl flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 transition-all duration-300 ease-in-out overflow-x-auto scrollbar-hide">
          <div className="flex flex-nowrap gap-4 text-gray-800 font-medium text-lg">
            {industries.map((industry, index) => (
              <span
                key={index}
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-900 px-5 py-2 rounded-full shadow-lg hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl ring-1 ring-blue-200 hover:ring-blue-300 flex-shrink-0 animate-fade-in-up"
                style={{ animationDelay: `${1400 + index * 100}ms` }}
              >
                {industry.icon}
                <span className="font-semibold text-base">{industry.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingHero;