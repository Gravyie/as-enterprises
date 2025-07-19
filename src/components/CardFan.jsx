import React, { useState } from 'react';

export default function CardFan() {
  // Array of image URLs for the cards, now with 5 images
  const cardImages = [
    'https://placehold.co/300x450/D291BC/FFFFFF?text=Card+1', // Example image 1
    'https://placehold.co/300x450/957DAD/FFFFFF?text=Card+2', // Example image 2
    'https://placehold.co/300x450/E0BBE4/FFFFFF?text=Card+3', // Example image 3
    'https://placehold.co/300x450/FFC72C/FFFFFF?text=Card+4', // Example image 4
    'https://placehold.co/300x450/FF6F61/FFFFFF?text=Card+5', // Example image 5
  ];

  // State to track if the card container is being hovered over
  const [isHovered, setIsHovered] = useState(false);

  return (
    // Outer container: controls overall padding, no min-height here to avoid top space
    <div className="flex flex-col justify-center pt-4 pb-24">
      {/* Inner container: holds the cards, now with a min-height to prevent cutting off fanned cards */}
      <div
        className="relative flex justify-center items-center min-h-[500px]" // Added min-h here to ensure space for fanned cards
        // Event handlers to update the hover state
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {cardImages.map((image, index) => {
          // Calculate dynamic styles based on hover state and card index
          // For 5 cards, the "center" index is 2 (0-indexed)
          const centerIndexOffset = index - 2;

          // These values control the fanning animation
          const rotation = isHovered ? centerIndexOffset * 10 : 0; // Rotate cards by -20, -10, 0, 10, 20 degrees
          const translateX = isHovered ? centerIndexOffset * 220 : 0; // Increased translation for even more separation
          const translateY = isHovered ? Math.abs(centerIndexOffset) * 40 : 0; // Increased vertical lift for side cards
          
          // Control layering on hover: center card (index 2) has highest z-index
          const zIndex = isHovered ? (50 - Math.abs(centerIndexOffset) * 10) : (20 - index); 

          return (
            <div
              key={index}
              className="absolute w-72 h-96 rounded-xl shadow-xl overflow-hidden cursor-pointer
                         bg-white border border-gray-200
                         transition-all duration-500 ease-in-out transform-gpu"
              style={{
                // Apply dynamic transform and z-index for the fanning effect
                transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotation}deg)`,
                zIndex: zIndex,
                // Adjust left position to create an initial stacked look
                // For 5 cards, adjust the base left position to center the stack
                left: `calc(50% - 144px + ${index * 10 - 20}px)`, // Adjust 144px based on half of w-72, and -20px to center for 5 cards
                top: `calc(50% - 192px + ${index * 5 - 10}px)`, // Adjust 192px based on half of h-96, and -10px to center for 5 cards
              }}
            >
              <img src={image} alt={`Card ${index + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white text-lg font-semibold">{`Card ${index + 1} Title`}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
