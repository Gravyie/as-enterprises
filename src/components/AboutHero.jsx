import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function AboutHero() {
  const heroTitle = "BECOMING A WEBFLOW WIZARD";
  const heroSubtitle = "Interactions, Layout, & Custom Code";

  const images = [
    'https://placehold.co/500x350/E0BBE4/FFFFFF?text=Image+1',
    'https://placehold.co/500x350/957DAD/FFFFFF?text=Image+2',
    'https://placehold.co/500x350/D291BC/FFFFFF?text=Image+3',
    'https://placehold.co/500x350/FFC72C/FFFFFF?text=Image+4',
    'https://placehold.co/500x350/FF6F61/FFFFFF?text=Image+5',
    'https://placehold.co/500x350/A7D9B2/FFFFFF?text=Image+6',
    'https://placehold.co/500x350/7F9B8B/FFFFFF?text=Image+7',
    'https://placehold.co/500x350/C1E1C1/FFFFFF?text=Image+8',
  ];

  const numItems = images.length;
  const itemWidth = 800;
  const angleStep = 360 / numItems;
  const radius = (itemWidth / 2) / Math.tan(Math.PI / numItems);

  // State to track the logical current index (0 to numItems-1)
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to track the total accumulated rotation for seamless visual looping
  const [totalRotation, setTotalRotation] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numItems);
    setTotalRotation((prevTotal) => prevTotal - angleStep); // Decrement total rotation for next slide
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + numItems) % numItems);
    setTotalRotation((prevTotal) => prevTotal + angleStep); // Increment total rotation for previous slide
  };

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Use handleNext to ensure totalRotation is updated
    }, 8000);
    return () => clearInterval(interval);
  }, [numItems]); // Dependency array includes numItems

  return (
    <div className='mt-8 flex justify-center items-center'>
      {/* 3D Carousel Container */}
      <div className="relative w-full max-w-7xl mx-auto h-[600px] perspective-[1500px]"> {/* Increased height here */}
        {/* The carousel stage: this div holds all the items and is rotated */}
        <div
          className="absolute w-full h-[90%] flex items-center justify-center"
          style={{
            // Apply the continuous totalRotation to the entire stage
            transform: `translateZ(-${radius}px) rotateY(${totalRotation}deg)`,
            transformStyle: 'preserve-3d',
            transition: 'transform 0.8s ease-in-out',
          }}
        >
          {images.map((image, index) => {
            // Calculate the difference in index from the current center item for opacity and scale
            let diff = index - currentIndex;
            if (diff > numItems / 2) diff -= numItems;
            if (diff < -numItems / 2) diff += numItems;

            const scaleValue = 1 - (Math.abs(diff) * 0.25);
            const opacityValue = 1 - (Math.abs(diff) * 0.4);

            return (
              // Individual carousel item
              <div
                key={index}
                className="absolute bg-gray-200 rounded-xl shadow-lg flex items-center justify-center overflow-hidden"
                style={{
                  width: itemWidth,
                  height: itemWidth * (350 / 500),
                  // Each item is fixed in its position on the cylinder
                  // Combined transform properties into a single entry
                  transform: `rotateY(${index * angleStep}deg) translateZ(${radius}px) scale(${scaleValue})`,
                  left: `calc(50% - ${itemWidth / 2}px)`,
                  backfaceVisibility: 'hidden',
                  // Opacity is applied based on its current visibility relative to the front
                  opacity: opacityValue,
                  zIndex: 100 - Math.abs(diff),
                  transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out', // Smooth transition for individual item properties
                }}
              >
                <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover rounded-xl" />
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons - Positioned within the carousel container */}
        <div className="absolute inset-y-0 flex items-center justify-between w-full px-4 z-20">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-white/80 shadow-md hover:bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
            aria-label="Previous slide"
          >
            <ChevronLeft size={28} className="text-gray-700" />
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-white/80 shadow-md hover:bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
            aria-label="Next slide"
          >
            <ChevronRight size={28} className="text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
}
