"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const NameWithStairEffect = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();
  const stairs = 5; // Number of stairs
  const animationDuration = 0.5; // Duration for each stair animation

  const handleClick = () => {
    setIsAnimating(true); // Start the animation
    setTimeout(() => {
      router.push("/"); // Navigate to the home page after animation
      setIsAnimating(false); // Reset animation state
    }, stairs * animationDuration * 1000); // Total duration for all stairs
  };

  return (
    <div className="relative">
      {/* Name */}
      <h1
        onClick={handleClick}
        className="text-4xl font-bold cursor-pointer hover:text-blue-500 transition-all"
      >
        Your Name
      </h1>

      {/* Stair Transition */}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            exit={{ x: "-100%" }}
            transition={{
              duration: stairs * animationDuration,
              ease: "easeInOut",
            }}
          >
            {[...Array(stairs)].map((_, i) => (
              <div
                key={i}
                style={{
                  height: `${100 / stairs}%`, // Divide screen height by number of stairs
                  backgroundColor: i % 2 === 0 ? "#000" : "#333", // Alternate colors for visibility
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NameWithStairEffect;
