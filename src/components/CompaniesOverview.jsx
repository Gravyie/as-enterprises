import React from 'react';
import { useInView } from 'react-intersection-observer';

const companies = [
  {
    name: "Tech Innovators Inc.",
    image: "https://placehold.co/600x400/ADD8E6/000000?text=Tech+Innovators",
    overview: "Leading the way in AI-driven solutions and software development, pushing the boundaries of what's possible.",
    overlapDirection: "left"
  },
  {
    name: "Global Marketing Co.",
    image: "https://placehold.co/600x400/90EE90/000000?text=Global+Marketing",
    overview: "Empowering brands with cutting-edge digital marketing strategies and unparalleled market insights to achieve global reach.",
    overlapDirection: "right"
  },
  {
    name: "Future Builders Ltd.",
    image: "https://placehold.co/600x400/FFB6C1/000000?text=Future+Builders",
    overview: "Specializing in sustainable infrastructure and smart city development for a greener tomorrow, building a better future.",
    overlapDirection: "left"
  },
];

function CompanyCard({ company }) {
  const { name, image, overview, overlapDirection } = company;
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Base classes for cards
  // Added group-hover:rotate-1 to larger card for opposite rotation
  const baseCardClasses = "w-full h-[28rem] rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-1000 ease-out transform group-hover:rotate-3";
  const smallerCardClasses = "absolute w-3/4 md:w-2/3 lg:w-1/2 bg-white/40 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/60 transition-all duration-1000 ease-out group-hover:scale-105 group-hover:shadow-xl z-10";

  // Animation classes
  const slideInLeft = inView ? 'translate-x-0 opacity-100' : '-translate-x-[150%] opacity-0';
  const slideInRight = inView ? 'translate-x-0 opacity-100' : 'translate-x-[150%] opacity-0';

  return (
    <div ref={ref} className={`relative w-full mx-auto flex flex-col items-center`}>
      {/* Container for the overlapping cards */}
      <div className={`relative w-full max-w-5xl flex items-center justify-center ${overlapDirection === 'left' ? 'flex-row' : 'flex-row-reverse'} group`}>
        {/* Smaller Overview Card */}
        <div
          className={`${smallerCardClasses}
            ${overlapDirection === 'left' ? 'left-0 top-1/2 -translate-y-1/2 -mr-24 md:-mr-32 lg:-mr-40' : 'right-0 top-1/2 -translate-y-1/2 -ml-24 md:-ml-32 lg:-ml-40'}
            ${overlapDirection === 'left' ? slideInLeft : slideInRight}
            transform group-hover:-rotate-3`} 
        >
          <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
          <p className="text-sm text-gray-700 leading-snug">{overview}</p>
        </div>

        {/* Larger Image Card */}
        <div className={`flex-shrink-0 ${overlapDirection === 'left' ? 'ml-auto' : 'mr-auto'} ${baseCardClasses} w-full md:w-4/5 lg:w-3/4 h-[28rem]`}>
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}

export default function CompanyShowcase() {
  return (
    <section className="py-8 bg-gradient-to-b from-blue-50 to-indigo-100 font-inter antialiased">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-4 drop-shadow-md bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-orange-500 to-blue-400">
          Our Featured Companies
        </h2>

        <div className="space-y-6">
          {companies.map((company, index) => (
            <CompanyCard key={index} company={company} />
          ))}
        </div>
      </div>
    </section>
  );
}
