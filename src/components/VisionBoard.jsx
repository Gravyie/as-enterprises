import React, { useState, useEffect, useRef } from 'react';

// VisionCard Component: Represents a single sticky note on the vision board.
const VisionCard = ({ content, initialPos, scatteredPos, isScattered, color, index }) => {
  // Determine the current position and rotation based on the 'isScattered' state.
  const currentX = isScattered ? scatteredPos.x : initialPos.x;
  const currentY = isScattered ? scatteredPos.y : initialPos.y;
  const currentRotate = isScattered ? scatteredPos.rotate : initialPos.rotate;

  return (
    <div
      className={`
        absolute
        p-4
        rounded-xl
        shadow-lg
        transform
        transition-all duration-1000 ease-in-out
        flex items-center justify-center
        text-center
        font-inter
        text-gray-500
        text-sm
        cursor-grab
        active:cursor-grabbing
        hover:scale-105 hover:shadow-xl
      `}
      // Dynamically set the background color and transform properties.
      style={{
        backgroundColor: color,
        width: '240px', // Fixed width for consistency
        height: '240px', // Fixed height for consistency
        left: `${currentX}%`,
        top: `${currentY}%`,
        transform: `translate(-50%, -50%) rotate(${currentRotate}deg)`,
        zIndex: isScattered ? 10 + index : 5, // Ensure scattered cards have higher z-index
        transformOrigin: 'center center', // Ensures rotation is around the center of the card
      }}
    >
      {content}
    </div>
  );
};

// VisionBoard Component: The main container for the vision board.
const VisionBoard = () => {
  // State to control whether the cards are scattered or bundled.
  // Initialize to false so cards start bundled and then animate to scattered.
  const [isScattered, setIsScattered] = useState(false);
  // Ref to attach to the VisionBoard container.
  const visionBoardRef = useRef(null);

  // Define the initial and scattered positions for each card.
  // Using the original fixed scattered positions for a more controlled effect.
  const cardData = [
    {
      id: 1,
      content: "Innovate and Lead in AI Solutions",
      color: "#FFD700", // Gold
      initialPos: { x: 50, y: 50, rotate: 0 },
      scatteredPos: { x: 20, y: 30, rotate: -15 },
    },
    {
      id: 2,
      content: "Foster a Culture of Collaboration",
      color: "#98FB98", // PaleGreen
      initialPos: { x: 52, y: 48, rotate: 5 },
      scatteredPos: { x: 80, y: 28, rotate: 10 },
    },
    {
      id: 3,
      content: "Achieve Global Market Expansion",
      color: "#ADD8E6", // LightBlue
      initialPos: { x: 48, y: 52, rotate: -5 },
      scatteredPos: { x: 42, y: 23, rotate: 5 },
    },
    {
      id: 4,
      content: "Deliver Exceptional Customer Value",
      color: "#FFB6C1", // LightPink
      initialPos: { x: 51, y: 51, rotate: 2 },
      scatteredPos: { x: 18, y: 65, rotate: 20 },
    },
    {
      id: 5,
      content: "Empower Employee Growth & Development",
      color: "#DDA0DD", // Plum
      initialPos: { x: 49, y: 49, rotate: -2 },
      scatteredPos: { x: 57, y: 77, rotate: -10 },
    },
    {
      id: 6,
      content: "Sustainable & Ethical Business Practices",
      color: "#F0E68C", // Khaki
      initialPos: { x: 50, y: 50, rotate: 0 },
      scatteredPos: { x: 80, y: 70, rotate: 25 },
    },
    {
      id: 7,
      content: "Pioneer Next-Gen Research & Development",
      color: "#B0C4DE", // LightSteelBlue
      initialPos: { x: 52, y: 50, rotate: 3 },
      scatteredPos: { x: 37, y: 78, rotate: -5 },
    },
    {
      id: 8,
      content: "Build a Strong, Recognizable Brand",
      color: "#FFC0CB", // Pink
      initialPos: { x: 48, y: 50, rotate: -3 },
      scatteredPos: { x: 60, y: 28, rotate: 15 },
    },
  ];

  // Effect hook to trigger the scattering animation on component mount.
  useEffect(() => {
    // Set a timeout to change isScattered to true after a short delay (e.g., 500ms).
    // This creates the initial animation from the bundled state to the scattered state.
    const timer = setTimeout(() => {
      setIsScattered(true);
    }, 500); // Adjust this delay as needed for the desired animation start

    // Cleanup function: Clear the timeout if the component unmounts before the timer fires.
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this effect runs only once on mount.

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-8 font-inter">
      <div
        ref={visionBoardRef}
        className="relative w-full max-w-7xl h-[620px] bg-white rounded-3xl shadow-lg overflow-hidden"
        style={{ perspective: '1200px' }} // Retained perspective for a subtle 3D effect
      >
        {/* The heading is absolutely positioned and centered both horizontally and vertically */}
        <h2
          className="absolute text-4xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-blue-200 to-yellow-300 z-20"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          Our Company Vision
        </h2>
        {cardData.map((card, index) => (
          <VisionCard
            key={card.id}
            content={card.content}
            initialPos={card.initialPos}
            scatteredPos={card.scatteredPos}
            isScattered={isScattered} // This will now be true after the timeout, triggering animation
            color={card.color}
            index={index} // Pass index for z-indexing
          />
        ))}
      </div>
    </div>
  );
};

export default VisionBoard;
