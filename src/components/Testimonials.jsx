import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Alper Tornaci",
    title: "CEO, Get Hub For Women",
    avatar: "https://placehold.co/80x80/6A5ACD/FFFFFF?text=AT", // Placeholder for Alper's avatar
    quote: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    id: 2,
    name: "Melten Karahan",
    title: "Designer, Dev For 1 Month",
    avatar: "https://placehold.co/80x80/FF69B4/FFFFFF?text=MK", // Placeholder for Melten's avatar
    quote: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    id: 3,
    name: "John Doe",
    title: "CTO, Tech Solutions",
    avatar: "https://placehold.co/80x80/3CB371/FFFFFF?text=JD", // Placeholder for John's avatar
    quote: "This company has truly transformed our operations. Their dedication and expertise are unmatched. Highly recommend their services to anyone looking for innovation.",
  },
  {
    id: 4,
    name: "Jane Smith",
    title: "Manager, Creative Agency",
    avatar: "https://placehold.co/80x80/FFD700/000000?text=JS", // Placeholder for Jane's avatar
    quote: "An incredible team to work with! They understood our vision perfectly and delivered beyond expectations. A pleasure from start to finish.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next card, ensuring we don't go out of bounds for single-card movement
      // To loop seamlessly with 2 visible cards, we need to consider the total number of "slides"
      // If there are 4 testimonials, and we show 2, we have 2 effective slides (0->1, 1->2, 2->3, 3->0).
      // If we slide one by one, the last card will be partially visible.
      // To make it loop, we can duplicate the first card at the end for a smooth transition.
      // For simplicity here, we'll keep the current logic which effectively loops through the start.
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Calculate the transform value for the carousel
  // Each card takes up 50% of the visible width of the carousel container.
  // To slide one card at a time while showing two, we shift by 50% of the container's width.
  const carouselTransform = `translateX(-${currentIndex * 50}%)`;


  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50 font-inter antialiased overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Left Content Area */}
        <div className="w-full lg:w-2/5 text-center lg:text-left">
          <p className="text-sm font-semibold text-purple-600 uppercase mb-2">Testimonial</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6 drop-shadow-sm">
            Don't Believe Me <br /> Check What Client <br /> Think Of Us
          </h2>
          <div className="flex justify-center lg:justify-start items-center space-x-4 mt-8">
            <button
              onClick={goToPrev}
              className="p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-purple-600" />
            </button>
            <button
              onClick={goToNext}
              className="p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-purple-600" />
            </button>
          </div>
        </div>

        {/* Right Carousel Area */}
        <div className="w-full lg:w-3/5 relative overflow-hidden">
          <div
            className="flex transition-transform ease-in-out duration-700"
            style={{ transform: carouselTransform, width: `${testimonials.length * 50}%` }} // Each card is 50% width
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-1/2 flex-shrink-0 px-3 py-2"> {/* Adjusted padding */}
                <div className="bg-white rounded-xl shadow-lg p-5 flex flex-col items-center text-center h-full border border-gray-100"> {/* Adjusted padding */}
                  {/* Quote icon */}
                  <span className="text-4xl text-purple-400 mb-3 font-serif">“</span> {/* Smaller quote icon */}
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-white shadow-md"> {/* Smaller avatar */}
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{testimonial.name}</h3> {/* Smaller name font */}
                  <p className="text-xs text-gray-500 mb-3">{testimonial.title}</p> {/* Smaller title font */}
                  <p className="text-sm text-gray-700 leading-relaxed flex-grow">{testimonial.quote}</p> {/* Smaller quote font */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
