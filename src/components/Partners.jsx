import React from 'react';
import { useInView } from 'react-intersection-observer';

// Define the brand image paths
const brands = [
  "https://placehold.co/120x60/D1E7DD/0F5132?text=Brand1", // Lighter green for better contrast on glass
  "https://placehold.co/120x60/CCE5FF/004085?text=Brand2", // Lighter blue
  "https://placehold.co/120x60/FFF3CD/856404?text=Brand3", // Lighter yellow
  "https://placehold.co/120x60/F8D7DA/721C24?text=Brand4", // Lighter red
  "https://placehold.co/120x60/D4EDDA/155724?text=Brand5",
  "https://placehold.co/120x60/D1ECF1/0C5460?text=Brand6",
  "https://placehold.co/120x60/FFEECF/664D03?text=Brand7",
  "https://placehold.co/120x60/FAD7DA/A7454A?text=Brand8",
  "https://placehold.co/120x60/D1E7DD/0F5132?text=Brand9",
  "https://placehold.co/120x60/CCE5FF/004085?text=Brand10",
];

// Duration for the scroll animation in seconds
const SCROLL_DURATION_SECONDS = 30;

export default function Partners() {
  // useInView hook to trigger animation when component enters viewport
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-6 bg-gradient-to-b from-indigo-100 to-blue-50"> {/* Added a subtle background gradient to this section */}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-4 drop-shadow-md bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white-400"> {/* Adjusted gradient for a lighter, more luminous effect */}
          Our Clients/Partners
        </h2>

        <div ref={ref} className="space-y-6 sm:space-y-8">
          {/* Scrolling Brands Containers */}
          {[
            { brands, animation: 'scroll-left' },
          ].map(
            ({ brands, animation }, index) => (
              <div
                key={index}
                className="scroll-container overflow-hidden rounded-2xl sm:rounded-3xl bg-white/30 backdrop-blur-xl border border-white/80 shadow-lg" // Enhanced glassmorphism
              >
                <style>{`
                  @keyframes scroll-left {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-33.333%); } /* Scrolls one third of the duplicated content */
                  }
                  .scroll-container:hover .scroll-content {
                    animation-play-state: paused; /* Pause animation on hover */
                  }
                `}</style>
                <div
                  className="scroll-content flex w-max items-center py-4 sm:py-5"
                  // Apply animation dynamically based on row
                  style={{ animation: inView ? `${animation} ${SCROLL_DURATION_SECONDS}s linear infinite` : 'none' }}
                >
                  {/* Duplicate brands 3 times for seamless looping effect */}
                  {[...brands, ...brands, ...brands].map((src, idx) => (
                    <img
                      key={`${animation}-${idx}`} // Unique key for each image
                      src={src}
                      alt={`Logo ${idx}`}
                      className="h-12 sm:h-20 mx-6 sm:mx-10 object-contain transition-transform duration-300 hover:scale-110 hover:brightness-110 drop-shadow-sm" // Enhanced hover, added drop-shadow
                      // Fallback for broken image links
                      onError={(e) => {
                        e.currentTarget.onerror = null; // Prevent infinite loop if fallback also fails
                        e.currentTarget.src = `https://placehold.co/150x80/6B7280/FFFFFF?text=Logo+${idx}`;
                      }}
                    />
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
