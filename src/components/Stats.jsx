import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

function CountUp({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(0);

  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (!inView) return;

    let startTime;
    const animateCount = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(progress * end));
        ref.current = Math.floor(progress * end);
        requestAnimationFrame(animateCount);
      } else {
        setCount(end);
        ref.current = end;
      }
    };

    requestAnimationFrame(animateCount);

    return () => {};
  }, [end, duration, inView]);

  return <span ref={inViewRef}>{count.toLocaleString()}</span>;
}

export default function Stats() {
  const stats = [
    {
      icon: (
        <img src="https://placehold.co/60x60/transparent/000000?text=👨‍🍳" alt="Chef Icon" className="w-16 h-16" />
      ),
      value: 42,
      label: "Chef's Specialties",
    },
    {
      icon: (
        <img src="https://placehold.co/60x60/transparent/000000?text=⭐" alt="Review Icon" className="w-16 h-16" />
      ),
      value: 6321,
      label: "Customer Review",
    },
    {
      icon: (
        <img src="https://placehold.co/60x60/transparent/000000?text=📋" alt="Event Icon" className="w-16 h-16" />
      ),
      value: 394,
      label: "Event Catered",
    },
    {
      icon: (
        <img src="https://placehold.co/60x60/transparent/000000?text=🍽️" alt="Meal Icon" className="w-16 h-16" />
      ),
      value: 7453,
      label: "Meals Served",
    },
  ];

  return (
    <section className="py-6 bg-white font-inter antialiased">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-gray-400 to-green-400 mb-8 drop-shadow-sm leading-tight">
          Our Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center p-4 rounded-lg bg-gray-50 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <div className="mb-3">{stat.icon}</div>
              <div className="text-4xl font-bold text-gray-500 mb-1">
                <CountUp end={stat.value} />
              </div>
              <p className="text-base text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
