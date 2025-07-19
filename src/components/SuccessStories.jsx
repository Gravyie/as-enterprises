import React, { useState, useEffect } from 'react';

export default function SuccessStories() { // Changed to App for direct rendering in Canvas
  const successStories = [
    {
      id: 1,
      title: "Revolutionizing E-commerce",
      description: "Our partnership led to a 150% increase in online sales and a 30% reduction in cart abandonment rates for a leading retail brand, setting new industry benchmarks.",
      clientName: "Global Retail Co.",
      image: "https://placehold.co/100x100/A7D9B2/FFFFFF?text=GR",
    },
    {
      id: 2,
      title: "Streamlining Healthcare Operations",
      description: "Implemented a custom patient management system, improving administrative efficiency by 40% and patient satisfaction scores by 20% across multiple facilities.",
      clientName: "MediCare Solutions",
      image: "https://placehold.co/100x100/7F9B8B/FFFFFF?text=MS",
    },
    {
      id: 3,
      title: "Empowering Ed-Tech Startups",
      description: "Developed an interactive learning platform that boosted user engagement by 60% and attracted over 500,000 new students in 6 months globally.",
      clientName: "Learnify Inc.",
      image: "https://placehold.co/100x100/C1E1C1/FFFFFF?text=LI",
    },
    {
      id: 4,
      title: "Transforming Financial Services",
      description: "Designed and launched a secure mobile banking app, resulting in a 25% increase in mobile transactions and higher customer retention rates year-over-year.",
      clientName: "FinTech Innovators",
      image: "https://placehold.co/100x100/E0BBE4/FFFFFF?text=FI",
    },
    {
      id: 5,
      title: "Optimizing Logistics Networks",
      description: "Created an AI-driven route optimization tool, cutting delivery times by 18% and fuel costs by 12% for a major logistics firm, enhancing their operational footprint.",
      clientName: "SwiftDeliver Logistics",
      image: "https://placehold.co/100x100/957DAD/FFFFFF?text=SL",
    },
  ];

  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    // Trigger animation after a short delay to ensure CSS is loaded
    const timer = setTimeout(() => {
      setAnimateCards(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="max-w-4xl rounded-4xl mx-auto px-4 relative py-8 bg-gradient-to-br from-indigo-50 to-purple-100 overflow-hidden min-h-screen flex items-center justify-center"> {/* Reduced vertical padding */}
      {/* Liquid-like background elements */}
      <div className="absolute top-0 left-1/4 w-48 h-48 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div> {/* Smaller blobs */}
      <div className="absolute top-0 right-1/4 w-48 h-48 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-48 h-48 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-3xl mx-auto px-3 sm:px-4 lg:px-6 relative z-10"> {/* Further reduced max-width and horizontal padding */}
        <div className="text-center mb-8"> {/* Reduced bottom margin for heading */}
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl lg:text-4xl"> {/* Reduced font size */}
            Our Success Stories
          </h2>
          <p className="mt-2 text-base text-gray-700 max-w-lg mx-auto"> {/* Reduced font size and max-width */}
            Discover how we've helped businesses achieve remarkable results.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-1"> {/* Reduced gap between cards */}
          {successStories.map((story, index) => {
            const isLeft = index % 2 === 0;

            // More pronounced initial state for a "popping" animation
            const animationClass = animateCards
              ? 'opacity-100 translate-x-0 scale-100'
              : (isLeft
                  ? 'opacity-0 -translate-x-12 scale-98' // Reduced translation, increased scale
                  : 'opacity-0 translate-x-12 scale-98'); // Reduced translation, increased scale

            const delay = `${index * 80}ms`; // Even faster stagger

            return (
              <div
                key={story.id}
                className={`group flex flex-col sm:flex-row items-center sm:items-start rounded-2xl p-4 {/* Reduced padding and rounded corners */}
                            transition-all duration-600 ease-out transform
                            hover:scale-[1.005] hover:shadow-lg hover:border-purple-400 {/* Even less scale on hover, smaller shadow */}
                            ${animationClass}`}
                style={{
                  transitionDelay: delay,
                  backgroundColor: 'rgba(255, 255, 255, 0.25)',
                  backdropFilter: 'blur(12px) saturate(170%)', // Slightly less blur/saturate
                  WebkitBackdropFilter: 'blur(12px) saturate(170%)',
                  border: '1px solid rgba(255, 255, 255, 0.25)', // Slightly softer border
                  boxShadow: '0 4px 16px 0 rgba(31, 38, 135, 0.06)', // Smaller shadow
                }}
              >
                <img
                  className="flex-shrink-0 h-16 w-16 rounded-full object-cover mr-0 sm:mr-4 mb-3 sm:mb-0 {/* Reduced image size and margin */}
                             ring-2 ring-purple-300 group-hover:ring-purple-500 transition-all duration-300"
                  src={story.image}
                  alt={story.clientName}
                />
                <div className="text-center sm:text-left flex-grow">
                  <h3 className="text-lg font-bold text-gray-800 mb-0.5 leading-tight">{story.title}</h3> {/* Reduced font size and margin */}
                  <p className="text-gray-700 mb-2 leading-relaxed text-xs">{story.description}</p> {/* Reduced font size and margin */}
                  <p className="text-xs font-semibold text-purple-700 tracking-wide">{story.clientName}</p> {/* Reduced font size */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Tailwind CSS for custom keyframes and animation delays */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
